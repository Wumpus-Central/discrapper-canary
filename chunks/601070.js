n.d(t, { Z: () => es }), n(47120), n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(131704),
    u = n(592125),
    c = n(430824),
    d = n(306680),
    f = n(944486),
    _ = n(709054),
    p = n(344185),
    h = n(569471),
    m = n(819168),
    g = n(176505);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let v = {},
    y = {},
    I = {},
    T = {},
    b = {},
    S = {},
    A = null,
    N = {};
function C() {
    for (let e in ((v = {}), (b = {}), (y = {}), (I = {}), (T = {}), (A = f.Z.getChannelId()), N)) clearTimeout(N[e]);
    (N = {}),
        p.Z.forEachGuild((e) => {
            O(e);
        }),
        D();
}
function R(e) {
    for (let t in (delete v[e], delete b[e], delete y[e], delete I[e], delete T[e], O(e), I[e])) x(e, t);
}
function O(e) {
    let t = p.Z.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            q(n);
            let e = u.Z.getChannel(n);
            if (null == e) continue;
            let t = h.Z.joinTimestamp(n);
            if (null != t) {
                let n = {
                        channel: e,
                        joinTimestamp: t.getTime()
                    },
                    { isUnread: i, isRelevant: r, isTimedRelevant: a } = W(e);
                Q(v, e, n, !1), Q(b, e, r ? n : null, !1), Q(y, e, i ? n : null, !1), a && K(e, !0);
            } else {
                Q(I, e, e, !1);
                let t = d.ZP.isForumPostUnread(e.id);
                Q(T, e, t ? e : null, !1);
            }
        }
}
function D() {
    for (let e in ((S = {}), I)) for (let t in I[e]) x(e, t);
}
function L(e) {
    let t = u.Z.getBasicChannel(e);
    null != t && l.uC.has(t.type) && x(t.guild_id, t.id);
}
function x(e, t) {
    let n = u.Z.getChannel(t);
    if (null == n || !n.isForumLikeChannel() || (null == S[e] && (S[e] = {}), (S[e][t] = 0), null == I[e] || null == I[e][t])) return;
    let i = c.Z.getGuild(e);
    if (null == i) return;
    let r = d.ZP.getTrackedAckMessageId(t);
    if (null == r) {
        let e = Date.now();
        null != i.joinedAt && (i.joinedAt instanceof Date ? (e = i.joinedAt.getTime()) : 'string' == typeof i.joinedAt && (e = new Date(i.joinedAt).getTime())), (r = _.default.fromTimestamp(e));
    }
    for (let n in I[e][t]) t === A ? d.ZP.isNewForumThread(n, t, i) && S[e][t]++ : _.default.compare(n, r) > 0 && !d.ZP.hasOpenedThread(n) && S[e][t]++;
}
function w(e, t, n) {
    if (null == t) return !1;
    let i = u.Z.getChannel(n),
        r = h.Z.joinTimestamp(n);
    if (null != i && p.Z.isActive(e, t, n)) {
        if (null != r) {
            let e = {
                    channel: i,
                    joinTimestamp: r.getTime()
                },
                { isUnread: t, isRelevant: n, isTimedRelevant: a } = W(i);
            Q(v, i, e, !0), Q(b, i, n ? e : null, !0), Q(y, i, t ? e : null, !0), Q(I, i, null, !0), Q(T, i, null, !0), K(i, a);
        } else {
            let e = d.ZP.isForumPostUnread(i.id);
            Q(v, i, null, !0), Q(y, i, null, !0), Q(b, i, null, !0), Q(I, i, i, !0), Q(T, i, e ? i : null, !0), q(i.id);
        }
        x(e, t);
    } else X(v, e, t, n), X(b, e, t, n), X(y, e, t, n), X(I, e, t, n), X(T, e, t, n), q(n), x(e, t);
}
function P(e) {
    return w(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function M(e) {
    let { channels: t } = e;
    for (let e of t)
        if (e.isNSFW() !== k(e.guild_id, e.parent_id)) {
            C();
            return;
        }
    return !1;
}
function k(e, t) {
    if (null == t) return !1;
    let n = v[e],
        i = null == n ? null : n[t];
    if (null != i) {
        for (let e in i) if (i[e].channel.isNSFW()) return !0;
    }
    let r = I[e],
        a = null == r ? null : r[t];
    if (null != a) {
        for (let e in a) if (a[e].isNSFW()) return !0;
    }
    return !1;
}
function U(e) {
    let { channel: t } = e,
        n = !1;
    return null != t.guild_id && null != t.parent_id && (t.guild_id in v && t.parent_id in v[t.guild_id] && (delete v[t.guild_id][t.parent_id], (n = !0)), t.guild_id in y && t.parent_id in y[t.guild_id] && (delete y[t.guild_id][t.parent_id], (n = !0)), t.guild_id in b && t.parent_id in b[t.guild_id] && (_.default.keys(b[t.guild_id][t.parent_id]).forEach(q), delete b[t.guild_id][t.parent_id], (n = !0)), t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], (n = !0)), t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)), n && x(t.guild_id, t.parent_id)), n;
}
function G(e) {
    let t = u.Z.getChannel(e.id);
    return !!(null != t && p.Z.isActive(e.guildId, t.parent_id, e.id)) && w(t.guild_id, t.parent_id, t.id);
}
function B(e) {
    let t = u.Z.getChannel(e.channelId);
    if (null == t) Z();
    else {
        let { guild_id: e, parent_id: i } = t;
        if (!l.Ec.has(t.type)) {
            var n;
            return Number(null === (n = S[e]) || void 0 === n ? void 0 : n[t.id]) > 0 && (x(e, t.id), !0);
        }
        if (null == i) return !1;
        if (J(v, t)) {
            let { isUnread: n, isRelevant: r, isTimedRelevant: a } = W(t);
            K(t, a);
            let s = J(y, t),
                o = J(b, t);
            if (n === s && r === o) return !1;
            let l = v[e][i][t.id],
                u = n ? l : null,
                c = r ? l : null;
            Q(y, t, u, !0), Q(b, t, c, !0), x(e, i);
        } else {
            let e = J(T, t),
                n = d.ZP.isForumPostUnread(t.id);
            if (n === e) return !1;
            Q(T, t, n ? t : null, !0);
        }
    }
}
function Z() {
    for (let e in ((y = {}), (b = {}), v))
        for (let t in v[e])
            for (let n in v[e][t]) {
                let i = v[e][t][n],
                    { isUnread: r, isRelevant: a, isTimedRelevant: s } = W(i.channel);
                r && Q(y, i.channel, i, !1), a && Q(b, i.channel, i, !1), K(i.channel, s);
            }
    for (let e in ((T = {}), I))
        for (let t in I[e])
            for (let n in I[e][t]) {
                let i = I[e][t][n];
                d.ZP.isForumPostUnread(n) && Q(T, i, i, !1);
            }
    D();
}
function F(e) {
    if (e.channels.length > 0) return R(e.guildId);
}
function V(e) {
    let { guild: t } = e;
    return R(t.id);
}
function j(e) {
    let { guildId: t } = e;
    return R(t);
}
function H(e) {
    B(e), Y();
}
function Y() {
    let e = A;
    if ((A = f.Z.getChannelId()) === e) return !1;
    L(e), L(A);
}
function W(e) {
    let t = d.ZP.getMentionCount(e.id) > 0,
        n = d.ZP.hasUnread(e.id) && !h.Z.isMuted(e.id),
        i = e.hasFlag(g.zZ.PINNED),
        r = e.isActiveThread(),
        a = r && (0, m.Z)(e) > Date.now();
    return {
        isUnread: ((r || i) && n) || t,
        isRelevant: a || i || n || t,
        isTimedRelevant: a
    };
}
function K(e, t) {
    q(e.id), t && z(e);
}
function z(e) {
    N[e.id] = setTimeout(
        () => {
            let t = u.Z.getChannel(e.id);
            null != t &&
                o.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: t
                });
        },
        (0, m.Z)(e) - Date.now() + 1
    );
}
function q(e) {
    e in N && (clearTimeout(N[e]), delete N[e]);
}
function Q(e, t, n, i) {
    let { guild_id: r, parent_id: s, id: o } = t;
    null != r &&
        null != s &&
        null != o &&
        (r in e || (e[r] = {}),
        s in e[r] || (e[r][s] = {}),
        i &&
            (e[r] = {
                ...e[r],
                [s]: { ...e[r][s] }
            }),
        null === n ? (delete e[r][s][o], a().isEmpty(e[r][s]) && delete e[r][s]) : (e[r][s][o] = n));
}
function X(e, t, n, i) {
    null != t &&
        null != n &&
        null != i &&
        $(e, t, n, i) &&
        ((e[t] = {
            ...e[t],
            [n]: { ...e[t][n] }
        }),
        delete e[t][n][i],
        a().isEmpty(e[t][n]) && delete e[t][n]);
}
function J(e, t) {
    return $(e, t.guild_id, t.parent_id, t.id);
}
function $(e, t, n, i) {
    return t in e && n in e[t] && i in e[t][n];
}
let ee = {},
    et = {},
    en = {},
    ei = {},
    er = {};
