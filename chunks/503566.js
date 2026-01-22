n.d(t, {
    _: () => b,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(551262),
    s = n(986268),
    a = n(473145),
    c = n(631305),
    o = n(874864),
    d = n(652215),
    u = n(985018),
    f = n(227800);

function g(e) {
    let { guild: t, banner: n } = e;
    return (0, r.jsx)("div", {
        className: f.C1,
        style: {
            backgroundImage: "url(".concat(n),
        },
        children: (0, r.jsxs)("div", {
            className: f.F,
            children: [
                (0, r.jsx)(s.A, {
                    guild: t,
                    isBannerVisible: !0,
                }),
                (0, r.jsx)(i.Heading, {
                    className: f.J5,
                    variant: "heading-md/semibold",
                    children: t.name,
                }),
                (0, r.jsx)(l.A, {
                    className: f.Wm,
                    open: !1,
                }),
            ],
        }),
    });
}

function b(e) {
    let { analyticsLocations: t, analyticsLocation: n, guild: i, isGIF: l, banner: s } = e,
        f = l ? (0, a.Ys)(d.GuildFeatures.ANIMATED_BANNER) : (0, a.Ys)(d.GuildFeatures.BANNER);
    if (null != f) {
        let e;
        (0, c.A)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
                title: u.intl.string(u.t["rv2H+1"]),
                subtitle:
                    ((e = (0, a.gb)(f)),
                    l
                        ? u.intl.formatToPlainString(u.t["TR/Uyt"], {
                              targetLevelOrPlan: e,
                          })
                        : u.intl.formatToPlainString(u.t.B253V6, {
                              targetLevelOrPlan: e,
                          })),
                image: (0, r.jsx)(g, {
                    guild: i,
                    banner: s,
                }),
            },
            perkIntro: u.intl.string(u.t.ZuItcI),
            perks: l ? (0, o.Pf)() : (0, o.QR)(),
        });
    }
}
