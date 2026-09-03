n.d(t, { pK: () => w, Ay: () => W }), n(667532), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(506774),
    l = n(499979),
    o = n(228366),
    d = n(323073),
    c = n(320095),
    u = n(451919),
    _ = n(143413),
    E = n(652215),
    A = n(383233),
    h = n(280450),
    I = n(734057),
    f = n(232835),
    p = n(573163),
    T = n(994500),
    m = n(967198),
    g = n(543465),
    S = n(287809);
let N = "recentMentionFilterSettings",
    C = [],
    O = {},
    R = {},
    L = !1,
    y = !0,
    D = s.w.get(N, { guildFilter: E.KE7.ALL_SERVERS, everyoneFilter: !0, roleFilter: !0 }),
    v = !1,
    b = 0,
    M = !1;
function P(e) {
    let { addedMessages: t, deletedMessages: n } = e;
    null != t &&
        t.forEach((e) => {
            null == O[e.getChannelId()] && (O[e.getChannelId()] = 0), O[e.getChannelId()]++;
        }),
        null != n &&
            n.forEach((e) => {
                null != O[e.getChannelId()] && (O[e.getChannelId()] = Math.max(0, O[e.getChannelId()] - 1));
            });
}
function U(e) {
    if (e instanceof A.Ay) return e;
    let t = f.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, c.rh)(e);
}
function w(e) {
    let t = I.A.getBasicChannel(e.channel_id);
    if (
        null == t ||
        !E.kvI.GUILD_TEXTUAL.has(t.type) ||
        g.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        (0, d.UK)(t.id)
    )
        return !1;
    switch (g.Ay.resolvedMessageNotifications(t)) {
        case E.orn.ALL_MESSAGES:
            return !0;
        case E.orn.ONLY_MENTIONS:
            let n = g.Ay.isSuppressEveryoneEnabled(t.guild_id),
                i = g.Ay.isSuppressRolesEnabled(t.guild_id),
                r = S.default.getCurrentUser();
            if (null == r) return !1;
            return (0, u.Ay)({ message: e, userId: r.id, suppressEveryone: n, suppressRoles: i });
        case E.orn.NO_MESSAGES:
        default:
            return !1;
    }
}
function G(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, _.A)(e) && !E.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == n && (n = e.channel_id);
    let i = I.A.getChannel(n);
    if (
        null == i ||
        i.type === E.rbe.DM ||
        (D.guildFilter === E.KE7.THIS_SERVER && i.getGuildId() !== m.A.getGuildId())
    )
        return null;
    let r = h.default.getId();
    if (
        T.A.isBlockedOrIgnoredForMessage(e) ||
        ((t = e), !E.MRS.SELF_MENTIONABLE_SYSTEM.has(t.type) && t.author?.id === r)
    )
        return null;
    e = U(e);
    let a = !D.everyoneFilter,
        s = !D.roleFilter;
    return (0, u.Ay)({ message: e, userId: r, suppressEveryone: a, suppressRoles: s })
        ? (M &&
              p.Ay.ackMessageId(i.id) !== e.id &&
              (0, u.Ay)({
                  message: e,
                  userId: r,
                  suppressEveryone: g.Ay.isSuppressEveryoneEnabled(i.getGuildId()),
                  suppressRoles: g.Ay.isSuppressRolesEnabled(i.getGuildId()),
              }) &&
              (M = !1),
          e)
        : null;
}
function x(e) {
    if (null == R[e]) return !1;
    delete R[e],
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
function k(e) {
    let { id: t } = e;
    return x(t);
}
function F(e) {
    let t = { ...D };
    function n(e, n) {
        return t[e] !== D[e] && D[e] === n;
    }
    (D = r().defaults(r().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D)), s.w.set(N, D);
    let i = n("guildFilter", E.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    R = {};
    let a = [];
    i &&
        C.forEach((e) => {
            let t = G(e);
            null != t && (a.push(t), (R[t.id] = !0));
        }),
        (O = {}),
        (C = a).forEach((e) => {
            null == O[e.getChannelId()] && (O[e.getChannelId()] = 0), O[e.getChannelId()]++;
        }),
        0 === C.length && (v = !1);
}
function V() {
    (C = []), (R = {}), (v = !1), (M = !1), (O = {});
}
function B() {
    P({ deletedMessages: r().filter(C, (e) => T.A.isBlockedOrIgnoredForMessage(e)) }),
        (C = C.filter((e) => !T.A.isBlockedOrIgnoredForMessage(e)));
}
function H(e) {
    let { channel: t } = e,
        n = [];
    (C = r().filter(C, (e) => e.channel_id !== t.id || (delete R[e.id], n.push(e), !1))), P({ deletedMessages: n });
}
class j extends a.Ay.Store {
    static displayName = "RecentMentionsStore";
    initialize() {
        this.waitFor(h.default, I.A, f.A, p.Ay, T.A, m.A, g.Ay, S.default);
    }
    get hasLoadedEver() {
        return v;
    }
    get lastLoaded() {
        return b;
    }
    getMentions() {
        return v || C.length > 0 ? C : null;
    }
    getSettingsFilteredMentions() {
        return v || C.length > 0 ? C.filter(w) : null;
    }
    hasMention(e) {
        return R[e];
    }
    get loading() {
        return L;
    }
    get hasMore() {
        return y;
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
        return O;
    }
    getMentionCountForChannel(e) {
        return O[e] ?? 0;
    }
}
let W = new j(o.h, {
    LOAD_RECENT_MENTIONS: function (e) {
        let { guildId: t } = e;
        (L = !0), null == t && D.guildFilter === E.KE7.THIS_SERVER && F({ guildFilter: E.KE7.ALL_SERVERS });
    },
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { hasMoreAfter: t, messages: n, isAfter: i } = e,
            a = r().map(n, U);
        P({ addedMessages: a }),
            i ? (C = C.concat(a)) : ((C = a), (R = {})),
            r().forEach(a, (e) => {
                R[e.id] = !0;
            }),
            (L = !1),
            (y = t),
            (b = (0, l.tB)()),
            (v = !0);
    },
    LOAD_RECENT_MENTIONS_FAILURE: function () {
        L = !1;
    },
    SET_RECENT_MENTIONS_FILTER: F,
    CLEAR_MENTIONS: function (e) {
        V();
    },
    TRUNCATE_MENTIONS: function (e) {
        let { size: t } = e;
        P({ deletedMessages: C.slice(t) });
        for (let e = t; e < C.length; ++e) delete R[C[e].id];
        C.length > (C = C.slice(0, t)).length && (y = !0);
    },
    CHANNEL_SELECT: function () {
        if (D.guildFilter !== E.KE7.THIS_SERVER) return !1;
        v = !1;
    },
    CONNECTION_OPEN: V,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        (C = r().filter(C, (e) => {
            let i = I.A.getChannel(e.channel_id);
            return (null != i && i.getGuildId() !== t.id) || (delete R[e.id], n.push(e), !1);
        })),
            P({ deletedMessages: n });
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            i = S.default.getCurrentUser();
        if (null == i || !(0, u.bG)({ rawMessage: n, userId: i.id, suppressRoles: !1, suppressEveryone: !1 }))
            return !1;
        let r = G(n, t);
        if (null == r) return !1;
        (C = C.slice()).unshift(r), (R[r.id] = !0), P({ addedMessages: [r] });
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t || null == R[t]) return !1;
        let n = r().findIndex(C, (e) => {
                let { id: n } = e;
                return n === t;
            }),
            i = (C = C.slice())[n];
        null != i && (C[n] = (0, c.IU)(i, e.message));
    },
    MESSAGE_DELETE: k,
    RECENT_MENTION_DELETE: k,
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
        M = !0;
    },
});
