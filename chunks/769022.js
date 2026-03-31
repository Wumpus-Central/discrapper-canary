n.d(t, { A: () => T });
var i = n(311907),
    l = n(713402),
    s = n(73153),
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
function _(e) {
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
function m(e) {
    return -e.timestamp;
}
let g = new Map(),
    p = new Map(),
    f = new Map(),
    x = [];
function E(e) {
    let t = g.get(e),
        n = t?.values(A).find((e) => e.eventType === d.i.USER_LEFT);
    null != n ? f.set(e, n.userId) : f.delete(e);
}
function I(e, t) {
    let n = h(t),
        i = g.get(e);
    return null != i && (i.set(n, { userId: t, timestamp: Date.now(), eventType: d.i.USER_JOINED, key: n }), !0);
}
function C(e, t, n) {
    let i = h(t),
        l = g.get(e);
    if (null == l) return !1;
    let s = l.get(i);
    if (null == s) return null != n && (l.set(i, { userId: t, key: i, eventType: d.i.USER_LEFT, timestamp: n }), !0);
    if (null != n && (s.eventType === d.i.USER_JOINED || s.timestamp >= n)) return !1;
    let a = n ?? Date.now();
    return l.set(i, { userId: t, key: i, eventType: d.i.USER_LEFT, timestamp: a }), !0;
}
class N extends i.Ay.Store {
    initialize() {
        this.waitFor(r.A, o.A, a.A, c.A);
    }
    __getLocalVars = () => ({ channelEventMaps: g, lastLeftUserIds: f });
    getLastLeftUserId(e) {
        return f.get(e);
    }
    getHistory(e) {
        return g.get(e)?.values(A) ?? x;
    }
    getHistoryVersion(e) {
        return g.get(e)?.version ?? 0;
    }
    getHistoryExists(e) {
        return g.has(e);
    }
    getLastFetchTime(e) {
        return p.get(e);
    }
}
let T = new N(s.h, {
    VOICE_STATE_UPDATES: function (e) {
        let t = !1,
            n = new Set(),
            i = e.voiceStates.filter((e) => null != e.oldChannelId && g.has(e.oldChannelId)),
            l = e.voiceStates.filter((e) => null != e.channelId && g.has(e.channelId));
        return (
            new Set(i.map((e) => e.oldChannelId).filter((e) => null != e)).forEach((e) => {
                var t;
                let n;
                0 === Object.keys(c.A.getVoiceStatesForChannel(e)).length &&
                    ((t = e), null != (n = g.get(t)) && n.clear(), f.delete(t));
            }),
            i.forEach((e) => {
                let { userId: i, oldChannelId: l } = e,
                    s = null != l ? g.get(l) : null;
                null != l && null != s && s.values().length > 0 && C(l, i) && ((t = !0), n.add(l));
            }),
            l.forEach((e) => {
                let { userId: i, channelId: l } = e;
                !o.A.isBlockedOrIgnored(i) && null != l && g.has(l) && I(l, i) && ((t = !0), n.add(l));
            }),
            n.forEach(E),
            t
        );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return !!g.has(t.id) && (g.delete(t.id), p.delete(t.id), f.delete(t.id), !0);
    },
    VOICE_CHANNEL_HISTORY_START_TRACKING: function (e) {
        let { channelId: t } = e;
        if (!g.has(t))
            return (
                g.has(t) ||
                    (g.set(t, new l.J(_, m)),
                    Object.values(c.A.getVoiceStatesForChannel(t)).forEach((e) => {
                        I(t, e.userId);
                    })),
                !0
            );
        return !1;
    },
    VOICE_CHANNEL_HISTORY_FETCH_COMPLETE: function (e) {
        let { channelId: t, voiceLeaves: n, activities: i } = e,
            l = g.get(t);
        if (null == l) return !1;
        let s = !1;
        for (let { userId: e, leftAt: i } of n) s = C(t, e, i) || s;
        let a = new Set(
            i.map((e) => {
                let { userId: t, applicationId: n, applicationName: i } = e;
                return u(t, n ?? i);
            }),
        );
        for (let e of l.values(A)) e.eventType !== d.i.ACTIVITY_ENDED || a.has(e.key) || (s = l.delete(e.key) || s);
        for (let { userId: e, applicationId: n, applicationName: l, endedAt: a } of i)
            s =
                (function (e, t, n, i, l) {
                    let s = n ?? i;
                    if (null == s) return !1;
                    let a = g.get(e);
                    if (null == a) return !1;
                    let r = u(t, s);
                    return (
                        a.set(r, {
                            userId: t,
                            key: r,
                            timestamp: l,
                            applicationId: n,
                            applicationName: i,
                            activityType: "PLAYED_GAME",
                            eventType: d.i.ACTIVITY_ENDED,
                        }),
                        !0
                    );
                })(t, e, n, l, a) || s;
        return s && E(t), s;
    },
    VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME: function (e) {
        let { channelId: t, timestamp: n } = e;
        p.set(t, n);
    },
});
