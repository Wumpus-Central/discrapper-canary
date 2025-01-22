var i,
    a = r(47120);
var o = r(149765),
    s = r(442837),
    l = r(570140),
    u = r(223892),
    c = r(738774),
    d = r(644542),
    f = r(923726),
    p = r(973542),
    h = r(790285),
    _ = r(160404),
    m = r(131704),
    g = r(592125),
    E = r(271383),
    v = r(430824),
    y = r(594174),
    b = r(981631);
function I(e, n, r) {
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
let T = {},
    S = new Set();
function A(e, n) {
    if (null == e) return !1;
    let r = y.default.getCurrentUser();
    if (null == r) return !1;
    let i = E.ZP.getMember(n, r.id);
    return null != i && i.roles.includes(e.id);
}
function C(e) {
    let { guildId: n, role: r, isPreviewingRoles: i } = e;
    return !!(0, p.Z)(r) && (!!(i || (0, p.h)(null != r ? r : void 0) || A(r, n)) || !1);
}
function N(e, n) {
    if (!n.hasFeature(b.oNc.CREATOR_MONETIZABLE) && !n.hasFeature(b.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
    let r = _.Z.isViewingServerShop(n.id);
    for (let i of Object.keys(e.permissionOverwrites)) {
        let a = v.Z.getRole(n.id, i);
        if (
            !C({
                guildId: n.id,
                role: a,
                isPreviewingRoles: r
            })
        )
            continue;
        let o = e.permissionOverwrites[i];
        if ((0, h.TG)(e, o)) return !0;
    }
    let i = v.Z.getRole(n.id, n.getEveryoneRoleId()),
        a = null != i && !o.e$(i.permissions, b.Plq.VIEW_CHANNEL),
        s = (0, h.wB)(e, e.permissionOverwrites[n.id]);
    if (a && !s) {
        for (let e of Object.values(v.Z.getRoles(n.id)))
            if (
                C({
                    guildId: n.id,
                    role: e,
                    isPreviewingRoles: r
                }) &&
                (0, h.MT)(e)
            )
                return !0;
    }
    return !1;
}
function R(e) {
    let n = v.Z.getGuild(e);
    if (null == n) return;
    let r = (T[e] = new Set());
    if (!n.hasFeature(b.oNc.ROLE_SUBSCRIPTIONS_ENABLED) || (!(0, f.kT)(e) && !(0, u.Rw)(n))) return;
    let i = g.Z.getMutableGuildChannelsForGuild(e);
    for (let e in i) {
        let a = i[e];
        N(a, n) && r.add(a.id);
    }
}
function O(e, n) {
    let r = T[e];
    if (null == r) return !1;
    let i = g.Z.getChannel(n);
    if (null == i) return !1;
    let a = v.Z.getGuild(i.getGuildId());
    if (null == a) return !1;
    let o = r.has(n),
        s = N(i, a);
    return o !== s && (s ? r.add(n) : r.delete(n), !0);
}
function D() {
    (T = {}), S.clear();
}
function L(e) {
    let { guild: n } = e;
    delete T[n.id];
}
function x(e) {
    let { guildId: n } = e;
    delete T[n];
}
function w(e) {
    let { channel: n } = e;
    return null != n.guild_id && O(n.guild_id, n.id);
}
function P(e) {
    let { channels: n } = e,
        r = !1;
    for (let e of n) {
        if (null != e.guild_id) O(e.guild_id, e.id) && (r = !0);
    }
    return r;
}
function M(e) {
    let { guildId: n, restrictions: r } = e;
    (0, c.uq)(r) ? S.add(n) : S.delete(n);
}
function k(e) {
    let { guildId: n } = e;
    S.add(n);
}
class U extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, g.Z, _.Z), d.Zo.subscribe({ location: '1' }, () => D());
    }
    isChannelGated(e, n) {
        if (null == e) return !1;
        let r = T[e];
        return null == r && (R(e), (r = T[e])), null != r && r.has(n);
    }
    isChannelGatedAndVisible(e, n) {
        return null != e && this.isChannelGated(e, n) && !S.has(e);
    }
    isChannelOrThreadParentGated(e, n) {
        if (null == e) return !1;
        if (this.isChannelGated(e, n)) return !0;
        let r = g.Z.getChannel(n);
        return !!(null != r && null != r.parent_id && m.Ec.has(null == r ? void 0 : r.type)) && this.isChannelOrThreadParentGated(e, r.parent_id);
    }
}
I(U, 'displayName', 'GatedChannelStore'),
    (n.Z = new U(l.Z, {
        CONNECTION_OPEN: D,
        OVERLAY_INITIALIZE: D,
        CACHE_LOADED_LAZY: D,
        GUILD_CREATE: L,
        GUILD_UPDATE: L,
        GUILD_DELETE: L,
        GUILD_ROLE_CREATE: x,
        GUILD_ROLE_UPDATE: x,
        GUILD_ROLE_DELETE: x,
        IMPERSONATE_UPDATE: x,
        IMPERSONATE_STOP: x,
        CHANNEL_CREATE: w,
        CHANNEL_DELETE: w,
        CHANNEL_UPDATES: P,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: M,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: k
    }));
