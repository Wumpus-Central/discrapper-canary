s.d(i, { A: () => k });
var e = s(627968),
    l = s(64700),
    n = s(503698),
    t = s.n(n),
    c = s(408278),
    r = s(192308),
    d = s(939249),
    o = s(834730),
    m = s(789645),
    x = s(688810),
    u = s(821209),
    h = s(853513),
    j = s(375708),
    v = s(437326),
    b = s(519636);
function k(a) {
    let {
            guildId: i,
            variant: n = "admin",
            className: k,
            analyticsLocation: N,
            videoPlacement: g = "sidebar",
            onDismiss: p,
        } = a,
        { analyticsLocations: y } = (0, x.Ay)(),
        A = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: a } = await Promise.all([s.e("6836"), s.e("85810")]).then(s.bind(s, 872233));
                return (s) =>
                    (0, e.jsx)(a, {
                        ...s,
                        guildId: i,
                        analyticsLocation: N,
                        videoPlacement: g,
                        sourceAnalyticsLocations: y,
                    });
            });
        }, [N, y, i, g]);
    return "member" === n
        ? (0, e.jsxs)(d.D, {
              className: t()(v.iR, k),
              onClick: A,
              "aria-label": j.intl.string(h.default["103aY+"]),
              children: [
                  (0, e.jsx)("img", { alt: "", className: v.xn, src: b.A }),
                  (0, e.jsx)("div", { className: v.b1 }),
                  (0, e.jsx)("div", {
                      className: v.i5,
                      children: (0, e.jsx)(o.E, {
                          variant: "text-xs/semibold",
                          color: "text-overlay-light",
                          children: j.intl.string(h.default.diMhWc),
                      }),
                  }),
                  (0, e.jsx)(u.A, { className: v.Rr, inactive: !0, renderLinkComponent: () => null }),
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
                      "aria-label": j.intl.string(h.default["103aY+"]),
                      children: [
                          (0, e.jsx)("img", { alt: "", className: v.xn, src: b.A }),
                          (0, e.jsx)("div", { className: v.TQ }),
                          (0, e.jsx)(u.A, { className: v.Rr, inactive: !0, renderLinkComponent: () => null }),
                      ],
                  }),
                  (0, e.jsxs)("div", {
                      className: v.FS,
                      children: [
                          (0, e.jsx)(o.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: j.intl.string(h.default.diMhWc),
                          }),
                          (0, e.jsx)(o.E, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: j.intl.string(h.default.pycxTr),
                          }),
                      ],
                  }),
              ],
          });
}
