n.d(t, { c: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(269128),
    s = n(358555),
    a = n(267642),
    o = n(26323),
    c = n(30513),
    u = n(981631),
    d = n(388032),
    m = n(309818);
function g(e) {
    let { guild: t, banner: n } = e;
    return (0, r.jsx)('div', {
        className: m.guildBanner,
        style: { backgroundImage: 'url('.concat(n) },
        children: (0, r.jsxs)('div', {
            className: m.guildHeader,
            children: [
                (0, r.jsx)(s.Z, {
                    guild: t,
                    isBannerVisible: !0
                }),
                (0, r.jsx)(i.X6q, {
                    className: m.guildName,
                    variant: 'heading-md/semibold',
                    children: t.toString()
                }),
                (0, r.jsx)(l.Z, {
                    className: m.dropdown,
                    open: !1
                })
            ]
        })
    });
}
function p(e) {
    let { analyticsLocations: t, analyticsLocation: n, guild: i, isGIF: l, banner: s } = e,
        m = l ? (0, a._p)(u.oNc.ANIMATED_BANNER) : (0, a._p)(u.oNc.BANNER);
    null != m &&
        (0, o.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
                title: d.intl.string(d.t['rv2H+/']),
                subtitle: (function (e, t) {
                    let n = (0, a.nW)(e);
                    return t ? d.intl.formatToPlainString(d.t['TR/Uys'], { targetLevelOrPlan: n }) : d.intl.formatToPlainString(d.t.B253V1, { targetLevelOrPlan: n });
                })(m, l),
                image: (0, r.jsx)(g, {
                    guild: i,
                    banner: s
                })
            },
            perkIntro: d.intl.string(d.t.ZuItcH),
            perks: l ? (0, c.zC)() : (0, c.XO)()
        });
}
