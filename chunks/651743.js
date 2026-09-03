n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366);
let a = new Set(),
    s = {},
    l = new Set();
function o(e) {
    let { applicationId: t } = e;
    a.add(t);
}
function d(e) {
    let { applicationId: t } = e;
    a.delete(t);
}
class c extends i.Ay.Store {
    static displayName = "LaunchableGameStore";
    initialize() {
        "u" > typeof window &&
            window.addEventListener("focus", () => {
                l.clear(), this.emitChange();
            });
    }
    get launchingGames() {
        return a;
    }
    get launchableGames() {
        return s;
    }
    isLaunchable(e) {
        return l.has(e) || (l.add(e), r.h.dispatch({ type: "CHECK_LAUNCHABLE_GAME", gameId: e })), s[e] ?? !1;
    }
    isLaunchableLoading(e) {
        return null == s[e] && l.has(e);
    }
}
let u = new c(r.h, {
    GAME_LAUNCHABLE_UPDATE: function (e) {
        let { gameId: t, isLaunchable: n } = e;
        s[t] = n;
    },
    GAME_CLOUD_SYNC_START: o,
    GAME_LAUNCH_START: o,
    GAME_LAUNCH_SUCCESS: d,
    GAME_LAUNCH_FAIL: d,
    GAME_CLOUD_SYNC_CONFLICT: d,
    GAME_CLOUD_SYNC_ERROR: d,
    GAME_CLOUD_SYNC_COMPLETE: d,
});
