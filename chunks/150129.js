"use strict";
n.d(t, { A: () => S });
var r = n(717125),
    i = n(41200),
    s = n(496767),
    a = n(134413),
    o = n(713125),
    l = n(473529),
    u = n(960253),
    c = n(154325),
    d = n(488803),
    _ = n(56595),
    f = n(871123),
    p = n(353202),
    h = n(734057),
    E = n(317525),
    m = n(71393),
    g = n(403362),
    A = n(376943),
    I = n(652215),
    T = n(746080);
async function S(e) {
    let { guildId: t, channelId: n } = e,
        S = m.A.getGuild(t),
        y = E.A.getUnsafeMutableRoles(t);
    if (null == S && t !== I.ME && n !== T.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, T.jq)(n))
        switch (n) {
            case T.VV.ROLE_SUBSCRIPTIONS:
                return (0, u.l8)(t, y);
            case T.VV.SERVER_MONETIZATION_ONBOARDING:
                return null != S && (0, c.t)(S);
            case T.VV.GAME_SHOP:
                return (0, f.jz)(S ?? { id: t });
            case T.VV.GUILD_SHOP:
                return (0, i.K)(S, y);
            case T.VV.MEMBER_APPLICATIONS:
                return (0, s.h)(t);
            case T.VV.GUILD_HOME:
                return (0, l.K)(t);
            case T.VV.CHANNEL_BROWSER:
                return null != S && S.features.has(I.GuildFeatures.COMMUNITY);
            case T.VV.GUILD_ONBOARDING:
                return o.Ay.shouldShowOnboarding(t);
            case T.VV.CUSTOMIZE_COMMUNITY:
                return null != S && S.features.has(I.GuildFeatures.COMMUNITY);
            case T.VV.MEMBER_SAFETY:
                return (0, a.Ml)(t);
            case T.VV.GUILD_BOOSTS:
                return !0;
            case T.VV.REPORT_TO_MOD:
                return null != S && (0, _.A)(S);
            case T.VV.GAME_SERVERS:
                return (
                    (0, d.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != S &&
                    S.features.has(I.GuildFeatures.GAME_SERVERS)
                );
            default:
                (0, g.xb)(n);
        }
    let N = h.A.getChannel(n);
    return (
        (null != N || (await p.A.loadThread(n), null != (N = h.A.getChannel(n)))) &&
        ((0, A.nc)(N) || r.A.isChannelGatedAndVisible(t, n))
    );
}
