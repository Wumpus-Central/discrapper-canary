n.d(t, {
    B6: () => f,
    bX: () => g,
    rV: () => b,
});
var r = n(627968),
    i = n(64700),
    l = n(688810),
    s = n(753838),
    a = n(695800),
    c = n(652215),
    o = n(874864),
    d = n(196647);

function u(e) {
    let {
            guild: t,
            guildFeature: n,
            analyticsSection: c,
            analyticsObject: o,
            getPerks: u,
            targetPremiumGuildTier: f,
        } = e,
        { analyticsLocations: g } = (0, l.Ay)(),
        b = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.p_)({
                        guild: t,
                        analyticsLocations: g,
                        analyticsSection: c,
                        analyticsObject: o,
                        perks: u(),
                        targetPremiumGuildTier: f,
                    });
            },
            [g, o, c, t, u, f],
        );
    return (0, r.jsx)(s.A, {
        guild: t,
        guildFeature: n,
        className: d.M,
        onClick: b,
    });
}

function f(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: c.GuildFeatures.BANNER,
        analyticsSection: c.JJy.GUILD_BANNER,
        analyticsObject: c.ZSU.BADGE,
        getPerks: o.QR,
    });
}

function g(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: c.GuildFeatures.INVITE_SPLASH,
        analyticsSection: c.JJy.GUILD_INVITE_BACKGROUND,
        analyticsObject: c.ZSU.BADGE,
        getPerks: o.Lp,
    });
}

function b(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: c.GuildFeatures.VANITY_URL,
        analyticsSection: c.JJy.GUILD_SETTINGS_VANITY_URL,
        analyticsObject: c.ZSU.BADGE,
        getPerks: o.DU,
        targetPremiumGuildTier: c.TVA.TIER_3,
    });
}
