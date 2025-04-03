n.d(t, { Z: () => ec }), n(47120), n(653041);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(131704),
    c = n(592125),
    u = n(430824),
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = {},
    I = {},
    S = {},
    T = {},
    N = {},
    A = {},
    C = null,
    R = {};
function P() {
    for (let e in ((O = {}), (N = {}), (I = {}), (S = {}), (T = {}), (C = f.Z.getChannelId()), R)) clearTimeout(R[e]);
    (R = {}),
        p.Z.forEachGuild((e) => {
            D(e);
        }),
        L();
}
function w(e) {
    for (let t in (delete O[e], delete N[e], delete I[e], delete S[e], delete T[e], D(e), S[e])) M(e, t);
}
function D(e) {
    let t = p.Z.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            J(n);
            let e = c.Z.getChannel(n);
            if (null == e) continue;
            let t = h.Z.joinTimestamp(n);
            if (null != t) {
                let n = {
                        channel: e,
                        joinTimestamp: t.getTime()
                    },
                    { isUnread: r, isRelevant: i, isTimedRelevant: o } = q(e);
                $(O, e, n, !1), $(N, e, i ? n : null, !1), $(I, e, r ? n : null, !1), o && Q(e, !0);
            } else {
                $(S, e, e, !1);
                let t = d.ZP.isForumPostUnread(e.id);
                $(T, e, t ? e : null, !1);
            }
        }
}
function L() {
    for (let e in ((A = {}), S)) for (let t in S[e]) M(e, t);
}
function x(e) {
    let t = c.Z.getBasicChannel(e);
    null != t && l.uC.has(t.type) && M(t.guild_id, t.id);
}
function M(e, t) {
    let n = c.Z.getChannel(t);
    if (null == n || !n.isForumLikeChannel() || (null == A[e] && (A[e] = {}), (A[e][t] = 0), null == S[e] || null == S[e][t])) return;
    let r = u.Z.getGuild(e);
    if (null == r) return;
    let i = d.ZP.getTrackedAckMessageId(t);
    if (null == i) {
        let e = Date.now();
        null != r.joinedAt && (r.joinedAt instanceof Date ? (e = r.joinedAt.getTime()) : 'string' == typeof r.joinedAt && (e = new Date(r.joinedAt).getTime())), (i = _.default.fromTimestamp(e));
    }
    for (let n in S[e][t]) t === C ? d.ZP.isNewForumThread(n, t, r) && A[e][t]++ : _.default.compare(n, i) > 0 && !d.ZP.hasOpenedThread(n) && A[e][t]++;
}
function k(e, t, n) {
    if (null == t) return !1;
    let r = c.Z.getChannel(n),
        i = h.Z.joinTimestamp(n);
    if (null != r && p.Z.isActive(e, t, n)) {
        if (null != i) {
            let e = {
                    channel: r,
                    joinTimestamp: i.getTime()
                },
                { isUnread: t, isRelevant: n, isTimedRelevant: o } = q(r);
            $(O, r, e, !0), $(N, r, n ? e : null, !0), $(I, r, t ? e : null, !0), $(S, r, null, !0), $(T, r, null, !0), Q(r, o);
        } else {
            let e = d.ZP.isForumPostUnread(r.id);
            $(O, r, null, !0), $(I, r, null, !0), $(N, r, null, !0), $(S, r, r, !0), $(T, r, e ? r : null, !0), J(r.id);
        }
        M(e, t);
    } else ee(O, e, t, n), ee(N, e, t, n), ee(I, e, t, n), ee(S, e, t, n), ee(T, e, t, n), J(n), M(e, t);
}
function j(e) {
    return k(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function U(e) {
    let { channels: t } = e;
    for (let e of t) if (e.isNSFW() !== G(e.guild_id, e.parent_id)) return void P();
    return !1;
}
function G(e, t) {
    if (null == t) return !1;
    let n = O[e],
        r = null == n ? null : n[t];
    if (null != r) {
        for (let e in r) if (r[e].channel.isNSFW()) return !0;
    }
    let i = S[e],
        o = null == i ? null : i[t];
    if (null != o) {
        for (let e in o) if (o[e].isNSFW()) return !0;
    }
    return !1;
}
function B(e) {
    let { channel: t } = e,
        n = !1;
    return null != t.guild_id && null != t.parent_id && (t.guild_id in O && t.parent_id in O[t.guild_id] && (delete O[t.guild_id][t.parent_id], (n = !0)), t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], (n = !0)), t.guild_id in N && t.parent_id in N[t.guild_id] && (_.default.keys(N[t.guild_id][t.parent_id]).forEach(J), delete N[t.guild_id][t.parent_id], (n = !0)), t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], (n = !0)), t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)), n && M(t.guild_id, t.parent_id)), n;
}
function F(e) {
    let t = c.Z.getChannel(e.id);
    return null != t && !!p.Z.isActive(e.guildId, t.parent_id, e.id) && k(t.guild_id, t.parent_id, t.id);
}
function V(e) {
    let t = c.Z.getChannel(e.channelId);
    if (null == t) Z();
    else {
        let { guild_id: e, parent_id: r } = t;
        if (!l.Ec.has(t.type)) {
            var n;
            return Number(null == (n = A[e]) ? void 0 : n[t.id]) > 0 && (M(e, t.id), !0);
        }
        if (null == r) return !1;
        if (et(O, t)) {
            let { isUnread: n, isRelevant: i, isTimedRelevant: o } = q(t);
            Q(t, o);
            let a = et(I, t),
                s = et(N, t);
            if (n === a && i === s) return !1;
            let l = O[e][r][t.id],
                c = n ? l : null,
                u = i ? l : null;
            $(I, t, c, !0), $(N, t, u, !0), M(e, r);
        } else {
            let e = et(T, t),
                n = d.ZP.isForumPostUnread(t.id);
            if (n === e) return !1;
            $(T, t, n ? t : null, !0);
        }
    }
}
function Z() {
    for (let e in ((I = {}), (N = {}), O))
        for (let t in O[e])
            for (let n in O[e][t]) {
                let r = O[e][t][n],
                    { isUnread: i, isRelevant: o, isTimedRelevant: a } = q(r.channel);
                i && $(I, r.channel, r, !1), o && $(N, r.channel, r, !1), Q(r.channel, a);
            }
    for (let e in ((T = {}), S))
        for (let t in S[e])
            for (let n in S[e][t]) {
                let r = S[e][t][n];
                d.ZP.isForumPostUnread(n) && $(T, r, r, !1);
            }
    L();
}
function H(e) {
    if (e.channels.length > 0) return w(e.guildId);
}
function W(e) {
    let { guild: t } = e;
    return w(t.id);
}
function Y(e) {
    let { guildId: t } = e;
    return w(t);
}
function K(e) {
    V(e), z();
}
function z() {
    let e = C;
    if ((C = f.Z.getChannelId()) === e) return !1;
    x(e), x(C);
}
function q(e) {
    let t = d.ZP.getMentionCount(e.id) > 0,
        n = d.ZP.hasUnread(e.id) && !h.Z.isMuted(e.id),
        r = e.hasFlag(g.zZ.PINNED),
        i = e.isActiveThread(),
        o = i && (0, m.Z)(e) > Date.now();
    return {
        isUnread: ((i || r) && n) || t,
        isRelevant: o || r || n || t,
        isTimedRelevant: o
    };
}
function Q(e, t) {
    J(e.id), t && X(e);
}
function X(e) {
    R[e.id] = setTimeout(
        () => {
            let t = c.Z.getChannel(e.id);
            null != t &&
                s.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: t
                });
        },
        (0, m.Z)(e) - Date.now() + 1
    );
}
function J(e) {
    e in R && (clearTimeout(R[e]), delete R[e]);
}
function $(e, t, n, r) {
    let { guild_id: i, parent_id: a, id: s } = t;
    null != i && null != a && null != s && (i in e || (e[i] = {}), a in e[i] || (e[i][a] = {}), r && (e[i] = v(b({}, e[i]), { [a]: b({}, e[i][a]) })), null === n ? (delete e[i][a][s], o().isEmpty(e[i][a]) && delete e[i][a]) : (e[i][a][s] = n));
}
function ee(e, t, n, r) {
    null != t && null != n && null != r && en(e, t, n, r) && ((e[t] = v(b({}, e[t]), { [n]: b({}, e[t][n]) })), delete e[t][n][r], o().isEmpty(e[t][n]) && delete e[t][n]);
}
function et(e, t) {
    return en(e, t.guild_id, t.parent_id, t.id);
}
function en(e, t, n, r) {
    return t in e && n in e[t] && r in e[t][n];
}
let er = {},
    ei = {},
    eo = {},
    ea = {},
    es = {};
