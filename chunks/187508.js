"use strict";
n.d(t, { Ay: () => er, pK: () => G }), n(667532), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(499979),
    l = n(73153),
    u = n(323073),
    c = n(141468),
    d = n(451919),
    _ = n(143413),
    f = n(204162),
    p = n(383233),
    h = n(961350),
    m = n(734057),
    E = n(320501),
    g = n(222823),
    A = n(994500),
    I = n(967198),
    T = n(543465),
    S = n(287809),
    y = n(652215);
let v = "recentMentionFilterSettings",
    N = [],
    C = {},
    b = {},
    R = !1,
    O = !0,
    D = a.w.get(v, { guildFilter: y.KE7.ALL_SERVERS, everyoneFilter: !0, roleFilter: !0 }),
    L = !1,
    w = 0,
    x = !1;
function M(e) {
    (C = {}),
        e.forEach((e) => {
            null == C[e.getChannelId()] && (C[e.getChannelId()] = 0), C[e.getChannelId()]++;
        });
}
function P(e) {
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
function k(e) {
    let { guildId: t } = e;
    (R = !0), null == t && D.guildFilter === y.KE7.THIS_SERVER && z({ guildFilter: y.KE7.ALL_SERVERS });
}
function U(e) {
    if (e instanceof p.Ay) return e;
    let t = E.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, c.rh)(e);
}
function G(e) {
    let t = m.A.getBasicChannel(e.channel_id);
    if (
        null == t ||
        !y.kvI.GUILD_TEXTUAL.has(t.type) ||
        T.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        (0, u.UK)(t.id)
    )
        return !1;
    switch (T.Ay.resolvedMessageNotifications(t)) {
        case y.orn.ALL_MESSAGES:
            return !0;
        case y.orn.ONLY_MENTIONS:
            let n = T.Ay.isSuppressEveryoneEnabled(t.guild_id),
                r = T.Ay.isSuppressRolesEnabled(t.guild_id),
                i = S.default.getCurrentUser();
            if (null == i) return !1;
            return (0, d.Ay)({ message: e, userId: i.id, suppressEveryone: n, suppressRoles: r });
        case y.orn.NO_MESSAGES:
        default:
            return !1;
    }
}
function F(e) {
    let { hasMoreAfter: t, messages: n, isAfter: r } = e,
        s = i().map(n, U);
    P({ addedMessages: s }),
        r ? (N = N.concat(s)) : ((N = s), (b = {})),
        i().forEach(s, (e) => {
            b[e.id] = !0;
        }),
        (R = !1),
        (O = t),
        (w = (0, o.tB)()),
        (L = !0);
}
function V() {
    R = !1;
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, _.A)(e) && !y.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = m.A.getChannel(t);
    if (
        null == n ||
        n.type === y.rbe.DM ||
        (D.guildFilter === y.KE7.THIS_SERVER && n.getGuildId() !== I.A.getGuildId())
    )
        return null;
    let r = h.default.getId();
    if (A.A.isBlockedOrIgnoredForMessage(e) || (0, f.A)(e, r)) return null;
    e = U(e);
    let i = !D.everyoneFilter,
        s = !D.roleFilter;
    return (0, d.Ay)({ message: e, userId: r, suppressEveryone: i, suppressRoles: s })
        ? (x &&
              g.Ay.ackMessageId(n.id) !== e.id &&
              (0, d.Ay)({
                  message: e,
                  userId: r,
                  suppressEveryone: T.Ay.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: T.Ay.isSuppressRolesEnabled(n.getGuildId()),
              }) &&
              (x = !1),
          e)
        : null;
}
function H(e) {
    let { channelId: t, message: n } = e,
        r = S.default.getCurrentUser();
    if (null == r || !(0, d.bG)({ rawMessage: n, userId: r.id, suppressRoles: !1, suppressEveryone: !1 })) return !1;
    let i = B(n, t);
    if (null == i) return !1;
    (N = N.slice()).unshift(i), (b[i.id] = !0), P({ addedMessages: [i] });
}
function j(e) {
    let t = e.message.id;
    if (null == t || null == b[t]) return !1;
    let n = i().findIndex(N, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        r = (N = N.slice())[n];
    null != r && (N[n] = (0, c.IU)(r, e.message));
}
function Y(e) {
    if (null == b[e]) return !1;
    delete b[e],
        P({
            deletedMessages: i().filter(N, (t) => {
                let { id: n } = t;
                return n === e;
            }),
        }),
        (N = i().filter(N, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function W(e) {
    let { id: t } = e;
    return Y(t);
}
function K(e) {
    let { ids: t } = e;
    i().forEach(t, Y);
}
function z(e) {
    let t = { ...D };
    (D = i().defaults(i().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D)), a.w.set(v, D);
    let n = (e, n) => t[e] !== D[e] && D[e] === n,
        r = n("guildFilter", y.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    b = {};
    let s = [];
    r &&
        N.forEach((e) => {
            let t = B(e);
            null != t && (s.push(t), (b[t.id] = !0));
        }),
        M((N = s)),
        0 === N.length && (L = !1);
}
function $() {
    if (D.guildFilter !== y.KE7.THIS_SERVER) return !1;
    L = !1;
}
function q() {
    (N = []), (b = {}), (L = !1), (x = !1), (C = {});
}
function Z(e) {
    let { guild: t } = e,
        n = [];
    (N = i().filter(N, (e) => {
        let r = m.A.getChannel(e.channel_id);
        return (null != r && r.getGuildId() !== t.id) || (delete b[e.id], n.push(e), !1);
    })),
        P({ deletedMessages: n });
}
function X() {
    P({ deletedMessages: i().filter(N, (e) => A.A.isBlockedOrIgnoredForMessage(e)) }),
        (N = N.filter((e) => !A.A.isBlockedOrIgnoredForMessage(e)));
}
function Q(e) {
    let { channel: t } = e,
        n = [];
    (N = i().filter(N, (e) => e.channel_id !== t.id || (delete b[e.id], n.push(e), !1))), P({ deletedMessages: n });
}
function J(e) {
    q();
}
function ee(e) {
    let { size: t } = e;
    P({ deletedMessages: N.slice(t) });
    for (let e = t; e < N.length; ++e) delete b[N[e].id];
    N.length > (N = N.slice(0, t)).length && (O = !0);
}
function et(e) {
    x = !0;
}
class en extends s.Ay.Store {
    static displayName = "RecentMentionsStore";
    initialize() {
        this.waitFor(h.default, m.A, E.A, g.Ay, A.A, I.A, T.Ay, S.default);
    }
    get hasLoadedEver() {
        return L;
    }
    get lastLoaded() {
        return w;
    }
    getMentions() {
        return L || N.length > 0 ? N : null;
    }
    getSettingsFilteredMentions() {
        return L || N.length > 0 ? N.filter(G) : null;
    }
    hasMention(e) {
        return b[e];
    }
    get loading() {
        return R;
    }
    get hasMore() {
        return O;
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
        return x;
    }
    get mentionCountByChannel() {
        return C;
    }
    getMentionCountForChannel(e) {
        return C[e] ?? 0;
    }
}
let er = new en(l.h, {
    LOAD_RECENT_MENTIONS: k,
    LOAD_RECENT_MENTIONS_SUCCESS: F,
    LOAD_RECENT_MENTIONS_FAILURE: V,
    SET_RECENT_MENTIONS_FILTER: z,
    CLEAR_MENTIONS: J,
    TRUNCATE_MENTIONS: ee,
    CHANNEL_SELECT: $,
    CONNECTION_OPEN: q,
    GUILD_DELETE: Z,
    MESSAGE_CREATE: H,
    MESSAGE_UPDATE: j,
    MESSAGE_DELETE: W,
    RECENT_MENTION_DELETE: W,
    MESSAGE_DELETE_BULK: K,
    CHANNEL_DELETE: Q,
    THREAD_DELETE: Q,
    RELATIONSHIP_ADD: X,
    RELATIONSHIP_REMOVE: X,
    RELATIONSHIP_UPDATE: X,
    SET_RECENT_MENTIONS_STALE: et,
});
