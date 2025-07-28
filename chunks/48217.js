n.d(t, { c: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(269128),
    a = n(358555),
    s = n(267642),
    o = n(26323),
    c = n(30513),
    d = n(981631),
    u = n(388032),
    m = n(309818);
function g(e) {
    let { guild: t, banner: n } = e;
    return (0, r.jsx)('div', {
        className: m.guildBanner,
        style: { backgroundImage: 'url('.concat(n) },
        children: (0, r.jsxs)('div', {
            className: m.guildHeader,
            children: [
                (0, r.jsx)(a.Z, {
                    guild: t,
                    isBannerVisible: !0
                }),
                (0, r.jsx)(i.X6q, {
                    className: m.guildName,
                    variant: 'heading-md/semibold',
                    children: t.name
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
    let { analyticsLocations: t, analyticsLocation: n, guild: i, isGIF: l, banner: a } = e,
        m = l ? (0, s._p)(d.oNc.ANIMATED_BANNER) : (0, s._p)(d.oNc.BANNER);
    null != m &&
        (0, o.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
                title: u.intl.string(u.t['rv2H+/']),
                subtitle: (function (e, t) {
                    let n = (0, s.nW)(e);
                    return t ? u.intl.formatToPlainString(u.t['TR/Uys'], { targetLevelOrPlan: n }) : u.intl.formatToPlainString(u.t.B253V1, { targetLevelOrPlan: n });
                })(m, l),
                image: (0, r.jsx)(g, {
                    guild: i,
                    banner: a
                })
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: l ? (0, c.zC)() : (0, c.XO)()
        });
}
