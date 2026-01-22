n.d(t, { A: () => A });
var r = n(717125),
    i = n(41200),
    a = n(496767),
    s = n(134413),
    o = n(713125),
    l = n(473529),
    c = n(960253),
    u = n(154325),
    d = n(488803),
    f = n(56595),
    p = n(871123),
    _ = n(353202),
    h = n(734057),
    m = n(317525),
    g = n(71393),
    E = n(403362),
    b = n(376943),
    y = n(652215),
    O = n(746080);
async function A(e) {
    let { guildId: t, channelId: n } = e,
        A = g.A.getGuild(t),
        v = m.A.getUnsafeMutableRoles(t);
    if (null == A && t !== y.ME && n !== O.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, O.jq)(n))
        switch (n) {
            case O.VV.ROLE_SUBSCRIPTIONS:
                return (0, c.l8)(t, v);
            case O.VV.SERVER_MONETIZATION_ONBOARDING:
                return null != A && (0, u.t)(A);
            case O.VV.GAME_SHOP:
                return (0, p.jz)(null != A ? A : { id: t });
            case O.VV.GUILD_SHOP:
                return (0, i.K)(A, v);
            case O.VV.MEMBER_APPLICATIONS:
                return (0, a.h)(t);
            case O.VV.GUILD_HOME:
                return (0, l.K)(t);
            case O.VV.CHANNEL_BROWSER:
                return null != A && A.features.has(y.GuildFeatures.COMMUNITY);
            case O.VV.GUILD_ONBOARDING:
                return o.Ay.shouldShowOnboarding(t);
            case O.VV.CUSTOMIZE_COMMUNITY:
                return null != A && A.features.has(y.GuildFeatures.COMMUNITY);
            case O.VV.MEMBER_SAFETY:
                return (0, s.Ml)(t);
            case O.VV.GUILD_BOOSTS:
                return !0;
            case O.VV.REPORT_TO_MOD:
                return null != A && (0, f.A)(A);
            case O.VV.GAME_SERVERS:
                return (
                    (0, d.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != A &&
                    A.features.has(y.GuildFeatures.GAME_SERVERS)
                );
            default:
                (0, E.xb)(n);
        }
    let S = h.A.getChannel(n);
    return (
        (null != S || (await _.A.loadThread(n), null != (S = h.A.getChannel(n)))) &&
        ((0, b.nc)(S) || r.A.isChannelGatedAndVisible(t, n))
    );
}
