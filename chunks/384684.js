"use strict";
n.d(t, { A: () => C });
var i = n(17928),
    r = n(228366),
    a = n(260509),
    s = n(34457),
    l = n(696451),
    o = n(317525),
    d = n(71393),
    c = n(287809),
    u = n(98318),
    _ = n(652215);
let E = new Set(),
    A = new Map(),
    h = new Map(),
    I = new Map(),
    f = new Map(),
    p = null;
function T(e) {
    let t = c.default.getCurrentUser(),
        n = d.A.getGuild(e);
    if (null == n || null == t) return !1;
    let i = new Set(),
        r = new Set(),
        E = new Set();
    if ((f.set(e, (0, a.bM)(n, t)), n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))) {
        let a = l.Ay.getMember(e, t.id),
            d = new Set(a?.roles ?? []);
        for (let t of o.A.getSortedRoles(n.id))
            (0, u.U)(t) && (i.add(t.id), (0, u.X)(t) && (r.add(t.id), d.has(t.id) && E.add(t.id))),
                d.has(t.id) && (0, s._m)(t, _.xBc.ADMINISTRATOR) && f.set(e, !0);
    }
    return A.set(e, i), I.set(e, E), h.set(e, r), !0;
}
function m() {
    A.clear(), I.clear(), h.clear(), f.clear(), (p = null);
}
function g(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == p) return !1;
    let n = d.A.getGuild(t);
    if (null == n) return !1;
    let i = n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (i && !p.has(t)) {
        let e = new Set(p);
        return e.add(t), (p = e), !0;
    }
    if (!i && p.has(t)) {
        let e = new Set(p);
        return e.delete(t), (p = e), !0;
    }
    return !1;
}
function S(e) {
    let { guildId: t } = e;
    return !!A.has(t) && T(t);
}
class N extends i.Ay.Store {
    static displayName = "SubscriptionRoleStore";
    initialize() {
        this.waitFor(d.A, o.A, c.default, l.Ay);
    }
    getGuildIdsWithPurchasableRoles() {
        if (null != p) return p;
        let e = d.A.getGuildsArray(),
            t = new Set();
        for (let n of e) n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
        return (p = t), t;
    }
    buildRoles(e) {
        A.has(e) || T(e);
    }
    getSubscriptionRoles(e) {
        return this.buildRoles(e), A.get(e) ?? E;
    }
    getPurchasableSubscriptionRoles(e) {
        return this.buildRoles(e), h.get(e) ?? E;
    }
    getUserSubscriptionRoles(e) {
        return this.buildRoles(e), I.get(e) ?? E;
    }
    getUserIsAdmin(e) {
        return this.buildRoles(e), f.get(e) ?? !1;
    }
}
let C = new N(r.h, {
    CONNECTION_OPEN: m,
    LOGOUT: m,
    GUILD_CREATE: g,
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        if (p?.has(t) !== !0) return !1;
        let n = new Set(p);
        n.delete(t), (p = n);
    },
    GUILD_UPDATE: g,
    GUILD_ROLE_CREATE: S,
    GUILD_ROLE_UPDATE: S,
    GUILD_ROLE_DELETE: S,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e,
            i = c.default.getCurrentUser();
        return !!(n.id === i?.id && A.has(t)) && T(t);
    },
});
