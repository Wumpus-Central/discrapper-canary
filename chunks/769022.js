n.d(t, { A: () => j });
var i = n(311907),
    l = n(713402),
    s = n(73153),
    a = n(725613),
    r = n(734057),
    o = n(994500),
    d = n(287809),
    c = n(977997),
    u = n(898926);
function h(e, t) {
    return `voice-activity-${e}-${t}`;
}
function A(e) {
    return `voice-user-${e}`;
}
let _ = "past";
function m(e) {
    switch (e.eventType) {
        case u.i.USER_JOINED:
            return ["present-user", e.userId];
        case u.i.USER_LEFT:
            return [_, e.userId];
        case u.i.ACTIVITY_STARTED:
            return ["present-activity", e.userId];
        case u.i.ACTIVITY_ENDED:
            return [_, e.userId];
        default:
            return [];
    }
}
function p(e) {
    return -e.timestamp;
}
let g = new Map(),
    f = new Map(),
    E = new Map(),
    x = new Map(),
    I = [];
function C(e) {
    let t = g.get(e);
    if (null == t) return;
    let n = t.values(_, !0);
    if (!(n.length <= 100)) for (let e of n.slice(100)) t.delete(e.key);
}
function N(e) {
    let t = g.get(e),
        n = E.get(e),
        i = t?.values(_).find((e) => e.eventType === u.i.USER_LEFT && !o.A.isBlockedOrIgnored(e.userId));
    if (null != i) {
        if ((E.set(e, i.userId), n !== i.userId)) return !0;
    } else if ((E.delete(e), null != n)) return !0;
    return !1;
}
function T(e) {
    let t = g.get(e)?.values(_) ?? [],
        n = x.get(e) ?? I,
        i = t.filter((e) => !o.A.isBlockedOrIgnored(e.userId));
    return x.set(e, i.length > 0 ? i : I), i.length !== n.length;
}
function S(e, t) {
    let n = A(t),
        i = g.get(e);
    return null != i && (i.set(n, { userId: t, timestamp: Date.now(), eventType: u.i.USER_JOINED, key: n }), !0);
}
function b(e, t, n) {
    let i = A(t),
        l = g.get(e);
    if (null == l) return !1;
    let s = l.get(i);
    if (null == s)
        return null != n && (l.set(i, { userId: t, key: i, eventType: u.i.USER_LEFT, timestamp: n }), C(e), !0);
    if (null != n && (s.eventType === u.i.USER_JOINED || s.timestamp >= n)) return !1;
    let a = n ?? Date.now();
    return l.set(i, { userId: t, key: i, eventType: u.i.USER_LEFT, timestamp: a }), C(e), !0;
}
function y() {
    let e = (function () {
        let e = !1;
        for (let t of g.keys()) e = N(t) || e;
        return e;
    })();
    return (
        (function () {
            let e = !1;
            for (let t of g.keys()) e = T(t) || e;
            return e;
        })() || e
    );
}
class v extends i.Ay.Store {
    initialize() {
        this.waitFor(r.A, a.A, c.A, o.A, d.default);
    }
    __getLocalVars = () => ({ channelEventMaps: g, lastLeftUserIds: E });
    getLastLeftUserId(e) {
        return E.get(e);
    }
    getHistory(e) {
        return x.get(e) ?? I;
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
let j = new v(s.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let t = d.default.getCurrentUser()?.id,
            { channelId: n, currentVoiceChannelId: i } = e;
        if (null == t || null == i || n === i) return !1;
        let l = b(i, t);
        return l && (N(i), T(i)), l;
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
                0 === Object.keys(c.A.getVoiceStatesForChannel(e)).length &&
                    ((t = e), null != (n = g.get(t)) && n.clear(), E.delete(t), x.delete(t));
            }),
            i.forEach((e) => {
                let { userId: i, oldChannelId: l } = e,
                    s = null != l ? g.get(l) : null;
                null != l && null != s && s.values().length > 0 && b(l, i) && ((t = !0), n.add(l));
            }),
            l.forEach((e) => {
                let { userId: i, channelId: l } = e;
                null != l && g.has(l) && S(l, i) && ((t = !0), n.add(l));
            }),
            n.forEach(N),
            n.forEach(T),
            t
        );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return !!g.has(t.id) && (g.delete(t.id), f.delete(t.id), E.delete(t.id), x.delete(t.id), !0);
    },
    VOICE_CHANNEL_HISTORY_START_TRACKING: function (e) {
        let { channelId: t } = e;
        if (!g.has(t))
            return (
                g.has(t) ||
                    (g.set(t, new l.J(m, p)),
                    Object.values(c.A.getVoiceStatesForChannel(t)).forEach((e) => {
                        S(t, e.userId);
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
        for (let { userId: e, leftAt: i } of n) s = b(t, e, i) || s;
        let a = new Set(
            i.map((e) => {
                let { userId: t, applicationId: n, applicationName: i } = e;
                return h(t, n ?? i);
            }),
        );
        for (let e of l.values(_)) e.eventType !== u.i.ACTIVITY_ENDED || a.has(e.key) || (s = l.delete(e.key) || s);
        for (let { userId: e, applicationId: n, applicationName: l, endedAt: a } of i)
            s =
                (function (e, t, n, i, l) {
                    let s = n ?? i;
                    if (null == s) return !1;
                    let a = g.get(e);
                    if (null == a) return !1;
                    let r = h(t, s);
                    return (
                        a.set(r, {
                            userId: t,
                            key: r,
                            timestamp: l,
                            applicationId: n,
                            applicationName: i,
                            activityType: "PLAYED_GAME",
                            eventType: u.i.ACTIVITY_ENDED,
                        }),
                        C(e),
                        !0
                    );
                })(t, e, n, l, a) || s;
        return s && (N(t), T(t)), s;
    },
    VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME: function (e) {
        let { channelId: t, timestamp: n } = e;
        f.set(t, n);
    },
    CONNECTION_OPEN: function () {
        return 0 !== g.size && (g.clear(), f.clear(), E.clear(), x.clear(), !0);
    },
    RELATIONSHIP_UPDATE: y,
    RELATIONSHIP_ADD: y,
    RELATIONSHIP_REMOVE: y,
    LOAD_RELATIONSHIPS_SUCCESS: y,
});
