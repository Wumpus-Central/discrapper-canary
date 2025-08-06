let r;
n.d(t, {
    S: () => m,
    j: () => g,
}),
    n(415506);
var i = n(544891),
    o = n(570140),
    a = n(710845),
    s = n(893988),
    l = n(314897),
    c = n(417363),
    u = n(780570),
    d = n(358085),
    f = n(998502),
    _ = n(981631);
function p() {
    if (null == r) throw Error("Initialize cloud sync module before syncing.");
    return r;
}
function h() {
    return d.isPlatformEmbedded && ((0, d.isMac)() || ((0, d.isWindows)() && "arm64" !== f.ZP.architecture));
}
async function m() {
    if (null == r) {
        if (!h()) return void new a.Z("CloudSyncUtils").warn("CloudSync is not supported on this platform");
        await f.ZP.ensureModule("discord_cloudsync"),
            (r = new (f.ZP.getCloudSync())()).on("state", (e) =>
                o.Z.dispatch({
                    type: "GAME_CLOUD_SYNC_UPDATE",
                    state: e,
                }),
            );
    }
}
function g(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!c.Z.supportsCloudSync(e, t)) return Promise.resolve({ type: _.QCD.NONE });
    let o = p(),
        a = c.Z.getState(e, t);
    if (null == a) throw Error("No dispatch state for ".concat(e, ":").concat(t));
    let d = null != (n = a.storage) ? n : {},
        f = (0, u.Tu)(e, t),
        h = l.default.getToken();
    if (null == h) throw Error("Cannot use cloud sync when not authenticated.");
    let m = null != a.installPath ? (0, s.Z)(a.installPath) : null;
    if (null == m) throw Error("No install path for ".concat(e, ":").concat(t));
    let g = l.default.getId(),
        E = {
            forceHash: r,
            manifestPath: _.SRg.STORAGE_MANIFEST(m, g),
            roots:
                null != d.roots
                    ? d.roots
                    : [
                          {
                              id: _.SRg.ROOT_ID,
                              paths: Object.keys(_.SRg.ROOT_PLATFORMS).map((e) => ({
                                  platform: e,
                                  path: _.SRg.ROOT_STORAGE_PATH(m, g),
                              })),
                              patterns: _.SRg.ROOT_PATTERN,
                          },
                      ],
            storage: {
                baseURL: "".concat((0, i.K0)()).concat(_.ANM.APPLICATION_STORAGE(e, t)),
                token: h,
            },
            replacements: {
                INSTALLDIR: _.SRg.INSTALL_DIR(m),
                USERID: g,
                BRANCHID: t,
            },
        };
    return o.sync(f, E);
}
