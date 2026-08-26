s.d(i, { A: () => k });
var e = s(477900),
    l = s(582128),
    t = s(503698),
    n = s.n(t),
    r = s(408278),
    c = s(192308),
    d = s(939249),
    o = s(834730),
    m = s(789645),
    x = s(688810),
    u = s(37537),
    h = s(821209),
    j = s(641641),
    v = s(375708),
    b = s(554937),
    g = s(519636);
function k(a) {
    let {
            guildId: i,
            variant: t = "admin",
            className: k,
            analyticsLocation: N,
            videoPlacement: p = "sidebar",
            onDismiss: C,
        } = a,
        { analyticsLocations: y } = (0, x.Ay)(),
        A = (0, u.c)("BoostingMarketingVideoCard"),
        f = l.useCallback(() => {
            (0, c.openModalLazy)(async () => {
                let { default: a } = await Promise.all([s.e("601031"), s.e("585810")]).then(s.bind(s, 872233));
                return (s) =>
                    (0, e.jsx)(a, {
                        ...s,
                        guildId: i,
                        analyticsLocation: N,
                        videoPlacement: p,
                        sourceAnalyticsLocations: y,
                    });
            });
        }, [N, y, i, p]);
    return "member" === t
        ? (0, e.jsxs)(d.D, {
              className: n()(b.iR, k),
              onClick: f,
              "aria-label": v.intl.string(j.default["103aY+"]),
              children: [
                  (0, e.jsx)("img", { alt: "", className: b.xn, src: g.A }),
                  (0, e.jsx)("div", { className: b.b1 }),
                  (0, e.jsx)("div", {
                      className: b.i5,
                      children: (0, e.jsx)(o.E, {
                          variant: A ? "text-sm/semibold" : "text-xs/semibold",
                          color: "text-overlay-light",
                          children: v.intl.string(j.default.diMhWc),
                      }),
                  }),
                  (0, e.jsx)(h.A, { className: b.Rr, inactive: !0, renderLinkComponent: () => null }),
              ],
          })
        : (0, e.jsxs)("div", {
              className: b.kL,
              children: [
                  (0, e.jsx)("div", {
                      className: n()(b.X8, "theme-dark"),
                      children: (0, e.jsx)(r.K, {
                          variant: "icon-only",
                          size: "md",
                          "aria-label": v.intl.string(v.t.WAI6xu),
                          onClick: C,
                          icon: m.P,
                      }),
                  }),
                  (0, e.jsxs)(d.D, {
                      className: b.iT,
                      onClick: f,
                      "aria-label": v.intl.string(j.default["103aY+"]),
                      children: [
                          (0, e.jsx)("img", { alt: "", className: b.xn, src: g.A }),
                          (0, e.jsx)("div", { className: b.TQ }),
                          (0, e.jsx)(h.A, { className: b.Rr, inactive: !0, renderLinkComponent: () => null }),
                      ],
                  }),
                  (0, e.jsxs)("div", {
                      className: b.FS,
                      children: [
                          (0, e.jsx)(o.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: v.intl.string(j.default.diMhWc),
                          }),
                          (0, e.jsx)(o.E, {
                              variant: A ? "text-sm/normal" : "text-sm/medium",
                              color: A ? void 0 : "text-muted",
                              children: v.intl.string(j.default.pycxTr),
                          }),
                      ],
                  }),
              ],
          });
}
