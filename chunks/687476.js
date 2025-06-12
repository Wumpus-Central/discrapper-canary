n.d(t, { Z: () => C }), n(388685);
var r,
    i = n(149765),
    a = n(442837),
    o = n(570140),
    s = n(271383),
    l = n(430824),
    c = n(594174),
    u = n(973542),
    d = n(981631);
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
let f = new Set(),
    p = new Map(),
    h = new Map(),
    m = new Map(),
    g = new Map(),
    E = null;
function b(e) {
    return i.e$(e.permissions, d.Plq.ADMINISTRATOR);
}
function y(e) {
    let t = c.default.getCurrentUser(),
        n = l.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        a = new Set();
    if ((g.set(e, n.isOwner(t)), n.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var o;
        let c = s.ZP.getMember(e, t.id),
            d = new Set(null != (o = null == c ? void 0 : c.roles) ? o : []),
            _ = l.Z.getRoles(n.id);
        for (let t in _) {
            let n = _[t];
            (0, u.Z)(n) && (r.add(t), (0, u.h)(n) && (i.add(t), d.has(t) && a.add(t))), d.has(t) && b(n) && g.set(e, !0);
        }
    }
    return p.set(e, r), m.set(e, a), h.set(e, i), !0;
}
function O() {
    let e = l.Z.getGuilds(),
        t = new Set();
    for (let n in e) e[n].hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
    return (E = t), t;
}
function v() {
    p.clear(), m.clear(), h.clear(), g.clear(), (E = null);
}
function I(e) {
    let {
        guild: { id: t }
    } = e;
    if ((null == E ? void 0 : E.has(t)) !== !0) return !1;
    let n = new Set(E);
    n.delete(t), (E = n);
}
function T(e) {
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
function S(e) {
    let { guildId: t } = e;
    return !!p.has(t) && y(t);
}
function A(e) {
    let { guildId: t, user: n } = e,
        r = c.default.getCurrentUser();
    return !!(n.id === (null == r ? void 0 : r.id) && p.has(t)) && y(t);
}
class N extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == E ? O() : E;
    }
    buildRoles(e) {
        p.has(e) || y(e);
    }
    getSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = p.get(e)) ? t : f;
    }
    getPurchasableSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = h.get(e)) ? t : f;
    }
    getUserSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null != (t = m.get(e)) ? t : f;
    }
    getUserIsAdmin(e) {
        var t;
        return this.buildRoles(e), null != (t = g.get(e)) && t;
    }
}
_(N, 'displayName', 'SubscriptionRoleStore');
let C = new N(o.Z, {
    CONNECTION_OPEN: v,
    LOGOUT: v,
    GUILD_CREATE: T,
    GUILD_DELETE: I,
    GUILD_UPDATE: T,
    GUILD_ROLE_CREATE: S,
    GUILD_ROLE_UPDATE: S,
    GUILD_ROLE_DELETE: S,
    GUILD_MEMBER_UPDATE: A
});
