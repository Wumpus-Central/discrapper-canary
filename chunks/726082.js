"use strict";
n.d(t, { A: () => y });
var i = n(636537),
    r = n(228366),
    s = n(439372),
    a = n(885386),
    o = n(461213),
    l = n(927813),
    u = n(38405),
    c = n(17928);
let d = l.A.Millis.HOUR,
    _ = { lastReportedAtMs: null },
    h = _;
class f extends c.Ay.PersistedStore {
    static displayName = "FriendOnlineTimerStore";
    static persistKey = "FriendOnlineTimerStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _;
        h = e ?? _;
    }
    isCooldownElapsed() {
        return null == h.lastReportedAtMs || Date.now() - h.lastReportedAtMs >= d;
    }
    getState() {
        return h;
    }
}
let p = new f(r.h, {
        FRIEND_ONLINE_TIMER_REPORTED: function (e) {
            let { timestampMs: t } = e;
            return (h.lastReportedAtMs = t), !0;
        },
    }),
    E = (0, n(945810).mj)({
        kind: "user",
        name: "2026-05-notify-friends-on-come-online",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var m = n(652215),
    g = n(818348);
let A = 5 * l.A.Millis.MINUTE;
async function I() {
    try {
        await i.Bo.post({ url: m.Rsh.USER_MEANINGFULLY_ONLINE, rejectWithError: !0 });
    } catch (e) {
        if (!(e instanceof i.oh) || 429 !== e.status)
            return void u.A.captureException(e, { tags: { app_context: "session_timer" } });
    }
    r.h.dispatch({ type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: Date.now() });
}
function T(e) {
    return [g.cl.ONLINE, g.cl.STREAMING].includes(e);
}
class S extends s.A {
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
        (E.getConfig({ location: "FriendOnlineTimerManager" }).enabled && !a.hV.getSetting()) ||
            !p.isCooldownElapsed() ||
            null != this.timerId ||
            (T(o.A.getStatus()) &&
                (this.timerId = setTimeout(() => {
                    (this.timerId = null), !T(o.A.getStatus()) || (p.isCooldownElapsed() && I());
                }, A)));
    };
    clear = () => {
        null != this.timerId && (clearTimeout(this.timerId), (this.timerId = null));
    };
}
let y = new S();
