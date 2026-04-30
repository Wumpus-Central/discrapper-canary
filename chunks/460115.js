n.d(t, { A: () => R });
var i = n(717125),
    a = n(41200),
    r = n(496767),
    s = n(134413),
    l = n(713125),
    o = n(473529),
    d = n(960253),
    c = n(469993),
    _ = n(836039),
    E = n(555325),
    u = n(287809),
    A = n(488803),
    I = n(56595),
    T = n(871123),
    h = n(353202),
    S = n(734057),
    N = n(317525),
    f = n(71393),
    p = n(403362),
    m = n(376943),
    O = n(652215),
    C = n(746080);
async function R(e) {
    let { guildId: t, channelId: n } = e,
        R = f.A.getGuild(t),
        g = N.A.getUnsafeMutableRoles(t);
    if (null == R && t !== O.ME && n !== C.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, C.jq)(n))
        switch (n) {
            case C.VV.ROLE_SUBSCRIPTIONS:
                return (0, d.l8)(t, g);
            case C.VV.SERVER_MONETIZATION_ONBOARDING:
                let L;
                return (
                    null != R &&
                    ((L = R.ownerId === u.default.getCurrentUser()?.id),
                    (0, E.V9)({
                        guild: R,
                        isOwner: L,
                        canManageGuildRoleSubscriptions: (0, E.X9)(R),
                        isUserInCreatorMonetizationEligibleCountry: (0, c.Z1)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, _.mk)(R.id),
                    }))
                );
            case C.VV.GAME_SHOP:
                return (0, T.jz)(R ?? { id: t, type: "id-only" });
            case C.VV.GUILD_SHOP:
                return (0, a.K)(R, g);
            case C.VV.MEMBER_APPLICATIONS:
                return (0, r.h)(t);
            case C.VV.GUILD_HOME:
                return (0, o.K)(t);
            case C.VV.CHANNEL_BROWSER:
                return null != R && R.features.has(O.GuildFeatures.COMMUNITY);
            case C.VV.GUILD_ONBOARDING:
                return l.Ay.shouldShowOnboarding(t);
            case C.VV.CUSTOMIZE_COMMUNITY:
                return null != R && R.features.has(O.GuildFeatures.COMMUNITY);
            case C.VV.MEMBER_SAFETY:
                return (0, s.Ml)(t);
            case C.VV.GUILD_BOOSTS:
                return !0;
            case C.VV.REPORT_TO_MOD:
                return null != R && (0, I.A)(R);
            case C.VV.GAME_SERVERS:
                return (
                    (0, A.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != R &&
                    R.features.has(O.GuildFeatures.GAME_SERVERS)
                );
            default:
                (0, p.xb)(n);
        }
    let D = S.A.getChannel(n);
    return (
        (null != D || (await h.A.loadThread(n), null != (D = S.A.getChannel(n)))) &&
        ((0, m.nc)(D) || i.A.isChannelGatedAndVisible(t, n))
    );
}
