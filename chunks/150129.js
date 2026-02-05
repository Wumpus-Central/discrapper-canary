"use strict";
n.d(t, { A: () => y });
var r = n(717125),
    i = n(41200),
    a = n(496767),
    s = n(134413),
    o = n(713125),
    l = n(473529),
    u = n(960253),
    c = n(154325),
    d = n(488803),
    _ = n(56595),
    f = n(871123),
    p = n(353202),
    h = n(734057),
    m = n(317525),
    g = n(71393),
    E = n(403362),
    A = n(376943),
    I = n(652215),
    T = n(746080);
async function y(e) {
    let { guildId: t, channelId: n } = e,
        y = g.A.getGuild(t),
        S = m.A.getUnsafeMutableRoles(t);
    if (null == y && t !== I.ME && n !== T.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, T.jq)(n))
        switch (n) {
            case T.VV.ROLE_SUBSCRIPTIONS:
                return (0, u.l8)(t, S);
            case T.VV.SERVER_MONETIZATION_ONBOARDING:
                return null != y && (0, c.t)(y);
            case T.VV.GAME_SHOP:
                return (0, f.jz)(y ?? { id: t });
            case T.VV.GUILD_SHOP:
                return (0, i.K)(y, S);
            case T.VV.MEMBER_APPLICATIONS:
                return (0, a.h)(t);
            case T.VV.GUILD_HOME:
                return (0, l.K)(t);
            case T.VV.CHANNEL_BROWSER:
                return null != y && y.features.has(I.GuildFeatures.COMMUNITY);
            case T.VV.GUILD_ONBOARDING:
                return o.Ay.shouldShowOnboarding(t);
            case T.VV.CUSTOMIZE_COMMUNITY:
                return null != y && y.features.has(I.GuildFeatures.COMMUNITY);
            case T.VV.MEMBER_SAFETY:
                return (0, s.Ml)(t);
            case T.VV.GUILD_BOOSTS:
                return !0;
            case T.VV.REPORT_TO_MOD:
                return null != y && (0, _.A)(y);
            case T.VV.GAME_SERVERS:
                return (
                    (0, d.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != y &&
                    y.features.has(I.GuildFeatures.GAME_SERVERS)
                );
            default:
                (0, E.xb)(n);
        }
    let v = h.A.getChannel(n);
    return (
        (null != v || (await p.A.loadThread(n), null != (v = h.A.getChannel(n)))) &&
        ((0, A.nc)(v) || r.A.isChannelGatedAndVisible(t, n))
    );
}
