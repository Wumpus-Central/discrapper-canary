var l = i(477900),
    e = i(582128),
    n = i(503698),
    t = i.n(n),
    c = i(408278),
    r = i(192308),
    d = i(939249),
    o = i(834730),
    m = i(789645),
    x = i(688810),
    h = i(875149),
    u = i(586428),
    j = i(792996),
    b = i(554937),
    v = i(519636);
i.d(
    s,
    {},
    {
        A: function (a) {
            let {
                    guildId: s,
                    variant: n = "admin",
                    className: k,
                    analyticsLocation: N,
                    videoPlacement: g = "sidebar",
                    onDismiss: p,
                } = a,
                { analyticsLocations: y } = (0, x.Ay)(),
                A = e.useCallback(() => {
                    (0, r.mM)(async () => {
                        let { default: a } = await Promise.all([i.e(601031), i.e(25829)]).then(i.bind(i, 235780));
                        return (i) =>
                            (0, l.jsx)(a, {
                                ...i,
                                guildId: s,
                                analyticsLocation: N,
                                videoPlacement: g,
                                sourceAnalyticsLocations: y,
                            });
                    });
                }, [N, y, s, g]);
            return "member" === n
                ? (0, l.jsxs)(d.D, {
                      className: t()(b.iR, k),
                      onClick: A,
                      "aria-label": j.intl.string(u.default["103aY+"]),
                      children: [
                          (0, l.jsx)("img", { alt: "", className: b.xn, src: v.A }),
                          (0, l.jsx)("div", { className: b.b1 }),
                          (0, l.jsx)("div", {
                              className: b.i5,
                              children: (0, l.jsx)(o.E, {
                                  variant: "body-sm/semibold",
                                  color: "text-overlay-light",
                                  children: j.intl.string(u.default.diMhWc),
                              }),
                          }),
                          (0, l.jsx)(h.A, { className: b.Rr, inactive: !0, renderLinkComponent: () => null }),
                      ],
                  })
                : (0, l.jsxs)("div", {
                      className: b.kL,
                      children: [
                          (0, l.jsx)("div", {
                              className: t()(b.X8, "theme-dark"),
                              children: (0, l.jsx)(c.K, {
                                  variant: "icon-only",
                                  size: "md",
                                  "aria-label": j.intl.string(j.t.WAI6xu),
                                  onClick: p,
                                  icon: m.P,
                              }),
                          }),
                          (0, l.jsxs)(d.D, {
                              className: b.iT,
                              onClick: A,
                              "aria-label": j.intl.string(u.default["103aY+"]),
                              children: [
                                  (0, l.jsx)("img", { alt: "", className: b.xn, src: v.A }),
                                  (0, l.jsx)("div", { className: b.TQ }),
                                  (0, l.jsx)(h.A, { className: b.Rr, inactive: !0, renderLinkComponent: () => null }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: b.FS,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      variant: "body-md/semibold",
                                      color: "text-strong",
                                      children: j.intl.string(u.default.diMhWc),
                                  }),
                                  (0, l.jsx)(o.E, {
                                      variant: "body-sm/normal",
                                      children: j.intl.string(u.default.pycxTr),
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    },
);
