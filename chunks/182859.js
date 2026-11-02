i.d(s, { A: () => k });
var e = i(477900),
    l = i(582128),
    n = i(503698),
    t = i.n(n),
    c = i(408278),
    r = i(192308),
    d = i(939249),
    o = i(834730),
    m = i(789645),
    x = i(688810),
    h = i(821209),
    u = i(959456),
    j = i(105292),
    v = i(554937),
    b = i(519636);
function k(a) {
    let {
            guildId: s,
            variant: n = "admin",
            className: k,
            analyticsLocation: N,
            videoPlacement: g = "sidebar",
            onDismiss: p,
        } = a,
        { analyticsLocations: y } = (0, x.Ay)(),
        A = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: a } = await Promise.all([i.e("601031"), i.e("585810")]).then(i.bind(i, 872233));
                return (i) =>
                    (0, e.jsx)(a, {
                        ...i,
                        guildId: s,
                        analyticsLocation: N,
                        videoPlacement: g,
                        sourceAnalyticsLocations: y,
                    });
            });
        }, [N, y, s, g]);
    return "member" === n
        ? (0, e.jsxs)(d.D, {
              className: t()(v.iR, k),
              onClick: A,
              "aria-label": j.intl.string(u.default["103aY+"]),
              children: [
                  (0, e.jsx)("img", { alt: "", className: v.xn, src: b.A }),
                  (0, e.jsx)("div", { className: v.b1 }),
                  (0, e.jsx)("div", {
                      className: v.i5,
                      children: (0, e.jsx)(o.E, {
                          variant: "text-sm/semibold",
                          color: "text-overlay-light",
                          children: j.intl.string(u.default.diMhWc),
                      }),
                  }),
                  (0, e.jsx)(h.A, { className: v.Rr, inactive: !0, renderLinkComponent: () => null }),
              ],
          })
        : (0, e.jsxs)("div", {
              className: v.kL,
              children: [
                  (0, e.jsx)("div", {
                      className: t()(v.X8, "theme-dark"),
                      children: (0, e.jsx)(c.K, {
                          variant: "icon-only",
                          size: "md",
                          "aria-label": j.intl.string(j.t.WAI6xu),
                          onClick: p,
                          icon: m.P,
                      }),
                  }),
                  (0, e.jsxs)(d.D, {
                      className: v.iT,
                      onClick: A,
                      "aria-label": j.intl.string(u.default["103aY+"]),
                      children: [
                          (0, e.jsx)("img", { alt: "", className: v.xn, src: b.A }),
                          (0, e.jsx)("div", { className: v.TQ }),
                          (0, e.jsx)(h.A, { className: v.Rr, inactive: !0, renderLinkComponent: () => null }),
                      ],
                  }),
                  (0, e.jsxs)("div", {
                      className: v.FS,
                      children: [
                          (0, e.jsx)(o.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: j.intl.string(u.default.diMhWc),
                          }),
                          (0, e.jsx)(o.E, { variant: "text-sm/normal", children: j.intl.string(u.default.pycxTr) }),
                      ],
                  }),
              ],
          });
}
