"use strict";
n.d(t, { A: () => w });
var i = n(584682),
    r = n(892340),
    s = n(976860),
    a = n(345942),
    o = n(734057),
    l = n(376943),
    u = n(717125),
    c = n(41200),
    d = n(496767),
    _ = n(134413),
    f = n(713125),
    h = n(473529),
    p = n(960253),
    E = n(469993),
    m = n(836039),
    g = n(555325),
    A = n(287809),
    I = n(521427),
    T = n(488803),
    S = n(56595),
    N = n(871123),
    y = n(353202),
    C = n(317525),
    v = n(71393),
    O = n(403362),
    R = n(652215),
    b = n(746080);
async function D(e) {
    let { guildId: t, channelId: n } = e,
        i = v.A.getGuild(t),
        r = C.A.getUnsafeMutableRoles(t);
    if (null == i && t !== R.ME && n !== b.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, b.jq)(n))
        switch (n) {
            case b.VV.ROLE_SUBSCRIPTIONS:
                return (0, p.l8)(t, r);
            case b.VV.SERVER_MONETIZATION_ONBOARDING:
                let s;
                return (
                    null != i &&
                    ((s = i.ownerId === A.default.getCurrentUser()?.id),
                    (0, g.V9)({
                        guild: i,
                        isOwner: s,
                        canManageGuildRoleSubscriptions: (0, g.X9)(i),
                        isUserInCreatorMonetizationEligibleCountry: (0, E.Z1)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, m.mk)(i.id),
                    }))
                );
            case b.VV.GAME_SHOP:
                return (0, N.jz)(i ?? { id: t, type: "id-only" });
            case b.VV.GUILD_SHOP:
                return (0, c.K)(i, r);
            case b.VV.MEMBER_APPLICATIONS:
                return (0, d.h)(t);
            case b.VV.GUILD_HOME:
                return (0, h.K)(t);
            case b.VV.CHANNEL_BROWSER:
                return null != i && i.features.has(R.GuildFeatures.COMMUNITY);
            case b.VV.GUILD_ONBOARDING:
                return f.Ay.shouldShowOnboarding(t);
            case b.VV.CUSTOMIZE_COMMUNITY:
                return null != i && i.features.has(R.GuildFeatures.COMMUNITY);
            case b.VV.MEMBER_SAFETY:
                return (0, _.Ml)(t);
            case b.VV.GUILD_BOOSTS:
                return !0;
            case b.VV.REPORT_TO_MOD:
                return null != i && (0, S.A)(i);
            case b.VV.GAME_SERVERS:
                return (
                    (0, T.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != i &&
                    i.features.has(R.GuildFeatures.GAME_SERVERS)
                );
            case b.VV.GUILD_OFFICIAL_MESSAGES:
                return (0, I.GP)(i, "isAccessibleChannelOrThreadPath");
            default:
                (0, O.xb)(n);
        }
    let a = o.A.getChannel(n);
    return (
        (null != a || (await y.A.loadThread(n), null != (a = o.A.getChannel(n)))) &&
        ((0, l.nc)(a) || u.A.isChannelGatedAndVisible(t, n))
    );
}
var L = n(9588);
async function w(e, t) {
    let n = (0, l.vu)(e);
    if (null != n && !(await D(n))) return void (0, L.K)({ kind: "channel" });
    if (null == n) return void (0, s.pX)(e, t);
    let u = (function (e) {
        if (null == e.channelId) return e;
        let t = o.A.getChannel(e.channelId);
        if (null == t) return e;
        let n = (0, i.j)(t);
        return { ...e, guildId: n ?? R.ME };
    })(n);
    null == u.channelId
        ? (0, a.u)(u.guildId)
        : (0, r.C$)(u.channelId) && (0, r.C$)(u.threadId)
          ? null != u.threadId
              ? (0, s.pX)(R.BVt.CHANNEL_THREAD_VIEW(u.guildId, u.channelId, u.threadId, u.messageId), t)
              : (0, s.pX)(R.BVt.CHANNEL(u.guildId, u.channelId, u.messageId), t)
          : (0, L.E)();
}
