"use strict";
n.d(t, { A: () => S, o: () => N }), n(321073);
var i = n(311907),
    s = n(713402),
    l = n(73153),
    a = n(361610),
    r = n(734057),
    o = n(290863),
    c = n(977997),
    d = n(927813),
    u = n(360635);
let h = 5 * d.A.Millis.MINUTE;
function A(e, t, n) {
    return `voice-activity-${e}-${t}-${n}`;
}
function p(e, t) {
    return `voice-user-${e}-${t}`;
}
function m(e) {
    return `past-event-${e}`;
}
let g = new s.J(
        function (e) {
            let t = [];
            return (
                t.push(e.channelId),
                (e.eventType === u.i.ACTIVITY_ENDED || e.eventType === u.i.USER_LEFT) && t.push(m(e.channelId)),
                t
            );
        },
        function (e) {
            return String(Number.MAX_SAFE_INTEGER - e.timestamp).padStart(15);
        },
    ),
    _ = new Map();
function f(e, t) {
    let n = p(t.userId, e);
    g.set(n, { ...t, eventType: u.i.USER_JOINED, channelId: e, key: n });
}
function x(e) {
    return null != g.values(e, !0);
}
function C(e) {
    let t = r.A.getChannel(e),
        n = t?.getGuildId();
    if (null == n) return;
    let i = Object.values(c.A.getVoiceStatesForChannel(e)).map((e) => e.userId);
    if (0 === i.length || i.length > 50) {
        let t = _.get(e);
        null != t && t.size > 0 && ((0, a.NE)(n, Array.from(t)), _.delete(e));
        return;
    }
    let s = _.get(e) ?? new Set(),
        l = new Set(i),
        o = Array.from(s).filter((e) => !l.has(e));
    o.length > 0 && (0, a.NE)(n, o);
    let d = Array.from(l).filter((e) => !s.has(e));
    d.length > 0 && (0, a.un)(n, d), _.set(e, l);
}
function E(e) {
    if (!x(e)) return;
    let t = r.A.getChannel(e),
        n = t?.getGuildId(),
        i = _.get(e);
    if (null != n && null != i && i.size > 0) {
        let e = Array.from(i);
        l.h.wait(() => (0, a.NE)(n, e));
    }
    for (let t of (_.delete(e), g.values(e, !0))) g.delete(t.key);
}
class I extends i.Ay.Store {
    initialize() {
        this.waitFor(r.A, o.A, c.A);
    }
    __getLocalVars = () => ({ eventsMap: g });
    getHistory(e) {
        return g.values(m(e));
    }
    getHistoryVersion() {
        return g.version;
    }
}
function N(e) {
    return x(e);
}
let S = new I(l.h, {
    VOICE_STATE_UPDATES: function (e) {
        let t = !1,
            n = new Set();
        return (
            e.voiceStates.forEach((e) => {
                let { userId: i, oldChannelId: s, channelId: l } = e;
                if (null != s && null != g.values(s, !0)) {
                    let e,
                        l,
                        a = { userId: i, timestamp: Date.now(), eventType: u.i.USER_LEFT };
                    (e = p(a.userId, s)),
                        (l = g.get(e)),
                        g.set(e, {
                            ...a,
                            channelId: s,
                            timestamp: Date.now(),
                            durationSeconds: Math.floor((Date.now() - (l?.timestamp ?? 0)) / 1e3),
                            eventType: u.i.USER_LEFT,
                            key: e,
                        }),
                        n.add(s),
                        0 === Object.values(c.A.getVoiceStatesForChannel(s)).map((e) => e.userId).length && E(s),
                        (t = !0);
                }
                null != l &&
                    x(l) &&
                    (f(l, { userId: i, timestamp: Date.now(), eventType: u.i.USER_JOINED }), n.add(l), (t = !0));
            }),
            n.size > 0 &&
                l.h.wait(() => {
                    n.forEach((e) => C(e));
                }),
            t
        );
    },
    PRESENCE_UPDATES: function (e) {
        let t = !1;
        return (
            e.updates.forEach((e) => {
                let { user: n, activities: i } = e,
                    s = n.id,
                    l = c.A.getVoiceStateForUser(s),
                    a = l?.channelId;
                if (null != a && x(a)) {
                    for (let e of g.values(a, !0))
                        e.userId !== s ||
                            e.eventType !== u.i.ACTIVITY_STARTED ||
                            i.some((t) => t.application_id === e.applicationId || t.name === e.applicationName) ||
                            (!(function (e) {
                                let t = Date.now() - e.timestamp;
                                null != (e.applicationId ?? e.applicationName) &&
                                    t >= h &&
                                    g.set(e.key, {
                                        ...e,
                                        timestamp: Date.now(),
                                        eventType: u.i.ACTIVITY_ENDED,
                                        durationSeconds: Math.floor(t / 1e3),
                                    });
                            })(e),
                            (t = !0));
                    i?.forEach((e) => {
                        if (0 !== e.type) return;
                        let n = e.application_id,
                            i = e.name,
                            l = n ?? i;
                        if (null != l && g.get(A(s, a, l))?.eventType !== u.i.ACTIVITY_STARTED) {
                            let e = {
                                    userId: s,
                                    timestamp: Date.now(),
                                    eventType: u.i.ACTIVITY_STARTED,
                                    applicationId: n ?? void 0,
                                    applicationName: i,
                                    activityType: "PLAYED_GAME",
                                },
                                l = e.applicationId ?? e.applicationName;
                            if (null != l && e.eventType === u.i.ACTIVITY_STARTED) {
                                let t = A(e.userId, a, l),
                                    n = { ...e, channelId: a, key: t };
                                g.set(t, n);
                            }
                            t = !0;
                        }
                    });
                }
            }),
            t
        );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return !!x(t.id) && (E(t.id), !0);
    },
    VOICE_CHANNEL_HISTORY_START_TRACKING: function (e) {
        let { channelId: t } = e;
        if (!x(t))
            return (
                x(t) ||
                    (Object.values(c.A.getVoiceStatesForChannel(t)).forEach((e) => {
                        f(t, { userId: e.userId, timestamp: Date.now(), eventType: u.i.USER_JOINED });
                    }),
                    C(t)),
                !0
            );
        return !1;
    },
    VOICE_CHANNEL_HISTORY_STOP_TRACKING: function (e) {
        let { channelId: t } = e;
        return !!x(t) && (E(t), !0);
    },
});
