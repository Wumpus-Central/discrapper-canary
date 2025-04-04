n.d(t, { Z: () => _ }), n(47120);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = new Set(),
    l = {};
function c(e) {
    let { gameId: t, isLaunchable: n } = e;
    l[t] = n;
}
function u(e) {
    let { applicationId: t } = e;
    s.add(t);
}
function d(e) {
    let { applicationId: t } = e;
    s.delete(t);
}
class f extends (r = i.ZP.Store) {
    get launchingGames() {
        return s;
    }
    get launchableGames() {
        return l;
    }
    isLaunchable(e) {
        return null != l[e]
            ? l[e]
            : ((l[e] = !1),
              o.Z.dispatch({
                  type: 'CHECK_LAUNCHABLE_GAME',
                  gameId: e
              }),
              !1);
    }
}
a(f, 'displayName', 'LaunchableGameStore');
let _ = new f(o.Z, {
    GAME_LAUNCHABLE_UPDATE: c,
    GAME_CLOUD_SYNC_START: u,
    GAME_LAUNCH_START: u,
    GAME_LAUNCH_SUCCESS: d,
    GAME_LAUNCH_FAIL: d,
    GAME_CLOUD_SYNC_CONFLICT: d,
    GAME_CLOUD_SYNC_ERROR: d,
    GAME_CLOUD_SYNC_COMPLETE: d
});
