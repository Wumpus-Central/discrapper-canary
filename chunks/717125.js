n.d(t, { A: () => R });
var i = n(17928),
    r = n(228366),
    l = n(836039),
    a = n(98318),
    s = n(855918),
    o = n(164956),
    d = n(95701),
    u = n(34457),
    c = n(734057),
    h = n(696451),
    E = n(317525),
    _ = n(71393),
    p = n(287809),
    A = n(652215);
let f = {},
    g = new Set();
function I(e) {
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
                let i = h.Ay.getMember(t, n.id);
                return null != i && i.roles.includes(e.id);
            })(n, t)
        )
    );
}
function T(e, t) {
    if (
        !t.features.has(A.GuildFeatures.CREATOR_MONETIZABLE) &&
        !t.features.has(A.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
    )
        return !1;
    let n = o.A.isViewingServerShop(t.id);
    for (let i of Object.keys(e.permissionOverwrites)) {
        let r = E.A.getRole(t.id, i);
        if (!I({ guildId: t.id, role: r, isPreviewingRoles: n })) continue;
        let l = e.permissionOverwrites[i];
        if ((0, s.Uj)(e, l)) return !0;
    }
    let i = E.A.getEveryoneRole(t),
        r = !(0, u._m)(i, A.xBc.VIEW_CHANNEL),
        l = (0, s.AN)(e, e.permissionOverwrites[t.id]);
    if (r && !l) {
        for (let e of E.A.getSortedRoles(t.id))
            if (I({ guildId: t.id, role: e, isPreviewingRoles: n }) && (0, s.iR)(e)) return !0;
    }
    return !1;
}
function S(e, t) {
    let n = f[e];
    if (null == n) return !1;
    let i = c.A.getChannel(t);
    if (null == i) return !1;
    let r = _.A.getGuild(i.getGuildId());
    if (null == r) return !1;
    let l = n.has(t),
        a = T(i, r);
    return l !== a && (a ? n.add(t) : n.delete(t), !0);
}
function m() {
    (f = {}), g.clear();
}
function O(e) {
    let { guild: t } = e;
    delete f[t.id];
}
function C(e) {
    let { guildId: t } = e;
    delete f[t];
}
function N(e) {
    let { channel: t } = e;
    return null != t.guild_id && S(t.guild_id, t.id);
}
class y extends i.Ay.Store {
    static displayName = "GatedChannelStore";
    initialize() {
        this.waitFor(c.A, h.Ay, E.A, _.A, o.A, p.default);
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = f[e];
        return (
            null == n &&
                (!(function (e) {
                    let t = _.A.getGuild(e);
                    if (null == t) return;
                    let n = (f[e] = new Set());
                    if (!t.features.has(A.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return;
                    let i = c.A.getMutableGuildChannelsForGuild(e);
                    for (let e in i) {
                        let r = i[e];
                        T(r, t) && n.add(r.id);
                    }
                })(e),
                (n = f[e])),
            null != n && n.has(t)
        );
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !g.has(e);
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
let R = new y(r.h, {
    CONNECTION_OPEN: m,
    OVERLAY_INITIALIZE: m,
    CACHE_LOADED_LAZY: m,
    GUILD_CREATE: O,
    GUILD_UPDATE: O,
    GUILD_DELETE: O,
    GUILD_ROLE_CREATE: C,
    GUILD_ROLE_UPDATE: C,
    GUILD_ROLE_DELETE: C,
    IMPERSONATE_UPDATE: C,
    IMPERSONATE_STOP: C,
    CHANNEL_CREATE: N,
    CHANNEL_DELETE: N,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t) null != e.guild_id && S(e.guild_id, e.id) && (n = !0);
        return n;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
        let { guildId: t, restrictions: n } = e;
        (0, l.Y5)(n) ? g.add(t) : g.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
        let { guildId: t } = e;
        g.add(t);
    },
});
