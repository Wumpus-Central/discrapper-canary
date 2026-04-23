"use strict";
n.d(t, { A: () => d }), n(321073);
var r = n(626584),
    i = n(723702),
    s = n(837921),
    a = n(572164),
    o = n(918692),
    l = n(481864);
let u = new r.A("ClipsAssetManager");
class c {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    started = !1;
    start() {
        !this.started &&
            ((this.started = !0),
            u.info("Clips asset manager started"),
            (0, a.TD)() && (u.info("Clips enabled on startup, prefetching assets"), this.maybePrefetchAssets()));
    }
    stop() {
        s.Ay.stopClipsDownloads(),
            this.activeDownloads.clear(),
            (this.started = !1),
            u.info("Clips asset manager stopped");
    }
    getAssetState(e) {
        return this.state.assetState[e];
    }
    areAllAssetsDownloaded() {
        let e = Object.values(this.state.assetState);
        return e.length > 0 && e.every((e) => e.status === o.g.DOWNLOADED);
    }
    async maybePrefetchAssets() {
        if (!__OVERLAY__ && (0, i.isWindows)())
            try {
                await this.refreshCatalog(), await this.prefetchAssets();
            } catch (e) {
                u.warn(`Failed to prefetch clips assets: ${e.message}`);
            }
    }
    async refreshCatalog() {
        if (!this.catalogRefreshing)
            try {
                this.catalogRefreshing = !0;
                let e = this.loadCatalog();
                null == this.state.catalogLastFetchTime && (await this.scanAssetState(e)),
                    (this.state.assets = e.assets),
                    (this.state.catalogLastFetchTime = new Date()),
                    (this.state.catalogFetchFailed = !1);
                let t = Object.values(e.assets).map((e) => e.fileName);
                await s.Ay.cleanupUnusedClipsFiles(t), u.info("Clips asset catalog refreshed");
            } catch (e) {
                u.warn(`Failed to refresh clips asset catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.catalogRefreshing = !1;
            }
    }
    loadCatalog() {
        let e = { assets: {} };
        for (let [t, n, r] of l.uw) e.assets[t] = { url: (0, l.ab)(r, n), fileName: (0, l.$u)(t, n) };
        return u.info("Loaded clips asset catalog with assets:", Object.keys(e.assets)), e;
    }
    async scanAssetState(e) {
        if (!s.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await s.Ay.checkClipsFilesExist(t))
            this.state.assetState[e] = { status: n ? o.g.DOWNLOADED : o.g.MISSING };
    }
    async prefetchAssets() {
        if (__OVERLAY__) return;
        let e = this.state.assets,
            t = [];
        for (let [n, r] of Object.entries(e)) {
            let e = this.state.assetState[n];
            e?.status !== o.g.DOWNLOADED &&
                e?.status !== o.g.DOWNLOADING &&
                t.push(this.downloadAsset({ assetId: n, url: r.url, fileName: r.fileName }));
        }
        u.info(`Waiting for ${t.length} clips asset downloads`),
            await Promise.all(t),
            u.info("Finished downloading all clips assets");
    }
    downloadAsset(e) {
        let { url: t, assetId: n, fileName: r } = e,
            i = this.state.assetState[n],
            a = this.activeDownloads.get(n);
        if (null != a) return a;
        if (i?.status === o.g.DOWNLOADED) return Promise.resolve();
        if (i?.status === o.g.DOWNLOADING)
            return Promise.reject(Error("Clips asset is downloading but not in active downloads map"));
        this.state.assetState[n] = { status: o.g.DOWNLOADING, downloadedBytes: 0 };
        let l = s.Ay.downloadClipsFile(t, r, (e) => {
            let { downloadedBytes: t, totalBytes: r } = e;
            this.state.assetState[n] = { ...this.state.assetState[n], downloadedBytes: t, totalBytes: r };
        })
            .then((e) => {
                e.fetchedFromNetwork && u.info("Downloaded clips asset from network:", n),
                    (this.state.assetState[n] = { status: o.g.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? u.info("User canceled the download for clips asset", e)
                    : u.error("Failed to download clips asset", { reason: t, ...e }),
                    (this.state.assetState[n] = { status: o.g.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(n);
            });
        return this.activeDownloads.set(n, l), l;
    }
}
let d = new c();
