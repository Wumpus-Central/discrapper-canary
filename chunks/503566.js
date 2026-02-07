"use strict";
n.d(t, { _: () => x });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(551262),
    r = n(986268),
    a = n(473145),
    o = n(631305),
    d = n(874864),
    c = n(652215),
    u = n(985018),
    g = n(227800);
function m(e) {
    let { guild: t, banner: n } = e;
    return (0, i.jsx)("div", {
        className: g.C1,
        style: { backgroundImage: `url(${n}` },
        children: (0, i.jsxs)("div", {
            className: g.F,
            children: [
                (0, i.jsx)(r.A, { guild: t, isBannerVisible: !0 }),
                (0, i.jsx)(s.Heading, { className: g.J5, variant: "heading-md/semibold", children: t.name }),
                (0, i.jsx)(l.A, { className: g.Wm, open: !1 }),
            ],
        }),
    });
}
function x(e) {
    let { analyticsLocations: t, analyticsLocation: n, guild: s, isGIF: l, banner: r } = e,
        g = l ? (0, a.Ys)(c.GuildFeatures.ANIMATED_BANNER) : (0, a.Ys)(c.GuildFeatures.BANNER);
    if (null != g) {
        let e;
        (0, o.A)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: s,
            headerProps: {
                title: u.intl.string(u.t["rv2H+1"]),
                subtitle:
                    ((e = (0, a.gb)(g)),
                    l
                        ? u.intl.formatToPlainString(u.t["TR/Uyt"], { targetLevelOrPlan: e })
                        : u.intl.formatToPlainString(u.t.B253V6, { targetLevelOrPlan: e })),
                image: (0, i.jsx)(m, { guild: s, banner: r }),
            },
            perkIntro: u.intl.string(u.t.ZuItcI),
            perks: l ? (0, d.Pf)() : (0, d.QR)(),
        });
    }
}
