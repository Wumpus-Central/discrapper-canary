n.d(i, { c: () => N });
var o = n(200651);
n(192379);
var t = n(481060),
    a = n(269128),
    l = n(358555),
    r = n(267642),
    c = n(26323),
    s = n(30513),
    d = n(981631),
    u = n(388032),
    _ = n(197930);
function g(e) {
    let { guild: i, banner: n } = e;
    return (0, o.jsx)('div', {
        className: _.guildBanner,
        style: { backgroundImage: 'url('.concat(n) },
        children: (0, o.jsxs)('div', {
            className: _.guildHeader,
            children: [
                (0, o.jsx)(l.Z, {
                    guild: i,
                    isBannerVisible: !0
                }),
                (0, o.jsx)(t.X6q, {
                    className: _.guildName,
                    variant: 'heading-md/semibold',
                    children: i.toString()
                }),
                (0, o.jsx)(a.Z, {
                    className: _.dropdown,
                    open: !1
                })
            ]
        })
    });
}
function N(e) {
    let { analyticsLocations: i, analyticsLocation: n, guild: t, isGIF: a, banner: l } = e,
        _ = a ? (0, r._p)(d.oNc.ANIMATED_BANNER) : (0, r._p)(d.oNc.BANNER);
    null != _ &&
        (0, c.Z)({
            analyticsLocations: i,
            analyticsSourceLocation: n,
            guild: t,
            headerProps: {
                title: u.intl.string(u.t['rv2H+/']),
                subtitle: (function (e, i) {
                    let n = (0, r.nW)(e);
                    return i ? u.intl.formatToPlainString(u.t['TR/Uys'], { targetLevelOrPlan: n }) : u.intl.formatToPlainString(u.t.B253V1, { targetLevelOrPlan: n });
                })(_, a),
                image: (0, o.jsx)(g, {
                    guild: t,
                    banner: l
                })
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: a ? (0, s.zC)() : (0, s.XO)()
        });
}
