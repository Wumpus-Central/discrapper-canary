n.d(t, { t_: () => L, mj: () => O, so: () => R });
var i,
    r = n(477653),
    a = n(19575),
    s = n(734066),
    l = n(738935);
n(321073);
var o = n(636537),
    d = n(626584),
    c = n(723702),
    u = n(572164),
    _ = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i),
    E = n(652215);
let A = new d.A("ClipsAssetManager");
class h {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    downloadRunning = !1;
    downloadPromise = null;
    async start() {
        if ((A.info("Clips asset manager started"), !(0, u.T)() || !(0, c.isWindows)() || __OVERLAY__))
            return { allAssetsDownloaded: !1 };
        if (null != this.downloadPromise && (this.downloadRunning || this.areAllAssetsDownloaded()))
            await this.downloadPromise;
        else {
            (A.info("Clips enabled on startup, prefetching assets"), (this.downloadRunning = !0));
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
        return e.length > 0 && e.every((e) => this.state.assetState[e]?.status === _.DOWNLOADED);
    }
    async maybePrefetchAssets() {
        try {
            (await this.refreshCatalog(), await this.prefetchAssets());
        } catch (e) {
            A.warn(`Failed to prefetch clips assets: ${e.message}`);
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
                (await a.Ay.cleanupUnusedClipsFiles(t), A.info("Clips asset catalog refreshed"));
            } catch (e) {
                (A.warn(`Failed to refresh clips asset catalog: ${e.message}`), (this.state.catalogFetchFailed = !0));
            } finally {
                this.catalogRefreshing = !1;
            }
    }
    async fetchCatalog() {
        let e = await o.Bo.get({
                url: E.Rsh.CLIPS_MODULE_ASSETS,
                query: { model_set_version: "3" },
                rejectWithError: !0,
            }),
            t = { assets: {} };
        for (let n of e.body.model_set_assets) t.assets[n.filename] = { url: n.url, fileName: n.filename };
        return (A.info("Loaded clips asset catalog with assets:", Object.keys(t.assets)), t);
    }
    async scanAssetState(e) {
        if (!a.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await a.Ay.checkClipsFilesExist(t))
            this.state.assetState[e] = { status: n ? _.DOWNLOADED : _.MISSING };
    }
    async prefetchAssets() {
        let e = this.state.assets,
            t = [];
        for (let [n, i] of Object.entries(e)) {
            let e = this.state.assetState[n];
            e?.status !== _.DOWNLOADED &&
                e?.status !== _.DOWNLOADING &&
                t.push(this.downloadAsset({ assetId: n, url: i.url, fileName: i.fileName }));
        }
        (A.info(`Waiting for ${t.length} clips asset downloads`),
            await Promise.all(t),
            A.info("Finished downloading all clips assets"));
    }
    downloadAsset(e) {
        let { url: t, assetId: n, fileName: i } = e,
            r = this.state.assetState[n],
            s = this.activeDownloads.get(n);
        if (null != s) return s;
        if (r?.status === _.DOWNLOADED) return Promise.resolve();
        if (r?.status === _.DOWNLOADING)
            return Promise.reject(Error("Clips asset is downloading but not in active downloads map"));
        this.state.assetState[n] = { status: _.DOWNLOADING, downloadedBytes: 0 };
        let l = a.Ay.downloadClipsFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.assetState[n] = { ...this.state.assetState[n], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                (e.fetchedFromNetwork && A.info("Downloaded clips asset from network:", n),
                    (this.state.assetState[n] = { status: _.DOWNLOADED, downloadedBytes: void 0 }));
            })
            .catch((t) => {
                (t?.USER_CANCELED_DOWNLOAD
                    ? A.info("User canceled the download for clips asset", e)
                    : A.error("Failed to download clips asset", { reason: t, ...e }),
                    (this.state.assetState[n] = { status: _.MISSING }));
            })
            .finally(() => {
                this.activeDownloads.delete(n);
            });
        return (this.activeDownloads.set(n, l), l);
    }
}
let f = new h();
var I = n(341923),
    p = n(696016);
let m = { stable: 0.05, ptb: 1, canary: 1, development: 1 },
    T = !1,
    g = null,
    S = null,
    N = null,
    C = null;
function O() {
    if (!(0, s.ri)(r.Ay)) return;
    let e = (0, u.T)(),
        t = r.Ay.getMediaEngine(),
        n = e && (0, I.s)(),
        i = l.Ay.getEnableAutoclipping(),
        a = N !== i;
    (S !== n || a) &&
        (p.nx.info(`clips ml flags pushed: ml=${n} (was ${S}), autoclipping=${i} (was ${N})`),
        (S = n),
        (N = i),
        n
            ? (null === C &&
                  (p.nx.info("clips v3 ml flag set ml=false until download complete"),
                  t.setClipsV3MLEnabled(!1),
                  (C = !1)),
              (async () => {
                  let { allAssetsDownloaded: e } = await f.start(),
                      n = e && !0 === S && !0 === N;
                  C !== n &&
                      (p.nx.info(
                          `clips v3 ml flag set ml=${n} (was ${C}). allAssetsDownloaded=${e}, autoclipping=${N}`,
                      ),
                      t.setClipsV3MLEnabled(n),
                      (C = n));
              })())
            : !1 !== C && (p.nx.info(`clips v3 ml flag set ml=false (was ${C})`), t.setClipsV3MLEnabled(!1), (C = !1)));
}
function R() {
    return (0, s.ri)(r.Ay)
        ? null != g
            ? g
            : (O(),
              (g = (async () => {
                  try {
                      await a.Ay.ensureModule("discord_clips");
                      let e = a.Ay.requireModule("discord_clips").getModulePath(),
                          t = r.Ay.getMediaEngine(),
                          n = a.Ay.getClipsDataDirSync();
                      t.setClipsDataPath(n);
                      let i = m[a.Ay.releaseChannel] ?? m.stable,
                          s = a.Ay.getClipsSentryDirSync();
                      (null != s &&
                          null != t.setClipsSentryConfig &&
                          t.setClipsSentryConfig(`discord_clips@${a.Ay.buildNumber ?? 0}`, s, i),
                          t.setClipsModulePath(e),
                          (T = !0),
                          p.nx.info("discord_clips module loaded, path: " + e));
                  } catch (e) {
                      ((g = null), p.nx.error("Failed to load discord_clips module", e));
                  }
              })()))
        : Promise.resolve();
}
function L() {
    return T;
}
