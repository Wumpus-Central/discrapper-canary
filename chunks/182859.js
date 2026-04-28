i.d(s, { A: () => k });
var e = i(627968),
    l = i(64700),
    n = i(503698),
    t = i.n(n),
    c = i(408278),
    r = i(192308),
    d = i(939249),
    o = i(834730),
    m = i(789645),
    x = i(688810),
    u = i(821209),
    h = i(853513),
    j = i(985018),
    v = i(437326),
    b = i(519636);
function k(a) {
    let {
            guildId: s,
            variant: n = "admin",
            className: k,
            analyticsLocation: N,
            videoPlacement: p = "sidebar",
            onDismiss: g,
        } = a,
        { analyticsLocations: y } = (0, x.Ay)(),
        A = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: a } = await Promise.all([i.e("6836"), i.e("85810")]).then(i.bind(i, 872233));
                return (i) =>
                    (0, e.jsx)(a, {
                        ...i,
                        guildId: s,
                        analyticsLocation: N,
                        videoPlacement: p,
                        sourceAnalyticsLocations: y,
                    });
            });
        }, [N, y, s, p]);
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
                          color: "always-white",
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
                          onClick: g,
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
