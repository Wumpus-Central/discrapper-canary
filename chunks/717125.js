"use strict";
n.d(t, { A: () => R });
var i = n(17928),
    r = n(228366),
    s = n(836039),
    a = n(98318),
    o = n(855918),
    l = n(164956),
    u = n(95701),
    c = n(34457),
    d = n(734057),
    _ = n(696451),
    h = n(317525),
    f = n(71393),
    p = n(287809),
    E = n(652215);
let m = {},
    g = new Set();
function A(e) {
    let { guildId: t, role: n, isPreviewingRoles: i } = e;
    return (
        !!(0, a.U)(n) &&
        !!(
            i ||
            (0, a.X)(n ?? void 0) ||
            (function (e, t) {
                if (null == e) return !1;
                let n = p.default.getCurrentUser();
                if (null == n) return !1;
                let i = _.Ay.getMember(t, n.id);
                return null != i && i.roles.includes(e.id);
            })(n, t)
        )
    );
}
function I(e, t) {
    if (
        !t.features.has(E.GuildFeatures.CREATOR_MONETIZABLE) &&
        !t.features.has(E.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
    )
        return !1;
    let n = l.A.isViewingServerShop(t.id);
    for (let i of Object.keys(e.permissionOverwrites)) {
        let r = h.A.getRole(t.id, i);
        if (!A({ guildId: t.id, role: r, isPreviewingRoles: n })) continue;
        let s = e.permissionOverwrites[i];
        if ((0, o.Uj)(e, s)) return !0;
    }
    let i = h.A.getEveryoneRole(t),
        r = !(0, c._m)(i, E.xBc.VIEW_CHANNEL),
        s = (0, o.AN)(e, e.permissionOverwrites[t.id]);
    if (r && !s) {
        for (let e of h.A.getSortedRoles(t.id))
            if (A({ guildId: t.id, role: e, isPreviewingRoles: n }) && (0, o.iR)(e)) return !0;
    }
    return !1;
}
function T(e, t) {
    let n = m[e];
    if (null == n) return !1;
    let i = d.A.getChannel(t);
    if (null == i) return !1;
    let r = f.A.getGuild(i.getGuildId());
    if (null == r) return !1;
    let s = n.has(t),
        a = I(i, r);
    return s !== a && (a ? n.add(t) : n.delete(t), !0);
}
function S() {
    (m = {}), g.clear();
}
function y(e) {
    let { guild: t } = e;
    delete m[t.id];
}
function N(e) {
    let { guildId: t } = e;
    delete m[t];
}
function v(e) {
    let { channel: t } = e;
    return null != t.guild_id && T(t.guild_id, t.id);
}
class C extends i.Ay.Store {
    static displayName = "GatedChannelStore";
    initialize() {
        this.waitFor(d.A, _.Ay, h.A, f.A, l.A, p.default);
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = m[e];
        return (
            null == n &&
                (!(function (e) {
                    let t = f.A.getGuild(e);
                    if (null == t) return;
                    let n = (m[e] = new Set());
                    if (!t.features.has(E.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return;
                    let i = d.A.getMutableGuildChannelsForGuild(e);
                    for (let e in i) {
                        let r = i[e];
                        I(r, t) && n.add(r.id);
                    }
                })(e),
                (n = m[e])),
            null != n && n.has(t)
        );
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !g.has(e);
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
let R = new C(r.h, {
    CONNECTION_OPEN: S,
    OVERLAY_INITIALIZE: S,
    CACHE_LOADED_LAZY: S,
    GUILD_CREATE: y,
    GUILD_UPDATE: y,
    GUILD_DELETE: y,
    GUILD_ROLE_CREATE: N,
    GUILD_ROLE_UPDATE: N,
    GUILD_ROLE_DELETE: N,
    IMPERSONATE_UPDATE: N,
    IMPERSONATE_STOP: N,
    CHANNEL_CREATE: v,
    CHANNEL_DELETE: v,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t) null != e.guild_id && T(e.guild_id, e.id) && (n = !0);
        return n;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
        let { guildId: t, restrictions: n } = e;
        (0, s.Y5)(n) ? g.add(t) : g.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
        let { guildId: t } = e;
        g.add(t);
    },
});
