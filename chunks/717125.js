n.d(t, { A: () => R });
var i = n(17928),
    l = n(228366),
    a = n(836039),
    r = n(98318),
    s = n(855918),
    o = n(164956),
    d = n(95701),
    u = n(34457),
    c = n(734057),
    h = n(696451),
    E = n(317525),
    A = n(71393),
    _ = n(287809),
    p = n(652215);
let g = {},
    f = new Set();
function I(e) {
    let { guildId: t, role: n, isPreviewingRoles: i } = e;
    return (
        !!(0, r.U)(n) &&
        !!(
            i ||
            (0, r.X)(n ?? void 0) ||
            (function (e, t) {
                if (null == e) return !1;
                let n = _.default.getCurrentUser();
                if (null == n) return !1;
                let i = h.Ay.getMember(t, n.id);
                return null != i && i.roles.includes(e.id);
            })(n, t)
        )
    );
}
function S(e, t) {
    if (
        !t.features.has(p.GuildFeatures.CREATOR_MONETIZABLE) &&
        !t.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
    )
        return !1;
    let n = o.A.isViewingServerShop(t.id);
    for (let i of Object.keys(e.permissionOverwrites)) {
        let l = E.A.getRole(t.id, i);
        if (!I({ guildId: t.id, role: l, isPreviewingRoles: n })) continue;
        let a = e.permissionOverwrites[i];
        if ((0, s.Uj)(e, a)) return !0;
    }
    let i = E.A.getEveryoneRole(t),
        l = !(0, u._m)(i, p.xBc.VIEW_CHANNEL),
        a = (0, s.AN)(e, e.permissionOverwrites[t.id]);
    if (l && !a) {
        for (let e of E.A.getSortedRoles(t.id))
            if (I({ guildId: t.id, role: e, isPreviewingRoles: n }) && (0, s.iR)(e)) return !0;
    }
    return !1;
}
function T(e, t) {
    let n = g[e];
    if (null == n) return !1;
    let i = c.A.getChannel(t);
    if (null == i) return !1;
    let l = A.A.getGuild(i.getGuildId());
    if (null == l) return !1;
    let a = n.has(t),
        r = S(i, l);
    return a !== r && (r ? n.add(t) : n.delete(t), !0);
}
function m() {
    (g = {}), f.clear();
}
function C(e) {
    let { guild: t } = e;
    delete g[t.id];
}
function O(e) {
    let { guildId: t } = e;
    delete g[t];
}
function N(e) {
    let { channel: t } = e;
    return null != t.guild_id && T(t.guild_id, t.id);
}
class y extends i.Ay.Store {
    static displayName = "GatedChannelStore";
    initialize() {
        this.waitFor(c.A, h.Ay, E.A, A.A, o.A, _.default);
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = g[e];
        return (
            null == n &&
                (!(function (e) {
                    let t = A.A.getGuild(e);
                    if (null == t) return;
                    let n = (g[e] = new Set());
                    if (!t.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return;
                    let i = c.A.getMutableGuildChannelsForGuild(e);
                    for (let e in i) {
                        let l = i[e];
                        S(l, t) && n.add(l.id);
                    }
                })(e),
                (n = g[e])),
            null != n && n.has(t)
        );
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !f.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = c.A.getChannel(t);
        return (
            !!(null != n && null != n.parent_id && d.Le.has(n?.type)) &&
            this.isChannelOrThreadParentGated(e, n.parent_id)
        );
    }
}
let R = new y(l.h, {
    CONNECTION_OPEN: m,
    OVERLAY_INITIALIZE: m,
    CACHE_LOADED_LAZY: m,
    GUILD_CREATE: C,
    GUILD_UPDATE: C,
    GUILD_DELETE: C,
    GUILD_ROLE_CREATE: O,
    GUILD_ROLE_UPDATE: O,
    GUILD_ROLE_DELETE: O,
    IMPERSONATE_UPDATE: O,
    IMPERSONATE_STOP: O,
    CHANNEL_CREATE: N,
    CHANNEL_DELETE: N,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t) null != e.guild_id && T(e.guild_id, e.id) && (n = !0);
        return n;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
        let { guildId: t, restrictions: n } = e;
        (0, a.Y5)(n) ? f.add(t) : f.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
        let { guildId: t } = e;
        f.add(t);
    },
});
