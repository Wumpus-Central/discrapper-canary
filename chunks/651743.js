n.d(t, { A: () => c });
var i = n(17928),
    a = n(228366);
let r = new Set(),
    s = {};
function l(e) {
    let { applicationId: t } = e;
    r.add(t);
}
function o(e) {
    let { applicationId: t } = e;
    r.delete(t);
}
class d extends i.Ay.Store {
    static displayName = "LaunchableGameStore";
    get launchingGames() {
        return r;
    }
    get launchableGames() {
        return s;
    }
    isLaunchable(e) {
        return null != s[e] ? s[e] : ((s[e] = !1), a.h.dispatch({ type: "CHECK_LAUNCHABLE_GAME", gameId: e }), !1);
    }
}
let c = new d(a.h, {
    GAME_LAUNCHABLE_UPDATE: function (e) {
        let { gameId: t, isLaunchable: n } = e;
        s[t] = n;
    },
    GAME_CLOUD_SYNC_START: l,
    GAME_LAUNCH_START: l,
    GAME_LAUNCH_SUCCESS: o,
    GAME_LAUNCH_FAIL: o,
    GAME_CLOUD_SYNC_CONFLICT: o,
    GAME_CLOUD_SYNC_ERROR: o,
    GAME_CLOUD_SYNC_COMPLETE: o,
});
