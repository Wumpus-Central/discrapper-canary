n.d(t, {
    A: () => R,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(260509),
    o = n(34457),
    l = n(696451),
    c = n(317525),
    u = n(71393),
    d = n(287809),
    f = n(98318),
    p = n(652215);

function _(e, t, n) {
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
let h = new Set(),
    m = new Map(),
    g = new Map(),
    E = new Map(),
    b = new Map(),
    y = null;

function O(e) {
    let t = d.default.getCurrentUser(),
        n = u.A.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        a = new Set();
    if ((b.set(e, (0, s.bM)(n, t)), n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var _;
        let s = l.Ay.getMember(e, t.id),
            u = new Set(null != (_ = null == s ? void 0 : s.roles) ? _ : []);
        for (let t of c.A.getSortedRoles(n.id))
            (0, f.U)(t) && (r.add(t.id), (0, f.X)(t) && (i.add(t.id), u.has(t.id) && a.add(t.id))),
                u.has(t.id) && (0, o._m)(t, p.xBc.ADMINISTRATOR) && b.set(e, !0);
    }
    return m.set(e, r), E.set(e, a), g.set(e, i), !0;
}

function A() {
    let e = u.A.getGuildsArray(),
        t = new Set();
    for (let n of e) n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
    return (y = t), t;
}

function v() {
    m.clear(), E.clear(), g.clear(), b.clear(), (y = null);
}

function S(e) {
    let {
        guild: { id: t },
    } = e;
    if ((null == y ? void 0 : y.has(t)) !== !0) return !1;
    let n = new Set(y);
    n.delete(t), (y = n);
}

function I(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == y) return !1;
    let n = u.A.getGuild(t);
    if (null == n) return !1;
    let r = n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (r && !y.has(t)) {
        let e = new Set(y);
        return e.add(t), (y = e), !0;
    }
    if (!r && y.has(t)) {
        let e = new Set(y);
        return e.delete(t), (y = e), !0;
    }
    return !1;
}

function T(e) {
    let { guildId: t } = e;
    return !!m.has(t) && O(t);
}

function C(e) {
    let { guildId: t, user: n } = e,
        r = d.default.getCurrentUser();
    return !!(n.id === (null == r ? void 0 : r.id) && m.has(t)) && O(t);
}
class N extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(u.A, c.A, d.default, l.Ay);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == y ? A() : y;
    }
    buildRoles(e) {
        m.has(e) || O(e);
    }
    getSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = m.get(e)) ? t : h;
    }
    getPurchasableSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = g.get(e)) ? t : h;
    }
    getUserSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = E.get(e)) ? t : h;
    }
    getUserIsAdmin(e) {
        var t;
        return this.buildRoles(e), null != (t = b.get(e)) && t;
    }
}
_(N, "displayName", "SubscriptionRoleStore");
let R = new N(a.h, {
    CONNECTION_OPEN: v,
    LOGOUT: v,
    GUILD_CREATE: I,
    GUILD_DELETE: S,
    GUILD_UPDATE: I,
    GUILD_ROLE_CREATE: T,
    GUILD_ROLE_UPDATE: T,
    GUILD_ROLE_DELETE: T,
    GUILD_MEMBER_UPDATE: C,
});
