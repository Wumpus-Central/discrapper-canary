n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var a = n(793574),
    r = n(688810),
    l = n(926466),
    s = n(631305),
    o = n(473145),
    d = n(652215),
    c = n(49999),
    u = n(874864),
    A = n(985018),
    h = n(664795);
function _(e) {
    let { guild: t, markAsDismissed: n } = e,
        _ = (0, o.Os)(t, d.TVA.TIER_2),
        { analyticsLocations: m } = (0, r.Ay)(a.A.GUILD_BANNER_NOTICE);
    return (0, i.jsx)(l.A, {
        guild: t,
        onDismissed: () => n(c.i.UNKNOWN),
        cta: A.intl.string(A.t.oPAx73),
        message: A.intl.format(A.t.AcaNYw, { boostsNeeded: _ }),
        type: d.n5X.GUILD_BANNER,
        image: h,
        onClick: () =>
            (0, s.A)({
                analyticsLocations: m,
                analyticsSourceLocation: { section: d.JJy.CHANNEL_NOTICE, object: d.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, u.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
