n.d(t, {
    Ay: () => es,
    pK: () => F,
}),
    n(667532),
    n(321073);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    l = n(499979),
    c = n(73153),
    u = n(323073),
    d = n(141468),
    f = n(451919),
    p = n(143413),
    _ = n(204162),
    h = n(383233),
    m = n(961350),
    g = n(734057),
    E = n(320501),
    b = n(222823),
    y = n(994500),
    O = n(967198),
    A = n(543465),
    v = n(287809),
    S = n(652215);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
let C = "recentMentionFilterSettings",
    N = [],
    R = {},
    w = {},
    P = !1,
    D = !0,
    x = o.w.get(C, {
        guildFilter: S.KE7.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0,
    }),
    L = !1,
    j = 0,
    M = !1;
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
    (P = !0), null == t && x.guildFilter === S.KE7.THIS_SERVER && Z({ guildFilter: S.KE7.ALL_SERVERS });
}
function V(e) {
    if (e instanceof h.Ay) return e;
    let t = E.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, d.rh)(e);
}
function F(e) {
    let t = g.A.getBasicChannel(e.channel_id);
    if (
        null == t ||
        !S.kvI.GUILD_TEXTUAL.has(t.type) ||
        A.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        (0, u.UK)(t.id)
    )
        return !1;
    switch (A.Ay.resolvedMessageNotifications(t)) {
        case S.orn.ALL_MESSAGES:
            return !0;
        case S.orn.ONLY_MENTIONS:
            let n = A.Ay.isSuppressEveryoneEnabled(t.guild_id),
                r = A.Ay.isSuppressRolesEnabled(t.guild_id),
                i = v.default.getCurrentUser();
            if (null == i) return !1;
            return (0, f.Ay)({
                message: e,
                userId: i.id,
                suppressEveryone: n,
                suppressRoles: r,
            });
        case S.orn.NO_MESSAGES:
        default:
            return !1;
    }
}
function B(e) {
    let { hasMoreAfter: t, messages: n, isAfter: r } = e,
        i = a().map(n, V);
    U({ addedMessages: i }),
        r ? (N = N.concat(i)) : ((N = i), (w = {})),
        a().forEach(i, (e) => {
            w[e.id] = !0;
        }),
        (P = !1),
        (D = t),
        (j = (0, l.tB)()),
        (L = !0);
}
function H() {
    P = !1;
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, p.A)(e) && !S.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = g.A.getChannel(t);
    if (
        null == n ||
        n.type === S.rbe.DM ||
        (x.guildFilter === S.KE7.THIS_SERVER && n.getGuildId() !== O.A.getGuildId())
    )
        return null;
    let r = m.default.getId();
    if (y.A.isBlockedOrIgnoredForMessage(e) || (0, _.A)(e, r)) return null;
    e = V(e);
    let i = !x.everyoneFilter,
        a = !x.roleFilter;
    return (0, f.Ay)({
        message: e,
        userId: r,
        suppressEveryone: i,
        suppressRoles: a,
    })
        ? (M &&
              b.Ay.ackMessageId(n.id) !== e.id &&
              (0, f.Ay)({
                  message: e,
                  userId: r,
                  suppressEveryone: A.Ay.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: A.Ay.isSuppressRolesEnabled(n.getGuildId()),
              }) &&
              (M = !1),
          e)
        : null;
}
function W(e) {
    let { channelId: t, message: n } = e,
        r = v.default.getCurrentUser();
    if (
        null == r ||
        !(0, f.bG)({
            rawMessage: n,
            userId: r.id,
            suppressRoles: !1,
            suppressEveryone: !1,
        })
    )
        return !1;
    let i = Y(n, t);
    if (null == i) return !1;
    (N = N.slice()).unshift(i), (w[i.id] = !0), U({ addedMessages: [i] });
}
function K(e) {
    let t = e.message.id;
    if (null == t || null == w[t]) return !1;
    let n = a().findIndex(N, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        r = (N = N.slice())[n];
    null != r && (N[n] = (0, d.IU)(r, e.message));
}
function z(e) {
    if (null == w[e]) return !1;
    delete w[e],
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
function q(e) {
    let { id: t } = e;
    return z(t);
}
function X(e) {
    let { ids: t } = e;
    a().forEach(t, z);
}
function Z(e) {
    let t = T({}, x);
    (x = a().defaults(a().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), x)), o.w.set(C, x);
    let n = (e, n) => t[e] !== x[e] && x[e] === n,
        r = n("guildFilter", S.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    w = {};
    let i = [];
    r &&
        N.forEach((e) => {
            let t = Y(e);
            null != t && (i.push(t), (w[t.id] = !0));
        }),
        k((N = i)),
        0 === N.length && (L = !1);
}
function Q() {
    if (x.guildFilter !== S.KE7.THIS_SERVER) return !1;
    L = !1;
}
function $() {
    (N = []), (w = {}), (L = !1), (M = !1), (R = {});
}
function J(e) {
    let { guild: t } = e,
        n = [];
    (N = a().filter(N, (e) => {
        let r = g.A.getChannel(e.channel_id);
        return (null != r && r.getGuildId() !== t.id) || (delete w[e.id], n.push(e), !1);
    })),
        U({ deletedMessages: n });
}
function ee() {
    U({ deletedMessages: a().filter(N, (e) => y.A.isBlockedOrIgnoredForMessage(e)) }),
        (N = N.filter((e) => !y.A.isBlockedOrIgnoredForMessage(e)));
}
function et(e) {
    let { channel: t } = e,
        n = [];
    (N = a().filter(N, (e) => e.channel_id !== t.id || (delete w[e.id], n.push(e), !1))), U({ deletedMessages: n });
}
function en(e) {
    $();
}
function er(e) {
    let { size: t } = e;
    U({ deletedMessages: N.slice(t) });
    for (let e = t; e < N.length; ++e) delete w[N[e].id];
    N.length > (N = N.slice(0, t)).length && (D = !0);
}
function ei(e) {
    M = !0;
}
class ea extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(m.default, g.A, E.A, b.Ay, y.A, O.A, A.Ay, v.default);
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
        return L || N.length > 0 ? N.filter(F) : null;
    }
    hasMention(e) {
        return w[e];
    }
    get loading() {
        return P;
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
        return M;
    }
    get mentionCountByChannel() {
        return R;
    }
    getMentionCountForChannel(e) {
        var t;
        return null != (t = R[e]) ? t : 0;
    }
}
I(ea, "displayName", "RecentMentionsStore");
let es = new ea(c.h, {
    LOAD_RECENT_MENTIONS: G,
    LOAD_RECENT_MENTIONS_SUCCESS: B,
    LOAD_RECENT_MENTIONS_FAILURE: H,
    SET_RECENT_MENTIONS_FILTER: Z,
    CLEAR_MENTIONS: en,
    TRUNCATE_MENTIONS: er,
    CHANNEL_SELECT: Q,
    CONNECTION_OPEN: $,
    GUILD_DELETE: J,
    MESSAGE_CREATE: W,
    MESSAGE_UPDATE: K,
    MESSAGE_DELETE: q,
    RECENT_MENTION_DELETE: q,
    MESSAGE_DELETE_BULK: X,
    CHANNEL_DELETE: et,
    THREAD_DELETE: et,
    RELATIONSHIP_ADD: ee,
    RELATIONSHIP_REMOVE: ee,
    RELATIONSHIP_UPDATE: ee,
    SET_RECENT_MENTIONS_STALE: ei,
});
