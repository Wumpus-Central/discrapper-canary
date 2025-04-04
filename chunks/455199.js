n.d(t, { Z: () => ei }), n(733860), n(653041);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(433517),
    l = n(379649),
    c = n(570140),
    u = n(786761),
    d = n(572804),
    f = n(901461),
    _ = n(814082),
    p = n(23750),
    h = n(314897),
    m = n(592125),
    g = n(375954),
    E = n(306680),
    b = n(699516),
    y = n(914010),
    v = n(9156),
    O = n(594174),
    I = n(981631);
function S(e, t, n) {
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
function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let N = 'recentMentionFilterSettings',
    A = [],
    C = {},
    R = {},
    P = !1,
    w = !0,
    D = s.K.get(N, {
        guildFilter: I.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0
    }),
    L = !1,
    x = 0,
    M = !1;
function k(e) {
    (C = {}),
        e.forEach((e) => {
            null == C[e.getChannelId()] && (C[e.getChannelId()] = 0), C[e.getChannelId()]++;
        });
}
function j(e) {
    let { addedMessages: t, deletedMessages: n } = e;
    null != t &&
        t.forEach((e) => {
            null == C[e.getChannelId()] && (C[e.getChannelId()] = 0), C[e.getChannelId()]++;
        }),
        null != n &&
            n.forEach((e) => {
                null != C[e.getChannelId()] && (C[e.getChannelId()] = Math.max(0, C[e.getChannelId()] - 1));
            });
}
function U(e) {
    let { guildId: t } = e;
    (P = !0), null == t && D.guildFilter === I.NgX.THIS_SERVER && z({ guildFilter: I.NgX.ALL_SERVERS });
}
function G(e) {
    if (e instanceof p.ZP) return e;
    let t = g.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, u.e5)(e);
}
function B(e) {
    let { hasMoreAfter: t, messages: n, isAfter: r } = e,
        i = o().map(n, G);
    j({ addedMessages: i }),
        r ? (A = A.concat(i)) : ((A = i), (R = {})),
        o().forEach(i, (e) => {
            R[e.id] = !0;
        }),
        (P = !1),
        (w = t),
        (x = (0, l.zO)()),
        (L = !0);
}
function F() {
    P = !1;
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, f.Z)(e) && !I.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = m.Z.getChannel(t);
    if (null == n || n.type === I.d4z.DM || (D.guildFilter === I.NgX.THIS_SERVER && n.getGuildId() !== y.Z.getGuildId())) return null;
    let r = h.default.getId();
    if (b.Z.isBlockedOrIgnoredForMessage(e) || (0, _.Z)(e, r)) return null;
    e = G(e);
    let i = !D.everyoneFilter,
        o = !D.roleFilter;
    return (0, d.ZP)({
        message: e,
        userId: r,
        suppressEveryone: i,
        suppressRoles: o
    })
        ? (M &&
              E.ZP.ackMessageId(n.id) !== e.id &&
              (0, d.ZP)({
                  message: e,
                  userId: r,
                  suppressEveryone: v.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: v.ZP.isSuppressRolesEnabled(n.getGuildId())
              }) &&
              (M = !1),
          e)
        : null;
}
function Z(e) {
    let { channelId: t, message: n } = e,
        r = O.default.getCurrentUser();
    if (
        null == r ||
        !(0, d.Hl)({
            rawMessage: n,
            userId: r.id,
            suppressRoles: !1,
            suppressEveryone: !1
        })
    )
        return !1;
    let i = V(n, t);
    if (null == i) return !1;
    (A = A.slice()).unshift(i), (R[i.id] = !0), j({ addedMessages: [i] });
}
function H(e) {
    let t = e.message.id;
    if (null == R[String(t)]) return !1;
    let n = o().findIndex(A, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        r = (A = A.slice())[n];
    null != r && (A[n] = (0, u.wi)(r, e.message));
}
function W(e) {
    if (null == R[e]) return !1;
    delete R[e],
        j({
            deletedMessages: o().filter(A, (t) => {
                let { id: n } = t;
                return n === e;
            })
        }),
        (A = o().filter(A, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function Y(e) {
    let { id: t } = e;
    return W(t);
}
function K(e) {
    let { ids: t } = e;
    o().forEach(t, W);
}
function z(e) {
    let t = T({}, D);
    (D = o().defaults(o().pick(e, ['guildFilter', 'roleFilter', 'everyoneFilter']), D)), s.K.set(N, D);
    let n = (e, n) => t[e] !== D[e] && D[e] === n,
        r = n('guildFilter', I.NgX.THIS_SERVER) || n('everyoneFilter', !1) || n('roleFilter', !1);
    R = {};
    let i = [];
    r &&
        A.forEach((e) => {
            let t = V(e);
            null != t && (i.push(t), (R[t.id] = !0));
        }),
        k((A = i)),
        0 === A.length && (L = !1);
}
function q() {
    if (D.guildFilter !== I.NgX.THIS_SERVER) return !1;
    L = !1;
}
function Q() {
    (A = []), (R = {}), (L = !1), (M = !1), (C = {});
}
function X(e) {
    let { guild: t } = e,
        n = [];
    (A = o().filter(A, (e) => {
        let r = m.Z.getChannel(e.channel_id);
        return (null != r && r.getGuildId() !== t.id) || (delete R[e.id], n.push(e), !1);
    })),
        j({ deletedMessages: n });
}
function J() {
    j({ deletedMessages: o().filter(A, (e) => b.Z.isBlockedOrIgnoredForMessage(e)) }), (A = A.filter((e) => !b.Z.isBlockedOrIgnoredForMessage(e)));
}
function $(e) {
    let { channel: t } = e,
        n = [];
    (A = o().filter(A, (e) => e.channel_id !== t.id || (delete R[e.id], n.push(e), !1))), j({ deletedMessages: n });
}
function ee(e) {
    Q();
}
function et(e) {
    let { size: t } = e;
    j({ deletedMessages: A.slice(t) });
    for (let e = t; e < A.length; ++e) delete R[A[e].id];
    A.length > (A = A.slice(0, t)).length && (w = !0);
}
function en(e) {
    M = !0;
}
class er extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(O.default, m.Z, g.Z, E.ZP);
    }
    get hasLoadedEver() {
        return L;
    }
    get lastLoaded() {
        return x;
    }
    getMentions() {
        return L || A.length > 0 ? A : null;
    }
    hasMention(e) {
        return R[e];
    }
    get loading() {
        return P;
    }
    get hasMore() {
        return w;
    }
    get guildFilter() {
        return D.guildFilter;
    }
    get everyoneFilter() {
        return D.everyoneFilter;
    }
    get roleFilter() {
        return D.roleFilter;
    }
    get mentionsAreStale() {
        return M;
    }
    get mentionCountByChannel() {
        return C;
    }
    getMentionCountForChannel(e) {
        var t;
        return null != (t = C[e]) ? t : 0;
    }
}
S(er, 'displayName', 'RecentMentionsStore');
let ei = new er(c.Z, {
    LOAD_RECENT_MENTIONS: U,
    LOAD_RECENT_MENTIONS_SUCCESS: B,
    LOAD_RECENT_MENTIONS_FAILURE: F,
    SET_RECENT_MENTIONS_FILTER: z,
    CLEAR_MENTIONS: ee,
    TRUNCATE_MENTIONS: et,
    CHANNEL_SELECT: q,
    CONNECTION_OPEN: Q,
    GUILD_DELETE: X,
    MESSAGE_CREATE: Z,
    MESSAGE_UPDATE: H,
    MESSAGE_DELETE: Y,
    RECENT_MENTION_DELETE: Y,
    MESSAGE_DELETE_BULK: K,
    CHANNEL_DELETE: $,
    THREAD_DELETE: $,
    RELATIONSHIP_ADD: J,
    RELATIONSHIP_REMOVE: J,
    RELATIONSHIP_UPDATE: J,
    SET_RECENT_MENTIONS_STALE: en
});
