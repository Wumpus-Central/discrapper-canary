(n.d(t, { Z: () => R }), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(601964),
    s = n(345162),
    l = n(271383),
    c = n(485386),
    u = n(430824),
    d = n(594174),
    _ = n(973542),
    f = n(981631);
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
    let t = d.default.getCurrentUser(),
        n = u.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        a = new Set();
    if ((b.set(e, (0, o.eM)(n, t)), n.features.has(f.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var p;
        let o = l.ZP.getMember(e, t.id),
            u = new Set(null != (p = null == o ? void 0 : o.roles) ? p : []);
        for (let t of c.Z.getSortedRoles(n.id)) ((0, _.Z)(t) && (r.add(t.id), (0, _.h)(t) && (i.add(t.id), u.has(t.id) && a.add(t.id))), u.has(t.id) && (0, s.Fs)(t, f.Plq.ADMINISTRATOR) && b.set(e, !0));
    }
    return (m.set(e, r), E.set(e, a), g.set(e, i), !0);
}
function v() {
    let e = u.Z.getGuildsArray(),
        t = new Set();
    for (let n of e) n.features.has(f.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
    return ((y = t), t);
}
function I() {
    (m.clear(), E.clear(), g.clear(), b.clear(), (y = null));
}
function T(e) {
    let {
        guild: { id: t }
    } = e;
    if ((null == y ? void 0 : y.has(t)) !== !0) return !1;
    let n = new Set(y);
    (n.delete(t), (y = n));
}
function S(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == y) return !1;
    let n = u.Z.getGuild(t);
    if (null == n) return !1;
    let r = n.features.has(f.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
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
function A(e) {
    let { guildId: t } = e;
    return !!m.has(t) && O(t);
}
function N(e) {
    let { guildId: t, user: n } = e,
        r = d.default.getCurrentUser();
    return !!(n.id === (null == r ? void 0 : r.id) && m.has(t)) && O(t);
}
class C extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.Z, d.default, l.ZP);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == y ? v() : y;
    }
    buildRoles(e) {
        m.has(e) || O(e);
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
p(C, 'displayName', 'SubscriptionRoleStore');
let R = new C(a.Z, {
    CONNECTION_OPEN: I,
    LOGOUT: I,
    GUILD_CREATE: S,
    GUILD_DELETE: T,
    GUILD_UPDATE: S,
    GUILD_ROLE_CREATE: A,
    GUILD_ROLE_UPDATE: A,
    GUILD_ROLE_DELETE: A,
    GUILD_MEMBER_UPDATE: N
});
