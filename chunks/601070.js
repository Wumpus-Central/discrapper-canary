var i,
    a = r(47120);
var s = r(653041);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(570140),
    d = r(131704),
    f = r(592125),
    _ = r(430824),
    h = r(306680),
    p = r(944486),
    m = r(709054),
    g = r(344185),
    E = r(569471),
    v = r(819168),
    I = r(176505);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = {},
    y = {},
    S = {},
    A = {},
    N = {},
    C = {},
    R = null,
    O = {};
function D() {
    for (let e in ((b = {}), (N = {}), (y = {}), (S = {}), (A = {}), (R = p.Z.getChannelId()), O)) clearTimeout(O[e]);
    (O = {}),
        g.Z.forEachGuild((e) => {
            x(e);
        }),
        w();
}
function L(e) {
    for (let n in (delete b[e], delete N[e], delete y[e], delete S[e], delete A[e], x(e), S[e])) M(e, n);
}
function x(e) {
    let n = g.Z.getThreadsForGuild(e);
    for (let e in n)
        for (let r in n[e]) {
            J(r);
            let e = f.Z.getChannel(r);
            if (null == e) continue;
            let n = E.Z.joinTimestamp(r);
            if (null != n) {
                let r = {
                        channel: e,
                        joinTimestamp: n.getTime()
                    },
                    { isUnread: i, isRelevant: a, isTimedRelevant: s } = q(e);
                $(b, e, r, !1), $(N, e, a ? r : null, !1), $(y, e, i ? r : null, !1), s && Q(e, !0);
            } else {
                $(S, e, e, !1);
                let n = h.ZP.isForumPostUnread(e.id);
                $(A, e, n ? e : null, !1);
            }
        }
}
function w() {
    for (let e in ((C = {}), S)) for (let n in S[e]) M(e, n);
}
function P(e) {
    let n = f.Z.getBasicChannel(e);
    null != n && d.uC.has(n.type) && M(n.guild_id, n.id);
}
function M(e, n) {
    let r = f.Z.getChannel(n);
    if (null == r || !r.isForumLikeChannel()) return;
    if ((null == C[e] && (C[e] = {}), (C[e][n] = 0), null == S[e] || null == S[e][n])) return;
    let i = _.Z.getGuild(e);
    if (null == i) return;
    let a = h.ZP.getTrackedAckMessageId(n);
    if (null == a) {
        let e = Date.now();
        null != i.joinedAt && (i.joinedAt instanceof Date ? (e = i.joinedAt.getTime()) : 'string' == typeof i.joinedAt && (e = new Date(i.joinedAt).getTime())), (a = m.default.fromTimestamp(e));
    }
    for (let r in S[e][n]) n === R ? h.ZP.isNewForumThread(r, n, i) && C[e][n]++ : m.default.compare(r, a) > 0 && !h.ZP.hasOpenedThread(r) && C[e][n]++;
}
function k(e, n, r) {
    if (null == n) return !1;
    let i = f.Z.getChannel(r),
        a = E.Z.joinTimestamp(r);
    if (null != i && g.Z.isActive(e, n, r)) {
        if (null != a) {
            let e = {
                    channel: i,
                    joinTimestamp: a.getTime()
                },
                { isUnread: n, isRelevant: r, isTimedRelevant: s } = q(i);
            $(b, i, e, !0), $(N, i, r ? e : null, !0), $(y, i, n ? e : null, !0), $(S, i, null, !0), $(A, i, null, !0), Q(i, s);
        } else {
            let e = h.ZP.isForumPostUnread(i.id);
            $(b, i, null, !0), $(y, i, null, !0), $(N, i, null, !0), $(S, i, i, !0), $(A, i, e ? i : null, !0), J(i.id);
        }
        M(e, n);
    } else ee(b, e, n, r), ee(N, e, n, r), ee(y, e, n, r), ee(S, e, n, r), ee(A, e, n, r), J(r), M(e, n);
}
function U(e) {
    return k(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function B(e) {
    let { channels: n } = e;
    for (let e of n)
        if (e.isNSFW() !== G(e.guild_id, e.parent_id)) {
            D();
            return;
        }
    return !1;
}
function G(e, n) {
    if (null == n) return !1;
    let r = b[e],
        i = null == r ? null : r[n];
    if (null != i) {
        for (let e in i) if (i[e].channel.isNSFW()) return !0;
    }
    let a = S[e],
        s = null == a ? null : a[n];
    if (null != s) {
        for (let e in s) if (s[e].isNSFW()) return !0;
    }
    return !1;
}
function F(e) {
    let { channel: n } = e,
        r = !1;
    return null != n.guild_id && null != n.parent_id && (n.guild_id in b && n.parent_id in b[n.guild_id] && (delete b[n.guild_id][n.parent_id], (r = !0)), n.guild_id in y && n.parent_id in y[n.guild_id] && (delete y[n.guild_id][n.parent_id], (r = !0)), n.guild_id in N && n.parent_id in N[n.guild_id] && (m.default.keys(N[n.guild_id][n.parent_id]).forEach(J), delete N[n.guild_id][n.parent_id], (r = !0)), n.guild_id in S && n.parent_id in S[n.guild_id] && (delete S[n.guild_id][n.parent_id], (r = !0)), n.guild_id in A && n.parent_id in A[n.guild_id] && (delete A[n.guild_id][n.parent_id], (r = !0)), r && M(n.guild_id, n.parent_id)), r;
}
function Z(e) {
    let n = f.Z.getChannel(e.id);
    return !!(null != n && g.Z.isActive(e.guildId, n.parent_id, e.id)) && k(n.guild_id, n.parent_id, n.id);
}
function V(e) {
    let n = f.Z.getChannel(e.channelId);
    if (null == n) j();
    else {
        let { guild_id: e, parent_id: i } = n;
        if (!d.Ec.has(n.type)) {
            var r;
            return !!(Number(null === (r = C[e]) || void 0 === r ? void 0 : r[n.id]) > 0) && (M(e, n.id), !0);
        }
        if (null == i) return !1;
        if (et(b, n)) {
            let { isUnread: r, isRelevant: a, isTimedRelevant: s } = q(n);
            Q(n, s);
            let o = et(y, n),
                l = et(N, n);
            if (r === o && a === l) return !1;
            let u = b[e][i][n.id],
                c = r ? u : null,
                d = a ? u : null;
            $(y, n, c, !0), $(N, n, d, !0), M(e, i);
        } else {
            let e = et(A, n),
                r = h.ZP.isForumPostUnread(n.id);
            if (r === e) return !1;
            $(A, n, r ? n : null, !0);
        }
    }
}
function j() {
    for (let e in ((y = {}), (N = {}), b))
        for (let n in b[e])
            for (let r in b[e][n]) {
                let i = b[e][n][r],
                    { isUnread: a, isRelevant: s, isTimedRelevant: o } = q(i.channel);
                a && $(y, i.channel, i, !1), s && $(N, i.channel, i, !1), Q(i.channel, o);
            }
    for (let e in ((A = {}), S))
        for (let n in S[e])
            for (let r in S[e][n]) {
                let i = S[e][n][r];
                h.ZP.isForumPostUnread(r) && $(A, i, i, !1);
            }
    w();
}
function H(e) {
    if (e.channels.length > 0) return L(e.guildId);
}
function Y(e) {
    let { guild: n } = e;
    return L(n.id);
}
function W(e) {
    let { guildId: n } = e;
    return L(n);
}
function K(e) {
    V(e), z();
}
function z() {
    let e = R;
    if ((R = p.Z.getChannelId()) === e) return !1;
    P(e), P(R);
}
function q(e) {
    let n = h.ZP.getMentionCount(e.id) > 0,
        r = h.ZP.hasUnread(e.id) && !E.Z.isMuted(e.id),
        i = e.hasFlag(I.zZ.PINNED),
        a = e.isActiveThread(),
        s = a && (0, v.Z)(e) > Date.now();
    return {
        isUnread: ((a || i) && r) || n,
        isRelevant: s || i || r || n,
        isTimedRelevant: s
    };
}
function Q(e, n) {
    J(e.id), n && X(e);
}
function X(e) {
    O[e.id] = setTimeout(
        () => {
            let n = f.Z.getChannel(e.id);
            null != n &&
                c.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: n
                });
        },
        (0, v.Z)(e) - Date.now() + 1
    );
}
function J(e) {
    e in O && (clearTimeout(O[e]), delete O[e]);
}
function $(e, n, r, i) {
    let { guild_id: a, parent_id: s, id: o } = n;
    null != a &&
        null != s &&
        null != o &&
        (!(a in e) && (e[a] = {}),
        !(s in e[a]) && (e[a][s] = {}),
        i &&
            (e[a] = {
                ...e[a],
                [s]: { ...e[a][s] }
            }),
        null === r ? (delete e[a][s][o], l().isEmpty(e[a][s]) && delete e[a][s]) : (e[a][s][o] = r));
}
function ee(e, n, r, i) {
    if (null != n && null != r && null != i)
        en(e, n, r, i) &&
            ((e[n] = {
                ...e[n],
                [r]: { ...e[n][r] }
            }),
            delete e[n][r][i],
            l().isEmpty(e[n][r]) && delete e[n][r]);
}
function et(e, n) {
    return en(e, n.guild_id, n.parent_id, n.id);
}
function en(e, n, r, i) {
    return n in e && r in e[n] && i in e[n][r];
}
let er = {},
    ei = {},
    ea = {},
    es = {},
    eo = {};
