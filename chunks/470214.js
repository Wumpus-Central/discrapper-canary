"use strict";
n.d(t, { A: () => T });
var i = n(636537),
    r = n(228366),
    s = n(439372),
    a = n(461213),
    o = n(927813),
    l = n(38405),
    d = n(17928);
let _ = o.A.Millis.HOUR,
    u = { lastReportedAtMs: null },
    c = u;
class E extends d.Ay.PersistedStore {
    static displayName = "FriendOnlineTimerStore";
    static persistKey = "FriendOnlineTimerStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
        c = e ?? u;
    }
    isCooldownElapsed() {
        return null == c.lastReportedAtMs || Date.now() - c.lastReportedAtMs >= _;
    }
    getState() {
        return c;
    }
}
let h = new E(r.h, {
    FRIEND_ONLINE_TIMER_REPORTED: function (e) {
        let { timestampMs: t } = e;
        return (c.lastReportedAtMs = t), !0;
    },
});
var m = n(652215),
    f = n(818348);
let g = 5 * o.A.Millis.MINUTE;
async function p() {
    try {
        await i.Bo.post({ url: m.Rsh.USER_MEANINGFULLY_ONLINE, rejectWithError: !0 });
    } catch (e) {
        if (!(e instanceof i.oh) || 429 !== e.status)
            return void l.A.captureException(e, { tags: { app_context: "session_timer" } });
    }
    r.h.dispatch({ type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: Date.now() });
}
function A(e) {
    return [f.cl.ONLINE, f.cl.STREAMING].includes(e);
}
class I extends s.A {
    timerId = null;
    actions = {
        POST_CONNECTION_OPEN: () => this.start(),
        CONNECTION_RESUMED: () => this.start(),
        CONNECTION_CLOSED: () => this.clear(),
        CONNECTION_INTERRUPTED: () => this.clear(),
        SELF_PRESENCE_STORE_UPDATE: () => this.start(),
    };
    _initialize() {}
    _terminate() {
        this.clear();
    }
    start = () => {
        !h.isCooldownElapsed() ||
            null != this.timerId ||
            (A(a.A.getStatus()) &&
                (this.timerId = setTimeout(() => {
                    (this.timerId = null), !A(a.A.getStatus()) || (h.isCooldownElapsed() && p());
                }, g)));
    };
    clear = () => {
        null != this.timerId && (clearTimeout(this.timerId), (this.timerId = null));
    };
}
let T = new I();
