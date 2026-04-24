n.d(t, { A: () => L });
var i = n(717125),
    r = n(41200),
    a = n(496767),
    s = n(134413),
    _ = n(713125),
    l = n(473529),
    o = n(960253),
    E = n(469993),
    d = n(836039),
    c = n(555325),
    u = n(287809),
    I = n(488803),
    A = n(56595),
    T = n(871123),
    S = n(353202),
    N = n(734057),
    O = n(317525),
    R = n(71393),
    f = n(403362),
    C = n(376943),
    p = n(652215),
    m = n(746080);
async function L(e) {
    let { guildId: t, channelId: n } = e,
        L = R.A.getGuild(t),
        D = O.A.getUnsafeMutableRoles(t);
    if (null == L && t !== p.ME && n !== m.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, m.jq)(n))
        switch (n) {
            case m.VV.ROLE_SUBSCRIPTIONS:
                return (0, o.l8)(t, D);
            case m.VV.SERVER_MONETIZATION_ONBOARDING:
                let h;
                return (
                    null != L &&
                    ((h = L.ownerId === u.default.getCurrentUser()?.id),
                    (0, c.V9)({
                        guild: L,
                        isOwner: h,
                        canManageGuildRoleSubscriptions: (0, c.X9)(L),
                        isUserInCreatorMonetizationEligibleCountry: (0, E.Z1)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, d.mk)(L.id),
                    }))
                );
            case m.VV.GAME_SHOP:
                return (0, T.jz)(L ?? { id: t, type: "id-only" });
            case m.VV.GUILD_SHOP:
                return (0, r.K)(L, D);
            case m.VV.MEMBER_APPLICATIONS:
                return (0, a.h)(t);
            case m.VV.GUILD_HOME:
                return (0, l.K)(t);
            case m.VV.CHANNEL_BROWSER:
                return null != L && L.features.has(p.GuildFeatures.COMMUNITY);
            case m.VV.GUILD_ONBOARDING:
                return _.Ay.shouldShowOnboarding(t);
            case m.VV.CUSTOMIZE_COMMUNITY:
                return null != L && L.features.has(p.GuildFeatures.COMMUNITY);
            case m.VV.MEMBER_SAFETY:
                return (0, s.Ml)(t);
            case m.VV.GUILD_BOOSTS:
                return !0;
            case m.VV.REPORT_TO_MOD:
                return null != L && (0, A.A)(L);
            case m.VV.GAME_SERVERS:
                return (
                    (0, I.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != L &&
                    L.features.has(p.GuildFeatures.GAME_SERVERS)
                );
            default:
                (0, f.xb)(n);
        }
    let g = N.A.getChannel(n);
    return (
        (null != g || (await S.A.loadThread(n), null != (g = N.A.getChannel(n)))) &&
        ((0, C.nc)(g) || i.A.isChannelGatedAndVisible(t, n))
    );
}
