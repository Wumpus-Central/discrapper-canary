"use strict";
n.d(t, { t_: () => N, UW: () => y, so: () => C });
var i,
    r = n(472444),
    s = n(19575),
    a = n(274372),
    o = n(974293);
n(321073);
var l = n(626584),
    u = n(723702),
    c = n(572164),
    d = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i);
let _ = [
        ["laughter_screaming_exp79", "onnx", "32f89b229d95b00ba646c3860df0696d6b1b3b9008511361f3fca7ed1cbcf038"],
        ["laughter_screaming_exp58", "onnx", "f5a655cb76a57561ae84c9a9eb1829433db9ad8f4fd192a40f3277a5a5cfa6ad"],
        [
            "laughter_screaming_krispy_21_may",
            "onnx",
            "308042d0bfa4a0280afccfb341da722448d826968652e0f6fc2cfdf303276522",
        ],
        [
            "laughter_screaming_old_spliced_2s",
            "onnx",
            "dce8aec92bae18f32afb08a94bdac1d72f02d7d5589e8ad75c57c2e4228e104b",
        ],
        ["laughter_screaming_krispy", "onnx", "8835cfe08b2517162462b710c44bda60c116611c997fbce4d14679a26d6d75ed"],
        ["ggml-base", "bin", "60ed5bc3dd14eea856493d334349b405782ddcaf0028d4b5df4088345fba2efe"],
    ],
    h = new l.A("ClipsAssetManager");
class f {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    downloadRunning = !1;
    downloadPromise = null;
    async start() {
        if ((h.info("Clips asset manager started"), !(0, c.TD)() || !(0, u.isWindows)() || __OVERLAY__))
            return { allAssetsDownloaded: !1 };
        if (null != this.downloadPromise && (this.downloadRunning || this.areAllAssetsDownloaded()))
            await this.downloadPromise;
        else {
            h.info("Clips enabled on startup, prefetching assets"), (this.downloadRunning = !0);
            try {
                (this.downloadPromise = this.maybePrefetchAssets()), await this.downloadPromise;
            } finally {
                this.downloadRunning = !1;
            }
        }
        return { allAssetsDownloaded: this.areAllAssetsDownloaded() };
    }
    areAllAssetsDownloaded() {
        let e = Object.values(this.state.assetState);
        return e.length > 0 && e.every((e) => e.status === d.DOWNLOADED);
    }
    async maybePrefetchAssets() {
        try {
            await this.refreshCatalog(), await this.prefetchAssets();
        } catch (e) {
            h.warn(`Failed to prefetch clips assets: ${e.message}`);
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
                await s.Ay.cleanupUnusedClipsFiles(t), h.info("Clips asset catalog refreshed");
            } catch (e) {
                h.warn(`Failed to refresh clips asset catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.catalogRefreshing = !1;
            }
    }
    loadCatalog() {
        let e = { assets: {} };
        for (let [t, n, i] of _)
            e.assets[t] = { url: `https://cdn.discordapp.com/assets/content/${i}.${n}`, fileName: `${t}.${n}` };
        return h.info("Loaded clips asset catalog with assets:", Object.keys(e.assets)), e;
    }
    async scanAssetState(e) {
        if (!s.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await s.Ay.checkClipsFilesExist(t))
            this.state.assetState[e] = { status: n ? d.DOWNLOADED : d.MISSING };
    }
    async prefetchAssets() {
        let e = this.state.assets,
            t = [];
        for (let [n, i] of Object.entries(e)) {
            let e = this.state.assetState[n];
            e?.status !== d.DOWNLOADED &&
                e?.status !== d.DOWNLOADING &&
                t.push(this.downloadAsset({ assetId: n, url: i.url, fileName: i.fileName }));
        }
        h.info(`Waiting for ${t.length} clips asset downloads`),
            await Promise.all(t),
            h.info("Finished downloading all clips assets");
    }
    downloadAsset(e) {
        let { url: t, assetId: n, fileName: i } = e,
            r = this.state.assetState[n],
            a = this.activeDownloads.get(n);
        if (null != a) return a;
        if (r?.status === d.DOWNLOADED) return Promise.resolve();
        if (r?.status === d.DOWNLOADING)
            return Promise.reject(Error("Clips asset is downloading but not in active downloads map"));
        this.state.assetState[n] = { status: d.DOWNLOADING, downloadedBytes: 0 };
        let o = s.Ay.downloadClipsFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.assetState[n] = { ...this.state.assetState[n], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                e.fetchedFromNetwork && h.info("Downloaded clips asset from network:", n),
                    (this.state.assetState[n] = { status: d.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? h.info("User canceled the download for clips asset", e)
                    : h.error("Failed to download clips asset", { reason: t, ...e }),
                    (this.state.assetState[n] = { status: d.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(n);
            });
        return this.activeDownloads.set(n, o), o;
    }
}
let p = new f();
var E = n(696016);
let m = !1,
    g = null,
    A = null,
    I = null,
    T = null,
    S = null;
function y() {
    let { forceV3Capability: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, c.TD)(),
        n = r.Ay.getMediaEngine(),
        i = n.hasSetClipsRecordingEnabled(),
        s = (t || e || (i && !0 === A)) && (0, o.qi)("pushClipsV3RuntimeFlagsToNative"),
        l = t && (0, o.$i)("pushClipsV3RuntimeFlagsToNative"),
        u = a.Ay.getEnableAutoclipping(),
        d = null !== A,
        _ = A !== s,
        h = I !== l,
        f = T !== u;
    return _ || h || f
        ? (_ && n.setClipsV3Enabled(s),
          E.nx.info(
              `clips v3 runtime flags pushed: v3=${s} (was ${A}), ml=${l} (was ${I}), autoclipping=${u} (was ${T})`,
          ),
          (A = s),
          (I = l),
          (T = u),
          (0, o.ak)(s ? "v3" : "v1"),
          s &&
              (l
                  ? (null === S &&
                        (E.nx.info("clips v3 ml flag set ml=false until download complete"),
                        n.setClipsV3MLEnabled(!1),
                        (S = !1)),
                    (async () => {
                        let { allAssetsDownloaded: e } = await p.start(),
                            t = e && !0 === I && !0 === T;
                        S !== t &&
                            (E.nx.info(
                                `clips v3 ml flag set ml=${t} (was ${S}). allAssetsDownloaded=${e}, autoclipping=${T}`,
                            ),
                            n.setClipsV3MLEnabled(t),
                            (S = t));
                    })())
                  : !1 !== S &&
                    (E.nx.info(`clips v3 ml flag set ml=false (was ${S})`), n.setClipsV3MLEnabled(!1), (S = !1))),
          { midSessionV3Flip: d && _ })
        : { midSessionV3Flip: !1 };
}
function C() {
    let { forceV3Capability: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return null != g
        ? g
        : (y({ forceV3Capability: e }),
          (g = (async () => {
              try {
                  await s.Ay.ensureModule("discord_clips");
                  let e = s.Ay.requireModule("discord_clips").getModulePath(),
                      t = r.Ay.getMediaEngine(),
                      n = s.Ay.getClipsDataDirSync();
                  t.setClipsDataPath(n),
                      t.setClipsModulePath(e),
                      (m = !0),
                      E.nx.info("discord_clips module loaded, path: " + e);
              } catch (e) {
                  (g = null), E.nx.error("Failed to load discord_clips module", e);
              }
          })()));
}
function N() {
    return m;
}
