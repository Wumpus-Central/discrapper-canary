"use strict";
n.d(t, { A: () => S });
var i = n(636537),
    r = n(228366),
    a = n(439372),
    s = n(885386),
    l = n(461213),
    o = n(927813),
    d = n(38405),
    c = n(17928);
let u = o.A.Millis.HOUR,
    _ = { lastReportedAtMs: null },
    E = _;
class A extends c.Ay.PersistedStore {
    static displayName = "FriendOnlineTimerStore";
    static persistKey = "FriendOnlineTimerStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _;
        E = e ?? _;
    }
    isCooldownElapsed() {
        return null == E.lastReportedAtMs || Date.now() - E.lastReportedAtMs >= u;
    }
    getState() {
        return E;
    }
}
let h = new A(r.h, {
    FRIEND_ONLINE_TIMER_REPORTED: function (e) {
        let { timestampMs: t } = e;
        return (E.lastReportedAtMs = t), !0;
    },
});
var I = n(652215),
    f = n(818348);
let p = 5 * o.A.Millis.MINUTE;
async function T() {
    try {
        await i.Bo.post({ url: I.Rsh.USER_MEANINGFULLY_ONLINE, rejectWithError: !0 });
    } catch (e) {
        if (!(e instanceof i.oh) || 429 !== e.status)
            return void d.A.captureException(e, { tags: { app_context: "session_timer" } });
    }
    r.h.dispatch({ type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: Date.now() });
}
function m(e) {
    return [f.cl.ONLINE, f.cl.STREAMING].includes(e);
}
class g extends a.A {
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
        s.hV.getSetting() &&
            h.isCooldownElapsed() &&
            null == this.timerId &&
            m(l.A.getStatus()) &&
            (this.timerId = setTimeout(() => {
                (this.timerId = null), !m(l.A.getStatus()) || (h.isCooldownElapsed() && T());
            }, p));
    };
    clear = () => {
        null != this.timerId && (clearTimeout(this.timerId), (this.timerId = null));
    };
}
let S = new g();
