let i;
n.d(e, {
    S: () => f,
    j: () => y
}),
    n(411104);
var r = n(544891),
    o = n(570140),
    l = n(710845),
    a = n(893988),
    s = n(314897),
    c = n(417363),
    d = n(780570),
    u = n(358085),
    p = n(998502),
    h = n(981631);
async function f() {
    if (null == i) {
        if (!(u.isPlatformEmbedded && ((0, u.isMac)() || (0, u.isWindows)()))) return void new l.Z('CloudSyncUtils').warn('CloudSync is not supported on this platform');
        await p.ZP.ensureModule('discord_cloudsync'),
            (i = new (p.ZP.getCloudSync())()).on('state', (t) =>
                o.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_UPDATE',
                    state: t
                })
            );
    }
}
function y(t, e) {
    var n;
    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!c.Z.supportsCloudSync(t, e)) return Promise.resolve({ type: h.QCD.NONE });
    let l = (function () {
            if (null == i) throw Error('Initialize cloud sync module before syncing.');
            return i;
        })(),
        u = c.Z.getState(t, e);
    if (null == u) throw Error('No dispatch state for '.concat(t, ':').concat(e));
    let p = null != (n = u.storage) ? n : {},
        f = (0, d.Tu)(t, e),
        y = s.default.getToken();
    if (null == y) throw Error('Cannot use cloud sync when not authenticated.');
    let C = null != u.installPath ? (0, a.Z)(u.installPath) : null;
    if (null == C) throw Error('No install path for '.concat(t, ':').concat(e));
    let O = s.default.getId(),
        N = {
            forceHash: o,
            manifestPath: h.SRg.STORAGE_MANIFEST(C, O),
            roots:
                null != p.roots
                    ? p.roots
                    : [
                          {
                              id: h.SRg.ROOT_ID,
                              paths: Object.keys(h.SRg.ROOT_PLATFORMS).map((t) => ({
                                  platform: t,
                                  path: h.SRg.ROOT_STORAGE_PATH(C, O)
                              })),
                              patterns: h.SRg.ROOT_PATTERN
                          }
                      ],
            storage: {
                baseURL: ''.concat((0, r.K0)()).concat(h.ANM.APPLICATION_STORAGE(t, e)),
                token: y
            },
            replacements: {
                INSTALLDIR: h.SRg.INSTALL_DIR(C),
                USERID: O,
                BRANCHID: e
            }
        };
    return l.sync(f, N);
}
