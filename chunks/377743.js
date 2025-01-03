n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(100527),
    l = n(906732),
    a = n(324262),
    s = n(26323),
    o = n(267642),
    c = n(981631),
    d = n(921944),
    u = n(30513),
    h = n(388032),
    m = n(420569);
function p(e) {
    let { guild: t, markAsDismissed: n } = e,
        p = (0, o.KK)(t, c.Eu4.TIER_2),
        { analyticsLocations: g } = (0, l.ZP)(r.Z.GUILD_BANNER_NOTICE);
    return (0, i.jsx)(a.Z, {
        guild: t,
        onDismissed: () => n(d.L.UNKNOWN),
        cta: h.intl.string(h.t['oPAx7+']),
        message: h.intl.format(h.t.AcaNY2, { boostsNeeded: p }),
        type: c.vID.GUILD_BANNER,
        image: m,
        onClick: () =>
            (0, s.Z)({
                analyticsLocations: g,
                analyticsSourceLocation: {
                    section: c.jXE.CHANNEL_NOTICE,
                    object: c.qAy.SERVER_BANNER_TOOLTIP
                },
                guild: t,
                perks: (0, u.XO)()
            }),
        imageMarginTop: 15,
        imageMarginX: 22
    });
}
