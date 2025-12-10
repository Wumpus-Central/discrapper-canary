n.d(t, {
    ZP: () => eo,
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
    u = n(622822),
    d = n(786761),
    f = n(572804),
    p = n(901461),
    _ = n(814082),
    m = n(23750),
    h = n(314897),
    g = n(592125),
    E = n(375954),
    b = n(306680),
    y = n(699516),
    O = n(914010),
    v = n(9156),
    S = n(594174),
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
function C(e) {
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
    N = [],
    P = {},
    R = {},
    D = !1,
    w = !0,
    x = s.K.get(A, {
        guildFilter: I.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0,
    }),
    L = !1,
    j = 0,
    M = !1;
function k(e) {
    (P = {}),
        e.forEach((e) => {
            null == P[e.getChannelId()] && (P[e.getChannelId()] = 0), P[e.getChannelId()]++;
        });
}
function U(e) {
    let { addedMessages: t, deletedMessages: n } = e;
    null != t &&
        t.forEach((e) => {
            null == P[e.getChannelId()] && (P[e.getChannelId()] = 0), P[e.getChannelId()]++;
        }),
        null != n &&
            n.forEach((e) => {
                null != P[e.getChannelId()] && (P[e.getChannelId()] = Math.max(0, P[e.getChannelId()] - 1));
            });
}
function G(e) {
    let { guildId: t } = e;
    (D = !0), null == t && x.guildFilter === I.NgX.THIS_SERVER && Q({ guildFilter: I.NgX.ALL_SERVERS });
}
function Z(e) {
    if (e instanceof m.ZP) return e;
    let t = E.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, d.e5)(e);
}
function B(e) {
    let t = g.Z.getBasicChannel(e.channel_id);
    if (
        null == t ||
        !I.TPd.GUILD_TEXTUAL.has(t.type) ||
        v.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        (0, u.zd)(t.id)
    )
        return !1;
    switch (v.ZP.resolvedMessageNotifications(t)) {
        case I.bL.ALL_MESSAGES:
            return !0;
        case I.bL.ONLY_MENTIONS:
            let n = v.ZP.isSuppressEveryoneEnabled(t.guild_id),
                r = v.ZP.isSuppressRolesEnabled(t.guild_id),
                i = S.default.getCurrentUser();
            if (null == i) return !1;
            return (0, f.ZP)({
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
function F(e) {
    let { hasMoreAfter: t, messages: n, isAfter: r } = e,
        i = a().map(n, Z);
    U({ addedMessages: i }),
        r ? (N = N.concat(i)) : ((N = i), (R = {})),
        a().forEach(i, (e) => {
            R[e.id] = !0;
        }),
        (D = !1),
        (w = t),
        (j = (0, l.zO)()),
        (L = !0);
}
function V() {
    D = !1;
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, p.Z)(e) && !I.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = g.Z.getChannel(t);
    if (
        null == n ||
        n.type === I.d4z.DM ||
        (x.guildFilter === I.NgX.THIS_SERVER && n.getGuildId() !== O.Z.getGuildId())
    )
        return null;
    let r = h.default.getId();
    if (y.Z.isBlockedOrIgnoredForMessage(e) || (0, _.Z)(e, r)) return null;
    e = Z(e);
    let i = !x.everyoneFilter,
        a = !x.roleFilter;
    return (0, f.ZP)({
        message: e,
        userId: r,
        suppressEveryone: i,
        suppressRoles: a,
    })
        ? (M &&
              b.ZP.ackMessageId(n.id) !== e.id &&
              (0, f.ZP)({
                  message: e,
                  userId: r,
                  suppressEveryone: v.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: v.ZP.isSuppressRolesEnabled(n.getGuildId()),
              }) &&
              (M = !1),
          e)
        : null;
}
function Y(e) {
    let { channelId: t, message: n } = e,
        r = S.default.getCurrentUser();
    if (
        null == r ||
        !(0, f.Hl)({
            rawMessage: n,
            userId: r.id,
            suppressRoles: !1,
            suppressEveryone: !1,
        })
    )
        return !1;
    let i = H(n, t);
    if (null == i) return !1;
    (N = N.slice()).unshift(i), (R[i.id] = !0), U({ addedMessages: [i] });
}
function W(e) {
    let t = e.message.id;
    if (null == t || null == R[t]) return !1;
    let n = a().findIndex(N, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        r = (N = N.slice())[n];
    null != r && (N[n] = (0, d.wi)(r, e.message));
}
function K(e) {
    if (null == R[e]) return !1;
    delete R[e],
        U({
            deletedMessages: a().filter(N, (t) => {
                let { id: n } = t;
                return n === e;
            }),
        }),
        (N = a().filter(N, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function z(e) {
    let { id: t } = e;
    return K(t);
}
function q(e) {
    let { ids: t } = e;
    a().forEach(t, K);
}
function Q(e) {
    let t = C({}, x);
    (x = a().defaults(a().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), x)), s.K.set(A, x);
    let n = (e, n) => t[e] !== x[e] && x[e] === n,
        r = n("guildFilter", I.NgX.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    R = {};
    let i = [];
    r &&
        N.forEach((e) => {
            let t = H(e);
            null != t && (i.push(t), (R[t.id] = !0));
        }),
        k((N = i)),
        0 === N.length && (L = !1);
}
function X() {
    if (x.guildFilter !== I.NgX.THIS_SERVER) return !1;
    L = !1;
}
function J() {
    (N = []), (R = {}), (L = !1), (M = !1), (P = {});
}
function $(e) {
    let { guild: t } = e,
        n = [];
    (N = a().filter(N, (e) => {
        let r = g.Z.getChannel(e.channel_id);
        return (null != r && r.getGuildId() !== t.id) || (delete R[e.id], n.push(e), !1);
    })),
        U({ deletedMessages: n });
}
function ee() {
    U({ deletedMessages: a().filter(N, (e) => y.Z.isBlockedOrIgnoredForMessage(e)) }),
        (N = N.filter((e) => !y.Z.isBlockedOrIgnoredForMessage(e)));
}
function et(e) {
    let { channel: t } = e,
        n = [];
    (N = a().filter(N, (e) => e.channel_id !== t.id || (delete R[e.id], n.push(e), !1))), U({ deletedMessages: n });
}
function en(e) {
    J();
}
function er(e) {
    let { size: t } = e;
    U({ deletedMessages: N.slice(t) });
    for (let e = t; e < N.length; ++e) delete R[N[e].id];
    N.length > (N = N.slice(0, t)).length && (w = !0);
}
function ei(e) {
    M = !0;
}
class ea extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(h.default, g.Z, E.Z, b.ZP, y.Z, O.Z, v.ZP, S.default);
    }
    get hasLoadedEver() {
        return L;
    }
    get lastLoaded() {
        return j;
    }
    getMentions() {
        return L || N.length > 0 ? N : null;
    }
    getSettingsFilteredMentions() {
        return L || N.length > 0 ? N.filter(B) : null;
    }
    hasMention(e) {
        return R[e];
    }
    get loading() {
        return D;
    }
    get hasMore() {
        return w;
    }
    get guildFilter() {
        return x.guildFilter;
    }
    get everyoneFilter() {
        return x.everyoneFilter;
    }
    get roleFilter() {
        return x.roleFilter;
    }
    get mentionsAreStale() {
        return M;
    }
    get mentionCountByChannel() {
        return P;
    }
    getMentionCountForChannel(e) {
        var t;
        return null != (t = P[e]) ? t : 0;
    }
}
T(ea, "displayName", "RecentMentionsStore");
let eo = new ea(c.Z, {
    LOAD_RECENT_MENTIONS: G,
    LOAD_RECENT_MENTIONS_SUCCESS: F,
    LOAD_RECENT_MENTIONS_FAILURE: V,
    SET_RECENT_MENTIONS_FILTER: Q,
    CLEAR_MENTIONS: en,
    TRUNCATE_MENTIONS: er,
    CHANNEL_SELECT: X,
    CONNECTION_OPEN: J,
    GUILD_DELETE: $,
    MESSAGE_CREATE: Y,
    MESSAGE_UPDATE: W,
    MESSAGE_DELETE: z,
    RECENT_MENTION_DELETE: z,
    MESSAGE_DELETE_BULK: q,
    CHANNEL_DELETE: et,
    THREAD_DELETE: et,
    RELATIONSHIP_ADD: ee,
    RELATIONSHIP_REMOVE: ee,
    RELATIONSHIP_UPDATE: ee,
    SET_RECENT_MENTIONS_STALE: ei,
});
