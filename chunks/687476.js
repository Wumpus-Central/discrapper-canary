n.d(t, { Z: () => R }), n(388685);
var r,
    i = n(149765),
    a = n(442837),
    o = n(570140),
    s = n(271383),
    l = n(485386),
    c = n(430824),
    u = n(594174),
    d = n(973542),
    f = n(981631);
function _(e, t, n) {
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
let p = new Set(),
    h = new Map(),
    m = new Map(),
    g = new Map(),
    E = new Map(),
    b = null;
function y(e) {
    return i.e$(e.permissions, f.Plq.ADMINISTRATOR);
}
function O(e) {
    let t = u.default.getCurrentUser(),
        n = c.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        a = new Set();
    if ((E.set(e, n.isOwner(t)), n.hasFeature(f.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var o;
        let c = s.ZP.getMember(e, t.id),
            u = new Set(null != (o = null == c ? void 0 : c.roles) ? o : []),
            f = l.Z.getRoles(n.id);
        for (let t in f) {
            let n = f[t];
            (0, d.Z)(n) && (r.add(t), (0, d.h)(n) && (i.add(t), u.has(t) && a.add(t))), u.has(t) && y(n) && E.set(e, !0);
        }
    }
    return h.set(e, r), g.set(e, a), m.set(e, i), !0;
}
function v() {
    let e = c.Z.getGuilds(),
        t = new Set();
    for (let n in e) e[n].hasFeature(f.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
    return (b = t), t;
}
function I() {
    h.clear(), g.clear(), m.clear(), E.clear(), (b = null);
}
function T(e) {
    let {
        guild: { id: t }
    } = e;
    if ((null == b ? void 0 : b.has(t)) !== !0) return !1;
    let n = new Set(b);
    n.delete(t), (b = n);
}
function S(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == b) return !1;
    let n = c.Z.getGuild(t);
    if (null == n) return !1;
    let r = n.hasFeature(f.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (r && !b.has(t)) {
        let e = new Set(b);
        return e.add(t), (b = e), !0;
    }
    if (!r && b.has(t)) {
        let e = new Set(b);
        return e.delete(t), (b = e), !0;
    }
    return !1;
}
function A(e) {
    let { guildId: t } = e;
    return !!h.has(t) && O(t);
}
function N(e) {
    let { guildId: t, user: n } = e,
        r = u.default.getCurrentUser();
    return !!(n.id === (null == r ? void 0 : r.id) && h.has(t)) && O(t);
}
class C extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, l.Z, u.default, s.ZP);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == b ? v() : b;
    }
    buildRoles(e) {
        h.has(e) || O(e);
    }
    getSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = h.get(e)) ? t : p;
    }
    getPurchasableSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = m.get(e)) ? t : p;
    }
    getUserSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = g.get(e)) ? t : p;
    }
    getUserIsAdmin(e) {
        var t;
        return this.buildRoles(e), null != (t = E.get(e)) && t;
    }
}
_(C, 'displayName', 'SubscriptionRoleStore');
let R = new C(o.Z, {
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
