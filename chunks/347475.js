n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(906732),
    c = n(283066),
    u = n(736519),
    d = n(117791),
    f = n(388032),
    _ = n(602062),
    p = n(867038),
    h = n(568147),
    m = n(373425);
let g = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        g = (0, c.Z)({ location: "GiftNitro" }),
        { analyticsLocations: E } = (0, l.ZP)(n);
    return g
        ? (0, r.jsx)(l.Gt, {
              value: E,
              children: (0, r.jsxs)(s.$1m, {
                  className: a()(p.container, p.gradientBackground, t),
                  color: "purple",
                  children: [
                      (0, r.jsxs)("div", {
                          className: p.textContainer,
                          children: [
                              (0, r.jsx)(s.Heading, {
                                  variant: "heading-xxl/bold",
                                  className: p.heading,
                                  children: f.intl.string(f.t.Ve9Ge6),
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  children: f.intl.string(f.t.yQ06u1),
                              }),
                              (0, r.jsx)("div", {
                                  className: p.giftButtonContainer,
                                  children: (0, r.jsx)(d.Z, {
                                      buttonTextOverride: f.intl.string(f.t.Ve9Ge6),
                                      premiumModalAnalyticsLocation: i,
                                      variant: "secondary",
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("img", {
                          src: m.Z,
                          className: p.bannerImage,
                          alt: "gift nitro banner",
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(l.Gt, {
              value: E,
              children: (0, r.jsxs)("div", {
                  className: a()(_.container, t),
                  children: [
                      (0, r.jsxs)("div", {
                          className: _.textContainer,
                          children: [
                              (0, r.jsx)(s.Heading, {
                                  variant: "heading-lg/extrabold",
                                  className: _.heading,
                                  children: f.intl.string(f.t.Ve9Ge6),
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-sm/medium",
                                  children: f.intl.string(f.t.yQ06u1),
                              }),
                              (0, r.jsx)(u.Z, {
                                  className: _.giftCardButton,
                                  textOptions: {
                                      textOverride: f.intl.string(f.t.Ve9Ge6),
                                      textClassName: _.giftButtonCTA,
                                  },
                                  color: o.zx.Colors.CUSTOM,
                                  premiumModalAnalyticsLocation: i,
                              }),
                          ],
                      }),
                      (0, r.jsx)("img", {
                          src: h,
                          className: _.bannerImage,
                          alt: "gift nitro banner",
                      }),
                  ],
              }),
          });
};
