n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(100527),
    l = n(906732),
    a = n(324262),
    o = n(26323),
    s = n(267642),
    c = n(981631),
    u = n(921944),
    d = n(30513),
    p = n(388032),
    h = n(420569);
function f(e) {
    let { guild: t, markAsDismissed: n } = e,
        f = (0, s.KK)(t, c.Eu4.TIER_2),
        { analyticsLocations: g } = (0, l.ZP)(i.Z.GUILD_BANNER_NOTICE);
    return (0, r.jsx)(a.Z, {
        guild: t,
        onDismissed: () => n(u.L.UNKNOWN),
        cta: p.NW.string(p.t['oPAx7+']),
        message: p.NW.format(p.t.AcaNY2, { boostsNeeded: f }),
        type: c.vID.GUILD_BANNER,
        image: h,
        onClick: () =>
            (0, o.Z)({
                analyticsLocations: g,
                analyticsSourceLocation: {
                    section: c.jXE.CHANNEL_NOTICE,
                    object: c.qAy.SERVER_BANNER_TOOLTIP
                },
                guild: t,
                perks: (0, d.XO)()
            }),
        imageMarginTop: 15,
        imageMarginX: 22
    });
}
