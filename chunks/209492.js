let i;
n.d(e, {
    S: () => f,
    j: () => C
}),
    n(411104);
var l = n(544891),
    a = n(570140),
    s = n(710845),
    o = n(893988),
    r = n(314897),
    c = n(417363),
    d = n(780570),
    u = n(358085),
    p = n(998502),
    h = n(981631);
async function f() {
    if (null == i) {
        if (!(u.isPlatformEmbedded && ((0, u.isMac)() || (0, u.isWindows)()))) {
            new s.Z('CloudSyncUtils').warn('CloudSync is not supported on this platform');
            return;
        }
        await p.ZP.ensureModule('discord_cloudsync'),
            (i = new (p.ZP.getCloudSync())()).on('state', (t) =>
                a.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_UPDATE',
                    state: t
                })
            );
    }
}
function C(t, e) {
    var n;
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!c.Z.supportsCloudSync(t, e)) return Promise.resolve({ type: h.QCD.NONE });
    let s = (function () {
            if (null == i) throw Error('Initialize cloud sync module before syncing.');
            return i;
        })(),
        u = c.Z.getState(t, e);
    if (null == u) throw Error('No dispatch state for '.concat(t, ':').concat(e));
    let p = null !== (n = u.storage) && void 0 !== n ? n : {},
        f = (0, d.Tu)(t, e),
        C = r.default.getToken();
    if (null == C) throw Error('Cannot use cloud sync when not authenticated.');
    let y = null != u.installPath ? (0, o.Z)(u.installPath) : null;
    if (null == y) throw Error('No install path for '.concat(t, ':').concat(e));
    let N = r.default.getId(),
        m = {
            forceHash: a,
            manifestPath: h.SRg.STORAGE_MANIFEST(y, N),
            roots:
                null != p.roots
                    ? p.roots
                    : [
                          {
                              id: h.SRg.ROOT_ID,
                              paths: Object.keys(h.SRg.ROOT_PLATFORMS).map((t) => ({
                                  platform: t,
                                  path: h.SRg.ROOT_STORAGE_PATH(y, N)
                              })),
                              patterns: h.SRg.ROOT_PATTERN
                          }
                      ],
            storage: {
                baseURL: ''.concat((0, l.K0)()).concat(h.ANM.APPLICATION_STORAGE(t, e)),
                token: C
            },
            replacements: {
                INSTALLDIR: h.SRg.INSTALL_DIR(y),
                USERID: N,
                BRANCHID: e
            }
        };
    return s.sync(f, m);
}
