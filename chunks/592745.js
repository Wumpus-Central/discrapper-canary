n.d(t, { Z: () => _ }), n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = new Set(),
    l = {};
function u(e) {
    let { gameId: t, isLaunchable: n } = e;
    l[t] = n;
}
function c(e) {
    let { applicationId: t } = e;
    o.add(t);
}
function d(e) {
    let { applicationId: t } = e;
    o.delete(t);
}
class f extends (i = r.ZP.Store) {
    get launchingGames() {
        return o;
    }
    get launchableGames() {
        return l;
    }
    isLaunchable(e) {
        return null != l[e]
            ? l[e]
            : ((l[e] = !1),
              a.Z.dispatch({
                  type: 'CHECK_LAUNCHABLE_GAME',
                  gameId: e
              }),
              !1);
    }
}
s(f, 'displayName', 'LaunchableGameStore');
let _ = new f(a.Z, {
    GAME_LAUNCHABLE_UPDATE: u,
    GAME_CLOUD_SYNC_START: c,
    GAME_LAUNCH_START: c,
    GAME_LAUNCH_SUCCESS: d,
    GAME_LAUNCH_FAIL: d,
    GAME_CLOUD_SYNC_CONFLICT: d,
    GAME_CLOUD_SYNC_ERROR: d,
    GAME_CLOUD_SYNC_COMPLETE: d
});
