"use strict";
n.d(t, { Ay: () => j, pK: () => k }), n(667532), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(499979),
    l = n(73153),
    u = n(323073),
    d = n(141468),
    c = n(451919),
    _ = n(143413),
    f = n(204162),
    E = n(383233),
    h = n(961350),
    p = n(734057),
    m = n(320501),
    g = n(222823),
    A = n(994500),
    I = n(967198),
    T = n(543465),
    S = n(287809),
    y = n(652215);
let N = "recentMentionFilterSettings",
    O = [],
    R = {},
    v = {},
    C = !1,
    b = !0,
    D = a.w.get(N, { guildFilter: y.KE7.ALL_SERVERS, everyoneFilter: !0, roleFilter: !0 }),
    L = !1,
    w = 0,
    M = !1;
function P(e) {
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
function U(e) {
    if (e instanceof E.Ay) return e;
    let t = m.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, d.rh)(e);
}
function k(e) {
    let t = p.A.getBasicChannel(e.channel_id);
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
            return (0, c.Ay)({ message: e, userId: i.id, suppressEveryone: n, suppressRoles: r });
        case y.orn.NO_MESSAGES:
        default:
            return !1;
    }
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, _.A)(e) && !y.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = p.A.getChannel(t);
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
    return (0, c.Ay)({ message: e, userId: r, suppressEveryone: i, suppressRoles: s })
        ? (M &&
              g.Ay.ackMessageId(n.id) !== e.id &&
              (0, c.Ay)({
                  message: e,
                  userId: r,
                  suppressEveryone: T.Ay.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: T.Ay.isSuppressRolesEnabled(n.getGuildId()),
              }) &&
              (M = !1),
          e)
        : null;
}
function G(e) {
    if (null == v[e]) return !1;
    delete v[e],
        P({
            deletedMessages: i().filter(O, (t) => {
                let { id: n } = t;
                return n === e;
            }),
        }),
        (O = i().filter(O, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function V(e) {
    let { id: t } = e;
    return G(t);
}
function F(e) {
    let t = { ...D };
    (D = i().defaults(i().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D)), a.w.set(N, D);
    let n = (e, n) => t[e] !== D[e] && D[e] === n,
        r = n("guildFilter", y.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    v = {};
    let s = [];
    r &&
        O.forEach((e) => {
            let t = x(e);
            null != t && (s.push(t), (v[t.id] = !0));
        }),
        (R = {}),
        (O = s).forEach((e) => {
            null == R[e.getChannelId()] && (R[e.getChannelId()] = 0), R[e.getChannelId()]++;
        }),
        0 === O.length && (L = !1);
}
function B() {
    (O = []), (v = {}), (L = !1), (M = !1), (R = {});
}
function H() {
    P({ deletedMessages: i().filter(O, (e) => A.A.isBlockedOrIgnoredForMessage(e)) }),
        (O = O.filter((e) => !A.A.isBlockedOrIgnoredForMessage(e)));
}
function Y(e) {
    let { channel: t } = e,
        n = [];
    (O = i().filter(O, (e) => e.channel_id !== t.id || (delete v[e.id], n.push(e), !1))), P({ deletedMessages: n });
}
class W extends s.Ay.Store {
    static displayName = "RecentMentionsStore";
    initialize() {
        this.waitFor(h.default, p.A, m.A, g.Ay, A.A, I.A, T.Ay, S.default);
    }
    get hasLoadedEver() {
        return L;
    }
    get lastLoaded() {
        return w;
    }
    getMentions() {
        return L || O.length > 0 ? O : null;
    }
    getSettingsFilteredMentions() {
        return L || O.length > 0 ? O.filter(k) : null;
    }
    hasMention(e) {
        return v[e];
    }
    get loading() {
        return C;
    }
    get hasMore() {
        return b;
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
        return R;
    }
    getMentionCountForChannel(e) {
        return R[e] ?? 0;
    }
}
let j = new W(l.h, {
    LOAD_RECENT_MENTIONS: function (e) {
        let { guildId: t } = e;
        (C = !0), null == t && D.guildFilter === y.KE7.THIS_SERVER && F({ guildFilter: y.KE7.ALL_SERVERS });
    },
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { hasMoreAfter: t, messages: n, isAfter: r } = e,
            s = i().map(n, U);
        P({ addedMessages: s }),
            r ? (O = O.concat(s)) : ((O = s), (v = {})),
            i().forEach(s, (e) => {
                v[e.id] = !0;
            }),
            (C = !1),
            (b = t),
            (w = (0, o.tB)()),
            (L = !0);
    },
    LOAD_RECENT_MENTIONS_FAILURE: function () {
        C = !1;
    },
    SET_RECENT_MENTIONS_FILTER: F,
    CLEAR_MENTIONS: function (e) {
        B();
    },
    TRUNCATE_MENTIONS: function (e) {
        let { size: t } = e;
        P({ deletedMessages: O.slice(t) });
        for (let e = t; e < O.length; ++e) delete v[O[e].id];
        O.length > (O = O.slice(0, t)).length && (b = !0);
    },
    CHANNEL_SELECT: function () {
        if (D.guildFilter !== y.KE7.THIS_SERVER) return !1;
        L = !1;
    },
    CONNECTION_OPEN: B,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        (O = i().filter(O, (e) => {
            let r = p.A.getChannel(e.channel_id);
            return (null != r && r.getGuildId() !== t.id) || (delete v[e.id], n.push(e), !1);
        })),
            P({ deletedMessages: n });
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            r = S.default.getCurrentUser();
        if (null == r || !(0, c.bG)({ rawMessage: n, userId: r.id, suppressRoles: !1, suppressEveryone: !1 }))
            return !1;
        let i = x(n, t);
        if (null == i) return !1;
        (O = O.slice()).unshift(i), (v[i.id] = !0), P({ addedMessages: [i] });
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t || null == v[t]) return !1;
        let n = i().findIndex(O, (e) => {
                let { id: n } = e;
                return n === t;
            }),
            r = (O = O.slice())[n];
        null != r && (O[n] = (0, d.IU)(r, e.message));
    },
    MESSAGE_DELETE: V,
    RECENT_MENTION_DELETE: V,
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        i().forEach(t, G);
    },
    CHANNEL_DELETE: Y,
    THREAD_DELETE: Y,
    RELATIONSHIP_ADD: H,
    RELATIONSHIP_REMOVE: H,
    RELATIONSHIP_UPDATE: H,
    SET_RECENT_MENTIONS_STALE: function (e) {
        M = !0;
    },
});
