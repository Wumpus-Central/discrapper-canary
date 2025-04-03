n.d(i, { c: () => _ });
var t = n(200651);
n(192379);
var o = n(481060),
    r = n(269128),
    a = n(358555),
    l = n(267642),
    c = n(26323),
    s = n(30513),
    d = n(981631),
    u = n(388032),
    g = n(309818);
function f(e) {
    let { guild: i, banner: n } = e;
    return (0, t.jsx)('div', {
        className: g.guildBanner,
        style: { backgroundImage: 'url('.concat(n) },
        children: (0, t.jsxs)('div', {
            className: g.guildHeader,
            children: [
                (0, t.jsx)(a.Z, {
                    guild: i,
                    isBannerVisible: !0
                }),
                (0, t.jsx)(o.X6q, {
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
function _(e) {
    let { analyticsLocations: i, analyticsLocation: n, guild: o, isGIF: r, banner: a } = e,
        g = r ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
    null != g &&
        (0, c.Z)({
            analyticsLocations: i,
            analyticsSourceLocation: n,
            guild: o,
            headerProps: {
                title: u.NW.string(u.t['rv2H+/']),
                subtitle: (function (e, i) {
                    let n = (0, l.nW)(e);
                    return i ? u.NW.formatToPlainString(u.t['TR/Uys'], { targetLevelOrPlan: n }) : u.NW.formatToPlainString(u.t.B253V1, { targetLevelOrPlan: n });
                })(g, r),
                image: (0, t.jsx)(f, {
                    guild: o,
                    banner: a
                })
            },
            perkIntro: u.NW.string(u.t.ZuItcH),
            perks: r ? (0, s.zC)() : (0, s.XO)()
        });
}
