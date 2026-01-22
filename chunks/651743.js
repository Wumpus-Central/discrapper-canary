n.d(t, { A: () => p }), n(896048);
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = new Set(),
    l = {};
function c(e) {
    let { gameId: t, isLaunchable: n } = e;
    l[t] = n;
}
function u(e) {
    let { applicationId: t } = e;
    o.add(t);
}
function d(e) {
    let { applicationId: t } = e;
    o.delete(t);
}
class f extends (r = i.Ay.Store) {
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
              a.h.dispatch({
                  type: "CHECK_LAUNCHABLE_GAME",
                  gameId: e,
              }),
              !1);
    }
}
s(f, "displayName", "LaunchableGameStore");
let p = new f(a.h, {
    GAME_LAUNCHABLE_UPDATE: c,
    GAME_CLOUD_SYNC_START: u,
    GAME_LAUNCH_START: u,
    GAME_LAUNCH_SUCCESS: d,
    GAME_LAUNCH_FAIL: d,
    GAME_CLOUD_SYNC_CONFLICT: d,
    GAME_CLOUD_SYNC_ERROR: d,
    GAME_CLOUD_SYNC_COMPLETE: d,
});
