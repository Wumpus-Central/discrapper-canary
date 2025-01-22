var i,
    a = r(47120);
var o = r(149765),
    s = r(442837),
    l = r(570140),
    u = r(271383),
    c = r(430824),
    d = r(594174),
    f = r(973542),
    p = r(981631);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = new Set(),
    m = new Map(),
    g = new Map(),
    E = new Map(),
    v = new Map(),
    y = null;
function b(e) {
    return o.e$(e.permissions, p.Plq.ADMINISTRATOR);
}
function I(e) {
    let n = d.default.getCurrentUser(),
        r = c.Z.getGuild(e);
    if (null == r || null == n) return !1;
    let i = new Set(),
        a = new Set(),
        o = new Set();
    if ((v.set(e, r.isOwner(n)), r.hasFeature(p.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var s;
        let l = u.ZP.getMember(e, n.id),
            d = new Set(null !== (s = null == l ? void 0 : l.roles) && void 0 !== s ? s : []),
            p = c.Z.getRoles(r.id);
        for (let n in p) {
            let r = p[n];
            (0, f.Z)(r) && (i.add(n), (0, f.h)(r) && (a.add(n), d.has(n) && o.add(n))), d.has(n) && b(r) && v.set(e, !0);
        }
    }
    return m.set(e, i), E.set(e, o), g.set(e, a), !0;
}
function T() {
    let e = c.Z.getGuilds(),
        n = new Set();
    for (let r in e) e[r].hasFeature(p.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && n.add(r);
    return (y = n), n;
}
function S() {
    m.clear(), E.clear(), g.clear(), v.clear(), (y = null);
}
function A(e) {
    let {
        guild: { id: n }
    } = e;
    if ((null == y ? void 0 : y.has(n)) !== !0) return !1;
    let r = new Set(y);
    r.delete(n), (y = r);
}
function C(e) {
    let {
        guild: { id: n }
    } = e;
    if (null == y) return !1;
    let r = c.Z.getGuild(n);
    if (null == r) return !1;
    let i = r.hasFeature(p.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (i && !y.has(n)) {
        let e = new Set(y);
        return e.add(n), (y = e), !0;
    }
    if (!i && y.has(n)) {
        let e = new Set(y);
        return e.delete(n), (y = e), !0;
    }
    return !1;
}
function N(e) {
    let { guildId: n } = e;
    return !!m.has(n) && I(n);
}
function R(e) {
    let { guildId: n, user: r } = e,
        i = d.default.getCurrentUser();
    return !!(r.id === (null == i ? void 0 : i.id) && m.has(n)) && I(n);
}
class O extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == y ? T() : y;
    }
    buildRoles(e) {
        !m.has(e) && I(e);
    }
    getSubscriptionRoles(e) {
        var n;
        return this.buildRoles(e), null !== (n = m.get(e)) && void 0 !== n ? n : _;
    }
    getPurchasableSubscriptionRoles(e) {
        var n;
        return this.buildRoles(e), null !== (n = g.get(e)) && void 0 !== n ? n : _;
    }
    getUserSubscriptionRoles(e) {
        var n;
        return this.buildRoles(e), null !== (n = E.get(e)) && void 0 !== n ? n : _;
    }
    getUserIsAdmin(e) {
        var n;
        return this.buildRoles(e), null !== (n = v.get(e)) && void 0 !== n && n;
    }
}
h(O, 'displayName', 'SubscriptionRoleStore'),
    (n.Z = new O(l.Z, {
        CONNECTION_OPEN: S,
        LOGOUT: S,
        GUILD_CREATE: C,
        GUILD_DELETE: A,
        GUILD_UPDATE: C,
        GUILD_ROLE_CREATE: N,
        GUILD_ROLE_UPDATE: N,
        GUILD_ROLE_DELETE: N,
        GUILD_MEMBER_UPDATE: R
    }));
