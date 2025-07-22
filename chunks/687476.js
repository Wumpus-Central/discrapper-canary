(n.d(t, { Z: () => P }), n(388685));
var r,
    i = n(149765),
    a = n(442837),
    o = n(570140),
    s = n(601964),
    l = n(271383),
    c = n(485386),
    u = n(430824),
    d = n(594174),
    f = n(973542),
    _ = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
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
    return i.e$(e.permissions, _.Plq.ADMINISTRATOR);
}
function v(e) {
    let t = d.default.getCurrentUser(),
        n = u.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        a = new Set();
    if ((b.set(e, (0, s.eM)(n, t)), n.features.has(_.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var o;
        let s = l.ZP.getMember(e, t.id),
            u = new Set(null != (o = null == s ? void 0 : s.roles) ? o : []),
            d = c.Z.getRoles(n.id);
        for (let t in d) {
            let n = d[t];
            ((0, f.Z)(n) && (r.add(t), (0, f.h)(n) && (i.add(t), u.has(t) && a.add(t))), u.has(t) && O(n) && b.set(e, !0));
        }
    }
    return (m.set(e, r), E.set(e, a), g.set(e, i), !0);
}
function I() {
    let e = u.Z.getGuildsArray(),
        t = new Set();
    for (let n of e) n.features.has(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
    return ((y = t), t);
}
function T() {
    (m.clear(), E.clear(), g.clear(), b.clear(), (y = null));
}
function S(e) {
    let {
        guild: { id: t }
    } = e;
    if ((null == y ? void 0 : y.has(t)) !== !0) return !1;
    let n = new Set(y);
    (n.delete(t), (y = n));
}
function A(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == y) return !1;
    let n = u.Z.getGuild(t);
    if (null == n) return !1;
    let r = n.features.has(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (r && !y.has(t)) {
        let e = new Set(y);
        return (e.add(t), (y = e), !0);
    }
    if (!r && y.has(t)) {
        let e = new Set(y);
        return (e.delete(t), (y = e), !0);
    }
    return !1;
}
function N(e) {
    let { guildId: t } = e;
    return !!m.has(t) && v(t);
}
function C(e) {
    let { guildId: t, user: n } = e,
        r = d.default.getCurrentUser();
    return !!(n.id === (null == r ? void 0 : r.id) && m.has(t)) && v(t);
}
class R extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.Z, d.default, l.ZP);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == y ? I() : y;
    }
    buildRoles(e) {
        m.has(e) || v(e);
    }
    getSubscriptionRoles(e) {
        var t;
        return (this.buildRoles(e), null != (t = m.get(e)) ? t : h);
    }
    getPurchasableSubscriptionRoles(e) {
        var t;
        return (this.buildRoles(e), null != (t = g.get(e)) ? t : h);
    }
    getUserSubscriptionRoles(e) {
        var t;
        return (this.buildRoles(e), null != (t = E.get(e)) ? t : h);
    }
    getUserIsAdmin(e) {
        var t;
        return (this.buildRoles(e), null != (t = b.get(e)) && t);
    }
}
p(R, 'displayName', 'SubscriptionRoleStore');
let P = new R(o.Z, {
    CONNECTION_OPEN: T,
    LOGOUT: T,
    GUILD_CREATE: A,
    GUILD_DELETE: S,
    GUILD_UPDATE: A,
    GUILD_ROLE_CREATE: N,
    GUILD_ROLE_UPDATE: N,
    GUILD_ROLE_DELETE: N,
    GUILD_MEMBER_UPDATE: C
});
