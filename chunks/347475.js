n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(906732),
    c = n(47280),
    u = n(736519),
    d = n(117791),
    f = n(388032),
    _ = n(602062),
    p = n(867038),
    h = n(568147),
    m = n(373425);
let g = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        g = (0, c.ZP)({ location: "GiftNitro" }),
        { analyticsLocations: E } = (0, l.ZP)(n),
        b = g ? p : _;
    return (0, r.jsx)(l.Gt, {
        value: E,
        children: (0, r.jsxs)("div", {
            className: a()(b.container, t),
            children: [
                (0, r.jsxs)("div", {
                    className: b.textContainer,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: "heading-lg/extrabold",
                            className: b.heading,
                            children: f.intl.string(f.t.Ve9Ge3),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            children: f.intl.string(f.t.yQ06u7),
                        }),
                        g
                            ? (0, r.jsx)("div", {
                                  className: p.giftButtonContainer,
                                  children: (0, r.jsx)(d.Z, {
                                      buttonTextOverride: f.intl.string(f.t.Ve9Ge3),
                                      premiumModalAnalyticsLocation: i,
                                      variant: "secondary",
                                  }),
                              })
                            : (0, r.jsx)(u.Z, {
                                  className: _.giftCardButton,
                                  textOptions: {
                                      textOverride: f.intl.string(f.t.Ve9Ge3),
                                      textClassName: _.giftButtonCTA,
                                  },
                                  color: o.zx.Colors.CUSTOM,
                                  premiumModalAnalyticsLocation: i,
                              }),
                    ],
                }),
                (0, r.jsx)("img", {
                    src: g ? m.Z : h,
                    className: b.bannerImage,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
