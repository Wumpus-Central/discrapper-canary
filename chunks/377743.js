n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(100527),
    l = n(906732),
    a = n(82950),
    s = n(26323),
    o = n(267642),
    c = n(981631),
    u = n(921944),
    d = n(30513),
    p = n(388032),
    f = n(420569);
function m(e) {
    let { guild: t, markAsDismissed: n } = e,
        m = (0, o.KK)(t, c.Eu4.TIER_2),
        { analyticsLocations: h } = (0, l.ZP)(i.Z.GUILD_BANNER_NOTICE);
    return (0, r.jsx)(a.Z, {
        guild: t,
        onDismissed: () => n(u.L.UNKNOWN),
        cta: p.intl.string(p.t.oPAx73),
        message: p.intl.format(p.t.AcaNYw, { boostsNeeded: m }),
        type: c.vID.GUILD_BANNER,
        image: f,
        onClick: () =>
            (0, s.Z)({
                analyticsLocations: h,
                analyticsSourceLocation: {
                    section: c.jXE.CHANNEL_NOTICE,
                    object: c.qAy.SERVER_BANNER_TOOLTIP,
                },
                guild: t,
                perks: (0, d.XO)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
