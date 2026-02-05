"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153);
let a = new Set(),
    s = {};
function o(e) {
    let { gameId: t, isLaunchable: n } = e;
    s[t] = n;
}
function l(e) {
    let { applicationId: t } = e;
    a.add(t);
}
function u(e) {
    let { applicationId: t } = e;
    a.delete(t);
}
class c extends r.Ay.Store {
    static displayName = "LaunchableGameStore";
    get launchingGames() {
        return a;
    }
    get launchableGames() {
        return s;
    }
    isLaunchable(e) {
        return null != s[e] ? s[e] : ((s[e] = !1), i.h.dispatch({ type: "CHECK_LAUNCHABLE_GAME", gameId: e }), !1);
    }
}
let d = new c(i.h, {
    GAME_LAUNCHABLE_UPDATE: o,
    GAME_CLOUD_SYNC_START: l,
    GAME_LAUNCH_START: l,
    GAME_LAUNCH_SUCCESS: u,
    GAME_LAUNCH_FAIL: u,
    GAME_CLOUD_SYNC_CONFLICT: u,
    GAME_CLOUD_SYNC_ERROR: u,
    GAME_CLOUD_SYNC_COMPLETE: u,
});
