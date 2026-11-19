n.d(t, { A: () => S });
var i = n(620632),
    r = n(73153),
    a = n(439372),
    s = n(253932),
    l = n(46653),
    o = n(894768),
    d = n(927813),
    c = n(856383),
    u = n(855986);
let _ = d.A.Millis.HOUR,
    E = { lastReportedAtMs: null },
    A = E;
class f extends u.Ay.PersistedStore {
    static displayName = "FriendOnlineTimerStore";
    static persistKey = "FriendOnlineTimerStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E;
        A = e ?? E;
    }
    isCooldownElapsed() {
        return null == A.lastReportedAtMs || Date.now() - A.lastReportedAtMs >= _;
    }
    getState() {
        return A;
    }
}
let h = new f(r.h, {
    FRIEND_ONLINE_TIMER_REPORTED: function (e) {
        let { timestampMs: t } = e;
        return ((A.lastReportedAtMs = t), !0);
    },
});
var I = n(652215),
    p = n(818348);
let m = 5 * d.A.Millis.MINUTE;
function g(e) {
    return [p.cl.ONLINE, p.cl.STREAMING].includes(e);
}
class T extends a.A {
    timerId = null;
    actions = {
        POST_CONNECTION_OPEN: () => this.start(),
        CONNECTION_RESUMED: () => this.start(),
        CONNECTION_CLOSED: () => this.clear(),
        CONNECTION_INTERRUPTED: () => this.clear(),
        LOGOUT: () => this.clear(),
        SELF_PRESENCE_STORE_UPDATE: () => this.start(),
    };
    _initialize() {}
    _terminate() {
        this.clear();
    }
    start = () => {
        l.default.isAuthenticated() &&
            s.hV.getSetting() &&
            h.isCooldownElapsed() &&
            null == this.timerId &&
            g(o.A.getStatus()) &&
            (this.timerId = setTimeout(() => {
                ((this.timerId = null),
                    l.default.isAuthenticated() &&
                        g(o.A.getStatus()) &&
                        h.isCooldownElapsed() &&
                        (async function () {
                            try {
                                await i.Bo.post({ url: I.Rsh.USER_MEANINGFULLY_ONLINE, rejectWithError: !0 });
                            } catch (e) {
                                if (!(e instanceof i.oh) || 429 !== e.status)
                                    return void c.A.captureException(e, { tags: { app_context: "session_timer" } });
                            }
                            r.h.dispatch({ type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: Date.now() });
                        })());
            }, m));
    };
    clear = () => {
        null != this.timerId && (clearTimeout(this.timerId), (this.timerId = null));
    };
}
let S = new T();
