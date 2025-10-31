n.d(t, {
    ZP: () => eo,
    ln: () => Z,
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
    _ = n(901461),
    p = n(814082),
    h = n(23750),
    m = n(314897),
    g = n(592125),
    E = n(375954),
    b = n(306680),
    y = n(699516),
    O = n(914010),
    v = n(9156),
    I = n(594174),
    T = n(981631);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let C = "recentMentionFilterSettings",
    N = [],
    R = {},
    P = {},
    w = !1,
    D = !0,
    x = s.K.get(C, {
        guildFilter: T.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0,
    }),
    L = !1,
    M = 0,
    j = !1;
function k(e) {
    (R = {}),
        e.forEach((e) => {
            null == R[e.getChannelId()] && (R[e.getChannelId()] = 0), R[e.getChannelId()]++;
        });
}
function U(e) {
    let { addedMessages: t, deletedMessages: n } = e;
    null != t &&
        t.forEach((e) => {
            null == R[e.getChannelId()] && (R[e.getChannelId()] = 0), R[e.getChannelId()]++;
        }),
        null != n &&
            n.forEach((e) => {
                null != R[e.getChannelId()] && (R[e.getChannelId()] = Math.max(0, R[e.getChannelId()] - 1));
            });
}
function G(e) {
    let { guildId: t } = e;
    (w = !0), null == t && x.guildFilter === T.NgX.THIS_SERVER && X({ guildFilter: T.NgX.ALL_SERVERS });
}
function B(e) {
    if (e instanceof h.ZP) return e;
    let t = E.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, d.e5)(e);
}
function Z(e) {
    let t = g.Z.getBasicChannel(e.channel_id);
    if (
        null == t ||
        !T.TPd.GUILD_TEXTUAL.has(t.type) ||
        v.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        (0, u.zd)(t.id)
    )
        return !1;
    switch (v.ZP.resolvedMessageNotifications(t)) {
        case T.bL.ALL_MESSAGES:
            return !0;
        case T.bL.ONLY_MENTIONS:
            let n = v.ZP.isSuppressEveryoneEnabled(t.guild_id),
                r = v.ZP.isSuppressRolesEnabled(t.guild_id),
                i = I.default.getCurrentUser();
            if (null == i) return !1;
            return (0, f.ZP)({
                message: e,
                userId: i.id,
                suppressEveryone: n,
                suppressRoles: r,
            });
        case T.bL.NO_MESSAGES:
        default:
            return !1;
    }
}
function F(e) {
    let { hasMoreAfter: t, messages: n, isAfter: r } = e,
        i = a().map(n, B);
    U({ addedMessages: i }),
        r ? (N = N.concat(i)) : ((N = i), (P = {})),
        a().forEach(i, (e) => {
            P[e.id] = !0;
        }),
        (w = !1),
        (D = t),
        (M = (0, l.zO)()),
        (L = !0);
}
function V() {
    w = !1;
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, _.Z)(e) && !T.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = g.Z.getChannel(t);
    if (
        null == n ||
        n.type === T.d4z.DM ||
        (x.guildFilter === T.NgX.THIS_SERVER && n.getGuildId() !== O.Z.getGuildId())
    )
        return null;
    let r = m.default.getId();
    if (y.Z.isBlockedOrIgnoredForMessage(e) || (0, p.Z)(e, r)) return null;
    e = B(e);
    let i = !x.everyoneFilter,
        a = !x.roleFilter;
    return (0, f.ZP)({
        message: e,
        userId: r,
        suppressEveryone: i,
        suppressRoles: a,
    })
        ? (j &&
              b.ZP.ackMessageId(n.id) !== e.id &&
              (0, f.ZP)({
                  message: e,
                  userId: r,
                  suppressEveryone: v.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: v.ZP.isSuppressRolesEnabled(n.getGuildId()),
              }) &&
              (j = !1),
          e)
        : null;
}
function Y(e) {
    let { channelId: t, message: n } = e,
        r = I.default.getCurrentUser();
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
    (N = N.slice()).unshift(i), (P[i.id] = !0), U({ addedMessages: [i] });
}
function W(e) {
    let t = e.message.id;
    if (null == t || null == P[t]) return !1;
    let n = a().findIndex(N, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        r = (N = N.slice())[n];
    null != r && (N[n] = (0, d.wi)(r, e.message));
}
function K(e) {
    if (null == P[e]) return !1;
    delete P[e],
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
function X(e) {
    let t = A({}, x);
    (x = a().defaults(a().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), x)), s.K.set(C, x);
    let n = (e, n) => t[e] !== x[e] && x[e] === n,
        r = n("guildFilter", T.NgX.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    P = {};
    let i = [];
    r &&
        N.forEach((e) => {
            let t = H(e);
            null != t && (i.push(t), (P[t.id] = !0));
        }),
        k((N = i)),
        0 === N.length && (L = !1);
}
function Q() {
    if (x.guildFilter !== T.NgX.THIS_SERVER) return !1;
    L = !1;
}
function J() {
    (N = []), (P = {}), (L = !1), (j = !1), (R = {});
}
function $(e) {
    let { guild: t } = e,
        n = [];
    (N = a().filter(N, (e) => {
        let r = g.Z.getChannel(e.channel_id);
        return (null != r && r.getGuildId() !== t.id) || (delete P[e.id], n.push(e), !1);
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
    (N = a().filter(N, (e) => e.channel_id !== t.id || (delete P[e.id], n.push(e), !1))), U({ deletedMessages: n });
}
function en(e) {
    J();
}
function er(e) {
    let { size: t } = e;
    U({ deletedMessages: N.slice(t) });
    for (let e = t; e < N.length; ++e) delete P[N[e].id];
    N.length > (N = N.slice(0, t)).length && (D = !0);
}
function ei(e) {
    j = !0;
}
class ea extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(m.default, g.Z, E.Z, b.ZP, y.Z, O.Z, v.ZP, I.default);
    }
    get hasLoadedEver() {
        return L;
    }
    get lastLoaded() {
        return M;
    }
    getMentions() {
        return L || N.length > 0 ? N : null;
    }
    getSettingsFilteredMentions() {
        return L || N.length > 0 ? N.filter(Z) : null;
    }
    hasMention(e) {
        return P[e];
    }
    get loading() {
        return w;
    }
    get hasMore() {
        return D;
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
        return j;
    }
    get mentionCountByChannel() {
        return R;
    }
    getMentionCountForChannel(e) {
        var t;
        return null != (t = R[e]) ? t : 0;
    }
}
S(ea, "displayName", "RecentMentionsStore");
let eo = new ea(c.Z, {
    LOAD_RECENT_MENTIONS: G,
    LOAD_RECENT_MENTIONS_SUCCESS: F,
    LOAD_RECENT_MENTIONS_FAILURE: V,
    SET_RECENT_MENTIONS_FILTER: X,
    CLEAR_MENTIONS: en,
    TRUNCATE_MENTIONS: er,
    CHANNEL_SELECT: Q,
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
