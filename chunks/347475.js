n.d(t, { Z: () => b });
var i = n(951288);
n(647438);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(481060),
    o = n(906732),
    c = n(47280),
    d = n(736519),
    u = n(117791),
    m = n(388032),
    p = n(602062),
    g = n(867038),
    h = n(568147),
    f = n(373425);
let b = (e) => {
    let { className: t, location: n, analyticsLocation: r } = e,
        b = (0, c.ZP)({ location: "GiftNitro" }),
        { analyticsLocations: x } = (0, o.ZP)(n),
        _ = b ? g : p;
    return (0, i.jsx)(o.Gt, {
        value: x,
        children: (0, i.jsxs)("div", {
            className: s()(_.container, t),
            children: [
                (0, i.jsxs)("div", {
                    className: _.textContainer,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: "heading-lg/extrabold",
                            className: _.heading,
                            children: m.intl.string(m.t.Ve9Ge3),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            children: m.intl.string(m.t.yQ06u7),
                        }),
                        b
                            ? (0, i.jsx)("div", {
                                  className: g.giftButtonContainer,
                                  children: (0, i.jsx)(u.Z, {
                                      buttonTextOverride: m.intl.string(m.t.Ve9Ge3),
                                      premiumModalAnalyticsLocation: r,
                                      variant: "secondary",
                                  }),
                              })
                            : (0, i.jsx)(d.Z, {
                                  className: p.giftCardButton,
                                  textOptions: {
                                      textOverride: m.intl.string(m.t.Ve9Ge3),
                                      textClassName: p.giftButtonCTA,
                                  },
                                  color: a.zx.Colors.CUSTOM,
                                  premiumModalAnalyticsLocation: r,
                              }),
                    ],
                }),
                (0, i.jsx)("img", {
                    src: b ? f.Z : h,
                    className: _.bannerImage,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
