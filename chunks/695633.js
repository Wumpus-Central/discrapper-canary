"use strict";
n.d(t, { A: () => Q }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(323073),
    l = n(95701),
    u = n(734057),
    c = n(71393),
    d = n(568548),
    _ = n(309010),
    h = n(935208),
    f = n(970278),
    p = n(152007),
    E = n(927813);
function m(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * E.A.Millis.MINUTE;
    return (
        (function (e) {
            if (null == e.threadMetadata) return 0;
            let t = d.Ay.lastMessageId(e.id) ?? e.id;
            return Math.max(
                h.default.extractTimestamp(t),
                null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0,
            );
        })(e) + t
    );
}
var g = n(746080);
let A = {},
    I = {},
    T = {},
    S = {},
    y = {},
    C = {},
    N = null,
    v = {};
function R() {
    for (let e in ((A = {}), (y = {}), (I = {}), (T = {}), (S = {}), (N = _.A.getChannelId()), v)) clearTimeout(v[e]);
    (v = {}),
        f.A.forEachGuild((e) => {
            b(e);
        }),
        D();
}
function O(e) {
    for (let t in (delete A[e], delete y[e], delete I[e], delete T[e], delete S[e], b(e), T[e])) w(e, t);
}
function b(e) {
    let t = f.A.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            B(n);
            let e = u.A.getChannel(n);
            if (null == e) continue;
            let t = p.A.joinTimestamp(n);
            if (null != t) {
                let n = { channel: e, joinTimestamp: t.getTime() },
                    { isUnread: i, isRelevant: r, isTimedRelevant: s } = F(e);
                j(A, e, n, !1), j(y, e, r ? n : null, !1), j(I, e, i ? n : null, !1), s && V(e, !0);
            } else {
                j(T, e, e, !1);
                let t = d.Ay.isForumPostUnread(e.id);
                j(S, e, t ? e : null, !1);
            }
        }
}
function D() {
    for (let e in ((C = {}), T)) for (let t in T[e]) w(e, t);
}
function L(e) {
    let t = u.A.getBasicChannel(e);
    null != t && l.wE.has(t.type) && w(t.guild_id, t.id);
}
function w(e, t) {
    let n = u.A.getChannel(t);
    if (
        null == n ||
        !n.isForumLikeChannel() ||
        (null == C[e] && (C[e] = {}), (C[e][t] = 0), null == T[e] || null == T[e][t])
    )
        return;
    let i = c.A.getGuild(e);
    if (null == i) return;
    let r = d.Ay.getTrackedAckMessageId(t);
    if (null == r) {
        let e = Date.now();
        null != i.joinedAt &&
            (i.joinedAt instanceof Date
                ? (e = i.joinedAt.getTime())
                : "string" == typeof i.joinedAt && (e = new Date(i.joinedAt).getTime())),
            (r = h.default.fromTimestamp(e));
    }
    for (let n in T[e][t])
        t === N
            ? d.Ay.isNewForumThread(n, t, i) && C[e][t]++
            : h.default.compare(n, r) > 0 && !d.Ay.hasOpenedThread(n) && C[e][t]++;
}
function M(e, t, n) {
    if (null == t) return !1;
    let i = u.A.getChannel(n),
        r = p.A.joinTimestamp(n);
    if (null != i && f.A.isActive(e, t, n)) {
        if (null != r) {
            let e = { channel: i, joinTimestamp: r.getTime() },
                { isUnread: t, isRelevant: n, isTimedRelevant: s } = F(i);
            j(A, i, e, !0),
                j(y, i, n ? e : null, !0),
                j(I, i, t ? e : null, !0),
                j(T, i, null, !0),
                j(S, i, null, !0),
                V(i, s);
        } else {
            let e = d.Ay.isForumPostUnread(i.id);
            j(A, i, null, !0), j(I, i, null, !0), j(y, i, null, !0), j(T, i, i, !0), j(S, i, e ? i : null, !0), B(i.id);
        }
        w(e, t);
    } else H(A, e, t, n), H(y, e, t, n), H(I, e, t, n), H(T, e, t, n), H(S, e, t, n), B(n), w(e, t);
}
function P(e) {
    return M(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function x(e) {
    let t = u.A.getChannel(e.id);
    return null != t && !!f.A.isActive(e.guildId, t.parent_id, e.id) && M(t.guild_id, t.parent_id, t.id);
}
function k(e) {
    let t = u.A.getChannel(e.channelId);
    if (null == t) U();
    else {
        let { guild_id: e, parent_id: n } = t;
        if (!l.Le.has(t.type))
            if (Number(C[e]?.[t.id]) > 0) return w(e, t.id), !0;
            else return !1;
        if (null == n) return !1;
        if (Y(A, t)) {
            let { isUnread: i, isRelevant: r, isTimedRelevant: s } = F(t);
            V(t, s);
            let a = Y(I, t),
                o = Y(y, t);
            if (i === a && r === o) return !1;
            let l = A[e][n][t.id],
                u = i ? l : null,
                c = r ? l : null;
            j(I, t, u, !0), j(y, t, c, !0), w(e, n);
        } else {
            let e = Y(S, t),
                n = d.Ay.isForumPostUnread(t.id);
            if (n === e) return !1;
            j(S, t, n ? t : null, !0);
        }
    }
}
function U() {
    for (let e in ((I = {}), (y = {}), A))
        for (let t in A[e])
            for (let n in A[e][t]) {
                let i = A[e][t][n],
                    { isUnread: r, isRelevant: s, isTimedRelevant: a } = F(i.channel);
                r && j(I, i.channel, i, !1), s && j(y, i.channel, i, !1), V(i.channel, a);
            }
    for (let e in ((S = {}), T))
        for (let t in T[e])
            for (let n in T[e][t]) {
                let i = T[e][t][n];
                d.Ay.isForumPostUnread(n) && j(S, i, i, !1);
            }
    D();
}
function G() {
    let e = N;
    if ((N = _.A.getChannelId()) === e) return !1;
    L(e), L(N);
}
function F(e) {
    let t = d.Ay.getMentionCount(e.id) > 0,
        n = d.Ay.hasUnread(e.id) && !p.A.isMuted(e.id),
        i = e.hasFlag(g.lx.PINNED),
        r = e.isActiveThread(),
        s = r && m(e) > Date.now(),
        a = _.A.getVoiceChannelId() === e.id;
    return { isUnread: ((r || i) && n) || t, isRelevant: s || i || n || t || a, isTimedRelevant: s };
}
function V(e, t) {
    var n;
    B(e.id),
        t &&
            (v[(n = e).id] = setTimeout(
                () => {
                    let e = u.A.getChannel(n.id);
                    null != e && a.h.dispatch({ type: "THREAD_UPDATE", channel: e });
                },
                m(n) - Date.now() + 1,
            ));
}
function B(e) {
    e in v && (clearTimeout(v[e]), delete v[e]);
}
function j(e, t, n, i) {
    let { guild_id: s, parent_id: a, id: o } = t;
    null != s &&
        null != a &&
        null != o &&
        (s in e || (e[s] = {}),
        a in e[s] || (e[s][a] = {}),
        i && (e[s] = { ...e[s], [a]: { ...e[s][a] } }),
        null === n ? (delete e[s][a][o], r().isEmpty(e[s][a]) && delete e[s][a]) : (e[s][a][o] = n));
}
function H(e, t, n, i) {
    null == t ||
        null == n ||
        null == i ||
        (W(e, t, n, i) &&
            ((e[t] = { ...e[t], [n]: { ...e[t][n] } }), delete e[t][n][i], r().isEmpty(e[t][n]) && delete e[t][n]));
}
function Y(e, t) {
    return W(e, t.guild_id, t.parent_id, t.id);
}
function W(e, t, n, i) {
    return t in e && n in e[t] && i in e[t][n];
}
let K = {},
    $ = {},
    z = {},
    q = {},
    Z = {};
class X extends s.Ay.Store {
    static displayName = "ActiveJoinedThreadsStore";
    initialize() {
        this.waitFor(f.A, u.A, c.A, p.A, d.Ay, _.A), this.syncWith([_.A], G);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in I && t in I[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        return e in T ? (T[e][t] ?? q) : q;
    }
    getActiveJoinedThreadsForParent(e, t) {
        return e in A ? (A[e][t] ?? z) : z;
    }
    getAllActiveJoinedThreads() {
        return A;
    }
    getActiveJoinedThreadsForGuild(e) {
        return A[e] ?? K;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        return I[e] ?? K;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        return this.getActiveJoinedUnreadThreadsForGuild(e)[t] ?? z;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        return y[e] ?? K;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        return this.getActiveJoinedRelevantThreadsForGuild(e)[t] ?? z;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        return T[e] ?? $;
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
        for (let n in A)
            if (n === e || null == e) for (let e in A[n]) for (let i in A[n][e]) t.push(A[n][e][i].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        return C[e]?.[t] ?? 0;
    }
    getActiveThreadCount(e, t) {
        return r().size(A[e]?.[t] ?? {}) + r().size(T[e]?.[t] ?? {});
    }
}
let Q = new X(a.h, {
    CONNECTION_OPEN: R,
    OVERLAY_INITIALIZE: R,
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t } = e;
        return O(t);
    },
    LOAD_THREADS_SUCCESS: R,
    LOAD_ARCHIVED_THREADS_SUCCESS: R,
    SEARCH_MESSAGES_SUCCESS: R,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: R,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return O(t.id);
    },
    GUILD_DELETE: R,
    CURRENT_USER_UPDATE: R,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = u.A.getChannel(t);
        if (!n?.isThread()) return !1;
        M(n.guild_id, n.parent_id, n.id);
    },
    THREAD_CREATE: P,
    THREAD_UPDATE: P,
    THREAD_DELETE: P,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t)
            if (
                (0, o.qR)(e) !==
                (function (e, t) {
                    if (null == t) return !1;
                    let n = A[e],
                        i = null == n ? null : n[t];
                    if (null != i) {
                        for (let e in i) if ((0, o.qR)(i[e].channel)) return !0;
                    }
                    let r = T[e],
                        s = null == r ? null : r[t];
                    if (null != s) {
                        for (let e in s) if ((0, o.qR)(s[e])) return !0;
                    }
                    return !1;
                })(e.guild_id, e.parent_id)
            )
                return void R();
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        return (
            null != t.guild_id &&
                null != t.parent_id &&
                (t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in y &&
                    t.parent_id in y[t.guild_id] &&
                    (h.default.keys(y[t.guild_id][t.parent_id]).forEach(B),
                    delete y[t.guild_id][t.parent_id],
                    (n = !0)),
                t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], (n = !0)),
                n && w(t.guild_id, t.parent_id)),
            n
        );
    },
    THREAD_MEMBER_UPDATE: x,
    THREAD_MEMBERS_UPDATE: x,
    LOAD_MESSAGES_SUCCESS: k,
    MESSAGE_CREATE: k,
    MESSAGE_DELETE: k,
    MESSAGE_DELETE_BULK: k,
    MESSAGE_ACK: k,
    CHANNEL_ACK: k,
    CHANNEL_LOCAL_ACK: k,
    CHANNEL_SELECT: function (e) {
        k(e), G();
    },
    PASSIVE_UPDATE_V2: function (e) {
        if (e.channels.length > 0) return O(e.guildId);
    },
    WINDOW_FOCUS: U,
    UPDATE_CHANNEL_DIMENSIONS: function (e) {
        let { channelId: t } = e,
            n = u.A.getChannel(t);
        return !!(null != n && n.isThread()) && M(n.guild_id, n.parent_id, n.id);
    },
    TRY_ACK: U,
    BULK_ACK: U,
});
