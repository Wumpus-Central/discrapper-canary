"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153);
let s = n(927813).A.Millis.HOUR,
    a = { lastReportedAtMs: null },
    o = a;
class l extends r.Ay.PersistedStore {
    static displayName = "FriendOnlineTimerStore";
    static persistKey = "FriendOnlineTimerStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
        o = e ?? a;
    }
    isCooldownElapsed() {
        return null == o.lastReportedAtMs || Date.now() - o.lastReportedAtMs >= s;
    }
    getState() {
        return o;
    }
}
let u = new l(i.h, {
    FRIEND_ONLINE_TIMER_REPORTED: function (e) {
        let { timestampMs: t } = e;
        return (o.lastReportedAtMs = t), !0;
    },
});
