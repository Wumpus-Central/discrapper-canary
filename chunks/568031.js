n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(421380),
    l = n(397927),
    o = n(688810),
    c = n(170887),
    d = n(194509),
    u = n(65470),
    _ = n(985018),
    m = n(695195),
    A = n(571816),
    g = n(584386),
    E = n(182645);
let h = (e) => {
    let { className: t, location: n, analyticsLocation: s } = e,
        h = (0, c.A)({ location: "GiftNitro" }),
        { analyticsLocations: p } = (0, o.Ay)(n);
    return h
        ? (0, i.jsx)(o.f5, {
              value: p,
              children: (0, i.jsxs)(l.hLv, {
                  className: r()(A.kL, A.pm, t),
                  color: "purple",
                  children: [
                      (0, i.jsxs)("div", {
                          className: A.FS,
                          children: [
                              (0, i.jsx)(l.Heading, {
                                  variant: "heading-xxl/bold",
                                  className: A.R_,
                                  children: _.intl.string(_.t.Ve9Ge6),
                              }),
                              (0, i.jsx)(l.Text, { variant: "text-md/medium", children: _.intl.string(_.t.yQ06u1) }),
                              (0, i.jsx)("div", {
                                  className: A.SB,
                                  children: (0, i.jsx)(u.A, {
                                      buttonTextOverride: _.intl.string(_.t.Ve9Ge6),
                                      premiumModalAnalyticsLocation: s,
                                      variant: "secondary",
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("img", { src: E.A, className: A._e, alt: "gift nitro banner" }),
                  ],
              }),
          })
        : (0, i.jsx)(o.f5, {
              value: p,
              children: (0, i.jsxs)("div", {
                  className: r()(m.kL, t),
                  children: [
                      (0, i.jsxs)("div", {
                          className: m.FS,
                          children: [
                              (0, i.jsx)(l.Heading, {
                                  variant: "heading-lg/extrabold",
                                  className: m.R_,
                                  children: _.intl.string(_.t.Ve9Ge6),
                              }),
                              (0, i.jsx)(l.Text, { variant: "text-sm/medium", children: _.intl.string(_.t.yQ06u1) }),
                              (0, i.jsx)(d.A, {
                                  className: m.Tp,
                                  textOptions: { textOverride: _.intl.string(_.t.Ve9Ge6), textClassName: m.VV },
                                  color: a.$n.Colors.CUSTOM,
                                  premiumModalAnalyticsLocation: s,
                              }),
                          ],
                      }),
                      (0, i.jsx)("img", { src: g, className: m._e, alt: "gift nitro banner" }),
                  ],
              }),
          });
};
