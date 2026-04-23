n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366);
let a = new Set(),
    s = {};
function _(e) {
    let { applicationId: t } = e;
    a.add(t);
}
function l(e) {
    let { applicationId: t } = e;
    a.delete(t);
}
class o extends i.Ay.Store {
    static displayName = "LaunchableGameStore";
    get launchingGames() {
        return a;
    }
    get launchableGames() {
        return s;
    }
    isLaunchable(e) {
        return null != s[e] ? s[e] : ((s[e] = !1), r.h.dispatch({ type: "CHECK_LAUNCHABLE_GAME", gameId: e }), !1);
    }
}
let E = new o(r.h, {
    GAME_LAUNCHABLE_UPDATE: function (e) {
        let { gameId: t, isLaunchable: n } = e;
        s[t] = n;
    },
    GAME_CLOUD_SYNC_START: _,
    GAME_LAUNCH_START: _,
    GAME_LAUNCH_SUCCESS: l,
    GAME_LAUNCH_FAIL: l,
    GAME_CLOUD_SYNC_CONFLICT: l,
    GAME_CLOUD_SYNC_ERROR: l,
    GAME_CLOUD_SYNC_COMPLETE: l,
});
