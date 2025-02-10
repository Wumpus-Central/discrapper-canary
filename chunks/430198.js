n.d(t, { Z: () => k }), n(47120);
var i,
    r = n(149765),
    a = n(442837),
    s = n(570140),
    o = n(223892),
    l = n(738774),
    u = n(644542),
    c = n(923726),
    d = n(973542),
    f = n(790285),
    _ = n(160404),
    p = n(131704),
    h = n(592125),
    m = n(271383),
    g = n(430824),
    E = n(594174),
    v = n(981631);
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
let I = {},
    T = new Set();
function b(e, t) {
    if (null == e) return !1;
    let n = E.default.getCurrentUser();
    if (null == n) return !1;
    let i = m.ZP.getMember(t, n.id);
    return null != i && i.roles.includes(e.id);
}
function S(e) {
    let { guildId: t, role: n, isPreviewingRoles: i } = e;
    return !!(0, d.Z)(n) && !!(i || (0, d.h)(null != n ? n : void 0) || b(n, t));
}
function A(e, t) {
    if (!t.hasFeature(v.oNc.CREATOR_MONETIZABLE) && !t.hasFeature(v.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
    let n = _.Z.isViewingServerShop(t.id);
    for (let i of Object.keys(e.permissionOverwrites)) {
        let r = g.Z.getRole(t.id, i);
        if (
            !S({
                guildId: t.id,
                role: r,
                isPreviewingRoles: n
            })
        )
            continue;
        let a = e.permissionOverwrites[i];
        if ((0, f.TG)(e, a)) return !0;
    }
    let i = g.Z.getRole(t.id, t.getEveryoneRoleId()),
        a = null != i && !r.e$(i.permissions, v.Plq.VIEW_CHANNEL),
        s = (0, f.wB)(e, e.permissionOverwrites[t.id]);
    if (a && !s) {
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
    let n = (I[e] = new Set());
    if (!t.hasFeature(v.oNc.ROLE_SUBSCRIPTIONS_ENABLED) || (!(0, c.kT)(e) && !(0, o.Rw)(t))) return;
    let i = h.Z.getMutableGuildChannelsForGuild(e);
    for (let e in i) {
        let r = i[e];
        A(r, t) && n.add(r.id);
    }
}
function C(e, t) {
    let n = I[e];
    if (null == n) return !1;
    let i = h.Z.getChannel(t);
    if (null == i) return !1;
    let r = g.Z.getGuild(i.getGuildId());
    if (null == r) return !1;
    let a = n.has(t),
        s = A(i, r);
    return a !== s && (s ? n.add(t) : n.delete(t), !0);
}
function R() {
    (I = {}), T.clear();
}
function O(e) {
    let { guild: t } = e;
    delete I[t.id];
}
function D(e) {
    let { guildId: t } = e;
    delete I[t];
}
function L(e) {
    let { channel: t } = e;
    return null != t.guild_id && C(t.guild_id, t.id);
}
function x(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) null != e.guild_id && C(e.guild_id, e.id) && (n = !0);
    return n;
}
function w(e) {
    let { guildId: t, restrictions: n } = e;
    (0, l.uq)(n) ? T.add(t) : T.delete(t);
}
function P(e) {
    let { guildId: t } = e;
    T.add(t);
}
class M extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, h.Z, _.Z), u.Zo.subscribe({ location: '1' }, () => R());
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = I[e];
        return null == n && (N(e), (n = I[e])), null != n && n.has(t);
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !T.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = h.Z.getChannel(t);
        return !!(null != n && null != n.parent_id && p.Ec.has(null == n ? void 0 : n.type)) && this.isChannelOrThreadParentGated(e, n.parent_id);
    }
}
y(M, 'displayName', 'GatedChannelStore');
let k = new M(s.Z, {
    CONNECTION_OPEN: R,
    OVERLAY_INITIALIZE: R,
    CACHE_LOADED_LAZY: R,
    GUILD_CREATE: O,
    GUILD_UPDATE: O,
    GUILD_DELETE: O,
    GUILD_ROLE_CREATE: D,
    GUILD_ROLE_UPDATE: D,
    GUILD_ROLE_DELETE: D,
    IMPERSONATE_UPDATE: D,
    IMPERSONATE_STOP: D,
    CHANNEL_CREATE: L,
    CHANNEL_DELETE: L,
    CHANNEL_UPDATES: x,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: P
});
