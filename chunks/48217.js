n.d(t, { c: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(269128),
    l = n(358555),
    a = n(267642),
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
                (0, r.jsx)(l.Z, {
                    guild: t,
                    isBannerVisible: !0
                }),
                (0, r.jsx)(i.X6q, {
                    className: m.guildName,
                    variant: 'heading-md/semibold',
                    children: t.toString()
                }),
                (0, r.jsx)(s.Z, {
                    className: m.dropdown,
                    open: !1
                })
            ]
        })
    });
}
function p(e) {
    let { analyticsLocations: t, analyticsLocation: n, guild: i, isGIF: s, banner: l } = e,
        m = s ? (0, a._p)(d.oNc.ANIMATED_BANNER) : (0, a._p)(d.oNc.BANNER);
    null != m &&
        (0, o.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
                title: u.NW.string(u.t['rv2H+/']),
                subtitle: (function (e, t) {
                    let n = (0, a.nW)(e);
                    return t ? u.NW.formatToPlainString(u.t['TR/Uys'], { targetLevelOrPlan: n }) : u.NW.formatToPlainString(u.t.B253V1, { targetLevelOrPlan: n });
                })(m, s),
                image: (0, r.jsx)(g, {
                    guild: i,
                    banner: l
                })
            },
            perkIntro: u.NW.string(u.t.ZuItcH),
            perks: s ? (0, c.zC)() : (0, c.XO)()
        });
}
