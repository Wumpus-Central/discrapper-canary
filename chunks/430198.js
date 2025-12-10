n.d(t, { Z: () => k }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(223892),
    s = n(738774),
    l = n(644542),
    c = n(923726),
    u = n(973542),
    d = n(790285),
    f = n(160404),
    p = n(131704),
    _ = n(345162),
    m = n(592125),
    h = n(271383),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let v = {},
    S = new Set();
function I(e, t) {
    if (null == e) return !1;
    let n = b.default.getCurrentUser();
    if (null == n) return !1;
    let r = h.ZP.getMember(t, n.id);
    return null != r && r.roles.includes(e.id);
}
function T(e) {
    let { guildId: t, role: n, isPreviewingRoles: r } = e;
    return !!(0, u.Z)(n) && !!(r || (0, u.h)(null != n ? n : void 0) || I(n, t));
}
function C(e, t) {
    if (
        !t.features.has(y.GuildFeatures.CREATOR_MONETIZABLE) &&
        !t.features.has(y.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
    )
        return !1;
    let n = f.Z.isViewingServerShop(t.id);
    for (let r of Object.keys(e.permissionOverwrites)) {
        let i = g.Z.getRole(t.id, r);
        if (
            !T({
                guildId: t.id,
                role: i,
                isPreviewingRoles: n,
            })
        )
            continue;
        let a = e.permissionOverwrites[r];
        if ((0, d.TG)(e, a)) return !0;
    }
    let r = g.Z.getEveryoneRole(t),
        i = !(0, _.Fs)(r, y.Plq.VIEW_CHANNEL),
        a = (0, d.wB)(e, e.permissionOverwrites[t.id]);
    if (i && !a) {
        for (let e of g.Z.getSortedRoles(t.id))
            if (
                T({
                    guildId: t.id,
                    role: e,
                    isPreviewingRoles: n,
                }) &&
                (0, d.yt)(e)
            )
                return !0;
    }
    return !1;
}
function A(e) {
    let t = E.Z.getGuild(e);
    if (null == t) return;
    let n = (v[e] = new Set());
    if (!t.features.has(y.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) || (!(0, c.kT)(e) && !(0, o.Rw)(t))) return;
    let r = m.Z.getMutableGuildChannelsForGuild(e);
    for (let e in r) {
        let i = r[e];
        C(i, t) && n.add(i.id);
    }
}
function N(e, t) {
    let n = v[e];
    if (null == n) return !1;
    let r = m.Z.getChannel(t);
    if (null == r) return !1;
    let i = E.Z.getGuild(r.getGuildId());
    if (null == i) return !1;
    let a = n.has(t),
        o = C(r, i);
    return a !== o && (o ? n.add(t) : n.delete(t), !0);
}
function P() {
    (v = {}), S.clear();
}
function R(e) {
    let { guild: t } = e;
    delete v[t.id];
}
function D(e) {
    let { guildId: t } = e;
    delete v[t];
}
function w(e) {
    let { channel: t } = e;
    return null != t.guild_id && N(t.guild_id, t.id);
}
function x(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) null != e.guild_id && N(e.guild_id, e.id) && (n = !0);
    return n;
}
function L(e) {
    let { guildId: t, restrictions: n } = e;
    (0, s.uq)(n) ? S.add(t) : S.delete(t);
}
function j(e) {
    let { guildId: t } = e;
    S.add(t);
}
class M extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, h.ZP, g.Z, E.Z, f.Z, b.default), l.Zo.subscribe({ location: "1" }, () => P());
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = v[e];
        return null == n && (A(e), (n = v[e])), null != n && n.has(t);
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !S.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = m.Z.getChannel(t);
        return (
            !!(null != n && null != n.parent_id && p.Ec.has(null == n ? void 0 : n.type)) &&
            this.isChannelOrThreadParentGated(e, n.parent_id)
        );
    }
}
O(M, "displayName", "GatedChannelStore");
let k = new M(a.Z, {
    CONNECTION_OPEN: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED_LAZY: P,
    GUILD_CREATE: R,
    GUILD_UPDATE: R,
    GUILD_DELETE: R,
    GUILD_ROLE_CREATE: D,
    GUILD_ROLE_UPDATE: D,
    GUILD_ROLE_DELETE: D,
    IMPERSONATE_UPDATE: D,
    IMPERSONATE_STOP: D,
    CHANNEL_CREATE: w,
    CHANNEL_DELETE: w,
    CHANNEL_UPDATES: x,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: L,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: j,
});
