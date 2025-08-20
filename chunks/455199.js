n.d(t, {
    ZP: () => ea,
    ln: () => B,
}),
    n(290780),
    n(539854);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
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
    O = n(9156),
    v = n(594174),
    I = n(981631);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
let A = "recentMentionFilterSettings",
    C = [],
    N = {},
    R = {},
    P = !1,
    w = !0,
    D = s.K.get(A, {
        guildFilter: I.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0,
    }),
    x = !1,
    L = 0,
    j = !1;
function M(e) {
    (N = {}),
        e.forEach((e) => {
            null == N[e.getChannelId()] && (N[e.getChannelId()] = 0), N[e.getChannelId()]++;
        });
}
function k(e) {
    let { addedMessages: t, deletedMessages: n } = e;
    null != t &&
        t.forEach((e) => {
            null == N[e.getChannelId()] && (N[e.getChannelId()] = 0), N[e.getChannelId()]++;
        }),
        null != n &&
            n.forEach((e) => {
                null != N[e.getChannelId()] && (N[e.getChannelId()] = Math.max(0, N[e.getChannelId()] - 1));
            });
}
function U(e) {
    let { guildId: t } = e;
    (P = !0), null == t && D.guildFilter === I.NgX.THIS_SERVER && q({ guildFilter: I.NgX.ALL_SERVERS });
}
function G(e) {
    if (e instanceof p.ZP) return e;
    let t = g.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, u.e5)(e);
}
function B(e) {
    let t = m.Z.getBasicChannel(e.channel_id);
    if (null == t || !I.TPd.GUILD_TEXTUAL.has(t.type) || O.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id))
        return !1;
    switch (O.ZP.resolvedMessageNotifications(t)) {
        case I.bL.ALL_MESSAGES:
            return !0;
        case I.bL.ONLY_MENTIONS:
            let n = O.ZP.isSuppressEveryoneEnabled(t.guild_id),
                r = O.ZP.isSuppressRolesEnabled(t.guild_id),
                i = v.default.getCurrentUser();
            if (null == i) return !1;
            return (0, d.ZP)({
                message: e,
                userId: i.id,
                suppressEveryone: n,
                suppressRoles: r,
            });
        case I.bL.NO_MESSAGES:
        default:
            return !1;
    }
}
function Z(e) {
    let { hasMoreAfter: t, messages: n, isAfter: r } = e,
        i = a().map(n, G);
    k({ addedMessages: i }),
        r ? (C = C.concat(i)) : ((C = i), (R = {})),
        a().forEach(i, (e) => {
            R[e.id] = !0;
        }),
        (P = !1),
        (w = t),
        (L = (0, l.zO)()),
        (x = !0);
}
function V() {
    P = !1;
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, f.Z)(e) && !I.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = m.Z.getChannel(t);
    if (
        null == n ||
        n.type === I.d4z.DM ||
        (D.guildFilter === I.NgX.THIS_SERVER && n.getGuildId() !== y.Z.getGuildId())
    )
        return null;
    let r = h.default.getId();
    if (b.Z.isBlockedOrIgnoredForMessage(e) || (0, _.Z)(e, r)) return null;
    e = G(e);
    let i = !D.everyoneFilter,
        a = !D.roleFilter;
    return (0, d.ZP)({
        message: e,
        userId: r,
        suppressEveryone: i,
        suppressRoles: a,
    })
        ? (j &&
              E.ZP.ackMessageId(n.id) !== e.id &&
              (0, d.ZP)({
                  message: e,
                  userId: r,
                  suppressEveryone: O.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: O.ZP.isSuppressRolesEnabled(n.getGuildId()),
              }) &&
              (j = !1),
          e)
        : null;
}
function H(e) {
    let { channelId: t, message: n } = e,
        r = v.default.getCurrentUser();
    if (
        null == r ||
        !(0, d.Hl)({
            rawMessage: n,
            userId: r.id,
            suppressRoles: !1,
            suppressEveryone: !1,
        })
    )
        return !1;
    let i = F(n, t);
    if (null == i) return !1;
    (C = C.slice()).unshift(i), (R[i.id] = !0), k({ addedMessages: [i] });
}
function Y(e) {
    let t = e.message.id;
    if (null == t || null == R[t]) return !1;
    let n = a().findIndex(C, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        r = (C = C.slice())[n];
    null != r && (C[n] = (0, u.wi)(r, e.message));
}
function W(e) {
    if (null == R[e]) return !1;
    delete R[e],
        k({
            deletedMessages: a().filter(C, (t) => {
                let { id: n } = t;
                return n === e;
            }),
        }),
        (C = a().filter(C, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function K(e) {
    let { id: t } = e;
    return W(t);
}
function z(e) {
    let { ids: t } = e;
    a().forEach(t, W);
}
function q(e) {
    let t = S({}, D);
    (D = a().defaults(a().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D)), s.K.set(A, D);
    let n = (e, n) => t[e] !== D[e] && D[e] === n,
        r = n("guildFilter", I.NgX.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    R = {};
    let i = [];
    r &&
        C.forEach((e) => {
            let t = F(e);
            null != t && (i.push(t), (R[t.id] = !0));
        }),
        M((C = i)),
        0 === C.length && (x = !1);
}
function X() {
    if (D.guildFilter !== I.NgX.THIS_SERVER) return !1;
    x = !1;
}
function Q() {
    (C = []), (R = {}), (x = !1), (j = !1), (N = {});
}
function J(e) {
    let { guild: t } = e,
        n = [];
    (C = a().filter(C, (e) => {
        let r = m.Z.getChannel(e.channel_id);
        return (null != r && r.getGuildId() !== t.id) || (delete R[e.id], n.push(e), !1);
    })),
        k({ deletedMessages: n });
}
function $() {
    k({ deletedMessages: a().filter(C, (e) => b.Z.isBlockedOrIgnoredForMessage(e)) }),
        (C = C.filter((e) => !b.Z.isBlockedOrIgnoredForMessage(e)));
}
function ee(e) {
    let { channel: t } = e,
        n = [];
    (C = a().filter(C, (e) => e.channel_id !== t.id || (delete R[e.id], n.push(e), !1))), k({ deletedMessages: n });
}
function et(e) {
    Q();
}
function en(e) {
    let { size: t } = e;
    k({ deletedMessages: C.slice(t) });
    for (let e = t; e < C.length; ++e) delete R[C[e].id];
    C.length > (C = C.slice(0, t)).length && (w = !0);
}
function er(e) {
    j = !0;
}
class ei extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(v.default, m.Z, g.Z, E.ZP, O.ZP);
    }
    get hasLoadedEver() {
        return x;
    }
    get lastLoaded() {
        return L;
    }
    getMentions() {
        return x || C.length > 0 ? C : null;
    }
    getSettingsFilteredMentions() {
        return x || C.length > 0 ? C.filter(B) : null;
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
        return j;
    }
    get mentionCountByChannel() {
        return N;
    }
    getMentionCountForChannel(e) {
        var t;
        return null != (t = N[e]) ? t : 0;
    }
}
T(ei, "displayName", "RecentMentionsStore");
let ea = new ei(c.Z, {
    LOAD_RECENT_MENTIONS: U,
    LOAD_RECENT_MENTIONS_SUCCESS: Z,
    LOAD_RECENT_MENTIONS_FAILURE: V,
    SET_RECENT_MENTIONS_FILTER: q,
    CLEAR_MENTIONS: et,
    TRUNCATE_MENTIONS: en,
    CHANNEL_SELECT: X,
    CONNECTION_OPEN: Q,
    GUILD_DELETE: J,
    MESSAGE_CREATE: H,
    MESSAGE_UPDATE: Y,
    MESSAGE_DELETE: K,
    RECENT_MENTION_DELETE: K,
    MESSAGE_DELETE_BULK: z,
    CHANNEL_DELETE: ee,
    THREAD_DELETE: ee,
    RELATIONSHIP_ADD: $,
    RELATIONSHIP_REMOVE: $,
    RELATIONSHIP_UPDATE: $,
    SET_RECENT_MENTIONS_STALE: er,
});
