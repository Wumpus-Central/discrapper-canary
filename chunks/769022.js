"use strict";
n.d(t, { A: () => b });
var i = n(17928),
    r = n(713402),
    s = n(228366),
    a = n(725613),
    o = n(734057),
    l = n(994500),
    u = n(287809),
    c = n(977997),
    d = n(898926);
function _(e, t) {
    return `voice-activity-${e}-${t}`;
}
function f(e) {
    return `voice-user-${e}`;
}
let h = "past";
function p(e) {
    switch (e.eventType) {
        case d.i.USER_JOINED:
            return ["present-user", e.userId];
        case d.i.USER_LEFT:
            return [h, e.userId];
        case d.i.ACTIVITY_STARTED:
            return ["present-activity", e.userId];
        case d.i.ACTIVITY_ENDED:
            return [h, e.userId];
        default:
            return [];
    }
}
function E(e) {
    return -e.timestamp;
}
let m = new Map(),
    g = new Map(),
    A = new Map(),
    I = new Map(),
    T = [];
function S(e) {
    let t = m.get(e);
    if (null == t) return;
    let n = t.values(h, !0);
    if (!(n.length <= 100)) for (let e of n.slice(100)) t.delete(e.key);
}
function N(e) {
    let t = m.get(e),
        n = A.get(e),
        i = t?.values(h).find((e) => e.eventType === d.i.USER_LEFT && !l.A.isBlockedOrIgnored(e.userId));
    if (null != i) {
        if ((A.set(e, i.userId), n !== i.userId)) return !0;
    } else if ((A.delete(e), null != n)) return !0;
    return !1;
}
function y(e) {
    let t = m.get(e)?.values(h) ?? [],
        n = I.get(e) ?? T,
        i = t.filter((e) => !l.A.isBlockedOrIgnored(e.userId));
    return I.set(e, i.length > 0 ? i : T), i.length !== n.length;
}
function C(e, t) {
    let n = f(t),
        i = m.get(e);
    return null != i && (i.set(n, { userId: t, timestamp: Date.now(), eventType: d.i.USER_JOINED, key: n }), !0);
}
function v(e, t, n) {
    let i = f(t),
        r = m.get(e);
    if (null == r) return !1;
    let s = r.get(i);
    if (null == s)
        return null != n && (r.set(i, { userId: t, key: i, eventType: d.i.USER_LEFT, timestamp: n }), S(e), !0);
    if (null != n && (s.eventType === d.i.USER_JOINED || s.timestamp >= n)) return !1;
    let a = n ?? Date.now();
    return r.set(i, { userId: t, key: i, eventType: d.i.USER_LEFT, timestamp: a }), S(e), !0;
}
function O() {
    let e = (function () {
        let e = !1;
        for (let t of m.keys()) e = N(t) || e;
        return e;
    })();
    return (
        (function () {
            let e = !1;
            for (let t of m.keys()) e = y(t) || e;
            return e;
        })() || e
    );
}
class R extends i.Ay.Store {
    initialize() {
        this.waitFor(o.A, a.A, c.A, l.A, u.default);
    }
    __getLocalVars = () => ({ channelEventMaps: m, lastLeftUserIds: A });
    getLastLeftUserId(e) {
        return A.get(e);
    }
    getHistory(e) {
        return I.get(e) ?? T;
    }
    getHistoryVersion(e) {
        return m.get(e)?.version ?? 0;
    }
    getHistoryExists(e) {
        return m.has(e);
    }
    getLastFetchTime(e) {
        return g.get(e);
    }
}
let b = new R(s.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let t = u.default.getCurrentUser()?.id,
            { channelId: n, currentVoiceChannelId: i } = e;
        if (null == t || null == i || n === i) return !1;
        let r = v(i, t);
        return r && (N(i), y(i)), r;
    },
    VOICE_STATE_UPDATES: function (e) {
        let t = !1,
            n = new Set(),
            i = e.voiceStates.filter((e) => null != e.oldChannelId && m.has(e.oldChannelId)),
            r = e.voiceStates.filter((e) => null != e.channelId && m.has(e.channelId));
        return (
            new Set(i.map((e) => e.oldChannelId).filter((e) => null != e)).forEach((e) => {
                var t;
                let n;
                0 === Object.keys(c.A.getVoiceStatesForChannel(e)).length &&
                    ((t = e), null != (n = m.get(t)) && n.clear(), A.delete(t), I.delete(t));
            }),
            i.forEach((e) => {
                let { userId: i, oldChannelId: r } = e,
                    s = null != r ? m.get(r) : null;
                null != r && null != s && s.values().length > 0 && v(r, i) && ((t = !0), n.add(r));
            }),
            r.forEach((e) => {
                let { userId: i, channelId: r } = e;
                null != r && m.has(r) && C(r, i) && ((t = !0), n.add(r));
            }),
            n.forEach(N),
            n.forEach(y),
            t
        );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return !!m.has(t.id) && (m.delete(t.id), g.delete(t.id), A.delete(t.id), I.delete(t.id), !0);
    },
    VOICE_CHANNEL_HISTORY_START_TRACKING: function (e) {
        let { channelId: t } = e;
        if (!m.has(t))
            return (
                m.has(t) ||
                    (m.set(t, new r.J(p, E)),
                    Object.values(c.A.getVoiceStatesForChannel(t)).forEach((e) => {
                        C(t, e.userId);
                    })),
                !0
            );
        return !1;
    },
    VOICE_CHANNEL_HISTORY_FETCH_COMPLETE: function (e) {
        let { channelId: t, voiceLeaves: n, activities: i } = e,
            r = m.get(t);
        if (null == r) return !1;
        let s = !1;
        for (let { userId: e, leftAt: i } of n) s = v(t, e, i) || s;
        let a = new Set(
            i.map((e) => {
                let { userId: t, applicationId: n, applicationName: i } = e;
                return _(t, n ?? i);
            }),
        );
        for (let e of r.values(h)) e.eventType !== d.i.ACTIVITY_ENDED || a.has(e.key) || (s = r.delete(e.key) || s);
        for (let { userId: e, applicationId: n, applicationName: r, endedAt: a } of i)
            s =
                (function (e, t, n, i, r) {
                    let s = n ?? i;
                    if (null == s) return !1;
                    let a = m.get(e);
                    if (null == a) return !1;
                    let o = _(t, s);
                    return (
                        a.set(o, {
                            userId: t,
                            key: o,
                            timestamp: r,
                            applicationId: n,
                            applicationName: i,
                            activityType: "PLAYED_GAME",
                            eventType: d.i.ACTIVITY_ENDED,
                        }),
                        S(e),
                        !0
                    );
                })(t, e, n, r, a) || s;
        return s && (N(t), y(t)), s;
    },
    VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME: function (e) {
        let { channelId: t, timestamp: n } = e;
        g.set(t, n);
    },
    CONNECTION_OPEN: function () {
        return 0 !== m.size && (m.clear(), g.clear(), A.clear(), I.clear(), !0);
    },
    RELATIONSHIP_UPDATE: O,
    RELATIONSHIP_ADD: O,
    RELATIONSHIP_REMOVE: O,
    LOAD_RELATIONSHIPS_SUCCESS: O,
});
