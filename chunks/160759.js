n.d(t, { so: () => O, t_: () => R, mj: () => C });
var i,
    r = n(718197),
    a = n(253400),
    s = n(734066),
    l = n(419490);
n(321073);
var o = n(620632),
    d = n(626584),
    c = n(723702),
    u = n(572164),
    _ = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i),
    E = n(652215);
let A = new d.A("ClipsAssetManager"),
    h = new (class {
        state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
        activeDownloads = new Map();
        catalogRefreshing = !1;
        downloadRunning = !1;
        downloadPromise = null;
        async start() {
            if ((A.info("Clips asset manager started"), !(0, u.T)() || !(0, c.uF)() || __OVERLAY__))
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
                    (A.warn(`Failed to refresh clips asset catalog: ${e.message}`),
                        (this.state.catalogFetchFailed = !0));
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
    })();
var f = n(341923),
    I = n(696016);
let p = { stable: 0.05, ptb: 1, canary: 1, development: 1 },
    m = !1,
    T = null,
    g = null,
    S = null,
    N = null;
function C() {
    if (!(0, s.ri)(r.Ay)) return;
    let e = (0, u.T)(),
        t = r.Ay.getMediaEngine(),
        n = e && (0, f.s)(),
        i = l.Ay.getEnableAutoclipping(),
        a = S !== i;
    (g !== n || a) &&
        (I.GU.info(`clips ml flags pushed: ml=${n} (was ${g}), autoclipping=${i} (was ${S})`),
        (g = n),
        (S = i),
        n
            ? (null === N &&
                  (I.GU.info("clips v3 ml flag set ml=false until download complete"),
                  t.setClipsV3MLEnabled(!1),
                  (N = !1)),
              (async () => {
                  let { allAssetsDownloaded: e } = await h.start(),
                      n = e && !0 === g && !0 === S;
                  N !== n &&
                      (I.GU.info(
                          `clips v3 ml flag set ml=${n} (was ${N}). allAssetsDownloaded=${e}, autoclipping=${S}`,
                      ),
                      t.setClipsV3MLEnabled(n),
                      (N = n));
              })())
            : !1 !== N && (I.GU.info(`clips v3 ml flag set ml=false (was ${N})`), t.setClipsV3MLEnabled(!1), (N = !1)));
}
function O() {
    return (0, s.ri)(r.Ay)
        ? null != T
            ? T
            : (C(),
              (T = (async () => {
                  try {
                      await a.Ay.ensureModule("discord_clips");
                      let e = a.Ay.requireModule("discord_clips").getModulePath(),
                          t = r.Ay.getMediaEngine(),
                          n = a.Ay.getClipsDataDirSync();
                      t.setClipsDataPath(n);
                      let i = p[a.Ay.releaseChannel] ?? p.stable,
                          s = a.Ay.getClipsSentryDirSync();
                      (null != s &&
                          null != t.setClipsSentryConfig &&
                          t.setClipsSentryConfig(`discord_clips@${a.Ay.buildNumber ?? 0}`, s, i),
                          t.setClipsModulePath(e),
                          (m = !0),
                          I.GU.info("discord_clips module loaded, path: " + e));
                  } catch (e) {
                      ((T = null), I.GU.error("Failed to load discord_clips module", e));
                  }
              })()))
        : Promise.resolve();
}
function R() {
    return m;
}
