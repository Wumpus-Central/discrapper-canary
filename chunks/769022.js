"use strict";
n.d(t, { A: () => b });
var i = n(311907),
    s = n(713402),
    l = n(73153),
    a = n(725613),
    r = n(734057),
    o = n(994500),
    c = n(977997),
    d = n(898926);
function u(e, t) {
    return `voice-activity-${e}-${t}`;
}
function h(e) {
    return `voice-user-${e}`;
}
let A = "past";
function m(e) {
    switch (e.eventType) {
        case d.i.USER_JOINED:
            return ["present-user", e.userId];
        case d.i.USER_LEFT:
            return [A, e.userId];
        case d.i.ACTIVITY_STARTED:
            return ["present-activity", e.userId];
        case d.i.ACTIVITY_ENDED:
            return [A, e.userId];
        default:
            return [];
    }
}
function _(e) {
    return -e.timestamp;
}
let p = new Map(),
    g = new Map(),
    f = new Map(),
    x = [];
function E(e) {
    let t = p.get(e),
        n = t?.values(A).find((e) => e.eventType === d.i.USER_LEFT);
    null != n ? f.set(e, n.userId) : f.delete(e);
}
function C(e, t) {
    let n = h(t),
        i = p.get(e);
    return null != i && (i.set(n, { userId: t, timestamp: Date.now(), eventType: d.i.USER_JOINED, key: n }), !0);
}
function I(e, t, n) {
    let i = h(t),
        s = p.get(e);
    if (null == s) return !1;
    let l = s.get(i);
    if (null == l) return null != n && (s.set(i, { userId: t, key: i, eventType: d.i.USER_LEFT, timestamp: n }), !0);
    if (null != n && (l.eventType === d.i.USER_JOINED || l.timestamp >= n)) return !1;
    let a = n ?? Date.now();
    return s.set(i, { userId: t, key: i, eventType: d.i.USER_LEFT, timestamp: a }), !0;
}
class N extends i.Ay.Store {
    initialize() {
        this.waitFor(r.A, o.A, a.A, c.A);
    }
    __getLocalVars = () => ({ channelEventMaps: p, lastLeftUserIds: f });
    getLastLeftUserId(e) {
        return f.get(e);
    }
    getHistory(e) {
        return p.get(e)?.values(A) ?? x;
    }
    getHistoryVersion(e) {
        return p.get(e)?.version ?? 0;
    }
    getHistoryExists(e) {
        return p.has(e);
    }
    getLastFetchTime(e) {
        return g.get(e);
    }
}
let b = new N(l.h, {
    VOICE_STATE_UPDATES: function (e) {
        let t = !1,
            n = new Set(),
            i = e.voiceStates.filter((e) => null != e.oldChannelId && p.has(e.oldChannelId)),
            s = e.voiceStates.filter((e) => null != e.channelId && p.has(e.channelId));
        return (
            new Set(i.map((e) => e.oldChannelId).filter((e) => null != e)).forEach((e) => {
                var t;
                let n;
                0 === Object.keys(c.A.getVoiceStatesForChannel(e)).length &&
                    ((t = e), null != (n = p.get(t)) && n.clear(), f.delete(t));
            }),
            i.forEach((e) => {
                let { userId: i, oldChannelId: s } = e,
                    l = null != s ? p.get(s) : null;
                null != s && null != l && l.values().length > 0 && I(s, i) && ((t = !0), n.add(s));
            }),
            s.forEach((e) => {
                let { userId: i, channelId: s } = e;
                !o.A.isBlockedOrIgnored(i) && null != s && p.has(s) && C(s, i) && ((t = !0), n.add(s));
            }),
            n.forEach(E),
            t
        );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return !!p.has(t.id) && (p.delete(t.id), g.delete(t.id), f.delete(t.id), !0);
    },
    VOICE_CHANNEL_HISTORY_START_TRACKING: function (e) {
        let { channelId: t } = e;
        if (!p.has(t))
            return (
                p.has(t) ||
                    (p.set(t, new s.J(m, _)),
                    Object.values(c.A.getVoiceStatesForChannel(t)).forEach((e) => {
                        C(t, e.userId);
                    })),
                !0
            );
        return !1;
    },
    VOICE_CHANNEL_HISTORY_FETCH_COMPLETE: function (e) {
        let { channelId: t, voiceLeaves: n, activities: i } = e,
            s = p.get(t);
        if (null == s) return !1;
        let l = !1;
        for (let { userId: e, leftAt: i } of n) l = I(t, e, i) || l;
        let a = new Set(
            i.map((e) => {
                let { userId: t, applicationId: n, applicationName: i } = e;
                return u(t, n ?? i);
            }),
        );
        for (let e of s.values(A)) e.eventType !== d.i.ACTIVITY_ENDED || a.has(e.key) || (l = s.delete(e.key) || l);
        for (let { userId: e, applicationId: n, applicationName: s, endedAt: a } of i)
            l =
                (function (e, t, n, i, s) {
                    let l = n ?? i;
                    if (null == l) return !1;
                    let a = p.get(e);
                    if (null == a) return !1;
                    let r = u(t, l);
                    return (
                        a.set(r, {
                            userId: t,
                            key: r,
                            timestamp: s,
                            applicationId: n,
                            applicationName: i,
                            activityType: "PLAYED_GAME",
                            eventType: d.i.ACTIVITY_ENDED,
                        }),
                        !0
                    );
                })(t, e, n, s, a) || l;
        return l && E(t), l;
    },
    VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME: function (e) {
        let { channelId: t, timestamp: n } = e;
        g.set(t, n);
    },
});
