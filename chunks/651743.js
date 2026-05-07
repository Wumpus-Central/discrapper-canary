"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let s = new Set(),
    a = {},
    o = new Set();
function l(e) {
    let { applicationId: t } = e;
    s.add(t);
}
function u(e) {
    let { applicationId: t } = e;
    s.delete(t);
}
class c extends i.Ay.Store {
    static displayName = "LaunchableGameStore";
    initialize() {
        "u" > typeof window &&
            window.addEventListener("focus", () => {
                o.clear(), this.emitChange();
            });
    }
    get launchingGames() {
        return s;
    }
    get launchableGames() {
        return a;
    }
    isLaunchable(e) {
        return o.has(e) || (o.add(e), r.h.dispatch({ type: "CHECK_LAUNCHABLE_GAME", gameId: e })), a[e] ?? !1;
    }
    isLaunchableLoading(e) {
        return null == a[e] && o.has(e);
    }
}
let d = new c(r.h, {
    GAME_LAUNCHABLE_UPDATE: function (e) {
        let { gameId: t, isLaunchable: n } = e;
        a[t] = n;
    },
    GAME_CLOUD_SYNC_START: l,
    GAME_LAUNCH_START: l,
    GAME_LAUNCH_SUCCESS: u,
    GAME_LAUNCH_FAIL: u,
    GAME_CLOUD_SYNC_CONFLICT: u,
    GAME_CLOUD_SYNC_ERROR: u,
    GAME_CLOUD_SYNC_COMPLETE: u,
});
