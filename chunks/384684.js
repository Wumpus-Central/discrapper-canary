"use strict";
n.d(t, { A: () => y });
var i = n(17928),
    r = n(228366),
    s = n(260509),
    a = n(34457),
    o = n(696451),
    l = n(317525),
    u = n(71393),
    c = n(287809),
    d = n(98318),
    _ = n(652215);
let f = new Set(),
    h = new Map(),
    p = new Map(),
    E = new Map(),
    m = new Map(),
    g = null;
function A(e) {
    let t = c.default.getCurrentUser(),
        n = u.A.getGuild(e);
    if (null == n || null == t) return !1;
    let i = new Set(),
        r = new Set(),
        f = new Set();
    if ((m.set(e, (0, s.bM)(n, t)), n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))) {
        let s = o.Ay.getMember(e, t.id),
            u = new Set(s?.roles ?? []);
        for (let t of l.A.getSortedRoles(n.id))
            (0, d.U)(t) && (i.add(t.id), (0, d.X)(t) && (r.add(t.id), u.has(t.id) && f.add(t.id))),
                u.has(t.id) && (0, a._m)(t, _.xBc.ADMINISTRATOR) && m.set(e, !0);
    }
    return h.set(e, i), E.set(e, f), p.set(e, r), !0;
}
function I() {
    h.clear(), E.clear(), p.clear(), m.clear(), (g = null);
}
function T(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == g) return !1;
    let n = u.A.getGuild(t);
    if (null == n) return !1;
    let i = n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (i && !g.has(t)) {
        let e = new Set(g);
        return e.add(t), (g = e), !0;
    }
    if (!i && g.has(t)) {
        let e = new Set(g);
        return e.delete(t), (g = e), !0;
    }
    return !1;
}
function S(e) {
    let { guildId: t } = e;
    return !!h.has(t) && A(t);
}
class N extends i.Ay.Store {
    static displayName = "SubscriptionRoleStore";
    initialize() {
        this.waitFor(u.A, l.A, c.default, o.Ay);
    }
    getGuildIdsWithPurchasableRoles() {
        if (null != g) return g;
        let e = u.A.getGuildsArray(),
            t = new Set();
        for (let n of e) n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
        return (g = t), t;
    }
    buildRoles(e) {
        h.has(e) || A(e);
    }
    getSubscriptionRoles(e) {
        return this.buildRoles(e), h.get(e) ?? f;
    }
    getPurchasableSubscriptionRoles(e) {
        return this.buildRoles(e), p.get(e) ?? f;
    }
    getUserSubscriptionRoles(e) {
        return this.buildRoles(e), E.get(e) ?? f;
    }
    getUserIsAdmin(e) {
        return this.buildRoles(e), m.get(e) ?? !1;
    }
}
let y = new N(r.h, {
    CONNECTION_OPEN: I,
    LOGOUT: I,
    GUILD_CREATE: T,
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        if (g?.has(t) !== !0) return !1;
        let n = new Set(g);
        n.delete(t), (g = n);
    },
    GUILD_UPDATE: T,
    GUILD_ROLE_CREATE: S,
    GUILD_ROLE_UPDATE: S,
    GUILD_ROLE_DELETE: S,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e,
            i = c.default.getCurrentUser();
        return !!(n.id === i?.id && h.has(t)) && A(t);
    },
});
