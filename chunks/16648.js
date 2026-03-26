"use strict";
n.d(t, { A: () => m });
var r = n(562465),
    i = n(73153),
    s = n(439372),
    a = n(461213),
    o = n(927813),
    l = n(728458),
    u = n(31369),
    c = n(652215),
    d = n(818348);
let _ = 5 * o.A.Millis.MINUTE;
async function f() {
    try {
        await r.Bo.post({ url: c.Rsh.USER_MEANINGFULLY_ONLINE, rejectWithError: !0 });
    } catch (e) {
        if (!(e instanceof r.oh) || 429 !== e.status)
            return void l.A.captureException(e, { tags: { app_context: "session_timer" } });
    }
    i.h.dispatch({ type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: Date.now() });
}
function p(e) {
    return [d.cl.ONLINE, d.cl.STREAMING].includes(e);
}
class h extends s.A {
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
        !u.A.isCooldownElapsed() ||
            null != this.timerId ||
            (p(a.A.getStatus()) &&
                (this.timerId = setTimeout(() => {
                    (this.timerId = null), !p(a.A.getStatus()) || (u.A.isCooldownElapsed() && f());
                }, _)));
    };
    clear = () => {
        null != this.timerId && (clearTimeout(this.timerId), (this.timerId = null));
    };
}
let m = new h();
