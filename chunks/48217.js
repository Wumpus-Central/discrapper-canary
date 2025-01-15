n.d(i, {
    c: function () {
        return p;
    }
});
var t = n(200651);
n(192379);
var o = n(481060),
    r = n(269128),
    l = n(358555),
    a = n(267642),
    c = n(26323),
    s = n(30513),
    d = n(981631),
    u = n(388032),
    g = n(643212);
function f(e) {
    let { guild: i, banner: n } = e;
    return (0, t.jsx)('div', {
        className: g.guildBanner,
        style: { backgroundImage: 'url('.concat(n) },
        children: (0, t.jsxs)('div', {
            className: g.guildHeader,
            children: [
                (0, t.jsx)(l.Z, {
                    guild: i,
                    isBannerVisible: !0
                }),
                (0, t.jsx)(o.Heading, {
                    className: g.guildName,
                    variant: 'heading-md/semibold',
                    children: i.toString()
                }),
                (0, t.jsx)(r.Z, {
                    className: g.dropdown,
                    open: !1
                })
            ]
        })
    });
}
function p(e) {
    let { analyticsLocations: i, analyticsLocation: n, guild: o, isGIF: r, banner: l } = e,
        g = r ? (0, a._p)(d.oNc.ANIMATED_BANNER) : (0, a._p)(d.oNc.BANNER);
    null != g &&
        (0, c.Z)({
            analyticsLocations: i,
            analyticsSourceLocation: n,
            guild: o,
            headerProps: {
                title: u.intl.string(u.t['rv2H+/']),
                subtitle: (function (e, i) {
                    let n = (0, a.nW)(e);
                    return i ? u.intl.formatToPlainString(u.t['TR/Uys'], { targetLevelOrPlan: n }) : u.intl.formatToPlainString(u.t.B253V1, { targetLevelOrPlan: n });
                })(g, r),
                image: (0, t.jsx)(f, {
                    guild: o,
                    banner: l
                })
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: r ? (0, s.zC)() : (0, s.XO)()
        });
}
