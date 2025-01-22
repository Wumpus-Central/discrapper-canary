var i,
    a = r(47120);
var o = r(442837),
    s = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = new Set(),
    c = {};
function d(e) {
    let { gameId: n, isLaunchable: r } = e;
    c[n] = r;
}
function f(e) {
    let { applicationId: n } = e;
    u.add(n);
}
function p(e) {
    let { applicationId: n } = e;
    u.delete(n);
}
class h extends (i = o.ZP.Store) {
    get launchingGames() {
        return u;
    }
    get launchableGames() {
        return c;
    }
    isLaunchable(e) {
        return null != c[e]
            ? c[e]
            : ((c[e] = !1),
              s.Z.dispatch({
                  type: 'CHECK_LAUNCHABLE_GAME',
                  gameId: e
              }),
              !1);
    }
}
l(h, 'displayName', 'LaunchableGameStore'),
    (n.Z = new h(s.Z, {
        GAME_LAUNCHABLE_UPDATE: d,
        GAME_CLOUD_SYNC_START: f,
        GAME_LAUNCH_START: f,
        GAME_LAUNCH_SUCCESS: p,
        GAME_LAUNCH_FAIL: p,
        GAME_CLOUD_SYNC_CONFLICT: p,
        GAME_CLOUD_SYNC_ERROR: p,
        GAME_CLOUD_SYNC_COMPLETE: p
    }));
