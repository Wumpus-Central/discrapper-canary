n.d(t, {
    c: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(269128),
    s = n(358555),
    a = n(267642),
    o = n(26323),
    c = n(30513),
    d = n(981631),
    u = n(388032),
    m = n(369576);
function h(e) {
    let { guild: t, banner: n } = e;
    return (0, i.jsx)('div', {
        className: m.guildBanner,
        style: { backgroundImage: 'url('.concat(n) },
        children: (0, i.jsxs)('div', {
            className: m.guildHeader,
            children: [
                (0, i.jsx)(s.Z, {
                    guild: t,
                    isBannerVisible: !0
                }),
                (0, i.jsx)(r.Heading, {
                    className: m.guildName,
                    variant: 'heading-md/semibold',
                    children: t.toString()
                }),
                (0, i.jsx)(l.Z, {
                    className: m.dropdown,
                    open: !1
                })
            ]
        })
    });
}
function g(e) {
    let { analyticsLocations: t, analyticsLocation: n, guild: r, isGIF: l, banner: s } = e,
        m = l ? (0, a._p)(d.oNc.ANIMATED_BANNER) : (0, a._p)(d.oNc.BANNER);
    null != m &&
        (0, o.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: r,
            headerProps: {
                title: u.intl.string(u.t['rv2H+/']),
                subtitle: (function (e, t) {
                    let n = (0, a.nW)(e);
                    return t ? u.intl.formatToPlainString(u.t['TR/Uys'], { targetLevelOrPlan: n }) : u.intl.formatToPlainString(u.t.B253V1, { targetLevelOrPlan: n });
                })(m, l),
                image: (0, i.jsx)(h, {
                    guild: r,
                    banner: s
                })
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: l ? (0, c.zC)() : (0, c.XO)()
        });
}
