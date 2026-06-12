"use strict";
n.d(t, { pK: () => x, Ay: () => Y }), n(667532), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(506774),
    o = n(499979),
    l = n(228366),
    u = n(323073),
    c = n(320095),
    d = n(451919),
    _ = n(143413),
    h = n(652215),
    f = n(383233),
    p = n(495544),
    E = n(734057),
    m = n(232835),
    g = n(222823),
    A = n(994500),
    I = n(967198),
    T = n(543465),
    S = n(287809);
let y = "recentMentionFilterSettings",
    N = [],
    v = {},
    C = {},
    R = !1,
    O = !0,
    b = a.w.get(y, { guildFilter: h.KE7.ALL_SERVERS, everyoneFilter: !0, roleFilter: !0 }),
    D = !1,
    L = 0,
    w = !1;
function M(e) {
    let { addedMessages: t, deletedMessages: n } = e;
    null != t &&
        t.forEach((e) => {
            null == v[e.getChannelId()] && (v[e.getChannelId()] = 0), v[e.getChannelId()]++;
        }),
        null != n &&
            n.forEach((e) => {
                null != v[e.getChannelId()] && (v[e.getChannelId()] = Math.max(0, v[e.getChannelId()] - 1));
            });
}
function P(e) {
    if (e instanceof f.Ay) return e;
    let t = m.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, c.rh)(e);
}
function x(e) {
    let t = E.A.getBasicChannel(e.channel_id);
    if (
        null == t ||
        !h.kvI.GUILD_TEXTUAL.has(t.type) ||
        T.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        (0, u.UK)(t.id)
    )
        return !1;
    switch (T.Ay.resolvedMessageNotifications(t)) {
        case h.orn.ALL_MESSAGES:
            return !0;
        case h.orn.ONLY_MENTIONS:
            let n = T.Ay.isSuppressEveryoneEnabled(t.guild_id),
                i = T.Ay.isSuppressRolesEnabled(t.guild_id),
                r = S.default.getCurrentUser();
            if (null == r) return !1;
            return (0, d.Ay)({ message: e, userId: r.id, suppressEveryone: n, suppressRoles: i });
        case h.orn.NO_MESSAGES:
        default:
            return !1;
    }
}
function k(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, _.A)(e) && !h.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == n && (n = e.channel_id);
    let i = E.A.getChannel(n);
    if (
        null == i ||
        i.type === h.rbe.DM ||
        (b.guildFilter === h.KE7.THIS_SERVER && i.getGuildId() !== I.A.getGuildId())
    )
        return null;
    let r = p.default.getId();
    if (
        A.A.isBlockedOrIgnoredForMessage(e) ||
        ((t = e), !h.MRS.SELF_MENTIONABLE_SYSTEM.has(t.type) && t.author?.id === r)
    )
        return null;
    e = P(e);
    let s = !b.everyoneFilter,
        a = !b.roleFilter;
    return (0, d.Ay)({ message: e, userId: r, suppressEveryone: s, suppressRoles: a })
        ? (w &&
              g.Ay.ackMessageId(i.id) !== e.id &&
              (0, d.Ay)({
                  message: e,
                  userId: r,
                  suppressEveryone: T.Ay.isSuppressEveryoneEnabled(i.getGuildId()),
                  suppressRoles: T.Ay.isSuppressRolesEnabled(i.getGuildId()),
              }) &&
              (w = !1),
          e)
        : null;
}
function U(e) {
    if (null == C[e]) return !1;
    delete C[e],
        M({
            deletedMessages: r().filter(N, (t) => {
                let { id: n } = t;
                return n === e;
            }),
        }),
        (N = r().filter(N, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function G(e) {
    let { id: t } = e;
    return U(t);
}
function F(e) {
    let t = { ...b };
    (b = r().defaults(r().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), b)), a.w.set(y, b);
    let n = (e, n) => t[e] !== b[e] && b[e] === n,
        i = n("guildFilter", h.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    C = {};
    let s = [];
    i &&
        N.forEach((e) => {
            let t = k(e);
            null != t && (s.push(t), (C[t.id] = !0));
        }),
        (v = {}),
        (N = s).forEach((e) => {
            null == v[e.getChannelId()] && (v[e.getChannelId()] = 0), v[e.getChannelId()]++;
        }),
        0 === N.length && (D = !1);
}
function V() {
    (N = []), (C = {}), (D = !1), (w = !1), (v = {});
}
function B() {
    M({ deletedMessages: r().filter(N, (e) => A.A.isBlockedOrIgnoredForMessage(e)) }),
        (N = N.filter((e) => !A.A.isBlockedOrIgnoredForMessage(e)));
}
function H(e) {
    let { channel: t } = e,
        n = [];
    (N = r().filter(N, (e) => e.channel_id !== t.id || (delete C[e.id], n.push(e), !1))), M({ deletedMessages: n });
}
class j extends s.Ay.Store {
    static displayName = "RecentMentionsStore";
    initialize() {
        this.waitFor(p.default, E.A, m.A, g.Ay, A.A, I.A, T.Ay, S.default);
    }
    get hasLoadedEver() {
        return D;
    }
    get lastLoaded() {
        return L;
    }
    getMentions() {
        return D || N.length > 0 ? N : null;
    }
    getSettingsFilteredMentions() {
        return D || N.length > 0 ? N.filter(x) : null;
    }
    hasMention(e) {
        return C[e];
    }
    get loading() {
        return R;
    }
    get hasMore() {
        return O;
    }
    get guildFilter() {
        return b.guildFilter;
    }
    get everyoneFilter() {
        return b.everyoneFilter;
    }
    get roleFilter() {
        return b.roleFilter;
    }
    get mentionsAreStale() {
        return w;
    }
    get mentionCountByChannel() {
        return v;
    }
    getMentionCountForChannel(e) {
        return v[e] ?? 0;
    }
}
let Y = new j(l.h, {
    LOAD_RECENT_MENTIONS: function (e) {
        let { guildId: t } = e;
        (R = !0), null == t && b.guildFilter === h.KE7.THIS_SERVER && F({ guildFilter: h.KE7.ALL_SERVERS });
    },
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { hasMoreAfter: t, messages: n, isAfter: i } = e,
            s = r().map(n, P);
        M({ addedMessages: s }),
            i ? (N = N.concat(s)) : ((N = s), (C = {})),
            r().forEach(s, (e) => {
                C[e.id] = !0;
            }),
            (R = !1),
            (O = t),
            (L = (0, o.tB)()),
            (D = !0);
    },
    LOAD_RECENT_MENTIONS_FAILURE: function () {
        R = !1;
    },
    SET_RECENT_MENTIONS_FILTER: F,
    CLEAR_MENTIONS: function (e) {
        V();
    },
    TRUNCATE_MENTIONS: function (e) {
        let { size: t } = e;
        M({ deletedMessages: N.slice(t) });
        for (let e = t; e < N.length; ++e) delete C[N[e].id];
        N.length > (N = N.slice(0, t)).length && (O = !0);
    },
    CHANNEL_SELECT: function () {
        if (b.guildFilter !== h.KE7.THIS_SERVER) return !1;
        D = !1;
    },
    CONNECTION_OPEN: V,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        (N = r().filter(N, (e) => {
            let i = E.A.getChannel(e.channel_id);
            return (null != i && i.getGuildId() !== t.id) || (delete C[e.id], n.push(e), !1);
        })),
            M({ deletedMessages: n });
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            i = S.default.getCurrentUser();
        if (null == i || !(0, d.bG)({ rawMessage: n, userId: i.id, suppressRoles: !1, suppressEveryone: !1 }))
            return !1;
        let r = k(n, t);
        if (null == r) return !1;
        (N = N.slice()).unshift(r), (C[r.id] = !0), M({ addedMessages: [r] });
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t || null == C[t]) return !1;
        let n = r().findIndex(N, (e) => {
                let { id: n } = e;
                return n === t;
            }),
            i = (N = N.slice())[n];
        null != i && (N[n] = (0, c.IU)(i, e.message));
    },
    MESSAGE_DELETE: G,
    RECENT_MENTION_DELETE: G,
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        r().forEach(t, U);
    },
    CHANNEL_DELETE: H,
    THREAD_DELETE: H,
    RELATIONSHIP_ADD: B,
    RELATIONSHIP_REMOVE: B,
    RELATIONSHIP_UPDATE: B,
    SET_RECENT_MENTIONS_STALE: function (e) {
        w = !0;
    },
});
