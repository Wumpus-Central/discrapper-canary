n.d(t, {
    h: () => p,
    z: () => m
});
var r = n(200651),
    i = n(192379),
    s = n(906732),
    a = n(807582),
    l = n(949640),
    o = n(981631),
    c = n(30513),
    d = n(876011);
function u(e) {
    let { guild: t, guildFeature: n, analyticsSection: o, analyticsObject: c, getPerks: u } = e,
        { analyticsLocations: m } = (0, s.ZP)(),
        p = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), (0, l.E6)(t, m, o, c, u());
            },
            [m, c, o, t, u]
        );
    return (0, r.jsx)(a.Z, {
        guild: t,
        guildFeature: n,
        className: d.guildFeatureAvailabilityIndicator,
        onClick: p
    });
}
function m(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: o.oNc.BANNER,
        analyticsSection: o.jXE.GUILD_BANNER,
        analyticsObject: o.qAy.BADGE,
        getPerks: c.XO
    });
}
function p(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: o.oNc.INVITE_SPLASH,
        analyticsSection: o.jXE.GUILD_INVITE_BACKGROUND,
        analyticsObject: o.qAy.BADGE,
        getPerks: c.o9
    });
}
