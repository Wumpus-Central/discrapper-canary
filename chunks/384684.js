"use strict";
n.d(t, { A: () => N });
var r = n(311907),
    i = n(73153),
    s = n(260509),
    a = n(34457),
    o = n(696451),
    l = n(317525),
    u = n(71393),
    c = n(287809),
    d = n(98318),
    _ = n(652215);
let f = new Set(),
    p = new Map(),
    h = new Map(),
    E = new Map(),
    m = new Map(),
    g = null;
function A(e) {
    let t = c.default.getCurrentUser(),
        n = u.A.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        f = new Set();
    if ((m.set(e, (0, s.bM)(n, t)), n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))) {
        let s = o.Ay.getMember(e, t.id),
            u = new Set(s?.roles ?? []);
        for (let t of l.A.getSortedRoles(n.id))
            (0, d.U)(t) && (r.add(t.id), (0, d.X)(t) && (i.add(t.id), u.has(t.id) && f.add(t.id))),
                u.has(t.id) && (0, a._m)(t, _.xBc.ADMINISTRATOR) && m.set(e, !0);
    }
    return p.set(e, r), E.set(e, f), h.set(e, i), !0;
}
function I() {
    p.clear(), E.clear(), h.clear(), m.clear(), (g = null);
}
function T(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == g) return !1;
    let n = u.A.getGuild(t);
    if (null == n) return !1;
    let r = n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (r && !g.has(t)) {
        let e = new Set(g);
        return e.add(t), (g = e), !0;
    }
    if (!r && g.has(t)) {
        let e = new Set(g);
        return e.delete(t), (g = e), !0;
    }
    return !1;
}
function S(e) {
    let { guildId: t } = e;
    return !!p.has(t) && A(t);
}
class y extends r.Ay.Store {
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
        p.has(e) || A(e);
    }
    getSubscriptionRoles(e) {
        return this.buildRoles(e), p.get(e) ?? f;
    }
    getPurchasableSubscriptionRoles(e) {
        return this.buildRoles(e), h.get(e) ?? f;
    }
    getUserSubscriptionRoles(e) {
        return this.buildRoles(e), E.get(e) ?? f;
    }
    getUserIsAdmin(e) {
        return this.buildRoles(e), m.get(e) ?? !1;
    }
}
let N = new y(i.h, {
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
            r = c.default.getCurrentUser();
        return !!(n.id === r?.id && p.has(t)) && A(t);
    },
});
