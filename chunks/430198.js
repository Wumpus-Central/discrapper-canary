n.d(t, { Z: () => L }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(738774),
    s = n(973542),
    l = n(790285),
    c = n(160404),
    u = n(131704),
    d = n(345162),
    f = n(592125),
    p = n(271383),
    _ = n(485386),
    m = n(430824),
    h = n(594174),
    g = n(981631);
function E(e, t, n) {
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
let b = {},
    y = new Set();
function O(e, t) {
    if (null == e) return !1;
    let n = h.default.getCurrentUser();
    if (null == n) return !1;
    let r = p.ZP.getMember(t, n.id);
    return null != r && r.roles.includes(e.id);
}
function v(e) {
    let { guildId: t, role: n, isPreviewingRoles: r } = e;
    return !!(0, s.Z)(n) && !!(r || (0, s.h)(null != n ? n : void 0) || O(n, t));
}
function S(e, t) {
    if (
        !t.features.has(g.GuildFeatures.CREATOR_MONETIZABLE) &&
        !t.features.has(g.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
    )
        return !1;
    let n = c.Z.isViewingServerShop(t.id);
    for (let r of Object.keys(e.permissionOverwrites)) {
        let i = _.Z.getRole(t.id, r);
        if (
            !v({
                guildId: t.id,
                role: i,
                isPreviewingRoles: n,
            })
        )
            continue;
        let a = e.permissionOverwrites[r];
        if ((0, l.TG)(e, a)) return !0;
    }
    let r = _.Z.getEveryoneRole(t),
        i = !(0, d.Fs)(r, g.Plq.VIEW_CHANNEL),
        a = (0, l.wB)(e, e.permissionOverwrites[t.id]);
    if (i && !a) {
        for (let e of _.Z.getSortedRoles(t.id))
            if (
                v({
                    guildId: t.id,
                    role: e,
                    isPreviewingRoles: n,
                }) &&
                (0, l.yt)(e)
            )
                return !0;
    }
    return !1;
}
function I(e) {
    let t = m.Z.getGuild(e);
    if (null == t) return;
    let n = (b[e] = new Set());
    if (!t.features.has(g.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return;
    let r = f.Z.getMutableGuildChannelsForGuild(e);
    for (let e in r) {
        let i = r[e];
        S(i, t) && n.add(i.id);
    }
}
function T(e, t) {
    let n = b[e];
    if (null == n) return !1;
    let r = f.Z.getChannel(t);
    if (null == r) return !1;
    let i = m.Z.getGuild(r.getGuildId());
    if (null == i) return !1;
    let a = n.has(t),
        o = S(r, i);
    return a !== o && (o ? n.add(t) : n.delete(t), !0);
}
function C() {
    (b = {}), y.clear();
}
function A(e) {
    let { guild: t } = e;
    delete b[t.id];
}
function N(e) {
    let { guildId: t } = e;
    delete b[t];
}
function P(e) {
    let { channel: t } = e;
    return null != t.guild_id && T(t.guild_id, t.id);
}
function R(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) null != e.guild_id && T(e.guild_id, e.id) && (n = !0);
    return n;
}
function w(e) {
    let { guildId: t, restrictions: n } = e;
    (0, o.uq)(n) ? y.add(t) : y.delete(t);
}
function D(e) {
    let { guildId: t } = e;
    y.add(t);
}
class x extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, p.ZP, _.Z, m.Z, c.Z, h.default);
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = b[e];
        return null == n && (I(e), (n = b[e])), null != n && n.has(t);
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !y.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = f.Z.getChannel(t);
        return (
            !!(null != n && null != n.parent_id && u.Ec.has(null == n ? void 0 : n.type)) &&
            this.isChannelOrThreadParentGated(e, n.parent_id)
        );
    }
}
E(x, "displayName", "GatedChannelStore");
let L = new x(a.Z, {
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    CACHE_LOADED_LAZY: C,
    GUILD_CREATE: A,
    GUILD_UPDATE: A,
    GUILD_DELETE: A,
    GUILD_ROLE_CREATE: N,
    GUILD_ROLE_UPDATE: N,
    GUILD_ROLE_DELETE: N,
    IMPERSONATE_UPDATE: N,
    IMPERSONATE_STOP: N,
    CHANNEL_CREATE: P,
    CHANNEL_DELETE: P,
    CHANNEL_UPDATES: R,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: D,
});
