n.d(t, { A: () => O });
var i = n(17928),
    l = n(228366),
    a = n(260509),
    r = n(34457),
    s = n(696451),
    o = n(317525),
    d = n(71393),
    u = n(287809),
    c = n(98318),
    h = n(652215);
let E = new Set(),
    A = new Map(),
    _ = new Map(),
    p = new Map(),
    g = new Map(),
    f = null;
function I(e) {
    let t = u.default.getCurrentUser(),
        n = d.A.getGuild(e);
    if (null == n || null == t) return !1;
    let i = new Set(),
        l = new Set(),
        E = new Set();
    if ((g.set(e, (0, a.bM)(n, t)), n.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))) {
        let a = s.Ay.getMember(e, t.id),
            d = new Set(a?.roles ?? []);
        for (let t of o.A.getSortedRoles(n.id))
            (0, c.U)(t) && (i.add(t.id), (0, c.X)(t) && (l.add(t.id), d.has(t.id) && E.add(t.id))),
                d.has(t.id) && (0, r._m)(t, h.xBc.ADMINISTRATOR) && g.set(e, !0);
    }
    return A.set(e, i), p.set(e, E), _.set(e, l), !0;
}
function S() {
    A.clear(), p.clear(), _.clear(), g.clear(), (f = null);
}
function T(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == f) return !1;
    let n = d.A.getGuild(t);
    if (null == n) return !1;
    let i = n.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (i && !f.has(t)) {
        let e = new Set(f);
        return e.add(t), (f = e), !0;
    }
    if (!i && f.has(t)) {
        let e = new Set(f);
        return e.delete(t), (f = e), !0;
    }
    return !1;
}
function m(e) {
    let { guildId: t } = e;
    return !!A.has(t) && I(t);
}
class C extends i.Ay.Store {
    static displayName = "SubscriptionRoleStore";
    initialize() {
        this.waitFor(d.A, o.A, u.default, s.Ay);
    }
    getGuildIdsWithPurchasableRoles() {
        if (null != f) return f;
        let e = d.A.getGuildsArray(),
            t = new Set();
        for (let n of e) n.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
        return (f = t), t;
    }
    buildRoles(e) {
        A.has(e) || I(e);
    }
    getSubscriptionRoles(e) {
        return this.buildRoles(e), A.get(e) ?? E;
    }
    getPurchasableSubscriptionRoles(e) {
        return this.buildRoles(e), _.get(e) ?? E;
    }
    getUserSubscriptionRoles(e) {
        return this.buildRoles(e), p.get(e) ?? E;
    }
    getUserIsAdmin(e) {
        return this.buildRoles(e), g.get(e) ?? !1;
    }
}
let O = new C(l.h, {
    CONNECTION_OPEN: S,
    LOGOUT: S,
    GUILD_CREATE: T,
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        if (f?.has(t) !== !0) return !1;
        let n = new Set(f);
        n.delete(t), (f = n);
    },
    GUILD_UPDATE: T,
    GUILD_ROLE_CREATE: m,
    GUILD_ROLE_UPDATE: m,
    GUILD_ROLE_DELETE: m,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e,
            i = u.default.getCurrentUser();
        return !!(n.id === i?.id && A.has(t)) && I(t);
    },
});
