n.d(t, {
    hH: () => g,
    xl: () => p,
    zA: () => m
});
var r = n(255367),
    i = n(73800),
    l = n(906732),
    s = n(807582),
    a = n(949640),
    o = n(981631),
    c = n(30513),
    u = n(187561);
function d(e) {
    let { guild: t, guildFeature: n, analyticsSection: o, analyticsObject: c, getPerks: d, targetPremiumGuildTier: m } = e,
        { analyticsLocations: g } = (0, l.ZP)(),
        p = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.E6)({
                        guild: t,
                        analyticsLocations: g,
                        analyticsSection: o,
                        analyticsObject: c,
                        perks: d(),
                        targetPremiumGuildTier: m
                    });
            },
            [g, c, o, t, d, m]
        );
    return (0, r.jsx)(s.Z, {
        guild: t,
        guildFeature: n,
        className: u.guildFeatureAvailabilityIndicator,
        onClick: p
    });
}
function m(e) {
    let { guild: t } = e;
    return (0, r.jsx)(d, {
        guild: t,
        guildFeature: o.oNc.BANNER,
        analyticsSection: o.jXE.GUILD_BANNER,
        analyticsObject: o.qAy.BADGE,
        getPerks: c.XO
    });
}
function g(e) {
    let { guild: t } = e;
    return (0, r.jsx)(d, {
        guild: t,
        guildFeature: o.oNc.INVITE_SPLASH,
        analyticsSection: o.jXE.GUILD_INVITE_BACKGROUND,
        analyticsObject: o.qAy.BADGE,
        getPerks: c.o9
    });
}
function p(e) {
    let { guild: t } = e;
    return (0, r.jsx)(d, {
        guild: t,
        guildFeature: o.oNc.VANITY_URL,
        analyticsSection: o.jXE.GUILD_SETTINGS_VANITY_URL,
        analyticsObject: o.qAy.BADGE,
        getPerks: c.WW,
        targetPremiumGuildTier: o.Eu4.TIER_3
    });
}
