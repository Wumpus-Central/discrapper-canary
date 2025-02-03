n.d(t, { Z: () => R }), n(47120);
var i,
    r = n(149765),
    a = n(442837),
    s = n(570140),
    o = n(271383),
    l = n(430824),
    u = n(594174),
    c = n(973542),
    d = n(981631);
function f(e, t, n) {
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
let _ = new Set(),
    p = new Map(),
    h = new Map(),
    m = new Map(),
    g = new Map(),
    E = null;
function v(e) {
    return r.e$(e.permissions, d.Plq.ADMINISTRATOR);
}
function y(e) {
    let t = u.default.getCurrentUser(),
        n = l.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let i = new Set(),
        r = new Set(),
        a = new Set();
    if ((g.set(e, n.isOwner(t)), n.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var s;
        let u = o.ZP.getMember(e, t.id),
            d = new Set(null !== (s = null == u ? void 0 : u.roles) && void 0 !== s ? s : []),
            f = l.Z.getRoles(n.id);
        for (let t in f) {
            let n = f[t];
            (0, c.Z)(n) && (i.add(t), (0, c.h)(n) && (r.add(t), d.has(t) && a.add(t))), d.has(t) && v(n) && g.set(e, !0);
        }
    }
    return p.set(e, i), m.set(e, a), h.set(e, r), !0;
}
function I() {
    let e = l.Z.getGuilds(),
        t = new Set();
    for (let n in e) e[n].hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
    return (E = t), t;
}
function b() {
    p.clear(), m.clear(), h.clear(), g.clear(), (E = null);
}
function T(e) {
    let {
        guild: { id: t }
    } = e;
    if ((null == E ? void 0 : E.has(t)) !== !0) return !1;
    let n = new Set(E);
    n.delete(t), (E = n);
}
function S(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == E) return !1;
    let n = l.Z.getGuild(t);
    if (null == n) return !1;
    let i = n.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (i && !E.has(t)) {
        let e = new Set(E);
        return e.add(t), (E = e), !0;
    }
    if (!i && E.has(t)) {
        let e = new Set(E);
        return e.delete(t), (E = e), !0;
    }
    return !1;
}
function A(e) {
    let { guildId: t } = e;
    return !!p.has(t) && y(t);
}
function N(e) {
    let { guildId: t, user: n } = e,
        i = u.default.getCurrentUser();
    return !!(n.id === (null == i ? void 0 : i.id) && p.has(t)) && y(t);
}
class C extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == E ? I() : E;
    }
    buildRoles(e) {
        p.has(e) || y(e);
    }
    getSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = p.get(e)) && void 0 !== t ? t : _;
    }
    getPurchasableSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = h.get(e)) && void 0 !== t ? t : _;
    }
    getUserSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = m.get(e)) && void 0 !== t ? t : _;
    }
    getUserIsAdmin(e) {
        var t;
        return this.buildRoles(e), null !== (t = g.get(e)) && void 0 !== t && t;
    }
}
f(C, 'displayName', 'SubscriptionRoleStore');
let R = new C(s.Z, {
    CONNECTION_OPEN: b,
    LOGOUT: b,
    GUILD_CREATE: S,
    GUILD_DELETE: T,
    GUILD_UPDATE: S,
    GUILD_ROLE_CREATE: A,
    GUILD_ROLE_UPDATE: A,
    GUILD_ROLE_DELETE: A,
    GUILD_MEMBER_UPDATE: N
});
