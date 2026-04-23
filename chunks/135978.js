"use strict";
n.d(t, { pK: () => M, Ay: () => W }), n(667532), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(506774),
    o = n(499979),
    l = n(228366),
    d = n(323073),
    _ = n(320095),
    u = n(451919),
    c = n(143413),
    E = n(652215),
    h = n(383233),
    m = n(495544),
    f = n(734057),
    g = n(232835),
    p = n(222823),
    A = n(994500),
    I = n(967198),
    T = n(543465),
    S = n(287809);
let N = "recentMentionFilterSettings",
    C = [],
    R = {},
    O = {},
    y = !1,
    v = !0,
    D = a.w.get(N, { guildFilter: E.KE7.ALL_SERVERS, everyoneFilter: !0, roleFilter: !0 }),
    L = !1,
    b = 0,
    w = !1;
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
function k(e) {
    if (e instanceof h.Ay) return e;
    let t = g.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, _.rh)(e);
}
function M(e) {
    let t = f.A.getBasicChannel(e.channel_id);
    if (
        null == t ||
        !E.kvI.GUILD_TEXTUAL.has(t.type) ||
        T.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        (0, d.UK)(t.id)
    )
        return !1;
    switch (T.Ay.resolvedMessageNotifications(t)) {
        case E.orn.ALL_MESSAGES:
            return !0;
        case E.orn.ONLY_MENTIONS:
            let n = T.Ay.isSuppressEveryoneEnabled(t.guild_id),
                i = T.Ay.isSuppressRolesEnabled(t.guild_id),
                r = S.default.getCurrentUser();
            if (null == r) return !1;
            return (0, u.Ay)({ message: e, userId: r.id, suppressEveryone: n, suppressRoles: i });
        case E.orn.NO_MESSAGES:
        default:
            return !1;
    }
}
function U(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, c.A)(e) && !E.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == n && (n = e.channel_id);
    let i = f.A.getChannel(n);
    if (
        null == i ||
        i.type === E.rbe.DM ||
        (D.guildFilter === E.KE7.THIS_SERVER && i.getGuildId() !== I.A.getGuildId())
    )
        return null;
    let r = m.default.getId();
    if (
        A.A.isBlockedOrIgnoredForMessage(e) ||
        ((t = e), !E.MRS.SELF_MENTIONABLE_SYSTEM.has(t.type) && t.author?.id === r)
    )
        return null;
    e = k(e);
    let s = !D.everyoneFilter,
        a = !D.roleFilter;
    return (0, u.Ay)({ message: e, userId: r, suppressEveryone: s, suppressRoles: a })
        ? (w &&
              p.Ay.ackMessageId(i.id) !== e.id &&
              (0, u.Ay)({
                  message: e,
                  userId: r,
                  suppressEveryone: T.Ay.isSuppressEveryoneEnabled(i.getGuildId()),
                  suppressRoles: T.Ay.isSuppressRolesEnabled(i.getGuildId()),
              }) &&
              (w = !1),
          e)
        : null;
}
function x(e) {
    if (null == O[e]) return !1;
    delete O[e],
        P({
            deletedMessages: r().filter(C, (t) => {
                let { id: n } = t;
                return n === e;
            }),
        }),
        (C = r().filter(C, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function G(e) {
    let { id: t } = e;
    return x(t);
}
function V(e) {
    let t = { ...D };
    (D = r().defaults(r().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D)), a.w.set(N, D);
    let n = (e, n) => t[e] !== D[e] && D[e] === n,
        i = n("guildFilter", E.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    O = {};
    let s = [];
    i &&
        C.forEach((e) => {
            let t = U(e);
            null != t && (s.push(t), (O[t.id] = !0));
        }),
        (R = {}),
        (C = s).forEach((e) => {
            null == R[e.getChannelId()] && (R[e.getChannelId()] = 0), R[e.getChannelId()]++;
        }),
        0 === C.length && (L = !1);
}
function F() {
    (C = []), (O = {}), (L = !1), (w = !1), (R = {});
}
function B() {
    P({ deletedMessages: r().filter(C, (e) => A.A.isBlockedOrIgnoredForMessage(e)) }),
        (C = C.filter((e) => !A.A.isBlockedOrIgnoredForMessage(e)));
}
function H(e) {
    let { channel: t } = e,
        n = [];
    (C = r().filter(C, (e) => e.channel_id !== t.id || (delete O[e.id], n.push(e), !1))), P({ deletedMessages: n });
}
class j extends s.Ay.Store {
    static displayName = "RecentMentionsStore";
    initialize() {
        this.waitFor(m.default, f.A, g.A, p.Ay, A.A, I.A, T.Ay, S.default);
    }
    get hasLoadedEver() {
        return L;
    }
    get lastLoaded() {
        return b;
    }
    getMentions() {
        return L || C.length > 0 ? C : null;
    }
    getSettingsFilteredMentions() {
        return L || C.length > 0 ? C.filter(M) : null;
    }
    hasMention(e) {
        return O[e];
    }
    get loading() {
        return y;
    }
    get hasMore() {
        return v;
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
        return w;
    }
    get mentionCountByChannel() {
        return R;
    }
    getMentionCountForChannel(e) {
        return R[e] ?? 0;
    }
}
let W = new j(l.h, {
    LOAD_RECENT_MENTIONS: function (e) {
        let { guildId: t } = e;
        (y = !0), null == t && D.guildFilter === E.KE7.THIS_SERVER && V({ guildFilter: E.KE7.ALL_SERVERS });
    },
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { hasMoreAfter: t, messages: n, isAfter: i } = e,
            s = r().map(n, k);
        P({ addedMessages: s }),
            i ? (C = C.concat(s)) : ((C = s), (O = {})),
            r().forEach(s, (e) => {
                O[e.id] = !0;
            }),
            (y = !1),
            (v = t),
            (b = (0, o.tB)()),
            (L = !0);
    },
    LOAD_RECENT_MENTIONS_FAILURE: function () {
        y = !1;
    },
    SET_RECENT_MENTIONS_FILTER: V,
    CLEAR_MENTIONS: function (e) {
        F();
    },
    TRUNCATE_MENTIONS: function (e) {
        let { size: t } = e;
        P({ deletedMessages: C.slice(t) });
        for (let e = t; e < C.length; ++e) delete O[C[e].id];
        C.length > (C = C.slice(0, t)).length && (v = !0);
    },
    CHANNEL_SELECT: function () {
        if (D.guildFilter !== E.KE7.THIS_SERVER) return !1;
        L = !1;
    },
    CONNECTION_OPEN: F,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        (C = r().filter(C, (e) => {
            let i = f.A.getChannel(e.channel_id);
            return (null != i && i.getGuildId() !== t.id) || (delete O[e.id], n.push(e), !1);
        })),
            P({ deletedMessages: n });
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            i = S.default.getCurrentUser();
        if (null == i || !(0, u.bG)({ rawMessage: n, userId: i.id, suppressRoles: !1, suppressEveryone: !1 }))
            return !1;
        let r = U(n, t);
        if (null == r) return !1;
        (C = C.slice()).unshift(r), (O[r.id] = !0), P({ addedMessages: [r] });
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t || null == O[t]) return !1;
        let n = r().findIndex(C, (e) => {
                let { id: n } = e;
                return n === t;
            }),
            i = (C = C.slice())[n];
        null != i && (C[n] = (0, _.IU)(i, e.message));
    },
    MESSAGE_DELETE: G,
    RECENT_MENTION_DELETE: G,
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        r().forEach(t, x);
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
