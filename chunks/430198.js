(n.d(t, { Z: () => j }), n(388685));
var r,
    i = n(149765),
    a = n(442837),
    o = n(570140),
    s = n(223892),
    l = n(738774),
    c = n(644542),
    u = n(923726),
    d = n(973542),
    f = n(790285),
    _ = n(160404),
    p = n(131704),
    h = n(592125),
    m = n(271383),
    g = n(485386),
    E = n(430824),
    b = n(594174),
    y = n(981631);
function O(e, t, n) {
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
let v = {},
    I = new Set();
function T(e, t) {
    if (null == e) return !1;
    let n = b.default.getCurrentUser();
    if (null == n) return !1;
    let r = m.ZP.getMember(t, n.id);
    return null != r && r.roles.includes(e.id);
}
function S(e) {
    let { guildId: t, role: n, isPreviewingRoles: r } = e;
    return !!(0, d.Z)(n) && !!(r || (0, d.h)(null != n ? n : void 0) || T(n, t));
}
function A(e, t) {
    if (!t.hasFeature(y.oNc.CREATOR_MONETIZABLE) && !t.hasFeature(y.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
    let n = _.Z.isViewingServerShop(t.id);
    for (let r of Object.keys(e.permissionOverwrites)) {
        let i = g.Z.getRole(t.id, r);
        if (
            !S({
                guildId: t.id,
                role: i,
                isPreviewingRoles: n
            })
        )
            continue;
        let a = e.permissionOverwrites[r];
        if ((0, f.TG)(e, a)) return !0;
    }
    let r = g.Z.getRole(t.id, t.getEveryoneRoleId()),
        a = null != r && !i.e$(r.permissions, y.Plq.VIEW_CHANNEL),
        o = (0, f.wB)(e, e.permissionOverwrites[t.id]);
    if (a && !o) {
        for (let e of Object.values(g.Z.getRoles(t.id)))
            if (
                S({
                    guildId: t.id,
                    role: e,
                    isPreviewingRoles: n
                }) &&
                (0, f.MT)(e)
            )
                return !0;
    }
    return !1;
}
function N(e) {
    let t = E.Z.getGuild(e);
    if (null == t) return;
    let n = (v[e] = new Set());
    if (!t.hasFeature(y.oNc.ROLE_SUBSCRIPTIONS_ENABLED) || (!(0, u.kT)(e) && !(0, s.Rw)(t))) return;
    let r = h.Z.getMutableGuildChannelsForGuild(e);
    for (let e in r) {
        let i = r[e];
        A(i, t) && n.add(i.id);
    }
}
function C(e, t) {
    let n = v[e];
    if (null == n) return !1;
    let r = h.Z.getChannel(t);
    if (null == r) return !1;
    let i = E.Z.getGuild(r.getGuildId());
    if (null == i) return !1;
    let a = n.has(t),
        o = A(r, i);
    return a !== o && (o ? n.add(t) : n.delete(t), !0);
}
function R() {
    ((v = {}), I.clear());
}
function P(e) {
    let { guild: t } = e;
    delete v[t.id];
}
function w(e) {
    let { guildId: t } = e;
    delete v[t];
}
function D(e) {
    let { channel: t } = e;
    return null != t.guild_id && C(t.guild_id, t.id);
}
function L(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) null != e.guild_id && C(e.guild_id, e.id) && (n = !0);
    return n;
}
function x(e) {
    let { guildId: t, restrictions: n } = e;
    (0, l.uq)(n) ? I.add(t) : I.delete(t);
}
function k(e) {
    let { guildId: t } = e;
    I.add(t);
}
class M extends (r = a.ZP.Store) {
    initialize() {
        (this.waitFor(E.Z, g.Z, h.Z, _.Z), c.Zo.subscribe({ location: '1' }, () => R()));
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = v[e];
        return (null == n && (N(e), (n = v[e])), null != n && n.has(t));
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !I.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = h.Z.getChannel(t);
        return !!(null != n && null != n.parent_id && p.Ec.has(null == n ? void 0 : n.type)) && this.isChannelOrThreadParentGated(e, n.parent_id);
    }
}
O(M, 'displayName', 'GatedChannelStore');
let j = new M(o.Z, {
    CONNECTION_OPEN: R,
    OVERLAY_INITIALIZE: R,
    CACHE_LOADED_LAZY: R,
    GUILD_CREATE: P,
    GUILD_UPDATE: P,
    GUILD_DELETE: P,
    GUILD_ROLE_CREATE: w,
    GUILD_ROLE_UPDATE: w,
    GUILD_ROLE_DELETE: w,
    IMPERSONATE_UPDATE: w,
    IMPERSONATE_STOP: w,
    CHANNEL_CREATE: D,
    CHANNEL_DELETE: D,
    CHANNEL_UPDATES: L,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: x,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: k
});
