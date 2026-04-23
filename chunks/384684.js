n.d(t, { A: () => C });
var i = n(17928),
    r = n(228366),
    l = n(260509),
    a = n(34457),
    s = n(696451),
    o = n(317525),
    d = n(71393),
    u = n(287809),
    c = n(98318),
    h = n(652215);
let E = new Set(),
    _ = new Map(),
    p = new Map(),
    A = new Map(),
    f = new Map(),
    g = null;
function I(e) {
    let t = u.default.getCurrentUser(),
        n = d.A.getGuild(e);
    if (null == n || null == t) return !1;
    let i = new Set(),
        r = new Set(),
        E = new Set();
    if ((f.set(e, (0, l.bM)(n, t)), n.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))) {
        let l = s.Ay.getMember(e, t.id),
            d = new Set(l?.roles ?? []);
        for (let t of o.A.getSortedRoles(n.id))
            (0, c.U)(t) && (i.add(t.id), (0, c.X)(t) && (r.add(t.id), d.has(t.id) && E.add(t.id))),
                d.has(t.id) && (0, a._m)(t, h.xBc.ADMINISTRATOR) && f.set(e, !0);
    }
    return _.set(e, i), A.set(e, E), p.set(e, r), !0;
}
function T() {
    _.clear(), A.clear(), p.clear(), f.clear(), (g = null);
}
function S(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == g) return !1;
    let n = d.A.getGuild(t);
    if (null == n) return !1;
    let i = n.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
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
function m(e) {
    let { guildId: t } = e;
    return !!_.has(t) && I(t);
}
class O extends i.Ay.Store {
    static displayName = "SubscriptionRoleStore";
    initialize() {
        this.waitFor(d.A, o.A, u.default, s.Ay);
    }
    getGuildIdsWithPurchasableRoles() {
        if (null != g) return g;
        let e = d.A.getGuildsArray(),
            t = new Set();
        for (let n of e) n.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
        return (g = t), t;
    }
    buildRoles(e) {
        _.has(e) || I(e);
    }
    getSubscriptionRoles(e) {
        return this.buildRoles(e), _.get(e) ?? E;
    }
    getPurchasableSubscriptionRoles(e) {
        return this.buildRoles(e), p.get(e) ?? E;
    }
    getUserSubscriptionRoles(e) {
        return this.buildRoles(e), A.get(e) ?? E;
    }
    getUserIsAdmin(e) {
        return this.buildRoles(e), f.get(e) ?? !1;
    }
}
let C = new O(r.h, {
    CONNECTION_OPEN: T,
    LOGOUT: T,
    GUILD_CREATE: S,
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        if (g?.has(t) !== !0) return !1;
        let n = new Set(g);
        n.delete(t), (g = n);
    },
    GUILD_UPDATE: S,
    GUILD_ROLE_CREATE: m,
    GUILD_ROLE_UPDATE: m,
    GUILD_ROLE_DELETE: m,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e,
            i = u.default.getCurrentUser();
        return !!(n.id === i?.id && _.has(t)) && I(t);
    },
});
