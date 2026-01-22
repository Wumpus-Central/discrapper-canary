n.d(t, {
    A: () => O,
}),
    n(896048);
var r = n(562465),
    i = n(73153),
    a = n(439372),
    s = n(461213),
    o = n(927813),
    l = n(728458),
    c = n(527776),
    u = n(31369),
    d = n(652215),
    f = n(818348);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = 5 * o.A.Millis.MINUTE,
    h = 0.5 * o.A.Millis.MINUTE;

function m() {
    return c.A.getCurrentConfig({
        location: "FriendOnlineTimer",
    }).useOnlineTimer;
}

function g() {
    return c.A.getCurrentConfig({
        location: "FriendOnlineTimer",
    }).useTestTimerDuration
        ? h
        : _;
}
async function E() {
    if (m())
        try {
            await r.Bo.post({
                url: d.Rsh.USER_MEANINGFULLY_ONLINE,
                rejectWithError: !0,
            }),
                i.h.dispatch({
                    type: "FRIEND_ONLINE_TIMER_REPORTED",
                    timestampMs: Date.now(),
                });
        } catch (e) {
            l.A.captureException(e, {
                tags: {
                    app_context: "session_timer",
                },
            });
        }
}

function b(e) {
    return [f.cl.ONLINE, f.cl.STREAMING].includes(e);
}
class y extends a.A {
    _initialize() {}
    _terminate() {
        this.clear();
    }
    constructor(...e) {
        super(...e),
            p(this, "timerId", null),
            p(this, "actions", {
                POST_CONNECTION_OPEN: () => this.start(),
                CONNECTION_RESUMED: () => this.start(),
                CONNECTION_CLOSED: () => this.clear(),
                CONNECTION_INTERRUPTED: () => this.clear(),
                SELF_PRESENCE_STORE_UPDATE: () => this.start(),
            }),
            p(this, "start", () => {
                m() &&
                    u.A.isCooldownElapsed() &&
                    null == this.timerId &&
                    b(s.A.getStatus()) &&
                    (this.timerId = setTimeout(() => {
                        (this.timerId = null), !b(s.A.getStatus()) || (u.A.isCooldownElapsed() && E());
                    }, g()));
            }),
            p(this, "clear", () => {
                null != this.timerId && (clearTimeout(this.timerId), (this.timerId = null));
            });
    }
}
let O = new y();
