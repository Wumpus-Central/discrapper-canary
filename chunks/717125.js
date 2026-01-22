n.d(t, { A: () => L }), n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(836039),
    o = n(98318),
    l = n(855918),
    c = n(164956),
    u = n(95701),
    d = n(34457),
    f = n(734057),
    p = n(696451),
    _ = n(317525),
    h = n(71393),
    m = n(287809),
    g = n(652215);
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
    let n = m.default.getCurrentUser();
    if (null == n) return !1;
    let r = p.Ay.getMember(t, n.id);
    return null != r && r.roles.includes(e.id);
}
function A(e) {
    let { guildId: t, role: n, isPreviewingRoles: r } = e;
    return !!(0, o.U)(n) && !!(r || (0, o.X)(null != n ? n : void 0) || O(n, t));
}
function v(e, t) {
    if (
        !t.features.has(g.GuildFeatures.CREATOR_MONETIZABLE) &&
        !t.features.has(g.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
    )
        return !1;
    let n = c.A.isViewingServerShop(t.id);
    for (let r of Object.keys(e.permissionOverwrites)) {
        let i = _.A.getRole(t.id, r);
        if (
            !A({
                guildId: t.id,
                role: i,
                isPreviewingRoles: n,
            })
        )
            continue;
        let a = e.permissionOverwrites[r];
        if ((0, l.Uj)(e, a)) return !0;
    }
    let r = _.A.getEveryoneRole(t),
        i = !(0, d._m)(r, g.xBc.VIEW_CHANNEL),
        a = (0, l.AN)(e, e.permissionOverwrites[t.id]);
    if (i && !a) {
        for (let e of _.A.getSortedRoles(t.id))
            if (
                A({
                    guildId: t.id,
                    role: e,
                    isPreviewingRoles: n,
                }) &&
                (0, l.iR)(e)
            )
                return !0;
    }
    return !1;
}
function S(e) {
    let t = h.A.getGuild(e);
    if (null == t) return;
    let n = (b[e] = new Set());
    if (!t.features.has(g.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return;
    let r = f.A.getMutableGuildChannelsForGuild(e);
    for (let e in r) {
        let i = r[e];
        v(i, t) && n.add(i.id);
    }
}
function I(e, t) {
    let n = b[e];
    if (null == n) return !1;
    let r = f.A.getChannel(t);
    if (null == r) return !1;
    let i = h.A.getGuild(r.getGuildId());
    if (null == i) return !1;
    let a = n.has(t),
        s = v(r, i);
    return a !== s && (s ? n.add(t) : n.delete(t), !0);
}
function T() {
    (b = {}), y.clear();
}
function C(e) {
    let { guild: t } = e;
    delete b[t.id];
}
function N(e) {
    let { guildId: t } = e;
    delete b[t];
}
function R(e) {
    let { channel: t } = e;
    return null != t.guild_id && I(t.guild_id, t.id);
}
function w(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) null != e.guild_id && I(e.guild_id, e.id) && (n = !0);
    return n;
}
function P(e) {
    let { guildId: t, restrictions: n } = e;
    (0, s.Y5)(n) ? y.add(t) : y.delete(t);
}
function D(e) {
    let { guildId: t } = e;
    y.add(t);
}
class x extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(f.A, p.Ay, _.A, h.A, c.A, m.default);
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = b[e];
        return null == n && (S(e), (n = b[e])), null != n && n.has(t);
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !y.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = f.A.getChannel(t);
        return (
            !!(null != n && null != n.parent_id && u.Le.has(null == n ? void 0 : n.type)) &&
            this.isChannelOrThreadParentGated(e, n.parent_id)
        );
    }
}
E(x, "displayName", "GatedChannelStore");
let L = new x(a.h, {
    CONNECTION_OPEN: T,
    OVERLAY_INITIALIZE: T,
    CACHE_LOADED_LAZY: T,
    GUILD_CREATE: C,
    GUILD_UPDATE: C,
    GUILD_DELETE: C,
    GUILD_ROLE_CREATE: N,
    GUILD_ROLE_UPDATE: N,
    GUILD_ROLE_DELETE: N,
    IMPERSONATE_UPDATE: N,
    IMPERSONATE_STOP: N,
    CHANNEL_CREATE: R,
    CHANNEL_DELETE: R,
    CHANNEL_UPDATES: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: D,
});
