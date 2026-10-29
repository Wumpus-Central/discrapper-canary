n.d(t, { t_: () => C, mj: () => S, so: () => N });
var i,
    r = n(999926),
    a = n(19575),
    s = n(974293);
n(321073);
var l = n(636537),
    o = n(626584),
    d = n(723702),
    c = n(572164),
    u = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i),
    _ = n(652215);
let E = new o.A("ClipsAssetManager");
class A {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    downloadRunning = !1;
    downloadPromise = null;
    async start() {
        if ((E.info("Clips asset manager started"), !(0, c.T)() || !(0, d.isWindows)() || __OVERLAY__))
            return { allAssetsDownloaded: !1 };
        if (null != this.downloadPromise && (this.downloadRunning || this.areAllAssetsDownloaded()))
            await this.downloadPromise;
        else {
            (E.info("Clips enabled on startup, prefetching assets"), (this.downloadRunning = !0));
            try {
                ((this.downloadPromise = this.maybePrefetchAssets()), await this.downloadPromise);
            } finally {
                this.downloadRunning = !1;
            }
        }
        return { allAssetsDownloaded: this.areAllAssetsDownloaded() };
    }
    areAllAssetsDownloaded() {
        let e = Object.keys(this.state.assets);
        return e.length > 0 && e.every((e) => this.state.assetState[e]?.status === u.DOWNLOADED);
    }
    async maybePrefetchAssets() {
        try {
            (await this.refreshCatalog(), await this.prefetchAssets());
        } catch (e) {
            E.warn(`Failed to prefetch clips assets: ${e.message}`);
        }
    }
    async refreshCatalog() {
        if (!this.catalogRefreshing)
            try {
                this.catalogRefreshing = !0;
                let e = await this.fetchCatalog();
                for (let t of (null == this.state.catalogLastFetchTime && (await this.scanAssetState(e)),
                (this.state.assets = e.assets),
                Object.keys(this.state.assetState)))
                    null == e.assets[t] && delete this.state.assetState[t];
                ((this.state.catalogLastFetchTime = new Date()), (this.state.catalogFetchFailed = !1));
                let t = Object.values(e.assets).map((e) => e.fileName);
                (await a.Ay.cleanupUnusedClipsFiles(t), E.info("Clips asset catalog refreshed"));
            } catch (e) {
                (E.warn(`Failed to refresh clips asset catalog: ${e.message}`), (this.state.catalogFetchFailed = !0));
            } finally {
                this.catalogRefreshing = !1;
            }
    }
    async fetchCatalog() {
        let e = await l.Bo.get({
                url: _.Rsh.CLIPS_MODULE_ASSETS,
                query: { model_set_version: "2" },
                rejectWithError: !0,
            }),
            t = { assets: {} };
        for (let n of e.body.model_set_assets) t.assets[n.filename] = { url: n.url, fileName: n.filename };
        return (E.info("Loaded clips asset catalog with assets:", Object.keys(t.assets)), t);
    }
    async scanAssetState(e) {
        if (!a.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await a.Ay.checkClipsFilesExist(t))
            this.state.assetState[e] = { status: n ? u.DOWNLOADED : u.MISSING };
    }
    async prefetchAssets() {
        let e = this.state.assets,
            t = [];
        for (let [n, i] of Object.entries(e)) {
            let e = this.state.assetState[n];
            e?.status !== u.DOWNLOADED &&
                e?.status !== u.DOWNLOADING &&
                t.push(this.downloadAsset({ assetId: n, url: i.url, fileName: i.fileName }));
        }
        (E.info(`Waiting for ${t.length} clips asset downloads`),
            await Promise.all(t),
            E.info("Finished downloading all clips assets"));
    }
    downloadAsset(e) {
        let { url: t, assetId: n, fileName: i } = e,
            r = this.state.assetState[n],
            s = this.activeDownloads.get(n);
        if (null != s) return s;
        if (r?.status === u.DOWNLOADED) return Promise.resolve();
        if (r?.status === u.DOWNLOADING)
            return Promise.reject(Error("Clips asset is downloading but not in active downloads map"));
        this.state.assetState[n] = { status: u.DOWNLOADING, downloadedBytes: 0 };
        let l = a.Ay.downloadClipsFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.assetState[n] = { ...this.state.assetState[n], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                (e.fetchedFromNetwork && E.info("Downloaded clips asset from network:", n),
                    (this.state.assetState[n] = { status: u.DOWNLOADED, downloadedBytes: void 0 }));
            })
            .catch((t) => {
                (t?.USER_CANCELED_DOWNLOAD
                    ? E.info("User canceled the download for clips asset", e)
                    : E.error("Failed to download clips asset", { reason: t, ...e }),
                    (this.state.assetState[n] = { status: u.MISSING }));
            })
            .finally(() => {
                this.activeDownloads.delete(n);
            });
        return (this.activeDownloads.set(n, l), l);
    }
}
let h = new A();
var f = n(696016);
let I = { stable: 0.05, ptb: 1, canary: 1, development: 1 },
    p = !1,
    T = null,
    m = null,
    g = null;
function S() {
    let e = (0, c.T)(),
        t = r.Ay.getMediaEngine(),
        n = e && (0, s.$i)("pushClipsMLFlagsToNative");
    m !== n &&
        (f.nx.info(`clips ml flag pushed: ml=${n} (was ${m})`),
        (m = n),
        n
            ? (null === g &&
                  (f.nx.info("clips v3 ml flag set ml=false until download complete"),
                  t.setClipsV3MLEnabled(!1),
                  (g = !1)),
              (async () => {
                  let { allAssetsDownloaded: e } = await h.start(),
                      n = e && !0 === m;
                  g !== n &&
                      (f.nx.info(`clips v3 ml flag set ml=${n} (was ${g}). allAssetsDownloaded=${e}`),
                      t.setClipsV3MLEnabled(n),
                      (g = n));
              })())
            : !1 !== g && (f.nx.info(`clips v3 ml flag set ml=false (was ${g})`), t.setClipsV3MLEnabled(!1), (g = !1)));
}
function N() {
    return null != T
        ? T
        : (S(),
          (T = (async () => {
              try {
                  await a.Ay.ensureModule("discord_clips");
                  let e = a.Ay.requireModule("discord_clips").getModulePath(),
                      t = r.Ay.getMediaEngine(),
                      n = a.Ay.getClipsDataDirSync();
                  t.setClipsDataPath(n);
                  let i = I[a.Ay.releaseChannel] ?? I.stable,
                      s = a.Ay.getClipsSentryDirSync();
                  (null != s &&
                      null != t.setClipsSentryConfig &&
                      t.setClipsSentryConfig(`discord_clips@${a.Ay.buildNumber ?? 0}`, s, i),
                      t.setClipsModulePath(e),
                      (p = !0),
                      f.nx.info("discord_clips module loaded, path: " + e));
              } catch (e) {
                  ((T = null), f.nx.error("Failed to load discord_clips module", e));
              }
          })()));
}
function C() {
    return p;
}
