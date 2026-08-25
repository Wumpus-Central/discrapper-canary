"use strict";
n.d(t, { A: () => L });
var i = n(17928),
    r = n(228366),
    a = n(836039),
    s = n(98318),
    l = n(855918),
    o = n(164956),
    d = n(95701),
    c = n(34457),
    u = n(734057),
    _ = n(696451),
    E = n(317525),
    A = n(71393),
    h = n(287809),
    I = n(652215);
let f = {},
    p = new Set();
function T(e) {
    let { guildId: t, role: n, isPreviewingRoles: i } = e;
    return (
        !!(0, s.U)(n) &&
        !!(
            i ||
            (0, s.X)(n ?? void 0) ||
            (function (e, t) {
                if (null == e) return !1;
                let n = h.default.getCurrentUser();
                if (null == n) return !1;
                let i = _.Ay.getMember(t, n.id);
                return null != i && i.roles.includes(e.id);
            })(n, t)
        )
    );
}
function m(e, t) {
    if (
        !t.features.has(I.GuildFeatures.CREATOR_MONETIZABLE) &&
        !t.features.has(I.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
    )
        return !1;
    let n = o.A.isViewingServerShop(t.id);
    for (let i of Object.keys(e.permissionOverwrites)) {
        let r = E.A.getRole(t.id, i);
        if (!T({ guildId: t.id, role: r, isPreviewingRoles: n })) continue;
        let a = e.permissionOverwrites[i];
        if ((0, l.Uj)(e, a)) return !0;
    }
    let i = E.A.getEveryoneRole(t),
        r = !(0, c._m)(i, I.xBc.VIEW_CHANNEL),
        a = (0, l.AN)(e, e.permissionOverwrites[t.id]);
    if (r && !a) {
        for (let e of E.A.getSortedRoles(t.id))
            if (T({ guildId: t.id, role: e, isPreviewingRoles: n }) && (0, l.iR)(e)) return !0;
    }
    return !1;
}
function g(e, t) {
    let n = f[e];
    if (null == n) return !1;
    let i = u.A.getChannel(t);
    if (null == i) return !1;
    let r = A.A.getGuild(i.getGuildId());
    if (null == r) return !1;
    let a = n.has(t),
        s = m(i, r);
    return a !== s && (s ? n.add(t) : n.delete(t), !0);
}
function S() {
    (f = {}), p.clear();
}
function N(e) {
    let { guild: t } = e;
    delete f[t.id];
}
function C(e) {
    let { guildId: t } = e;
    delete f[t];
}
function O(e) {
    let { channel: t } = e;
    return null != t.guild_id && g(t.guild_id, t.id);
}
class R extends i.Ay.Store {
    static displayName = "GatedChannelStore";
    initialize() {
        this.waitFor(u.A, _.Ay, E.A, A.A, o.A, h.default);
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = f[e];
        return (
            null == n &&
                (!(function (e) {
                    let t = A.A.getGuild(e);
                    if (null == t) return;
                    let n = (f[e] = new Set());
                    if (!t.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return;
                    let i = u.A.getMutableGuildChannelsForGuild(e);
                    for (let e in i) {
                        let r = i[e];
                        m(r, t) && n.add(r.id);
                    }
                })(e),
                (n = f[e])),
            null != n && n.has(t)
        );
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !p.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = u.A.getChannel(t);
        return (
            !!(null != n && null != n.parent_id && d.Le.has(n?.type)) &&
            this.isChannelOrThreadParentGated(e, n.parent_id)
        );
    }
}
let L = new R(r.h, {
    CONNECTION_OPEN: S,
    OVERLAY_INITIALIZE: S,
    CACHE_LOADED_LAZY: S,
    GUILD_CREATE: N,
    GUILD_UPDATE: N,
    GUILD_DELETE: N,
    GUILD_ROLE_CREATE: C,
    GUILD_ROLE_UPDATE: C,
    GUILD_ROLE_DELETE: C,
    IMPERSONATE_UPDATE: C,
    IMPERSONATE_STOP: C,
    CHANNEL_CREATE: O,
    CHANNEL_DELETE: O,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t) null != e.guild_id && g(e.guild_id, e.id) && (n = !0);
        return n;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
        let { guildId: t, restrictions: n } = e;
        (0, a.Y5)(n) ? p.add(t) : p.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
        let { guildId: t } = e;
        p.add(t);
    },
});