class ea extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, u.Z, h.Z, d.ZP), this.syncWith([f.Z], Y);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in y && t in y[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        var n;
        return e in I && null !== (n = I[e][t]) && void 0 !== n ? n : ei;
    }
    getActiveJoinedThreadsForParent(e, t) {
        var n;
        return e in v && null !== (n = v[e][t]) && void 0 !== n ? n : en;
    }
    getActiveJoinedThreadsForGuild(e) {
        var t;
        return null !== (t = v[e]) && void 0 !== t ? t : ee;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        var t;
        return null !== (t = y[e]) && void 0 !== t ? t : ee;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : en;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        var t;
        return null !== (t = b[e]) && void 0 !== t ? t : ee;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : en;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        var t;
        return null !== (t = I[e]) && void 0 !== t ? t : et;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        var t;
        return null !== (t = T[e]) && void 0 !== t ? t : ee;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : en;
    }
    getNewThreadCountsForGuild(e) {
        var t;
        return null !== (t = S[e]) && void 0 !== t ? t : er;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in v) if (n === e || null == e) for (let e in v[n]) for (let i in v[n][e]) t.push(v[n][e][i].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        var n, i;
        return null !== (i = null === (n = S[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : 0;
    }
    getActiveThreadCount(e, t) {
        var n, i, r, s;
        return a().size(null !== (r = null === (n = v[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : {}) + a().size(null !== (s = null === (i = I[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== s ? s : {});
    }
}
E(ea, 'displayName', 'ActiveJoinedThreadsStore');
let es = new ea(o.Z, {
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    THREAD_LIST_SYNC: j,
    LOAD_THREADS_SUCCESS: C,
    LOAD_ARCHIVED_THREADS_SUCCESS: C,
    SEARCH_FINISH: C,
    MOD_VIEW_SEARCH_FINISH: C,
    GUILD_CREATE: V,
    GUILD_DELETE: C,
    CURRENT_USER_UPDATE: C,
    THREAD_CREATE: P,
    THREAD_UPDATE: P,
    THREAD_DELETE: P,
    CHANNEL_UPDATES: M,
    CHANNEL_DELETE: U,
    THREAD_MEMBER_UPDATE: G,
    THREAD_MEMBERS_UPDATE: G,
    LOAD_MESSAGES_SUCCESS: B,
    MESSAGE_CREATE: B,
    MESSAGE_DELETE: B,
    MESSAGE_DELETE_BULK: B,
    MESSAGE_ACK: B,
    CHANNEL_ACK: B,
    CHANNEL_LOCAL_ACK: B,
    CHANNEL_SELECT: H,
    PASSIVE_UPDATE_V2: F,
    WINDOW_FOCUS: Z,
    UPDATE_CHANNEL_DIMENSIONS: Z,
    TRY_ACK: Z,
    BULK_ACK: Z
});