class el extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, c.Z, h.Z, d.ZP), this.syncWith([f.Z], z);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in I && t in I[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        var n;
        return e in S && null != (n = S[e][t]) ? n : ea;
    }
    getActiveJoinedThreadsForParent(e, t) {
        var n;
        return e in O && null != (n = O[e][t]) ? n : eo;
    }
    getActiveJoinedThreadsForGuild(e) {
        var t;
        return null != (t = O[e]) ? t : er;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        var t;
        return null != (t = I[e]) ? t : er;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        var n;
        return null != (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) ? n : eo;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        var t;
        return null != (t = N[e]) ? t : er;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        var n;
        return null != (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) ? n : eo;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        var t;
        return null != (t = S[e]) ? t : ei;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        var t;
        return null != (t = T[e]) ? t : er;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        var n;
        return null != (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) ? n : eo;
    }
    getNewThreadCountsForGuild(e) {
        var t;
        return null != (t = A[e]) ? t : es;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in O) if (n === e || null == e) for (let e in O[n]) for (let r in O[n][e]) t.push(O[n][e][r].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        var n, r;
        return null != (r = null == (n = A[e]) ? void 0 : n[t]) ? r : 0;
    }
    getActiveThreadCount(e, t) {
        var n, r, i, a;
        return o().size(null != (i = null == (n = O[e]) ? void 0 : n[t]) ? i : {}) + o().size(null != (a = null == (r = S[e]) ? void 0 : r[t]) ? a : {});
    }
}
E(el, 'displayName', 'ActiveJoinedThreadsStore');
let ec = new el(s.Z, {
    CONNECTION_OPEN: P,
    OVERLAY_INITIALIZE: P,
    THREAD_LIST_SYNC: Y,
    LOAD_THREADS_SUCCESS: P,
    LOAD_ARCHIVED_THREADS_SUCCESS: P,
    SEARCH_FINISH: P,
    MOD_VIEW_SEARCH_FINISH: P,
    GUILD_CREATE: W,
    GUILD_DELETE: P,
    CURRENT_USER_UPDATE: P,
    THREAD_CREATE: j,
    THREAD_UPDATE: j,
    THREAD_DELETE: j,
    CHANNEL_UPDATES: U,
    CHANNEL_DELETE: B,
    THREAD_MEMBER_UPDATE: F,
    THREAD_MEMBERS_UPDATE: F,
    LOAD_MESSAGES_SUCCESS: V,
    MESSAGE_CREATE: V,
    MESSAGE_DELETE: V,
    MESSAGE_DELETE_BULK: V,
    MESSAGE_ACK: V,
    CHANNEL_ACK: V,
    CHANNEL_LOCAL_ACK: V,
    CHANNEL_SELECT: K,
    PASSIVE_UPDATE_V2: H,
    WINDOW_FOCUS: Z,
    UPDATE_CHANNEL_DIMENSIONS: Z,
    TRY_ACK: Z,
    BULK_ACK: Z
});
