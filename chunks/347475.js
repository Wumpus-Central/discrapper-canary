n.d(t, { Z: () => p });
var i = n(951288);
n(647438);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(481060),
    o = n(906732),
    c = n(736519),
    d = n(388032),
    u = n(602062),
    m = n(568147);
let p = (e) => {
    let { className: t, location: n, analyticsLocation: r } = e,
        { analyticsLocations: p } = (0, o.ZP)(n);
    return (0, i.jsx)(o.Gt, {
        value: p,
        children: (0, i.jsxs)("div", {
            className: s()(u.container, t),
            children: [
                (0, i.jsxs)("div", {
                    className: u.textContainer,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: "heading-lg/extrabold",
                            className: u.heading,
                            children: d.intl.string(d.t.Ve9Ge3),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            children: d.intl.string(d.t.yQ06u7),
                        }),
                        (0, i.jsx)(c.Z, {
                            className: u.giftCardButton,
                            textOptions: {
                                textOverride: d.intl.string(d.t.Ve9Ge3),
                                textClassName: u.giftButtonCTA,
                            },
                            color: a.zx.Colors.CUSTOM,
                            premiumModalAnalyticsLocation: r,
                        }),
                    ],
                }),
                (0, i.jsx)("img", {
                    src: m,
                    className: u.bannerImage,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
