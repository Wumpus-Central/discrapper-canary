"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153);
let s = new Set(),
    a = {};
function o(e) {
    let { applicationId: t } = e;
    s.add(t);
}
function l(e) {
    let { applicationId: t } = e;
    s.delete(t);
}
class u extends r.Ay.Store {
    static displayName = "LaunchableGameStore";
    get launchingGames() {
        return s;
    }
    get launchableGames() {
        return a;
    }
    isLaunchable(e) {
        return null != a[e] ? a[e] : ((a[e] = !1), i.h.dispatch({ type: "CHECK_LAUNCHABLE_GAME", gameId: e }), !1);
    }
}
let c = new u(i.h, {
    GAME_LAUNCHABLE_UPDATE: function (e) {
        let { gameId: t, isLaunchable: n } = e;
        a[t] = n;
    },
    GAME_CLOUD_SYNC_START: o,
    GAME_LAUNCH_START: o,
    GAME_LAUNCH_SUCCESS: l,
    GAME_LAUNCH_FAIL: l,
    GAME_CLOUD_SYNC_CONFLICT: l,
    GAME_CLOUD_SYNC_ERROR: l,
    GAME_CLOUD_SYNC_COMPLETE: l,
});
