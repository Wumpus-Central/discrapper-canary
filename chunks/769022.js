n.d(t, { A: () => y });
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
function g(e) {
    return -e.timestamp;
}
let p = new Map(),
    f = new Map(),
    x = new Map(),
    E = new Map(),
    I = [];
function C(e) {
    let t = p.get(e),
        n = x.get(e),
        i = t?.values(_).find((e) => e.eventType === u.i.USER_LEFT && !o.A.isBlockedOrIgnored(e.userId));
    if (null != i) {
        if ((x.set(e, i.userId), n !== i.userId)) return !0;
    } else if ((x.delete(e), null != n)) return !0;
    return !1;
}
function N(e) {
    let t = p.get(e)?.values(_) ?? [],
        n = E.get(e) ?? I,
        i = t.filter((e) => !o.A.isBlockedOrIgnored(e.userId));
    return E.set(e, i.length > 0 ? i : I), i.length !== n.length;
}
function T(e, t) {
    let n = A(t),
        i = p.get(e);
    return null != i && (i.set(n, { userId: t, timestamp: Date.now(), eventType: u.i.USER_JOINED, key: n }), !0);
}
function S(e, t, n) {
    let i = A(t),
        l = p.get(e);
    if (null == l) return !1;
    let s = l.get(i);
    if (null == s) return null != n && (l.set(i, { userId: t, key: i, eventType: u.i.USER_LEFT, timestamp: n }), !0);
    if (null != n && (s.eventType === u.i.USER_JOINED || s.timestamp >= n)) return !1;
    let a = n ?? Date.now();
    return l.set(i, { userId: t, key: i, eventType: u.i.USER_LEFT, timestamp: a }), !0;
}
function b() {
    let e = (function () {
        let e = !1;
        for (let t of p.keys()) e = C(t) || e;
        return e;
    })();
    return (
        (function () {
            let e = !1;
            for (let t of p.keys()) e = N(t) || e;
            return e;
        })() || e
    );
}
class v extends i.Ay.Store {
    initialize() {
        this.waitFor(r.A, a.A, c.A, o.A, d.default);
    }
    __getLocalVars = () => ({ channelEventMaps: p, lastLeftUserIds: x });
    getLastLeftUserId(e) {
        return x.get(e);
    }
    getHistory(e) {
        return E.get(e) ?? I;
    }
    getHistoryVersion(e) {
        return p.get(e)?.version ?? 0;
    }
    getHistoryExists(e) {
        return p.has(e);
    }
    getLastFetchTime(e) {
        return f.get(e);
    }
}
let y = new v(s.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let t = d.default.getCurrentUser()?.id,
            { channelId: n, currentVoiceChannelId: i } = e;
        if (null == t || null == i || n === i) return !1;
        let l = S(i, t);
        return l && (C(i), N(i)), l;
    },
    VOICE_STATE_UPDATES: function (e) {
        let t = !1,
            n = new Set(),
            i = e.voiceStates.filter((e) => null != e.oldChannelId && p.has(e.oldChannelId)),
            l = e.voiceStates.filter((e) => null != e.channelId && p.has(e.channelId));
        return (
            new Set(i.map((e) => e.oldChannelId).filter((e) => null != e)).forEach((e) => {
                var t;
                let n;
                0 === Object.keys(c.A.getVoiceStatesForChannel(e)).length &&
                    ((t = e), null != (n = p.get(t)) && n.clear(), x.delete(t), E.delete(t));
            }),
            i.forEach((e) => {
                let { userId: i, oldChannelId: l } = e,
                    s = null != l ? p.get(l) : null;
                null != l && null != s && s.values().length > 0 && S(l, i) && ((t = !0), n.add(l));
            }),
            l.forEach((e) => {
                let { userId: i, channelId: l } = e;
                null != l && p.has(l) && T(l, i) && ((t = !0), n.add(l));
            }),
            n.forEach(C),
            n.forEach(N),
            t
        );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return !!p.has(t.id) && (p.delete(t.id), f.delete(t.id), x.delete(t.id), E.delete(t.id), !0);
    },
    VOICE_CHANNEL_HISTORY_START_TRACKING: function (e) {
        let { channelId: t } = e;
        if (!p.has(t))
            return (
                p.has(t) ||
                    (p.set(t, new l.J(m, g)),
                    Object.values(c.A.getVoiceStatesForChannel(t)).forEach((e) => {
                        T(t, e.userId);
                    })),
                !0
            );
        return !1;
    },
    VOICE_CHANNEL_HISTORY_FETCH_COMPLETE: function (e) {
        let { channelId: t, voiceLeaves: n, activities: i } = e,
            l = p.get(t);
        if (null == l) return !1;
        let s = !1;
        for (let { userId: e, leftAt: i } of n) s = S(t, e, i) || s;
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
                    let a = p.get(e);
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
                        !0
                    );
                })(t, e, n, l, a) || s;
        return s && (C(t), N(t)), s;
    },
    VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME: function (e) {
        let { channelId: t, timestamp: n } = e;
        f.set(t, n);
    },
    CONNECTION_OPEN: function () {
        return 0 !== p.size && (p.clear(), f.clear(), x.clear(), E.clear(), !0);
    },
    RELATIONSHIP_UPDATE: b,
    RELATIONSHIP_ADD: b,
    RELATIONSHIP_REMOVE: b,
    LOAD_RELATIONSHIPS_SUCCESS: b,
});
