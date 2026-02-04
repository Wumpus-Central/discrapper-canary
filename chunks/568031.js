n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(421380),
    a = n(397927),
    o = n(688810),
    c = n(170887),
    d = n(194509),
    u = n(65470),
    _ = n(985018),
    p = n(695195),
    m = n(571816),
    g = n(584386),
    A = n(182645);
let f = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        f = (0, c.A)({
            location: "GiftNitro",
        }),
        { analyticsLocations: b } = (0, o.Ay)(n);
    return f
        ? (0, r.jsx)(o.f5, {
              value: b,
              children: (0, r.jsxs)(a.hLv, {
                  className: l()(m.kL, m.pm, t),
                  color: "purple",
                  children: [
                      (0, r.jsxs)("div", {
                          className: m.FS,
                          children: [
                              (0, r.jsx)(a.Heading, {
                                  variant: "heading-xxl/bold",
                                  className: m.R_,
                                  children: _.intl.string(_.t.Ve9Ge6),
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/medium",
                                  children: _.intl.string(_.t.yQ06u1),
                              }),
                              (0, r.jsx)("div", {
                                  className: m.SB,
                                  children: (0, r.jsx)(u.A, {
                                      buttonTextOverride: _.intl.string(_.t.Ve9Ge6),
                                      premiumModalAnalyticsLocation: i,
                                      variant: "secondary",
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("img", {
                          src: A.A,
                          className: m._e,
                          alt: "gift nitro banner",
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(o.f5, {
              value: b,
              children: (0, r.jsxs)("div", {
                  className: l()(p.kL, t),
                  children: [
                      (0, r.jsxs)("div", {
                          className: p.FS,
                          children: [
                              (0, r.jsx)(a.Heading, {
                                  variant: "heading-lg/extrabold",
                                  className: p.R_,
                                  children: _.intl.string(_.t.Ve9Ge6),
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  children: _.intl.string(_.t.yQ06u1),
                              }),
                              (0, r.jsx)(d.A, {
                                  className: p.Tp,
                                  textOptions: {
                                      textOverride: _.intl.string(_.t.Ve9Ge6),
                                      textClassName: p.VV,
                                  },
                                  color: s.$n.Colors.CUSTOM,
                                  premiumModalAnalyticsLocation: i,
                              }),
                          ],
                      }),
                      (0, r.jsx)("img", {
                          src: g,
                          className: p._e,
                          alt: "gift nitro banner",
                      }),
                  ],
              }),
          });
};
