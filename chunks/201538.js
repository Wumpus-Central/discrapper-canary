"use strict";
n.d(t, { t_: () => R, UW: () => N, so: () => v });
var i,
    r = n(472444),
    s = n(19575),
    a = n(274372),
    o = n(974293);
n(321073);
var l = n(636537),
    u = n(626584),
    c = n(723702),
    d = n(572164),
    _ = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i),
    h = n(652215);
let f = new u.A("ClipsAssetManager");
class p {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    downloadRunning = !1;
    downloadPromise = null;
    async start() {
        if ((f.info("Clips asset manager started"), !(0, d.TD)() || !(0, c.isWindows)() || __OVERLAY__))
            return { allAssetsDownloaded: !1 };
        if (null != this.downloadPromise && (this.downloadRunning || this.areAllAssetsDownloaded()))
            await this.downloadPromise;
        else {
            f.info("Clips enabled on startup, prefetching assets"), (this.downloadRunning = !0);
            try {
                (this.downloadPromise = this.maybePrefetchAssets()), await this.downloadPromise;
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
            await this.refreshCatalog(), await this.prefetchAssets();
        } catch (e) {
            f.warn(`Failed to prefetch clips assets: ${e.message}`);
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
                (this.state.catalogLastFetchTime = new Date()), (this.state.catalogFetchFailed = !1);
                let t = Object.values(e.assets).map((e) => e.fileName);
                await s.Ay.cleanupUnusedClipsFiles(t), f.info("Clips asset catalog refreshed");
            } catch (e) {
                f.warn(`Failed to refresh clips asset catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.catalogRefreshing = !1;
            }
    }
    async fetchCatalog() {
        let e = await l.Bo.get({
                url: h.Rsh.CLIPS_MODULE_ASSETS,
                query: { model_set_version: "1" },
                rejectWithError: !0,
            }),
            t = { assets: {} };
        for (let n of e.body.model_set_assets) t.assets[n.filename] = { url: n.url, fileName: n.filename };
        return f.info("Loaded clips asset catalog with assets:", Object.keys(t.assets)), t;
    }
    async scanAssetState(e) {
        if (!s.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await s.Ay.checkClipsFilesExist(t))
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
        f.info(`Waiting for ${t.length} clips asset downloads`),
            await Promise.all(t),
            f.info("Finished downloading all clips assets");
    }
    downloadAsset(e) {
        let { url: t, assetId: n, fileName: i } = e,
            r = this.state.assetState[n],
            a = this.activeDownloads.get(n);
        if (null != a) return a;
        if (r?.status === _.DOWNLOADED) return Promise.resolve();
        if (r?.status === _.DOWNLOADING)
            return Promise.reject(Error("Clips asset is downloading but not in active downloads map"));
        this.state.assetState[n] = { status: _.DOWNLOADING, downloadedBytes: 0 };
        let o = s.Ay.downloadClipsFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.assetState[n] = { ...this.state.assetState[n], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                e.fetchedFromNetwork && f.info("Downloaded clips asset from network:", n),
                    (this.state.assetState[n] = { status: _.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? f.info("User canceled the download for clips asset", e)
                    : f.error("Failed to download clips asset", { reason: t, ...e }),
                    (this.state.assetState[n] = { status: _.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(n);
            });
        return this.activeDownloads.set(n, o), o;
    }
}
let E = new p();
var m = n(696016);
let g = { stable: 0.05, ptb: 1, canary: 1, development: 1 },
    A = !1,
    I = null,
    T = null,
    S = null,
    y = null,
    C = null;
function N() {
    let { forceV3Capability: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, d.TD)(),
        n = r.Ay.getMediaEngine(),
        i = n.hasSetClipsRecordingEnabled(),
        s = (t || e || (i && !0 === T)) && (0, o.qi)("pushClipsV3RuntimeFlagsToNative"),
        l = t && (0, o.$i)("pushClipsV3RuntimeFlagsToNative"),
        u = a.Ay.getEnableAutoclipping(),
        c = null !== T,
        _ = T !== s,
        h = S !== l,
        f = y !== u;
    return _ || h || f
        ? (_ && n.setClipsV3Enabled(s),
          m.nx.info(
              `clips v3 runtime flags pushed: v3=${s} (was ${T}), ml=${l} (was ${S}), autoclipping=${u} (was ${y})`,
          ),
          (T = s),
          (S = l),
          (y = u),
          (0, o.ak)(s ? "v3" : "v1"),
          s &&
              (l
                  ? (null === C &&
                        (m.nx.info("clips v3 ml flag set ml=false until download complete"),
                        n.setClipsV3MLEnabled(!1),
                        (C = !1)),
                    (async () => {
                        let { allAssetsDownloaded: e } = await E.start(),
                            t = e && !0 === S && !0 === y;
                        C !== t &&
                            (m.nx.info(
                                `clips v3 ml flag set ml=${t} (was ${C}). allAssetsDownloaded=${e}, autoclipping=${y}`,
                            ),
                            n.setClipsV3MLEnabled(t),
                            (C = t));
                    })())
                  : !1 !== C &&
                    (m.nx.info(`clips v3 ml flag set ml=false (was ${C})`), n.setClipsV3MLEnabled(!1), (C = !1))),
          { midSessionV3Flip: c && _ })
        : { midSessionV3Flip: !1 };
}
function v() {
    let { forceV3Capability: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return null != I
        ? I
        : (N({ forceV3Capability: e }),
          (I = (async () => {
              try {
                  await s.Ay.ensureModule("discord_clips");
                  let e = s.Ay.requireModule("discord_clips").getModulePath(),
                      t = r.Ay.getMediaEngine(),
                      n = s.Ay.getClipsDataDirSync();
                  t.setClipsDataPath(n);
                  let i = g[s.Ay.releaseChannel] ?? g.stable,
                      a = s.Ay.getClipsSentryDirSync();
                  null != a &&
                      null != t.setClipsSentryConfig &&
                      t.setClipsSentryConfig(`discord_clips@${s.Ay.buildNumber ?? 0}`, a, i),
                      t.setClipsModulePath(e),
                      (A = !0),
                      m.nx.info("discord_clips module loaded, path: " + e);
              } catch (e) {
                  (I = null), m.nx.error("Failed to load discord_clips module", e);
              }
          })()));
}
function R() {
    return A;
}
