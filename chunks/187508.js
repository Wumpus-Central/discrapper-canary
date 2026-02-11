"use strict";
n.d(t, { Ay: () => ei, pK: () => F }), n(667532), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(506774),
    o = n(499979),
    l = n(73153),
    u = n(323073),
    c = n(141468),
    d = n(451919),
    _ = n(143413),
    f = n(204162),
    h = n(383233),
    p = n(961350),
    g = n(734057),
    E = n(320501),
    A = n(222823),
    I = n(994500),
    T = n(967198),
    y = n(543465),
    S = n(287809),
    v = n(652215);
let C = "recentMentionFilterSettings",
    b = [],
    N = {},
    R = {},
    O = !1,
    D = !0,
    L = s.w.get(C, { guildFilter: v.KE7.ALL_SERVERS, everyoneFilter: !0, roleFilter: !0 }),
    w = !1,
    x = 0,
    P = !1;
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
    (O = !0), null == t && L.guildFilter === v.KE7.THIS_SERVER && z({ guildFilter: v.KE7.ALL_SERVERS });
}
function G(e) {
    if (e instanceof h.Ay) return e;
    let t = E.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, c.rh)(e);
}
function F(e) {
    let t = g.A.getBasicChannel(e.channel_id);
    if (
        null == t ||
        !v.kvI.GUILD_TEXTUAL.has(t.type) ||
        y.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        (0, u.UK)(t.id)
    )
        return !1;
    switch (y.Ay.resolvedMessageNotifications(t)) {
        case v.orn.ALL_MESSAGES:
            return !0;
        case v.orn.ONLY_MENTIONS:
            let n = y.Ay.isSuppressEveryoneEnabled(t.guild_id),
                r = y.Ay.isSuppressRolesEnabled(t.guild_id),
                i = S.default.getCurrentUser();
            if (null == i) return !1;
            return (0, d.Ay)({ message: e, userId: i.id, suppressEveryone: n, suppressRoles: r });
        case v.orn.NO_MESSAGES:
        default:
            return !1;
    }
}
function V(e) {
    let { hasMoreAfter: t, messages: n, isAfter: r } = e,
        a = i().map(n, G);
    k({ addedMessages: a }),
        r ? (b = b.concat(a)) : ((b = a), (R = {})),
        i().forEach(a, (e) => {
            R[e.id] = !0;
        }),
        (O = !1),
        (D = t),
        (x = (0, o.tB)()),
        (w = !0);
}
function B() {
    O = !1;
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, _.A)(e) && !v.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = g.A.getChannel(t);
    if (
        null == n ||
        n.type === v.rbe.DM ||
        (L.guildFilter === v.KE7.THIS_SERVER && n.getGuildId() !== T.A.getGuildId())
    )
        return null;
    let r = p.default.getId();
    if (I.A.isBlockedOrIgnoredForMessage(e) || (0, f.A)(e, r)) return null;
    e = G(e);
    let i = !L.everyoneFilter,
        a = !L.roleFilter;
    return (0, d.Ay)({ message: e, userId: r, suppressEveryone: i, suppressRoles: a })
        ? (P &&
              A.Ay.ackMessageId(n.id) !== e.id &&
              (0, d.Ay)({
                  message: e,
                  userId: r,
                  suppressEveryone: y.Ay.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: y.Ay.isSuppressRolesEnabled(n.getGuildId()),
              }) &&
              (P = !1),
          e)
        : null;
}
function H(e) {
    let { channelId: t, message: n } = e,
        r = S.default.getCurrentUser();
    if (null == r || !(0, d.bG)({ rawMessage: n, userId: r.id, suppressRoles: !1, suppressEveryone: !1 })) return !1;
    let i = j(n, t);
    if (null == i) return !1;
    (b = b.slice()).unshift(i), (R[i.id] = !0), k({ addedMessages: [i] });
}
function Y(e) {
    let t = e.message.id;
    if (null == t || null == R[t]) return !1;
    let n = i().findIndex(b, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        r = (b = b.slice())[n];
    null != r && (b[n] = (0, c.IU)(r, e.message));
}
function W(e) {
    if (null == R[e]) return !1;
    delete R[e],
        k({
            deletedMessages: i().filter(b, (t) => {
                let { id: n } = t;
                return n === e;
            }),
        }),
        (b = i().filter(b, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function K(e) {
    let { id: t } = e;
    return W(t);
}
function $(e) {
    let { ids: t } = e;
    i().forEach(t, W);
}
function z(e) {
    let t = { ...L };
    (L = i().defaults(i().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), L)), s.w.set(C, L);
    let n = (e, n) => t[e] !== L[e] && L[e] === n,
        r = n("guildFilter", v.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    R = {};
    let a = [];
    r &&
        b.forEach((e) => {
            let t = j(e);
            null != t && (a.push(t), (R[t.id] = !0));
        }),
        M((b = a)),
        0 === b.length && (w = !1);
}
function q() {
    if (L.guildFilter !== v.KE7.THIS_SERVER) return !1;
    w = !1;
}
function X() {
    (b = []), (R = {}), (w = !1), (P = !1), (N = {});
}
function Z(e) {
    let { guild: t } = e,
        n = [];
    (b = i().filter(b, (e) => {
        let r = g.A.getChannel(e.channel_id);
        return (null != r && r.getGuildId() !== t.id) || (delete R[e.id], n.push(e), !1);
    })),
        k({ deletedMessages: n });
}
function Q() {
    k({ deletedMessages: i().filter(b, (e) => I.A.isBlockedOrIgnoredForMessage(e)) }),
        (b = b.filter((e) => !I.A.isBlockedOrIgnoredForMessage(e)));
}
function J(e) {
    let { channel: t } = e,
        n = [];
    (b = i().filter(b, (e) => e.channel_id !== t.id || (delete R[e.id], n.push(e), !1))), k({ deletedMessages: n });
}
function ee(e) {
    X();
}
function et(e) {
    let { size: t } = e;
    k({ deletedMessages: b.slice(t) });
    for (let e = t; e < b.length; ++e) delete R[b[e].id];
    b.length > (b = b.slice(0, t)).length && (D = !0);
}
function en(e) {
    P = !0;
}
class er extends a.Ay.Store {
    static displayName = "RecentMentionsStore";
    initialize() {
        this.waitFor(p.default, g.A, E.A, A.Ay, I.A, T.A, y.Ay, S.default);
    }
    get hasLoadedEver() {
        return w;
    }
    get lastLoaded() {
        return x;
    }
    getMentions() {
        return w || b.length > 0 ? b : null;
    }
    getSettingsFilteredMentions() {
        return w || b.length > 0 ? b.filter(F) : null;
    }
    hasMention(e) {
        return R[e];
    }
    get loading() {
        return O;
    }
    get hasMore() {
        return D;
    }
    get guildFilter() {
        return L.guildFilter;
    }
    get everyoneFilter() {
        return L.everyoneFilter;
    }
    get roleFilter() {
        return L.roleFilter;
    }
    get mentionsAreStale() {
        return P;
    }
    get mentionCountByChannel() {
        return N;
    }
    getMentionCountForChannel(e) {
        return N[e] ?? 0;
    }
}
let ei = new er(l.h, {
    LOAD_RECENT_MENTIONS: U,
    LOAD_RECENT_MENTIONS_SUCCESS: V,
    LOAD_RECENT_MENTIONS_FAILURE: B,
    SET_RECENT_MENTIONS_FILTER: z,
    CLEAR_MENTIONS: ee,
    TRUNCATE_MENTIONS: et,
    CHANNEL_SELECT: q,
    CONNECTION_OPEN: X,
    GUILD_DELETE: Z,
    MESSAGE_CREATE: H,
    MESSAGE_UPDATE: Y,
    MESSAGE_DELETE: K,
    RECENT_MENTION_DELETE: K,
    MESSAGE_DELETE_BULK: $,
    CHANNEL_DELETE: J,
    THREAD_DELETE: J,
    RELATIONSHIP_ADD: Q,
    RELATIONSHIP_REMOVE: Q,
    RELATIONSHIP_UPDATE: Q,
    SET_RECENT_MENTIONS_STALE: en,
});
