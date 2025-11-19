n.d(t, { c: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(269128),
    a = n(358555),
    s = n(267642),
    o = n(26323),
    c = n(30513),
    d = n(981631),
    u = n(388032),
    g = n(124437);
function m(e) {
    let { guild: t, banner: n } = e;
    return (0, r.jsx)("div", {
        className: g.guildBanner,
        style: { backgroundImage: "url(".concat(n) },
        children: (0, r.jsxs)("div", {
            className: g.guildHeader,
            children: [
                (0, r.jsx)(a.Z, {
                    guild: t,
                    isBannerVisible: !0,
                }),
                (0, r.jsx)(i.Heading, {
                    className: g.guildName,
                    variant: "heading-md/semibold",
                    children: t.name,
                }),
                (0, r.jsx)(l.Z, {
                    className: g.dropdown,
                    open: !1,
                }),
            ],
        }),
    });
}
function p(e) {
    let { analyticsLocations: t, analyticsLocation: n, guild: i, isGIF: l, banner: a } = e,
        g = l ? (0, s._p)(d.GuildFeatures.ANIMATED_BANNER) : (0, s._p)(d.GuildFeatures.BANNER);
    null != g &&
        (0, o.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
                title: u.intl.string(u.t["rv2H+1"]),
                subtitle: (function (e, t) {
                    let n = (0, s.nW)(e);
                    return t
                        ? u.intl.formatToPlainString(u.t["TR/Uyt"], { targetLevelOrPlan: n })
                        : u.intl.formatToPlainString(u.t.B253V6, { targetLevelOrPlan: n });
                })(g, l),
                image: (0, r.jsx)(m, {
                    guild: i,
                    banner: a,
                }),
            },
            perkIntro: u.intl.string(u.t.ZuItcI),
            perks: l ? (0, c.zC)() : (0, c.XO)(),
        });
}
