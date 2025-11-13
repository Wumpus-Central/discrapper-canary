n.d(t, { Z: () => eu }), n(388685), n(539854);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(622822),
    c = n(131704),
    u = n(592125),
    d = n(430824),
    f = n(306680),
    _ = n(944486),
    p = n(709054),
    h = n(344185),
    m = n(569471),
    g = n(819168),
    E = n(176505);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = {},
    T = {},
    S = {},
    A = {},
    C = {},
    N = {},
    R = null,
    P = {};
function D() {
    for (let e in ((I = {}), (C = {}), (T = {}), (S = {}), (A = {}), (R = _.Z.getChannelId()), P)) clearTimeout(P[e]);
    (P = {}),
        h.Z.forEachGuild((e) => {
            x(e);
        }),
        L();
}
function w(e) {
    for (let t in (delete I[e], delete C[e], delete T[e], delete S[e], delete A[e], x(e), S[e])) j(e, t);
}
function x(e) {
    let t = h.Z.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            $(n);
            let e = u.Z.getChannel(n);
            if (null == e) continue;
            let t = m.Z.joinTimestamp(n);
            if (null != t) {
                let n = {
                        channel: e,
                        joinTimestamp: t.getTime(),
                    },
                    { isUnread: r, isRelevant: i, isTimedRelevant: a } = X(e);
                ee(I, e, n, !1), ee(C, e, i ? n : null, !1), ee(T, e, r ? n : null, !1), a && Q(e, !0);
            } else {
                ee(S, e, e, !1);
                let t = f.ZP.isForumPostUnread(e.id);
                ee(A, e, t ? e : null, !1);
            }
        }
}
function L() {
    for (let e in ((N = {}), S)) for (let t in S[e]) j(e, t);
}
function M(e) {
    let t = u.Z.getBasicChannel(e);
    null != t && c.uC.has(t.type) && j(t.guild_id, t.id);
}
function j(e, t) {
    let n = u.Z.getChannel(t);
    if (
        null == n ||
        !n.isForumLikeChannel() ||
        (null == N[e] && (N[e] = {}), (N[e][t] = 0), null == S[e] || null == S[e][t])
    )
        return;
    let r = d.Z.getGuild(e);
    if (null == r) return;
    let i = f.ZP.getTrackedAckMessageId(t);
    if (null == i) {
        let e = Date.now();
        null != r.joinedAt &&
            (r.joinedAt instanceof Date
                ? (e = r.joinedAt.getTime())
                : "string" == typeof r.joinedAt && (e = new Date(r.joinedAt).getTime())),
            (i = p.default.fromTimestamp(e));
    }
    for (let n in S[e][t])
        t === R
            ? f.ZP.isNewForumThread(n, t, r) && N[e][t]++
            : p.default.compare(n, i) > 0 && !f.ZP.hasOpenedThread(n) && N[e][t]++;
}
function k(e, t, n) {
    if (null == t) return !1;
    let r = u.Z.getChannel(n),
        i = m.Z.joinTimestamp(n);
    if (null != r && h.Z.isActive(e, t, n)) {
        if (null != i) {
            let e = {
                    channel: r,
                    joinTimestamp: i.getTime(),
                },
                { isUnread: t, isRelevant: n, isTimedRelevant: a } = X(r);
            ee(I, r, e, !0),
                ee(C, r, n ? e : null, !0),
                ee(T, r, t ? e : null, !0),
                ee(S, r, null, !0),
                ee(A, r, null, !0),
                Q(r, a);
        } else {
            let e = f.ZP.isForumPostUnread(r.id);
            ee(I, r, null, !0),
                ee(T, r, null, !0),
                ee(C, r, null, !0),
                ee(S, r, r, !0),
                ee(A, r, e ? r : null, !0),
                $(r.id);
        }
        j(e, t);
    } else et(I, e, t, n), et(C, e, t, n), et(T, e, t, n), et(S, e, t, n), et(A, e, t, n), $(n), j(e, t);
}
function U(e) {
    return k(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function G(e) {
    let { channels: t } = e;
    for (let e of t) if ((0, l.Y3)(e) !== B(e.guild_id, e.parent_id)) return void D();
    return !1;
}
function B(e, t) {
    if (null == t) return !1;
    let n = I[e],
        r = null == n ? null : n[t];
    if (null != r) {
        for (let e in r) if ((0, l.Y3)(r[e].channel)) return !0;
    }
    let i = S[e],
        a = null == i ? null : i[t];
    if (null != a) {
        for (let e in a) if ((0, l.Y3)(a[e])) return !0;
    }
    return !1;
}
function Z(e) {
    let { channel: t } = e,
        n = !1;
    return (
        null != t.guild_id &&
            null != t.parent_id &&
            (t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in C &&
                t.parent_id in C[t.guild_id] &&
                (p.default.keys(C[t.guild_id][t.parent_id]).forEach($), delete C[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], (n = !0)),
            n && j(t.guild_id, t.parent_id)),
        n
    );
}
function F(e) {
    let t = u.Z.getChannel(e.id);
    return null != t && !!h.Z.isActive(e.guildId, t.parent_id, e.id) && k(t.guild_id, t.parent_id, t.id);
}
function V(e) {
    let t = u.Z.getChannel(e.channelId);
    if (null == t) H();
    else {
        let { guild_id: e, parent_id: r } = t;
        if (!c.Ec.has(t.type)) {
            var n;
            return Number(null == (n = N[e]) ? void 0 : n[t.id]) > 0 && (j(e, t.id), !0);
        }
        if (null == r) return !1;
        if (en(I, t)) {
            let { isUnread: n, isRelevant: i, isTimedRelevant: a } = X(t);
            Q(t, a);
            let o = en(T, t),
                s = en(C, t);
            if (n === o && i === s) return !1;
            let l = I[e][r][t.id],
                c = n ? l : null,
                u = i ? l : null;
            ee(T, t, c, !0), ee(C, t, u, !0), j(e, r);
        } else {
            let e = en(A, t),
                n = f.ZP.isForumPostUnread(t.id);
            if (n === e) return !1;
            ee(A, t, n ? t : null, !0);
        }
    }
}
function H() {
    for (let e in ((T = {}), (C = {}), I))
        for (let t in I[e])
            for (let n in I[e][t]) {
                let r = I[e][t][n],
                    { isUnread: i, isRelevant: a, isTimedRelevant: o } = X(r.channel);
                i && ee(T, r.channel, r, !1), a && ee(C, r.channel, r, !1), Q(r.channel, o);
            }
    for (let e in ((A = {}), S))
        for (let t in S[e])
            for (let n in S[e][t]) {
                let r = S[e][t][n];
                f.ZP.isForumPostUnread(n) && ee(A, r, r, !1);
            }
    L();
}
function Y(e) {
    if (e.channels.length > 0) return w(e.guildId);
}
function W(e) {
    let { guild: t } = e;
    return w(t.id);
}
function K(e) {
    let { guildId: t } = e;
    return w(t);
}
function z(e) {
    V(e), q();
}
function q() {
    let e = R;
    if ((R = _.Z.getChannelId()) === e) return !1;
    M(e), M(R);
}
function X(e) {
    let t = f.ZP.getMentionCount(e.id) > 0,
        n = f.ZP.hasUnread(e.id) && !m.Z.isMuted(e.id),
        r = e.hasFlag(E.zZ.PINNED),
        i = e.isActiveThread(),
        a = i && (0, g.Z)(e) > Date.now();
    return {
        isUnread: ((i || r) && n) || t,
        isRelevant: a || r || n || t,
        isTimedRelevant: a,
    };
}
function Q(e, t) {
    $(e.id), t && J(e);
}
function J(e) {
    P[e.id] = setTimeout(
        () => {
            let t = u.Z.getChannel(e.id);
            null != t &&
                s.Z.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t,
                });
        },
        (0, g.Z)(e) - Date.now() + 1,
    );
}
function $(e) {
    e in P && (clearTimeout(P[e]), delete P[e]);
}
function ee(e, t, n, r) {
    let { guild_id: i, parent_id: o, id: s } = t;
    null != i &&
        null != o &&
        null != s &&
        (i in e || (e[i] = {}),
        o in e[i] || (e[i][o] = {}),
        r && (e[i] = v(y({}, e[i]), { [o]: y({}, e[i][o]) })),
        null === n ? (delete e[i][o][s], a().isEmpty(e[i][o]) && delete e[i][o]) : (e[i][o][s] = n));
}
function et(e, t, n, r) {
    null != t &&
        null != n &&
        null != r &&
        er(e, t, n, r) &&
        ((e[t] = v(y({}, e[t]), { [n]: y({}, e[t][n]) })), delete e[t][n][r], a().isEmpty(e[t][n]) && delete e[t][n]);
}
function en(e, t) {
    return er(e, t.guild_id, t.parent_id, t.id);
}
function er(e, t, n, r) {
    return t in e && n in e[t] && r in e[t][n];
}
let ei = {},
    ea = {},
    eo = {},
    es = {},
    el = {};
