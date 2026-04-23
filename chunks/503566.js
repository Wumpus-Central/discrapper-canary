n.d(t, { _: () => h });
var i = n(627968);
n(64700);
var l = n(534514),
    s = n(551262),
    r = n(986268),
    a = n(473145),
    o = n(631305),
    d = n(874864),
    c = n(652215),
    u = n(985018),
    m = n(660929);
function g(e) {
    let { guild: t, banner: n } = e;
    return (0, i.jsx)("div", {
        className: m.C1,
        style: { backgroundImage: `url(${n}` },
        children: (0, i.jsxs)("div", {
            className: m.F,
            children: [
                (0, i.jsx)(r.A, { guild: t, isBannerVisible: !0 }),
                (0, i.jsx)(l.D, { className: m.J5, variant: "heading-md/semibold", children: t.name }),
                (0, i.jsx)(s.A, { className: m.Wm, open: !1 }),
            ],
        }),
    });
}
function h(e) {
    let { analyticsLocations: t, analyticsLocation: n, guild: l, isGIF: s, banner: r } = e,
        m = s ? (0, a.Ys)(c.GuildFeatures.ANIMATED_BANNER) : (0, a.Ys)(c.GuildFeatures.BANNER);
    if (null != m) {
        let e;
        (0, o.A)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: l,
            headerProps: {
                title: u.intl.string(u.t["rv2H+1"]),
                subtitle:
                    ((e = (0, a.gb)(m)),
                    s
                        ? u.intl.formatToPlainString(u.t["TR/Uyt"], { targetLevelOrPlan: e })
                        : u.intl.formatToPlainString(u.t.B253V6, { targetLevelOrPlan: e })),
                image: (0, i.jsx)(g, { guild: l, banner: r }),
            },
            perkIntro: u.intl.string(u.t.ZuItcI),
            perks: s ? (0, d.Pf)() : (0, d.QR)(),
        });
    }
}
