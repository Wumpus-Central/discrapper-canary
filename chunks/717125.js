"use strict";
n.d(t, { A: () => w });
var r = n(311907),
    i = n(73153),
    a = n(836039),
    s = n(98318),
    o = n(855918),
    l = n(164956),
    u = n(95701),
    c = n(34457),
    d = n(734057),
    _ = n(696451),
    f = n(317525),
    p = n(71393),
    h = n(287809),
    m = n(652215);
let g = {},
    E = new Set();
function A(e, t) {
    if (null == e) return !1;
    let n = h.default.getCurrentUser();
    if (null == n) return !1;
    let r = _.Ay.getMember(t, n.id);
    return null != r && r.roles.includes(e.id);
}
function I(e) {
    let { guildId: t, role: n, isPreviewingRoles: r } = e;
    return !!(0, s.U)(n) && !!(r || (0, s.X)(n ?? void 0) || A(n, t));
}
function T(e, t) {
    if (
        !t.features.has(m.GuildFeatures.CREATOR_MONETIZABLE) &&
        !t.features.has(m.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
    )
        return !1;
    let n = l.A.isViewingServerShop(t.id);
    for (let r of Object.keys(e.permissionOverwrites)) {
        let i = f.A.getRole(t.id, r);
        if (!I({ guildId: t.id, role: i, isPreviewingRoles: n })) continue;
        let a = e.permissionOverwrites[r];
        if ((0, o.Uj)(e, a)) return !0;
    }
    let r = f.A.getEveryoneRole(t),
        i = !(0, c._m)(r, m.xBc.VIEW_CHANNEL),
        a = (0, o.AN)(e, e.permissionOverwrites[t.id]);
    if (i && !a) {
        for (let e of f.A.getSortedRoles(t.id))
            if (I({ guildId: t.id, role: e, isPreviewingRoles: n }) && (0, o.iR)(e)) return !0;
    }
    return !1;
}
function y(e) {
    let t = p.A.getGuild(e);
    if (null == t) return;
    let n = (g[e] = new Set());
    if (!t.features.has(m.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return;
    let r = d.A.getMutableGuildChannelsForGuild(e);
    for (let e in r) {
        let i = r[e];
        T(i, t) && n.add(i.id);
    }
}
function S(e, t) {
    let n = g[e];
    if (null == n) return !1;
    let r = d.A.getChannel(t);
    if (null == r) return !1;
    let i = p.A.getGuild(r.getGuildId());
    if (null == i) return !1;
    let a = n.has(t),
        s = T(r, i);
    return a !== s && (s ? n.add(t) : n.delete(t), !0);
}
function v() {
    (g = {}), E.clear();
}
function C(e) {
    let { guild: t } = e;
    delete g[t.id];
}
function b(e) {
    let { guildId: t } = e;
    delete g[t];
}
function N(e) {
    let { channel: t } = e;
    return null != t.guild_id && S(t.guild_id, t.id);
}
function R(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) null != e.guild_id && S(e.guild_id, e.id) && (n = !0);
    return n;
}
function O(e) {
    let { guildId: t, restrictions: n } = e;
    (0, a.Y5)(n) ? E.add(t) : E.delete(t);
}
function D(e) {
    let { guildId: t } = e;
    E.add(t);
}
class L extends r.Ay.Store {
    static displayName = "GatedChannelStore";
    initialize() {
        this.waitFor(d.A, _.Ay, f.A, p.A, l.A, h.default);
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = g[e];
        return null == n && (y(e), (n = g[e])), null != n && n.has(t);
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !E.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = d.A.getChannel(t);
        return (
            !!(null != n && null != n.parent_id && u.Le.has(n?.type)) &&
            this.isChannelOrThreadParentGated(e, n.parent_id)
        );
    }
}
let w = new L(i.h, {
    CONNECTION_OPEN: v,
    OVERLAY_INITIALIZE: v,
    CACHE_LOADED_LAZY: v,
    GUILD_CREATE: C,
    GUILD_UPDATE: C,
    GUILD_DELETE: C,
    GUILD_ROLE_CREATE: b,
    GUILD_ROLE_UPDATE: b,
    GUILD_ROLE_DELETE: b,
    IMPERSONATE_UPDATE: b,
    IMPERSONATE_STOP: b,
    CHANNEL_CREATE: N,
    CHANNEL_DELETE: N,
    CHANNEL_UPDATES: R,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: O,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: D,
});
