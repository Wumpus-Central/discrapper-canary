n.d(i, { c: () => h });
var t = n(200651);
n(192379);
var o = n(481060),
    r = n(269128),
    a = n(358555),
    l = n(267642),
    c = n(26323),
    d = n(30513),
    s = n(981631),
    u = n(388032),
    _ = n(369576);
function g(e) {
    let { guild: i, banner: n } = e;
    return (0, t.jsx)('div', {
        className: _.guildBanner,
        style: { backgroundImage: 'url('.concat(n) },
        children: (0, t.jsxs)('div', {
            className: _.guildHeader,
            children: [
                (0, t.jsx)(a.Z, {
                    guild: i,
                    isBannerVisible: !0
                }),
                (0, t.jsx)(o.X6q, {
                    className: _.guildName,
                    variant: 'heading-md/semibold',
                    children: i.toString()
                }),
                (0, t.jsx)(r.Z, {
                    className: _.dropdown,
                    open: !1
                })
            ]
        })
    });
}
function h(e) {
    let { analyticsLocations: i, analyticsLocation: n, guild: o, isGIF: r, banner: a } = e,
        _ = r ? (0, l._p)(s.oNc.ANIMATED_BANNER) : (0, l._p)(s.oNc.BANNER);
    null != _ &&
        (0, c.Z)({
            analyticsLocations: i,
            analyticsSourceLocation: n,
            guild: o,
            headerProps: {
                title: u.intl.string(u.t['rv2H+/']),
                subtitle: (function (e, i) {
                    let n = (0, l.nW)(e);
                    return i ? u.intl.formatToPlainString(u.t['TR/Uys'], { targetLevelOrPlan: n }) : u.intl.formatToPlainString(u.t.B253V1, { targetLevelOrPlan: n });
                })(_, r),
                image: (0, t.jsx)(g, {
                    guild: o,
                    banner: a
                })
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: r ? (0, d.zC)() : (0, d.XO)()
        });
}
