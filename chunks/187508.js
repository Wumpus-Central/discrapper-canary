"use strict";
n.d(t, { Ay: () => W, pK: () => k }), n(667532), n(321073);
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
    E = n(734057),
    m = n(320501),
    g = n(222823),
    A = n(994500),
    I = n(967198),
    T = n(543465),
    S = n(287809),
    y = n(652215);
let N = "recentMentionFilterSettings",
    v = [],
    C = {},
    O = {},
    R = !1,
    b = !0,
    D = a.w.get(N, { guildFilter: y.KE7.ALL_SERVERS, everyoneFilter: !0, roleFilter: !0 }),
    L = !1,
    w = 0,
    M = !1;
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
function x(e) {
    if (e instanceof p.Ay) return e;
    let t = m.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, c.rh)(e);
}
function k(e) {
    let t = E.A.getBasicChannel(e.channel_id);
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
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, _.A)(e) && !y.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = E.A.getChannel(t);
    if (
        null == n ||
        n.type === y.rbe.DM ||
        (D.guildFilter === y.KE7.THIS_SERVER && n.getGuildId() !== I.A.getGuildId())
    )
        return null;
    let r = h.default.getId();
    if (A.A.isBlockedOrIgnoredForMessage(e) || (0, f.A)(e, r)) return null;
    e = x(e);
    let i = !D.everyoneFilter,
        s = !D.roleFilter;
    return (0, d.Ay)({ message: e, userId: r, suppressEveryone: i, suppressRoles: s })
        ? (M &&
              g.Ay.ackMessageId(n.id) !== e.id &&
              (0, d.Ay)({
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
    if (null == O[e]) return !1;
    delete O[e],
        P({
            deletedMessages: i().filter(v, (t) => {
                let { id: n } = t;
                return n === e;
            }),
        }),
        (v = i().filter(v, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function F(e) {
    let { id: t } = e;
    return G(t);
}
function V(e) {
    let t = { ...D };
    (D = i().defaults(i().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D)), a.w.set(N, D);
    let n = (e, n) => t[e] !== D[e] && D[e] === n,
        r = n("guildFilter", y.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    O = {};
    let s = [];
    r &&
        v.forEach((e) => {
            let t = U(e);
            null != t && (s.push(t), (O[t.id] = !0));
        }),
        (C = {}),
        (v = s).forEach((e) => {
            null == C[e.getChannelId()] && (C[e.getChannelId()] = 0), C[e.getChannelId()]++;
        }),
        0 === v.length && (L = !1);
}
function B() {
    (v = []), (O = {}), (L = !1), (M = !1), (C = {});
}
function H() {
    P({ deletedMessages: i().filter(v, (e) => A.A.isBlockedOrIgnoredForMessage(e)) }),
        (v = v.filter((e) => !A.A.isBlockedOrIgnoredForMessage(e)));
}
function j(e) {
    let { channel: t } = e,
        n = [];
    (v = i().filter(v, (e) => e.channel_id !== t.id || (delete O[e.id], n.push(e), !1))), P({ deletedMessages: n });
}
class Y extends s.Ay.Store {
    static displayName = "RecentMentionsStore";
    initialize() {
        this.waitFor(h.default, E.A, m.A, g.Ay, A.A, I.A, T.Ay, S.default);
    }
    get hasLoadedEver() {
        return L;
    }
    get lastLoaded() {
        return w;
    }
    getMentions() {
        return L || v.length > 0 ? v : null;
    }
    getSettingsFilteredMentions() {
        return L || v.length > 0 ? v.filter(k) : null;
    }
    hasMention(e) {
        return O[e];
    }
    get loading() {
        return R;
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
        return C;
    }
    getMentionCountForChannel(e) {
        return C[e] ?? 0;
    }
}
let W = new Y(l.h, {
    LOAD_RECENT_MENTIONS: function (e) {
        let { guildId: t } = e;
        (R = !0), null == t && D.guildFilter === y.KE7.THIS_SERVER && V({ guildFilter: y.KE7.ALL_SERVERS });
    },
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { hasMoreAfter: t, messages: n, isAfter: r } = e,
            s = i().map(n, x);
        P({ addedMessages: s }),
            r ? (v = v.concat(s)) : ((v = s), (O = {})),
            i().forEach(s, (e) => {
                O[e.id] = !0;
            }),
            (R = !1),
            (b = t),
            (w = (0, o.tB)()),
            (L = !0);
    },
    LOAD_RECENT_MENTIONS_FAILURE: function () {
        R = !1;
    },
    SET_RECENT_MENTIONS_FILTER: V,
    CLEAR_MENTIONS: function (e) {
        B();
    },
    TRUNCATE_MENTIONS: function (e) {
        let { size: t } = e;
        P({ deletedMessages: v.slice(t) });
        for (let e = t; e < v.length; ++e) delete O[v[e].id];
        v.length > (v = v.slice(0, t)).length && (b = !0);
    },
    CHANNEL_SELECT: function () {
        if (D.guildFilter !== y.KE7.THIS_SERVER) return !1;
        L = !1;
    },
    CONNECTION_OPEN: B,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        (v = i().filter(v, (e) => {
            let r = E.A.getChannel(e.channel_id);
            return (null != r && r.getGuildId() !== t.id) || (delete O[e.id], n.push(e), !1);
        })),
            P({ deletedMessages: n });
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            r = S.default.getCurrentUser();
        if (null == r || !(0, d.bG)({ rawMessage: n, userId: r.id, suppressRoles: !1, suppressEveryone: !1 }))
            return !1;
        let i = U(n, t);
        if (null == i) return !1;
        (v = v.slice()).unshift(i), (O[i.id] = !0), P({ addedMessages: [i] });
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t || null == O[t]) return !1;
        let n = i().findIndex(v, (e) => {
                let { id: n } = e;
                return n === t;
            }),
            r = (v = v.slice())[n];
        null != r && (v[n] = (0, c.IU)(r, e.message));
    },
    MESSAGE_DELETE: F,
    RECENT_MENTION_DELETE: F,
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        i().forEach(t, G);
    },
    CHANNEL_DELETE: j,
    THREAD_DELETE: j,
    RELATIONSHIP_ADD: H,
    RELATIONSHIP_REMOVE: H,
    RELATIONSHIP_UPDATE: H,
    SET_RECENT_MENTIONS_STALE: function (e) {
        M = !0;
    },
});
