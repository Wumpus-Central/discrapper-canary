"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153);
let a = n(927813).A.Millis.HOUR,
    s = { lastReportedAtMs: null },
    o = s;
function l(e) {
    let { timestampMs: t } = e;
    return (o.lastReportedAtMs = t), !0;
}
class u extends r.Ay.PersistedStore {
    static displayName = "FriendOnlineTimerStore";
    static persistKey = "FriendOnlineTimerStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
        o = e ?? s;
    }
    isCooldownElapsed() {
        return null == o.lastReportedAtMs || Date.now() - o.lastReportedAtMs >= a;
    }
    getState() {
        return o;
    }
}
let c = new u(i.h, { FRIEND_ONLINE_TIMER_REPORTED: l });
