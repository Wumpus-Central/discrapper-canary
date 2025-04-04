n.d(t, { Z: () => k }), n(47120);
var r,
    i = n(149765),
    o = n(442837),
    a = n(570140),
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
    g = n(430824),
    E = n(594174),
    b = n(981631);
function y(e, t, n) {
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
    O = new Set();
function I(e, t) {
    if (null == e) return !1;
    let n = E.default.getCurrentUser();
    if (null == n) return !1;
    let r = m.ZP.getMember(t, n.id);
    return null != r && r.roles.includes(e.id);
}
function S(e) {
    let { guildId: t, role: n, isPreviewingRoles: r } = e;
    return !!(0, d.Z)(n) && !!(r || (0, d.h)(null != n ? n : void 0) || I(n, t));
}
function T(e, t) {
    if (!t.hasFeature(b.oNc.CREATOR_MONETIZABLE) && !t.hasFeature(b.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
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
        let o = e.permissionOverwrites[r];
        if ((0, f.TG)(e, o)) return !0;
    }
    let r = g.Z.getRole(t.id, t.getEveryoneRoleId()),
        o = null != r && !i.e$(r.permissions, b.Plq.VIEW_CHANNEL),
        a = (0, f.wB)(e, e.permissionOverwrites[t.id]);
    if (o && !a) {
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
    let t = g.Z.getGuild(e);
    if (null == t) return;
    let n = (v[e] = new Set());
    if (!t.hasFeature(b.oNc.ROLE_SUBSCRIPTIONS_ENABLED) || (!(0, u.kT)(e) && !(0, s.Rw)(t))) return;
    let r = h.Z.getMutableGuildChannelsForGuild(e);
    for (let e in r) {
        let i = r[e];
        T(i, t) && n.add(i.id);
    }
}
function A(e, t) {
    let n = v[e];
    if (null == n) return !1;
    let r = h.Z.getChannel(t);
    if (null == r) return !1;
    let i = g.Z.getGuild(r.getGuildId());
    if (null == i) return !1;
    let o = n.has(t),
        a = T(r, i);
    return o !== a && (a ? n.add(t) : n.delete(t), !0);
}
function C() {
    (v = {}), O.clear();
}
function R(e) {
    let { guild: t } = e;
    delete v[t.id];
}
function P(e) {
    let { guildId: t } = e;
    delete v[t];
}
function w(e) {
    let { channel: t } = e;
    return null != t.guild_id && A(t.guild_id, t.id);
}
function D(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) null != e.guild_id && A(e.guild_id, e.id) && (n = !0);
    return n;
}
function L(e) {
    let { guildId: t, restrictions: n } = e;
    (0, l.uq)(n) ? O.add(t) : O.delete(t);
}
function x(e) {
    let { guildId: t } = e;
    O.add(t);
}
class M extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, h.Z, _.Z), c.Zo.subscribe({ location: '1' }, () => C());
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = v[e];
        return null == n && (N(e), (n = v[e])), null != n && n.has(t);
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !O.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = h.Z.getChannel(t);
        return !!(null != n && null != n.parent_id && p.Ec.has(null == n ? void 0 : n.type)) && this.isChannelOrThreadParentGated(e, n.parent_id);
    }
}
y(M, 'displayName', 'GatedChannelStore');
let k = new M(a.Z, {
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    CACHE_LOADED_LAZY: C,
    GUILD_CREATE: R,
    GUILD_UPDATE: R,
    GUILD_DELETE: R,
    GUILD_ROLE_CREATE: P,
    GUILD_ROLE_UPDATE: P,
    GUILD_ROLE_DELETE: P,
    IMPERSONATE_UPDATE: P,
    IMPERSONATE_STOP: P,
    CHANNEL_CREATE: w,
    CHANNEL_DELETE: w,
    CHANNEL_UPDATES: D,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: L,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: x
});
