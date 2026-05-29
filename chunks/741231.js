"use strict";
n.d(t, { A: () => M });
var i = n(584682),
    r = n(892340),
    s = n(976860),
    a = n(345942),
    o = n(734057),
    l = n(376943),
    u = n(308528),
    c = n(717125),
    d = n(41200),
    _ = n(496767),
    h = n(134413),
    f = n(713125),
    p = n(473529),
    E = n(960253),
    m = n(469993),
    g = n(836039),
    A = n(555325),
    I = n(287809),
    T = n(521427),
    S = n(488803),
    y = n(56595),
    N = n(871123),
    v = n(353202),
    C = n(317525),
    R = n(71393),
    O = n(403362),
    b = n(652215),
    D = n(746080);
async function L(e) {
    let { guildId: t, channelId: n } = e,
        i = R.A.getGuild(t),
        r = C.A.getUnsafeMutableRoles(t);
    if (null == i && t !== b.ME && n !== D.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, D.jq)(n))
        switch (n) {
            case D.VV.ROLE_SUBSCRIPTIONS:
                return (0, E.l8)(t, r);
            case D.VV.SERVER_MONETIZATION_ONBOARDING:
                let s;
                return (
                    null != i &&
                    ((s = i.ownerId === I.default.getCurrentUser()?.id),
                    (0, A.V9)({
                        guild: i,
                        isOwner: s,
                        canManageGuildRoleSubscriptions: (0, A.X9)(i),
                        isUserInCreatorMonetizationEligibleCountry: (0, m.Z1)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, g.mk)(i.id),
                    }))
                );
            case D.VV.GAME_SHOP:
                return (0, N.jz)(i ?? { id: t, type: "id-only" });
            case D.VV.GUILD_SHOP:
                return (0, d.K)(i, r);
            case D.VV.MEMBER_APPLICATIONS:
                return (0, _.h)(t);
            case D.VV.GUILD_HOME:
                return (0, p.K)(t);
            case D.VV.CHANNEL_BROWSER:
                return null != i && i.features.has(b.GuildFeatures.COMMUNITY);
            case D.VV.GUILD_ONBOARDING:
                return f.Ay.shouldShowOnboarding(t);
            case D.VV.CUSTOMIZE_COMMUNITY:
                return null != i && i.features.has(b.GuildFeatures.COMMUNITY);
            case D.VV.MEMBER_SAFETY:
                return (0, h.Ml)(t);
            case D.VV.GUILD_BOOSTS:
                return !0;
            case D.VV.REPORT_TO_MOD:
                return null != i && (0, y.A)(i);
            case D.VV.GAME_SERVERS:
                return (
                    (0, S.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != i &&
                    i.features.has(b.GuildFeatures.GAME_SERVERS)
                );
            case D.VV.GUILD_OFFICIAL_MESSAGES:
                return (0, T.GP)(i, "isAccessibleChannelOrThreadPath");
            default:
                (0, O.xb)(n);
        }
    let a = o.A.getChannel(n);
    return (
        (null != a ||
            (await v.A.loadThread(n),
            null == (a = o.A.getChannel(n)) && t === b.ME && (a = await u.A.openChannel(n)),
            null != a)) &&
        ((0, l.nc)(a) || c.A.isChannelGatedAndVisible(t, n))
    );
}
var w = n(9588);
async function M(e, t) {
    let n = (0, l.vu)(e);
    if (null != n && !(await L(n))) return void (0, w.K)({ kind: "channel" });
    if (null == n) return void (0, s.pX)(e, t);
    let u = (function (e) {
        if (null == e.channelId) return e;
        let t = o.A.getChannel(e.channelId);
        if (null == t) return e;
        let n = (0, i.j)(t);
        return { ...e, guildId: n ?? b.ME };
    })(n);
    null == u.channelId
        ? (0, a.u)(u.guildId)
        : (0, r.C$)(u.channelId) && (0, r.C$)(u.threadId)
          ? null != u.threadId
              ? (0, s.pX)(b.BVt.CHANNEL_THREAD_VIEW(u.guildId, u.channelId, u.threadId, u.messageId), t)
              : (0, s.pX)(b.BVt.CHANNEL(u.guildId, u.channelId, u.messageId), t)
          : (0, w.E)();
}
