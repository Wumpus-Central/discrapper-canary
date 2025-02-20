n.d(t, { Z: () => C }), n(47120);
var r,
    i = n(149765),
    o = n(442837),
    a = n(570140),
    s = n(271383),
    l = n(430824),
    c = n(594174),
    u = n(973542),
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
let p = new Set(),
    _ = new Map(),
    h = new Map(),
    m = new Map(),
    g = new Map(),
    E = null;
function v(e) {
    return i.e$(e.permissions, d.Plq.ADMINISTRATOR);
}
function b(e) {
    let t = c.default.getCurrentUser(),
        n = l.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        o = new Set();
    if ((g.set(e, n.isOwner(t)), n.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var a;
        let c = s.ZP.getMember(e, t.id),
            d = new Set(null !== (a = null == c ? void 0 : c.roles) && void 0 !== a ? a : []),
            f = l.Z.getRoles(n.id);
        for (let t in f) {
            let n = f[t];
            (0, u.Z)(n) && (r.add(t), (0, u.h)(n) && (i.add(t), d.has(t) && o.add(t))), d.has(t) && v(n) && g.set(e, !0);
        }
    }
    return _.set(e, r), m.set(e, o), h.set(e, i), !0;
}
function y() {
    let e = l.Z.getGuilds(),
        t = new Set();
    for (let n in e) e[n].hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
    return (E = t), t;
}
function O() {
    _.clear(), m.clear(), h.clear(), g.clear(), (E = null);
}
function S(e) {
    let {
        guild: { id: t }
    } = e;
    if ((null == E ? void 0 : E.has(t)) !== !0) return !1;
    let n = new Set(E);
    n.delete(t), (E = n);
}
function I(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == E) return !1;
    let n = l.Z.getGuild(t);
    if (null == n) return !1;
    let r = n.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
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
function T(e) {
    let { guildId: t } = e;
    return !!_.has(t) && b(t);
}
function N(e) {
    let { guildId: t, user: n } = e,
        r = c.default.getCurrentUser();
    return !!(n.id === (null == r ? void 0 : r.id) && _.has(t)) && b(t);
}
class A extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(l.Z);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == E ? y() : E;
    }
    buildRoles(e) {
        _.has(e) || b(e);
    }
    getSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = _.get(e)) && void 0 !== t ? t : p;
    }
    getPurchasableSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = h.get(e)) && void 0 !== t ? t : p;
    }
    getUserSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = m.get(e)) && void 0 !== t ? t : p;
    }
    getUserIsAdmin(e) {
        var t;
        return this.buildRoles(e), null !== (t = g.get(e)) && void 0 !== t && t;
    }
}
f(A, 'displayName', 'SubscriptionRoleStore');
let C = new A(a.Z, {
    CONNECTION_OPEN: O,
    LOGOUT: O,
    GUILD_CREATE: I,
    GUILD_DELETE: S,
    GUILD_UPDATE: I,
    GUILD_ROLE_CREATE: T,
    GUILD_ROLE_UPDATE: T,
    GUILD_ROLE_DELETE: T,
    GUILD_MEMBER_UPDATE: N
});
