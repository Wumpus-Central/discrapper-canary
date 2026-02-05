"use strict";
n.d(t, { A: () => N });
var r = n(311907),
    i = n(73153),
    a = n(260509),
    s = n(34457),
    o = n(696451),
    l = n(317525),
    u = n(71393),
    c = n(287809),
    d = n(98318),
    _ = n(652215);
let f = new Set(),
    p = new Map(),
    h = new Map(),
    m = new Map(),
    g = new Map(),
    E = null;
function A(e) {
    let t = c.default.getCurrentUser(),
        n = u.A.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        f = new Set();
    if ((g.set(e, (0, a.bM)(n, t)), n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))) {
        let a = o.Ay.getMember(e, t.id),
            u = new Set(a?.roles ?? []);
        for (let t of l.A.getSortedRoles(n.id))
            (0, d.U)(t) && (r.add(t.id), (0, d.X)(t) && (i.add(t.id), u.has(t.id) && f.add(t.id))),
                u.has(t.id) && (0, s._m)(t, _.xBc.ADMINISTRATOR) && g.set(e, !0);
    }
    return p.set(e, r), m.set(e, f), h.set(e, i), !0;
}
function I() {
    let e = u.A.getGuildsArray(),
        t = new Set();
    for (let n of e) n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
    return (E = t), t;
}
function T() {
    p.clear(), m.clear(), h.clear(), g.clear(), (E = null);
}
function y(e) {
    let {
        guild: { id: t },
    } = e;
    if (E?.has(t) !== !0) return !1;
    let n = new Set(E);
    n.delete(t), (E = n);
}
function S(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == E) return !1;
    let n = u.A.getGuild(t);
    if (null == n) return !1;
    let r = n.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (r && !E.has(t)) {
        let e = new Set(E);
        return e.add(t), (E = e), !0;
    }
    if (!r && E.has(t)) {
        let e = new Set(E);
        return e.delete(t), (E = e), !0;
    }
    return !1;
}
function v(e) {
    let { guildId: t } = e;
    return !!p.has(t) && A(t);
}
function C(e) {
    let { guildId: t, user: n } = e,
        r = c.default.getCurrentUser();
    return !!(n.id === r?.id && p.has(t)) && A(t);
}
class b extends r.Ay.Store {
    static displayName = "SubscriptionRoleStore";
    initialize() {
        this.waitFor(u.A, l.A, c.default, o.Ay);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == E ? I() : E;
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
        return this.buildRoles(e), m.get(e) ?? f;
    }
    getUserIsAdmin(e) {
        return this.buildRoles(e), g.get(e) ?? !1;
    }
}
let N = new b(i.h, {
    CONNECTION_OPEN: T,
    LOGOUT: T,
    GUILD_CREATE: S,
    GUILD_DELETE: y,
    GUILD_UPDATE: S,
    GUILD_ROLE_CREATE: v,
    GUILD_ROLE_UPDATE: v,
    GUILD_ROLE_DELETE: v,
    GUILD_MEMBER_UPDATE: C,
});
