n.d(t, { Z: () => P }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(601964),
    s = n(345162),
    l = n(271383),
    c = n(485386),
    u = n(430824),
    d = n(594174),
    f = n(973542),
    p = n(981631);
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
let m = new Set(),
    h = new Map(),
    g = new Map(),
    E = new Map(),
    b = new Map(),
    y = null;
function O(e) {
    let t = d.default.getCurrentUser(),
        n = u.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        a = new Set();
    if ((b.set(e, (0, o.eM)(n, t)), n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var _;
        let o = l.ZP.getMember(e, t.id),
            u = new Set(null != (_ = null == o ? void 0 : o.roles) ? _ : []);
        for (let t of c.Z.getSortedRoles(n.id))
            (0, f.Z)(t) && (r.add(t.id), (0, f.h)(t) && (i.add(t.id), u.has(t.id) && a.add(t.id))),
                u.has(t.id) && (0, s.Fs)(t, p.Plq.ADMINISTRATOR) && b.set(e, !0);
    }
    return h.set(e, r), E.set(e, a), g.set(e, i), !0;
}
function v() {
    let e = u.Z.getGuildsArray(),
        t = new Set();
    for (let n of e) n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
    return (y = t), t;
}
function S() {
    h.clear(), E.clear(), g.clear(), b.clear(), (y = null);
}
function I(e) {
    let {
        guild: { id: t },
    } = e;
    if ((null == y ? void 0 : y.has(t)) !== !0) return !1;
    let n = new Set(y);
    n.delete(t), (y = n);
}
function T(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == y) return !1;
    let n = u.Z.getGuild(t);
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
function C(e) {
    let { guildId: t } = e;
    return !!h.has(t) && O(t);
}
function A(e) {
    let { guildId: t, user: n } = e,
        r = d.default.getCurrentUser();
    return !!(n.id === (null == r ? void 0 : r.id) && h.has(t)) && O(t);
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.Z, d.default, l.ZP);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == y ? v() : y;
    }
    buildRoles(e) {
        h.has(e) || O(e);
    }
    getSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = h.get(e)) ? t : m;
    }
    getPurchasableSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = g.get(e)) ? t : m;
    }
    getUserSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = E.get(e)) ? t : m;
    }
    getUserIsAdmin(e) {
        var t;
        return this.buildRoles(e), null != (t = b.get(e)) && t;
    }
}
_(N, "displayName", "SubscriptionRoleStore");
let P = new N(a.Z, {
    CONNECTION_OPEN: S,
    LOGOUT: S,
    GUILD_CREATE: T,
    GUILD_DELETE: I,
    GUILD_UPDATE: T,
    GUILD_ROLE_CREATE: C,
    GUILD_ROLE_UPDATE: C,
    GUILD_ROLE_DELETE: C,
    GUILD_MEMBER_UPDATE: A,
});