class ec extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, u.Z, d.Z, m.Z, f.ZP, _.Z), this.syncWith([_.Z], q);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in T && t in T[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        var n;
        return e in S && null != (n = S[e][t]) ? n : es;
    }
    getActiveJoinedThreadsForParent(e, t) {
        var n;
        return e in I && null != (n = I[e][t]) ? n : eo;
    }
    getAllActiveJoinedThreads() {
        return I;
    }
    getActiveJoinedThreadsForGuild(e) {
        var t;
        return null != (t = I[e]) ? t : ei;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        var t;
        return null != (t = T[e]) ? t : ei;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        var n;
        return null != (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) ? n : eo;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        var t;
        return null != (t = C[e]) ? t : ei;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        var n;
        return null != (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) ? n : eo;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        var t;
        return null != (t = S[e]) ? t : ea;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        var t;
        return null != (t = A[e]) ? t : ei;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        var n;
        return null != (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) ? n : eo;
    }
    getNewThreadCountsForGuild(e) {
        var t;
        return null != (t = N[e]) ? t : el;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in I)
            if (n === e || null == e) for (let e in I[n]) for (let r in I[n][e]) t.push(I[n][e][r].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        var n, r;
        return null != (r = null == (n = N[e]) ? void 0 : n[t]) ? r : 0;
    }
    getActiveThreadCount(e, t) {
        var n, r, i, o;
        return (
            a().size(null != (i = null == (n = I[e]) ? void 0 : n[t]) ? i : {}) +
            a().size(null != (o = null == (r = S[e]) ? void 0 : r[t]) ? o : {})
        );
    }
}
b(ec, "displayName", "ActiveJoinedThreadsStore");
let eu = new ec(s.Z, {
    CONNECTION_OPEN: D,
    OVERLAY_INITIALIZE: D,
    THREAD_LIST_SYNC: K,
    LOAD_THREADS_SUCCESS: D,
    LOAD_ARCHIVED_THREADS_SUCCESS: D,
    SEARCH_MESSAGES_SUCCESS: D,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: D,
    GUILD_CREATE: W,
    GUILD_DELETE: D,
    CURRENT_USER_UPDATE: D,
    THREAD_CREATE: U,
    THREAD_UPDATE: U,
    THREAD_DELETE: U,
    CHANNEL_UPDATES: G,
    CHANNEL_DELETE: Z,
    THREAD_MEMBER_UPDATE: F,
    THREAD_MEMBERS_UPDATE: F,
    LOAD_MESSAGES_SUCCESS: V,
    MESSAGE_CREATE: V,
    MESSAGE_DELETE: V,
    MESSAGE_DELETE_BULK: V,
    MESSAGE_ACK: V,
    CHANNEL_ACK: V,
    CHANNEL_LOCAL_ACK: V,
    CHANNEL_SELECT: z,
    PASSIVE_UPDATE_V2: Y,
    WINDOW_FOCUS: H,
    UPDATE_CHANNEL_DIMENSIONS: H,
    TRY_ACK: H,
    BULK_ACK: H,
});
