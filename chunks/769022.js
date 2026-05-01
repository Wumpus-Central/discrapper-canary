n.d(t, { A: () => v });
var i = n(17928),
    l = n(713402),
    a = n(228366),
    r = n(725613),
    s = n(734057),
    o = n(994500),
    d = n(287809),
    u = n(977997),
    c = n(898926);
function h(e, t) {
    return `voice-activity-${e}-${t}`;
}
function E(e) {
    return `voice-user-${e}`;
}
let A = "past";
function _(e) {
    switch (e.eventType) {
        case c.i.USER_JOINED:
            return ["present-user", e.userId];
        case c.i.USER_LEFT:
            return [A, e.userId];
        case c.i.ACTIVITY_STARTED:
            return ["present-activity", e.userId];
        case c.i.ACTIVITY_ENDED:
            return [A, e.userId];
        default:
            return [];
    }
}
function p(e) {
    return -e.timestamp;
}
let g = new Map(),
    f = new Map(),
    I = new Map(),
    S = new Map(),
    T = [];
function m(e) {
    let t = g.get(e);
    if (null == t) return;
    let n = t.values(A, !0);
    if (!(n.length <= 100)) for (let e of n.slice(100)) t.delete(e.key);
}
function C(e) {
    let t = g.get(e),
        n = I.get(e),
        i = t?.values(A).find((e) => e.eventType === c.i.USER_LEFT && !o.A.isBlockedOrIgnored(e.userId));
    if (null != i) {
        if ((I.set(e, i.userId), n !== i.userId)) return !0;
    } else if ((I.delete(e), null != n)) return !0;
    return !1;
}
function O(e) {
    let t = g.get(e)?.values(A) ?? [],
        n = S.get(e) ?? T,
        i = t.filter((e) => !o.A.isBlockedOrIgnored(e.userId));
    return S.set(e, i.length > 0 ? i : T), i.length !== n.length;
}
function N(e, t) {
    let n = E(t),
        i = g.get(e);
    return null != i && (i.set(n, { userId: t, timestamp: Date.now(), eventType: c.i.USER_JOINED, key: n }), !0);
}
function y(e, t, n) {
    let i = E(t),
        l = g.get(e);
    if (null == l) return !1;
    let a = l.get(i);
    if (null == a)
        return null != n && (l.set(i, { userId: t, key: i, eventType: c.i.USER_LEFT, timestamp: n }), m(e), !0);
    if (null != n && (a.eventType === c.i.USER_JOINED || a.timestamp >= n)) return !1;
    let r = n ?? Date.now();
    return l.set(i, { userId: t, key: i, eventType: c.i.USER_LEFT, timestamp: r }), m(e), !0;
}
function R() {
    let e = (function () {
        let e = !1;
        for (let t of g.keys()) e = C(t) || e;
        return e;
    })();
    return (
        (function () {
            let e = !1;
            for (let t of g.keys()) e = O(t) || e;
            return e;
        })() || e
    );
}
class L extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A, r.A, u.A, o.A, d.default);
    }
    __getLocalVars = () => ({ channelEventMaps: g, lastLeftUserIds: I });
    getLastLeftUserId(e) {
        return I.get(e);
    }
    getHistory(e) {
        return S.get(e) ?? T;
    }
    getHistoryVersion(e) {
        return g.get(e)?.version ?? 0;
    }
    getHistoryExists(e) {
        return g.has(e);
    }
    getLastFetchTime(e) {
        return f.get(e);
    }
}
let v = new L(a.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let t = d.default.getCurrentUser()?.id,
            { channelId: n, currentVoiceChannelId: i } = e;
        if (null == t || null == i || n === i) return !1;
        let l = y(i, t);
        return l && (C(i), O(i)), l;
    },
    VOICE_STATE_UPDATES: function (e) {
        let t = !1,
            n = new Set(),
            i = e.voiceStates.filter((e) => null != e.oldChannelId && g.has(e.oldChannelId)),
            l = e.voiceStates.filter((e) => null != e.channelId && g.has(e.channelId));
        return (
            new Set(i.map((e) => e.oldChannelId).filter((e) => null != e)).forEach((e) => {
                var t;
                let n;
                0 === Object.keys(u.A.getVoiceStatesForChannel(e)).length &&
                    ((t = e), null != (n = g.get(t)) && n.clear(), I.delete(t), S.delete(t));
            }),
            i.forEach((e) => {
                let { userId: i, oldChannelId: l } = e,
                    a = null != l ? g.get(l) : null;
                null != l && null != a && a.values().length > 0 && y(l, i) && ((t = !0), n.add(l));
            }),
            l.forEach((e) => {
                let { userId: i, channelId: l } = e;
                null != l && g.has(l) && N(l, i) && ((t = !0), n.add(l));
            }),
            n.forEach(C),
            n.forEach(O),
            t
        );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return !!g.has(t.id) && (g.delete(t.id), f.delete(t.id), I.delete(t.id), S.delete(t.id), !0);
    },
    VOICE_CHANNEL_HISTORY_START_TRACKING: function (e) {
        let { channelId: t } = e;
        if (!g.has(t))
            return (
                g.has(t) ||
                    (g.set(t, new l.J(_, p)),
                    Object.values(u.A.getVoiceStatesForChannel(t)).forEach((e) => {
                        N(t, e.userId);
                    })),
                !0
            );
        return !1;
    },
    VOICE_CHANNEL_HISTORY_FETCH_COMPLETE: function (e) {
        let { channelId: t, voiceLeaves: n, activities: i } = e,
            l = g.get(t);
        if (null == l) return !1;
        let a = !1;
        for (let { userId: e, leftAt: i } of n) a = y(t, e, i) || a;
        let r = new Set(
            i.map((e) => {
                let { userId: t, applicationId: n, applicationName: i } = e;
                return h(t, n ?? i);
            }),
        );
        for (let e of l.values(A)) e.eventType !== c.i.ACTIVITY_ENDED || r.has(e.key) || (a = l.delete(e.key) || a);
        for (let { userId: e, applicationId: n, applicationName: l, endedAt: r } of i)
            a =
                (function (e, t, n, i, l) {
                    let a = n ?? i;
                    if (null == a) return !1;
                    let r = g.get(e);
                    if (null == r) return !1;
                    let s = h(t, a);
                    return (
                        r.set(s, {
                            userId: t,
                            key: s,
                            timestamp: l,
                            applicationId: n,
                            applicationName: i,
                            activityType: "PLAYED_GAME",
                            eventType: c.i.ACTIVITY_ENDED,
                        }),
                        m(e),
                        !0
                    );
                })(t, e, n, l, r) || a;
        return a && (C(t), O(t)), a;
    },
    VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME: function (e) {
        let { channelId: t, timestamp: n } = e;
        f.set(t, n);
    },
    CONNECTION_OPEN: function () {
        return 0 !== g.size && (g.clear(), f.clear(), I.clear(), S.clear(), !0);
    },
    RELATIONSHIP_UPDATE: R,
    RELATIONSHIP_ADD: R,
    RELATIONSHIP_REMOVE: R,
    LOAD_RELATIONSHIPS_SUCCESS: R,
});
