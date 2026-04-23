n.d(t, { B6: () => m, bX: () => g, rV: () => h });
var i = n(627968),
    l = n(64700),
    s = n(688810),
    r = n(753838),
    a = n(695800),
    o = n(652215),
    d = n(874864),
    c = n(830994);
function u(e) {
    let {
            guild: t,
            guildFeature: n,
            analyticsSection: o,
            analyticsObject: d,
            getPerks: u,
            targetPremiumGuildTier: m,
        } = e,
        { analyticsLocations: g } = (0, s.Ay)(),
        h = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.p_)({
                        guild: t,
                        analyticsLocations: g,
                        analyticsSection: o,
                        analyticsObject: d,
                        perks: u(),
                        targetPremiumGuildTier: m,
                    });
            },
            [g, d, o, t, u, m],
        );
    return (0, i.jsx)(r.A, { guild: t, guildFeature: n, className: c.M, onClick: h });
}
function m(e) {
    let { guild: t } = e;
    return (0, i.jsx)(u, {
        guild: t,
        guildFeature: o.GuildFeatures.BANNER,
        analyticsSection: o.JJy.GUILD_BANNER,
        analyticsObject: o.ZSU.BADGE,
        getPerks: d.QR,
    });
}
function g(e) {
    let { guild: t } = e;
    return (0, i.jsx)(u, {
        guild: t,
        guildFeature: o.GuildFeatures.INVITE_SPLASH,
        analyticsSection: o.JJy.GUILD_INVITE_BACKGROUND,
        analyticsObject: o.ZSU.BADGE,
        getPerks: d.Lp,
    });
}
function h(e) {
    let { guild: t } = e;
    return (0, i.jsx)(u, {
        guild: t,
        guildFeature: o.GuildFeatures.VANITY_URL,
        analyticsSection: o.JJy.GUILD_SETTINGS_VANITY_URL,
        analyticsObject: o.ZSU.BADGE,
        getPerks: d.DU,
        targetPremiumGuildTier: o.TVA.TIER_3,
    });
}
