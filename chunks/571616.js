n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(793574),
    a = n(688810),
    l = n(926466),
    s = n(631305),
    o = n(473145),
    d = n(652215),
    u = n(49999),
    c = n(874864),
    A = n(985018),
    h = n(664795);
function _(e) {
    let { guild: t, markAsDismissed: n } = e,
        _ = (0, o.Os)(t, d.TVA.TIER_2),
        { analyticsLocations: E } = (0, a.Ay)(r.A.GUILD_BANNER_NOTICE);
    return (0, i.jsx)(l.A, {
        guild: t,
        onDismissed: () => n(u.i.UNKNOWN),
        cta: A.intl.string(A.t.oPAx73),
        message: A.intl.format(A.t.AcaNYw, { boostsNeeded: _ }),
        type: d.n5X.GUILD_BANNER,
        image: h,
        onClick: () =>
            (0, s.A)({
                analyticsLocations: E,
                analyticsSourceLocation: { section: d.JJy.CHANNEL_NOTICE, object: d.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, c.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
