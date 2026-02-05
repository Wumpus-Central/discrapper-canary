"use strict";
n.d(t, { Ay: () => er, pK: () => G }), n(667532), n(321073);
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
    p = n(383233),
    h = n(961350),
    m = n(734057),
    g = n(320501),
    E = n(222823),
    A = n(994500),
    I = n(967198),
    T = n(543465),
    y = n(287809),
    S = n(652215);
let v = "recentMentionFilterSettings",
    C = [],
    b = {},
    N = {},
    R = !1,
    O = !0,
    D = s.w.get(v, { guildFilter: S.KE7.ALL_SERVERS, everyoneFilter: !0, roleFilter: !0 }),
    L = !1,
    w = 0,
    x = !1;
function P(e) {
    (b = {}),
        e.forEach((e) => {
            null == b[e.getChannelId()] && (b[e.getChannelId()] = 0), b[e.getChannelId()]++;
        });
}
function M(e) {
    let { addedMessages: t, deletedMessages: n } = e;
    null != t &&
        t.forEach((e) => {
            null == b[e.getChannelId()] && (b[e.getChannelId()] = 0), b[e.getChannelId()]++;
        }),
        null != n &&
            n.forEach((e) => {
                null != b[e.getChannelId()] && (b[e.getChannelId()] = Math.max(0, b[e.getChannelId()] - 1));
            });
}
function k(e) {
    let { guildId: t } = e;
    (R = !0), null == t && D.guildFilter === S.KE7.THIS_SERVER && z({ guildFilter: S.KE7.ALL_SERVERS });
}
function U(e) {
    if (e instanceof p.Ay) return e;
    let t = g.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, c.rh)(e);
}
function G(e) {
    let t = m.A.getBasicChannel(e.channel_id);
    if (
        null == t ||
        !S.kvI.GUILD_TEXTUAL.has(t.type) ||
        T.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        (0, u.UK)(t.id)
    )
        return !1;
    switch (T.Ay.resolvedMessageNotifications(t)) {
        case S.orn.ALL_MESSAGES:
            return !0;
        case S.orn.ONLY_MENTIONS:
            let n = T.Ay.isSuppressEveryoneEnabled(t.guild_id),
                r = T.Ay.isSuppressRolesEnabled(t.guild_id),
                i = y.default.getCurrentUser();
            if (null == i) return !1;
            return (0, d.Ay)({ message: e, userId: i.id, suppressEveryone: n, suppressRoles: r });
        case S.orn.NO_MESSAGES:
        default:
            return !1;
    }
}
function V(e) {
    let { hasMoreAfter: t, messages: n, isAfter: r } = e,
        a = i().map(n, U);
    M({ addedMessages: a }),
        r ? (C = C.concat(a)) : ((C = a), (N = {})),
        i().forEach(a, (e) => {
            N[e.id] = !0;
        }),
        (R = !1),
        (O = t),
        (w = (0, o.tB)()),
        (L = !0);
}
function F() {
    R = !1;
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, _.A)(e) && !S.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = m.A.getChannel(t);
    if (
        null == n ||
        n.type === S.rbe.DM ||
        (D.guildFilter === S.KE7.THIS_SERVER && n.getGuildId() !== I.A.getGuildId())
    )
        return null;
    let r = h.default.getId();
    if (A.A.isBlockedOrIgnoredForMessage(e) || (0, f.A)(e, r)) return null;
    e = U(e);
    let i = !D.everyoneFilter,
        a = !D.roleFilter;
    return (0, d.Ay)({ message: e, userId: r, suppressEveryone: i, suppressRoles: a })
        ? (x &&
              E.Ay.ackMessageId(n.id) !== e.id &&
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
function j(e) {
    let { channelId: t, message: n } = e,
        r = y.default.getCurrentUser();
    if (null == r || !(0, d.bG)({ rawMessage: n, userId: r.id, suppressRoles: !1, suppressEveryone: !1 })) return !1;
    let i = B(n, t);
    if (null == i) return !1;
    (C = C.slice()).unshift(i), (N[i.id] = !0), M({ addedMessages: [i] });
}
function H(e) {
    let t = e.message.id;
    if (null == t || null == N[t]) return !1;
    let n = i().findIndex(C, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        r = (C = C.slice())[n];
    null != r && (C[n] = (0, c.IU)(r, e.message));
}
function Y(e) {
    if (null == N[e]) return !1;
    delete N[e],
        M({
            deletedMessages: i().filter(C, (t) => {
                let { id: n } = t;
                return n === e;
            }),
        }),
        (C = i().filter(C, (t) => {
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
    (D = i().defaults(i().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D)), s.w.set(v, D);
    let n = (e, n) => t[e] !== D[e] && D[e] === n,
        r = n("guildFilter", S.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    N = {};
    let a = [];
    r &&
        C.forEach((e) => {
            let t = B(e);
            null != t && (a.push(t), (N[t.id] = !0));
        }),
        P((C = a)),
        0 === C.length && (L = !1);
}
function $() {
    if (D.guildFilter !== S.KE7.THIS_SERVER) return !1;
    L = !1;
}
function q() {
    (C = []), (N = {}), (L = !1), (x = !1), (b = {});
}
function Z(e) {
    let { guild: t } = e,
        n = [];
    (C = i().filter(C, (e) => {
        let r = m.A.getChannel(e.channel_id);
        return (null != r && r.getGuildId() !== t.id) || (delete N[e.id], n.push(e), !1);
    })),
        M({ deletedMessages: n });
}
function Q() {
    M({ deletedMessages: i().filter(C, (e) => A.A.isBlockedOrIgnoredForMessage(e)) }),
        (C = C.filter((e) => !A.A.isBlockedOrIgnoredForMessage(e)));
}
function X(e) {
    let { channel: t } = e,
        n = [];
    (C = i().filter(C, (e) => e.channel_id !== t.id || (delete N[e.id], n.push(e), !1))), M({ deletedMessages: n });
}
function J(e) {
    q();
}
function ee(e) {
    let { size: t } = e;
    M({ deletedMessages: C.slice(t) });
    for (let e = t; e < C.length; ++e) delete N[C[e].id];
    C.length > (C = C.slice(0, t)).length && (O = !0);
}
function et(e) {
    x = !0;
}
class en extends a.Ay.Store {
    static displayName = "RecentMentionsStore";
    initialize() {
        this.waitFor(h.default, m.A, g.A, E.Ay, A.A, I.A, T.Ay, y.default);
    }
    get hasLoadedEver() {
        return L;
    }
    get lastLoaded() {
        return w;
    }
    getMentions() {
        return L || C.length > 0 ? C : null;
    }
    getSettingsFilteredMentions() {
        return L || C.length > 0 ? C.filter(G) : null;
    }
    hasMention(e) {
        return N[e];
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
        return b;
    }
    getMentionCountForChannel(e) {
        return b[e] ?? 0;
    }
}
let er = new en(l.h, {
    LOAD_RECENT_MENTIONS: k,
    LOAD_RECENT_MENTIONS_SUCCESS: V,
    LOAD_RECENT_MENTIONS_FAILURE: F,
    SET_RECENT_MENTIONS_FILTER: z,
    CLEAR_MENTIONS: J,
    TRUNCATE_MENTIONS: ee,
    CHANNEL_SELECT: $,
    CONNECTION_OPEN: q,
    GUILD_DELETE: Z,
    MESSAGE_CREATE: j,
    MESSAGE_UPDATE: H,
    MESSAGE_DELETE: W,
    RECENT_MENTION_DELETE: W,
    MESSAGE_DELETE_BULK: K,
    CHANNEL_DELETE: X,
    THREAD_DELETE: X,
    RELATIONSHIP_ADD: Q,
    RELATIONSHIP_REMOVE: Q,
    RELATIONSHIP_UPDATE: Q,
    SET_RECENT_MENTIONS_STALE: et,
});
