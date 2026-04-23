"use strict";
n.d(t, { A: () => Q }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(323073),
    l = n(95701),
    d = n(734057),
    _ = n(71393),
    u = n(222823),
    c = n(309010),
    E = n(935208),
    h = n(970278),
    m = n(152007),
    f = n(927813);
function g(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * f.A.Millis.MINUTE;
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
let A = {},
    I = {},
    T = {},
    S = {},
    N = {},
    C = {},
    R = null,
    O = {};
function y() {
    for (let e in ((A = {}), (N = {}), (I = {}), (T = {}), (S = {}), (R = c.A.getChannelId()), O)) clearTimeout(O[e]);
    (O = {}),
        h.A.forEachGuild((e) => {
            D(e);
        }),
        L();
}
function v(e) {
    for (let t in (delete A[e], delete N[e], delete I[e], delete T[e], delete S[e], D(e), T[e])) w(e, t);
}
function D(e) {
    let t = h.A.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            B(n);
            let e = d.A.getChannel(n);
            if (null == e) continue;
            let t = m.A.joinTimestamp(n);
            if (null != t) {
                let n = { channel: e, joinTimestamp: t.getTime() },
                    { isUnread: i, isRelevant: r, isTimedRelevant: s } = V(e);
                H(A, e, n, !1), H(N, e, r ? n : null, !1), H(I, e, i ? n : null, !1), s && F(e, !0);
            } else {
                H(T, e, e, !1);
                let t = u.Ay.isForumPostUnread(e.id);
                H(S, e, t ? e : null, !1);
            }
        }
}
function L() {
    for (let e in ((C = {}), T)) for (let t in T[e]) w(e, t);
}
function b(e) {
    let t = d.A.getBasicChannel(e);
    null != t && l.wE.has(t.type) && w(t.guild_id, t.id);
}
function w(e, t) {
    let n = d.A.getChannel(t);
    if (
        null == n ||
        !n.isForumLikeChannel() ||
        (null == C[e] && (C[e] = {}), (C[e][t] = 0), null == T[e] || null == T[e][t])
    )
        return;
    let i = _.A.getGuild(e);
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
    for (let n in T[e][t])
        t === R
            ? u.Ay.isNewForumThread(n, t, i) && C[e][t]++
            : E.default.compare(n, r) > 0 && !u.Ay.hasOpenedThread(n) && C[e][t]++;
}
function P(e, t, n) {
    if (null == t) return !1;
    let i = d.A.getChannel(n),
        r = m.A.joinTimestamp(n);
    if (null != i && h.A.isActive(e, t, n)) {
        if (null != r) {
            let e = { channel: i, joinTimestamp: r.getTime() },
                { isUnread: t, isRelevant: n, isTimedRelevant: s } = V(i);
            H(A, i, e, !0),
                H(N, i, n ? e : null, !0),
                H(I, i, t ? e : null, !0),
                H(T, i, null, !0),
                H(S, i, null, !0),
                F(i, s);
        } else {
            let e = u.Ay.isForumPostUnread(i.id);
            H(A, i, null, !0), H(I, i, null, !0), H(N, i, null, !0), H(T, i, i, !0), H(S, i, e ? i : null, !0), B(i.id);
        }
        w(e, t);
    } else j(A, e, t, n), j(N, e, t, n), j(I, e, t, n), j(T, e, t, n), j(S, e, t, n), B(n), w(e, t);
}
function k(e) {
    return P(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function M(e) {
    let t = d.A.getChannel(e.id);
    return null != t && !!h.A.isActive(e.guildId, t.parent_id, e.id) && P(t.guild_id, t.parent_id, t.id);
}
function U(e) {
    let t = d.A.getChannel(e.channelId);
    if (null == t) x();
    else {
        let { guild_id: e, parent_id: n } = t;
        if (!l.Le.has(t.type))
            if (Number(C[e]?.[t.id]) > 0) return w(e, t.id), !0;
            else return !1;
        if (null == n) return !1;
        if (W(A, t)) {
            let { isUnread: i, isRelevant: r, isTimedRelevant: s } = V(t);
            F(t, s);
            let a = W(I, t),
                o = W(N, t);
            if (i === a && r === o) return !1;
            let l = A[e][n][t.id],
                d = i ? l : null,
                _ = r ? l : null;
            H(I, t, d, !0), H(N, t, _, !0), w(e, n);
        } else {
            let e = W(S, t),
                n = u.Ay.isForumPostUnread(t.id);
            if (n === e) return !1;
            H(S, t, n ? t : null, !0);
        }
    }
}
function x() {
    for (let e in ((I = {}), (N = {}), A))
        for (let t in A[e])
            for (let n in A[e][t]) {
                let i = A[e][t][n],
                    { isUnread: r, isRelevant: s, isTimedRelevant: a } = V(i.channel);
                r && H(I, i.channel, i, !1), s && H(N, i.channel, i, !1), F(i.channel, a);
            }
    for (let e in ((S = {}), T))
        for (let t in T[e])
            for (let n in T[e][t]) {
                let i = T[e][t][n];
                u.Ay.isForumPostUnread(n) && H(S, i, i, !1);
            }
    L();
}
function G() {
    let e = R;
    if ((R = c.A.getChannelId()) === e) return !1;
    b(e), b(R);
}
function V(e) {
    let t = u.Ay.getMentionCount(e.id) > 0,
        n = u.Ay.hasUnread(e.id) && !m.A.isMuted(e.id),
        i = e.hasFlag(p.lx.PINNED),
        r = e.isActiveThread(),
        s = r && g(e) > Date.now();
    return { isUnread: ((r || i) && n) || t, isRelevant: s || i || n || t, isTimedRelevant: s };
}
function F(e, t) {
    var n;
    B(e.id),
        t &&
            (O[(n = e).id] = setTimeout(
                () => {
                    let e = d.A.getChannel(n.id);
                    null != e && a.h.dispatch({ type: "THREAD_UPDATE", channel: e });
                },
                g(n) - Date.now() + 1,
            ));
}
function B(e) {
    e in O && (clearTimeout(O[e]), delete O[e]);
}
function H(e, t, n, i) {
    let { guild_id: s, parent_id: a, id: o } = t;
    null != s &&
        null != a &&
        null != o &&
        (s in e || (e[s] = {}),
        a in e[s] || (e[s][a] = {}),
        i && (e[s] = { ...e[s], [a]: { ...e[s][a] } }),
        null === n ? (delete e[s][a][o], r().isEmpty(e[s][a]) && delete e[s][a]) : (e[s][a][o] = n));
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
    z = {},
    $ = {},
    q = {},
    X = {};
class Z extends s.Ay.Store {
    static displayName = "ActiveJoinedThreadsStore";
    initialize() {
        this.waitFor(h.A, d.A, _.A, m.A, u.Ay, c.A), this.syncWith([c.A], G);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in I && t in I[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        return e in T ? (T[e][t] ?? q) : q;
    }
    getActiveJoinedThreadsForParent(e, t) {
        return e in A ? (A[e][t] ?? $) : $;
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
        return this.getActiveJoinedUnreadThreadsForGuild(e)[t] ?? $;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        return N[e] ?? K;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        return this.getActiveJoinedRelevantThreadsForGuild(e)[t] ?? $;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        return T[e] ?? z;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        return S[e] ?? K;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        return this.getActiveUnjoinedUnreadThreadsForGuild(e)[t] ?? $;
    }
    getNewThreadCountsForGuild(e) {
        return C[e] ?? X;
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
let Q = new Z(a.h, {
    CONNECTION_OPEN: y,
    OVERLAY_INITIALIZE: y,
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t } = e;
        return v(t);
    },
    LOAD_THREADS_SUCCESS: y,
    LOAD_ARCHIVED_THREADS_SUCCESS: y,
    SEARCH_MESSAGES_SUCCESS: y,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: y,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return v(t.id);
    },
    GUILD_DELETE: y,
    CURRENT_USER_UPDATE: y,
    THREAD_CREATE: k,
    THREAD_UPDATE: k,
    THREAD_DELETE: k,
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
                return void y();
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
                t.guild_id in N &&
                    t.parent_id in N[t.guild_id] &&
                    (E.default.keys(N[t.guild_id][t.parent_id]).forEach(B),
                    delete N[t.guild_id][t.parent_id],
                    (n = !0)),
                t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], (n = !0)),
                n && w(t.guild_id, t.parent_id)),
            n
        );
    },
    THREAD_MEMBER_UPDATE: M,
    THREAD_MEMBERS_UPDATE: M,
    LOAD_MESSAGES_SUCCESS: U,
    MESSAGE_CREATE: U,
    MESSAGE_DELETE: U,
    MESSAGE_DELETE_BULK: U,
    MESSAGE_ACK: U,
    CHANNEL_ACK: U,
    CHANNEL_LOCAL_ACK: U,
    CHANNEL_SELECT: function (e) {
        U(e), G();
    },
    PASSIVE_UPDATE_V2: function (e) {
        if (e.channels.length > 0) return v(e.guildId);
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
