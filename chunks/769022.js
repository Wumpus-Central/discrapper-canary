l.d(t, { A: () => O });
var n = l(17928),
    s = l(713402),
    i = l(228366),
    a = l(725613),
    r = l(734057),
    u = l(994500),
    d = l(287809),
    c = l(977997),
    o = l(898926);
function f(e, t) {
    return `voice-activity-${e}-${t}`;
}
function h(e) {
    return `voice-user-${e}`;
}
let v = "past";
function E(e) {
    switch (e.eventType) {
        case o.i.USER_JOINED:
            return ["present-user", e.userId];
        case o.i.USER_LEFT:
            return [v, e.userId];
        case o.i.ACTIVITY_STARTED:
            return ["present-activity", e.userId];
        case o.i.ACTIVITY_ENDED:
            return [v, e.userId];
        default:
            return [];
    }
}
function m(e) {
    return -e.timestamp;
}
let A = new Map(),
    I = new Map(),
    g = new Map(),
    _ = new Map(),
    N = [];
function T(e) {
    let t = A.get(e);
    if (null == t) return;
    let l = t.values(v, !0);
    if (!(l.length <= 100)) for (let e of l.slice(100)) t.delete(e.key);
}
function p(e) {
    let t = A.get(e),
        l = g.get(e),
        n = t?.values(v).find((e) => e.eventType === o.i.USER_LEFT && !u.A.isBlockedOrIgnored(e.userId));
    if (null != n) {
        if ((g.set(e, n.userId), l !== n.userId)) return !0;
    } else if ((g.delete(e), null != l)) return !0;
    return !1;
}
function x(e) {
    let t = A.get(e)?.values(v) ?? [],
        l = _.get(e) ?? N,
        n = t.filter((e) => !u.A.isBlockedOrIgnored(e.userId));
    return _.set(e, n.length > 0 ? n : N), n.length !== l.length;
}
function S(e, t) {
    let l = h(t),
        n = A.get(e);
    return null != n && (n.set(l, { userId: t, timestamp: Date.now(), eventType: o.i.USER_JOINED, key: l }), !0);
}
function C(e, t, l) {
    let n = h(t),
        s = A.get(e);
    if (null == s) return !1;
    let i = s.get(n);
    if (null == i)
        return null != l && (s.set(n, { userId: t, key: n, eventType: o.i.USER_LEFT, timestamp: l }), T(e), !0);
    if (null != l && (i.eventType === o.i.USER_JOINED || i.timestamp >= l)) return !1;
    let a = l ?? Date.now();
    return s.set(n, { userId: t, key: n, eventType: o.i.USER_LEFT, timestamp: a }), T(e), !0;
}
function j() {
    let e = (function () {
        let e = !1;
        for (let t of A.keys()) e = p(t) || e;
        return e;
    })();
    return (
        (function () {
            let e = !1;
            for (let t of A.keys()) e = x(t) || e;
            return e;
        })() || e
    );
}
class y extends n.Ay.Store {
    initialize() {
        this.waitFor(r.A, a.A, c.A, u.A, d.default);
    }
    __getLocalVars = () => ({ channelEventMaps: A, lastLeftUserIds: g });
    getLastLeftUserId(e) {
        return g.get(e);
    }
    getHistory(e) {
        return _.get(e) ?? N;
    }
    getHistoryVersion(e) {
        return A.get(e)?.version ?? 0;
    }
    getHistoryExists(e) {
        return A.has(e);
    }
    getLastFetchTime(e) {
        return I.get(e);
    }
}
let O = new y(i.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let t = d.default.getCurrentUser()?.id,
            { channelId: l, currentVoiceChannelId: n } = e;
        if (null == t || null == n || l === n) return !1;
        let s = C(n, t);
        return s && (p(n), x(n)), s;
    },
    VOICE_STATE_UPDATES: function (e) {
        let t = !1,
            l = new Set(),
            n = e.voiceStates.filter((e) => null != e.oldChannelId && A.has(e.oldChannelId)),
            s = e.voiceStates.filter((e) => null != e.channelId && A.has(e.channelId));
        return (
            new Set(n.map((e) => e.oldChannelId).filter((e) => null != e)).forEach((e) => {
                var t;
                let l;
                0 === Object.keys(c.A.getVoiceStatesForChannel(e)).length &&
                    ((t = e), null != (l = A.get(t)) && l.clear(), g.delete(t), _.delete(t));
            }),
            n.forEach((e) => {
                let { userId: n, oldChannelId: s } = e,
                    i = null != s ? A.get(s) : null;
                null != s && null != i && i.values().length > 0 && C(s, n) && ((t = !0), l.add(s));
            }),
            s.forEach((e) => {
                let { userId: n, channelId: s } = e;
                null != s && A.has(s) && S(s, n) && ((t = !0), l.add(s));
            }),
            l.forEach(p),
            l.forEach(x),
            t
        );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return !!A.has(t.id) && (A.delete(t.id), I.delete(t.id), g.delete(t.id), _.delete(t.id), !0);
    },
    VOICE_CHANNEL_HISTORY_START_TRACKING: function (e) {
        let { channelId: t } = e;
        if (!A.has(t))
            return (
                A.has(t) ||
                    (A.set(t, new s.J(E, m)),
                    Object.values(c.A.getVoiceStatesForChannel(t)).forEach((e) => {
                        S(t, e.userId);
                    })),
                !0
            );
        return !1;
    },
    VOICE_CHANNEL_HISTORY_FETCH_COMPLETE: function (e) {
        let { channelId: t, voiceLeaves: l, activities: n } = e,
            s = A.get(t);
        if (null == s) return !1;
        let i = !1;
        for (let { userId: e, leftAt: n } of l) i = C(t, e, n) || i;
        let a = new Set(
            n.map((e) => {
                let { userId: t, applicationId: l, applicationName: n } = e;
                return f(t, l ?? n);
            }),
        );
        for (let e of s.values(v)) e.eventType !== o.i.ACTIVITY_ENDED || a.has(e.key) || (i = s.delete(e.key) || i);
        for (let { userId: e, applicationId: l, applicationName: s, endedAt: a } of n)
            i =
                (function (e, t, l, n, s) {
                    let i = l ?? n;
                    if (null == i) return !1;
                    let a = A.get(e);
                    if (null == a) return !1;
                    let r = f(t, i);
                    return (
                        a.set(r, {
                            userId: t,
                            key: r,
                            timestamp: s,
                            applicationId: l,
                            applicationName: n,
                            activityType: "PLAYED_GAME",
                            eventType: o.i.ACTIVITY_ENDED,
                        }),
                        T(e),
                        !0
                    );
                })(t, e, l, s, a) || i;
        return i && (p(t), x(t)), i;
    },
    VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME: function (e) {
        let { channelId: t, timestamp: l } = e;
        I.set(t, l);
    },
    CONNECTION_OPEN: function () {
        return 0 !== A.size && (A.clear(), I.clear(), g.clear(), _.clear(), !0);
    },
    RELATIONSHIP_UPDATE: j,
    RELATIONSHIP_ADD: j,
    RELATIONSHIP_REMOVE: j,
    LOAD_RELATIONSHIPS_SUCCESS: j,
});
