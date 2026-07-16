"use strict";
n.d(t, { A: () => Q }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(323073),
    o = n(95701),
    d = n(734057),
    c = n(71393),
    u = n(568548),
    _ = n(309010),
    E = n(935208),
    A = n(970278),
    h = n(152007),
    I = n(927813);
function f(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * I.A.Millis.MINUTE;
    return (
        (function (e) {
            if (null == e.threadMetadata) return 0;
            let t = u.Ay.lastMessageId(e.id) ?? e.id;
            return Math.max(
                E.default.extractTimestamp(t),
                null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0,
            );
        })(e) + t
    );
}
var p = n(746080);
let T = {},
    m = {},
    g = {},
    S = {},
    N = {},
    C = {},
    R = null,
    O = {};
function L() {
    for (let e in ((T = {}), (N = {}), (m = {}), (g = {}), (S = {}), (R = _.Ay.getChannelId()), O)) clearTimeout(O[e]);
    (O = {}),
        A.A.forEachGuild((e) => {
            D(e);
        }),
        v();
}
function y(e) {
    for (let t in (delete T[e], delete N[e], delete m[e], delete g[e], delete S[e], D(e), g[e])) M(e, t);
}
function D(e) {
    let t = A.A.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            B(n);
            let e = d.A.getChannel(n);
            if (null == e) continue;
            let t = h.A.joinTimestamp(n);
            if (null != t) {
                let n = { channel: e, joinTimestamp: t.getTime() },
                    { isUnread: i, isRelevant: r, isTimedRelevant: a } = F(e);
                H(T, e, n, !1), H(N, e, r ? n : null, !1), H(m, e, i ? n : null, !1), a && V(e, !0);
            } else {
                H(g, e, e, !1);
                let t = u.Ay.isForumPostUnread(e.id);
                H(S, e, t ? e : null, !1);
            }
        }
}
function v() {
    for (let e in ((C = {}), g)) for (let t in g[e]) M(e, t);
}
function b(e) {
    let t = d.A.getBasicChannel(e);
    null != t && o.wE.has(t.type) && M(t.guild_id, t.id);
}
function M(e, t) {
    let n = d.A.getChannel(t);
    if (
        null == n ||
        !n.isForumLikeChannel() ||
        (null == C[e] && (C[e] = {}), (C[e][t] = 0), null == g[e] || null == g[e][t])
    )
        return;
    let i = c.A.getGuild(e);
    if (null == i) return;
    let r = u.Ay.getTrackedAckMessageId(t);
    if (null == r) {
        let e = Date.now();
        null != i.joinedAt &&
            (i.joinedAt instanceof Date
                ? (e = i.joinedAt.getTime())
                : "string" == typeof i.joinedAt && (e = new Date(i.joinedAt).getTime())),
            (r = E.default.fromTimestamp(e));
    }
    for (let n in g[e][t])
        t === R
            ? u.Ay.isNewForumThread(n, t, i) && C[e][t]++
            : E.default.compare(n, r) > 0 && !u.Ay.hasOpenedThread(n) && C[e][t]++;
}
function P(e, t, n) {
    if (null == t) return !1;
    let i = d.A.getChannel(n),
        r = h.A.joinTimestamp(n);
    if (null != i && A.A.isActive(e, t, n)) {
        if (null != r) {
            let e = { channel: i, joinTimestamp: r.getTime() },
                { isUnread: t, isRelevant: n, isTimedRelevant: a } = F(i);
            H(T, i, e, !0),
                H(N, i, n ? e : null, !0),
                H(m, i, t ? e : null, !0),
                H(g, i, null, !0),
                H(S, i, null, !0),
                V(i, a);
        } else {
            let e = u.Ay.isForumPostUnread(i.id);
            H(T, i, null, !0), H(m, i, null, !0), H(N, i, null, !0), H(g, i, i, !0), H(S, i, e ? i : null, !0), B(i.id);
        }
        M(e, t);
    } else j(T, e, t, n), j(N, e, t, n), j(m, e, t, n), j(g, e, t, n), j(S, e, t, n), B(n), M(e, t);
}
function U(e) {
    return P(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function w(e) {
    let t = d.A.getChannel(e.id);
    return null != t && !!A.A.isActive(e.guildId, t.parent_id, e.id) && P(t.guild_id, t.parent_id, t.id);
}
function G(e) {
    let t = d.A.getChannel(e.channelId);
    if (null == t) x();
    else {
        let { guild_id: e, parent_id: n } = t;
        if (!o.Le.has(t.type))
            if (Number(C[e]?.[t.id]) > 0) return M(e, t.id), !0;
            else return !1;
        if (null == n) return !1;
        if (W(T, t)) {
            let { isUnread: i, isRelevant: r, isTimedRelevant: a } = F(t);
            V(t, a);
            let s = W(m, t),
                l = W(N, t);
            if (i === s && r === l) return !1;
            let o = T[e][n][t.id],
                d = i ? o : null,
                c = r ? o : null;
            H(m, t, d, !0), H(N, t, c, !0), M(e, n);
        } else {
            let e = W(S, t),
                n = u.Ay.isForumPostUnread(t.id);
            if (n === e) return !1;
            H(S, t, n ? t : null, !0);
        }
    }
}
function x() {
    for (let e in ((m = {}), (N = {}), T))
        for (let t in T[e])
            for (let n in T[e][t]) {
                let i = T[e][t][n],
                    { isUnread: r, isRelevant: a, isTimedRelevant: s } = F(i.channel);
                r && H(m, i.channel, i, !1), a && H(N, i.channel, i, !1), V(i.channel, s);
            }
    for (let e in ((S = {}), g))
        for (let t in g[e])
            for (let n in g[e][t]) {
                let i = g[e][t][n];
                u.Ay.isForumPostUnread(n) && H(S, i, i, !1);
            }
    v();
}
function k() {
    let e = R;
    if ((R = _.Ay.getChannelId()) === e) return !1;
    b(e), b(R);
}
function F(e) {
    let t = u.Ay.getMentionCount(e.id) > 0,
        n = u.Ay.hasUnread(e.id) && !h.A.isMuted(e.id),
        i = e.hasFlag(p.lx.PINNED),
        r = e.isActiveThread(),
        a = r && f(e) > Date.now(),
        s = _.Ay.getVoiceChannelId() === e.id;
    return { isUnread: ((r || i) && n) || t, isRelevant: a || i || n || t || s, isTimedRelevant: a };
}
function V(e, t) {
    var n;
    B(e.id),
        t &&
            (O[(n = e).id] = setTimeout(
                () => {
                    let e = d.A.getChannel(n.id);
                    null != e && s.h.dispatch({ type: "THREAD_UPDATE", channel: e });
                },
                f(n) - Date.now() + 1,
            ));
}
function B(e) {
    e in O && (clearTimeout(O[e]), delete O[e]);
}
function H(e, t, n, i) {
    let { guild_id: a, parent_id: s, id: l } = t;
    null != a &&
        null != s &&
        null != l &&
        (a in e || (e[a] = {}),
        s in e[a] || (e[a][s] = {}),
        i && (e[a] = { ...e[a], [s]: { ...e[a][s] } }),
        null === n ? (delete e[a][s][l], r().isEmpty(e[a][s]) && delete e[a][s]) : (e[a][s][l] = n));
}
function j(e, t, n, i) {
    null == t ||
        null == n ||
        null == i ||
        (Y(e, t, n, i) &&
            ((e[t] = { ...e[t], [n]: { ...e[t][n] } }), delete e[t][n][i], r().isEmpty(e[t][n]) && delete e[t][n]));
}
function W(e, t) {
    return Y(e, t.guild_id, t.parent_id, t.id);
}
function Y(e, t, n, i) {
    return t in e && n in e[t] && i in e[t][n];
}
let K = {},
    $ = {},
    z = {},
    q = {},
    Z = {};
class X extends a.Ay.Store {
    static displayName = "ActiveJoinedThreadsStore";
    initialize() {
        this.waitFor(A.A, d.A, c.A, h.A, u.Ay, _.Ay), this.syncWith([_.Ay], k);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in m && t in m[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        return e in g ? (g[e][t] ?? q) : q;
    }
    getActiveJoinedThreadsForParent(e, t) {
        return e in T ? (T[e][t] ?? z) : z;
    }
    getAllActiveJoinedThreads() {
        return T;
    }
    getActiveJoinedThreadsForGuild(e) {
        return T[e] ?? K;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        return m[e] ?? K;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        return this.getActiveJoinedUnreadThreadsForGuild(e)[t] ?? z;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        return N[e] ?? K;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        return this.getActiveJoinedRelevantThreadsForGuild(e)[t] ?? z;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        return g[e] ?? $;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        return S[e] ?? K;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        return this.getActiveUnjoinedUnreadThreadsForGuild(e)[t] ?? z;
    }
    getNewThreadCountsForGuild(e) {
        return C[e] ?? Z;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in T)
            if (n === e || null == e) for (let e in T[n]) for (let i in T[n][e]) t.push(T[n][e][i].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        return C[e]?.[t] ?? 0;
    }
    getActiveThreadCount(e, t) {
        return r().size(T[e]?.[t] ?? {}) + r().size(g[e]?.[t] ?? {});
    }
}
let Q = new X(s.h, {
    CONNECTION_OPEN: L,
    OVERLAY_INITIALIZE: L,
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t } = e;
        return y(t);
    },
    LOAD_THREADS_SUCCESS: L,
    LOAD_ARCHIVED_THREADS_SUCCESS: L,
    SEARCH_MESSAGES_SUCCESS: L,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: L,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return y(t.id);
    },
    GUILD_DELETE: L,
    CURRENT_USER_UPDATE: L,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = d.A.getChannel(t);
        if (!n?.isThread()) return !1;
        P(n.guild_id, n.parent_id, n.id);
    },
    THREAD_CREATE: U,
    THREAD_UPDATE: U,
    THREAD_DELETE: U,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t)
            if (
                (0, l.qR)(e) !==
                (function (e, t) {
                    if (null == t) return !1;
                    let n = T[e],
                        i = null == n ? null : n[t];
                    if (null != i) {
                        for (let e in i) if ((0, l.qR)(i[e].channel)) return !0;
                    }
                    let r = g[e],
                        a = null == r ? null : r[t];
                    if (null != a) {
                        for (let e in a) if ((0, l.qR)(a[e])) return !0;
                    }
                    return !1;
                })(e.guild_id, e.parent_id)
            )
                return void L();
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        return (
            null != t.guild_id &&
                null != t.parent_id &&
                (t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in m && t.parent_id in m[t.guild_id] && (delete m[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in N &&
                    t.parent_id in N[t.guild_id] &&
                    (E.default.keys(N[t.guild_id][t.parent_id]).forEach(B),
                    delete N[t.guild_id][t.parent_id],
                    (n = !0)),
                t.guild_id in g && t.parent_id in g[t.guild_id] && (delete g[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], (n = !0)),
                n && M(t.guild_id, t.parent_id)),
            n
        );
    },
    THREAD_MEMBER_UPDATE: w,
    THREAD_MEMBERS_UPDATE: w,
    LOAD_MESSAGES_SUCCESS: G,
    MESSAGE_CREATE: G,
    MESSAGE_DELETE: G,
    MESSAGE_DELETE_BULK: G,
    MESSAGE_ACK: G,
    CHANNEL_ACK: G,
    CHANNEL_LOCAL_ACK: G,
    CHANNEL_SELECT: function (e) {
        G(e), k();
    },
    PASSIVE_UPDATE_V2: function (e) {
        if (e.channels.length > 0) return y(e.guildId);
    },
    WINDOW_FOCUS: x,
    UPDATE_CHANNEL_DIMENSIONS: function (e) {
        let { channelId: t } = e,
            n = d.A.getChannel(t);
        return !!(null != n && n.isThread()) && P(n.guild_id, n.parent_id, n.id);
    },
    TRY_ACK: x,
    BULK_ACK: x,
});
