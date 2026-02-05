"use strict";
n.d(t, { A: () => I });
var r = n(562465),
    i = n(73153),
    a = n(439372),
    s = n(461213),
    o = n(927813),
    l = n(728458),
    u = n(527776),
    c = n(31369),
    d = n(652215),
    _ = n(818348);
let f = 5 * o.A.Millis.MINUTE,
    p = 0.5 * o.A.Millis.MINUTE;
function h() {
    return u.A.getCurrentConfig({ location: "FriendOnlineTimer" }).useOnlineTimer;
}
function m() {
    return u.A.getCurrentConfig({ location: "FriendOnlineTimer" }).useTestTimerDuration ? p : f;
}
async function g() {
    if (h())
        try {
            await r.Bo.post({ url: d.Rsh.USER_MEANINGFULLY_ONLINE, rejectWithError: !0 }),
                i.h.dispatch({ type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: Date.now() });
        } catch (e) {
            l.A.captureException(e, { tags: { app_context: "session_timer" } });
        }
}
function E(e) {
    return [_.cl.ONLINE, _.cl.STREAMING].includes(e);
}
class A extends a.A {
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
        h() &&
            c.A.isCooldownElapsed() &&
            null == this.timerId &&
            E(s.A.getStatus()) &&
            (this.timerId = setTimeout(() => {
                (this.timerId = null), !E(s.A.getStatus()) || (c.A.isCooldownElapsed() && g());
            }, m()));
    };
    clear = () => {
        null != this.timerId && (clearTimeout(this.timerId), (this.timerId = null));
    };
}
let I = new A();