class el extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, f.Z, E.Z, h.ZP), this.syncWith([p.Z], z);
    }
    hasActiveJoinedUnreadThreads(e, n) {
        return e in y && n in y[e];
    }
    getActiveUnjoinedThreadsForParent(e, n) {
        var r;
        return e in S && null !== (r = S[e][n]) && void 0 !== r ? r : es;
    }
    getActiveJoinedThreadsForParent(e, n) {
        var r;
        return e in b && null !== (r = b[e][n]) && void 0 !== r ? r : ea;
    }
    getActiveJoinedThreadsForGuild(e) {
        var n;
        return null !== (n = b[e]) && void 0 !== n ? n : er;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        var n;
        return null !== (n = y[e]) && void 0 !== n ? n : er;
    }
    getActiveJoinedUnreadThreadsForParent(e, n) {
        var r;
        return null !== (r = this.getActiveJoinedUnreadThreadsForGuild(e)[n]) && void 0 !== r ? r : ea;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        var n;
        return null !== (n = N[e]) && void 0 !== n ? n : er;
    }
    getActiveJoinedRelevantThreadsForParent(e, n) {
        var r;
        return null !== (r = this.getActiveJoinedRelevantThreadsForGuild(e)[n]) && void 0 !== r ? r : ea;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        var n;
        return null !== (n = S[e]) && void 0 !== n ? n : ei;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        var n;
        return null !== (n = A[e]) && void 0 !== n ? n : er;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, n) {
        var r;
        return null !== (r = this.getActiveUnjoinedUnreadThreadsForGuild(e)[n]) && void 0 !== r ? r : ea;
    }
    getNewThreadCountsForGuild(e) {
        var n;
        return null !== (n = C[e]) && void 0 !== n ? n : eo;
    }
    computeAllActiveJoinedThreads(e) {
        let n = [];
        for (let r in b) if (r === e || null == e) for (let e in b[r]) for (let i in b[r][e]) n.push(b[r][e][i].channel);
        return n;
    }
    getNewThreadCount(e, n) {
        var r, i;
        return null !== (i = null === (r = C[e]) || void 0 === r ? void 0 : r[n]) && void 0 !== i ? i : 0;
    }
    getActiveThreadCount(e, n) {
        var r, i, a, s;
        let o = l().size(null !== (a = null === (r = b[e]) || void 0 === r ? void 0 : r[n]) && void 0 !== a ? a : {});
        return o + l().size(null !== (s = null === (i = S[e]) || void 0 === i ? void 0 : i[n]) && void 0 !== s ? s : {});
    }
}
T(el, 'displayName', 'ActiveJoinedThreadsStore'),
    (n.Z = new el(c.Z, {
        CONNECTION_OPEN: D,
        OVERLAY_INITIALIZE: D,
        THREAD_LIST_SYNC: W,
        LOAD_THREADS_SUCCESS: D,
        LOAD_ARCHIVED_THREADS_SUCCESS: D,
        SEARCH_FINISH: D,
        MOD_VIEW_SEARCH_FINISH: D,
        GUILD_CREATE: Y,
        GUILD_DELETE: D,
        CURRENT_USER_UPDATE: D,
        THREAD_CREATE: U,
        THREAD_UPDATE: U,
        THREAD_DELETE: U,
        CHANNEL_UPDATES: B,
        CHANNEL_DELETE: F,
        THREAD_MEMBER_UPDATE: Z,
        THREAD_MEMBERS_UPDATE: Z,
        LOAD_MESSAGES_SUCCESS: V,
        MESSAGE_CREATE: V,
        MESSAGE_DELETE: V,
        MESSAGE_DELETE_BULK: V,
        MESSAGE_ACK: V,
        CHANNEL_ACK: V,
        CHANNEL_LOCAL_ACK: V,
        CHANNEL_SELECT: K,
        PASSIVE_UPDATE_V2: H,
        WINDOW_FOCUS: j,
        UPDATE_CHANNEL_DIMENSIONS: j,
        TRY_ACK: j,
        BULK_ACK: j
    }));
