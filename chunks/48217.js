i.d(n, { c: () => f });
var t = i(200651);
i(192379);
var o = i(481060),
    r = i(269128),
    a = i(358555),
    l = i(267642),
    c = i(26323),
    s = i(30513),
    d = i(981631),
    u = i(388032),
    g = i(432753);
function _(e) {
    let { guild: n, banner: i } = e;
    return (0, t.jsx)('div', {
        className: g.guildBanner,
        style: { backgroundImage: 'url('.concat(i) },
        children: (0, t.jsxs)('div', {
            className: g.guildHeader,
            children: [
                (0, t.jsx)(a.Z, {
                    guild: n,
                    isBannerVisible: !0
                }),
                (0, t.jsx)(o.X6q, {
                    className: g.guildName,
                    variant: 'heading-md/semibold',
                    children: n.toString()
                }),
                (0, t.jsx)(r.Z, {
                    className: g.dropdown,
                    open: !1
                })
            ]
        })
    });
}
function f(e) {
    let { analyticsLocations: n, analyticsLocation: i, guild: o, isGIF: r, banner: a } = e,
        g = r ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
    null != g &&
        (0, c.Z)({
            analyticsLocations: n,
            analyticsSourceLocation: i,
            guild: o,
            headerProps: {
                title: u.NW.string(u.t['rv2H+/']),
                subtitle: (function (e, n) {
                    let i = (0, l.nW)(e);
                    return n ? u.NW.formatToPlainString(u.t['TR/Uys'], { targetLevelOrPlan: i }) : u.NW.formatToPlainString(u.t.B253V1, { targetLevelOrPlan: i });
                })(g, r),
                image: (0, t.jsx)(_, {
                    guild: o,
                    banner: a
                })
            },
            perkIntro: u.NW.string(u.t.ZuItcH),
            perks: r ? (0, s.zC)() : (0, s.XO)()
        });
}
