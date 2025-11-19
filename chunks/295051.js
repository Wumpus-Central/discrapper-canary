n.d(t, {
    hH: () => m,
    xl: () => p,
    zA: () => g,
});
var r = n(54381),
    i = n(473749),
    l = n(906732),
    a = n(807582),
    s = n(821458),
    o = n(981631),
    c = n(30513),
    d = n(674119);
function u(e) {
    let {
            guild: t,
            guildFeature: n,
            analyticsSection: o,
            analyticsObject: c,
            getPerks: u,
            targetPremiumGuildTier: g,
        } = e,
        { analyticsLocations: m } = (0, l.ZP)(),
        p = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, s.E6)({
                        guild: t,
                        analyticsLocations: m,
                        analyticsSection: o,
                        analyticsObject: c,
                        perks: u(),
                        targetPremiumGuildTier: g,
                    });
            },
            [m, c, o, t, u, g],
        );
    return (0, r.jsx)(a.Z, {
        guild: t,
        guildFeature: n,
        className: d.guildFeatureAvailabilityIndicator,
        onClick: p,
    });
}
function g(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: o.GuildFeatures.BANNER,
        analyticsSection: o.jXE.GUILD_BANNER,
        analyticsObject: o.qAy.BADGE,
        getPerks: c.XO,
    });
}
function m(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: o.GuildFeatures.INVITE_SPLASH,
        analyticsSection: o.jXE.GUILD_INVITE_BACKGROUND,
        analyticsObject: o.qAy.BADGE,
        getPerks: c.o9,
    });
}
function p(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: o.GuildFeatures.VANITY_URL,
        analyticsSection: o.jXE.GUILD_SETTINGS_VANITY_URL,
        analyticsObject: o.qAy.BADGE,
        getPerks: c.WW,
        targetPremiumGuildTier: o.Eu4.TIER_3,
    });
}
