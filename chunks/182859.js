n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(408278),
    o = n(192308),
    d = n(939249),
    u = n(834730),
    c = n(789645),
    g = n(688810),
    m = n(893598),
    _ = n(853513),
    A = n(985018),
    h = n(437326),
    p = n(519636);
function x(e) {
    let {
            guildId: t,
            variant: l = "admin",
            className: x,
            analyticsLocation: E,
            videoPlacement: T = "sidebar",
            onDismiss: S,
        } = e,
        { analyticsLocations: f } = (0, g.Ay)(),
        b = s.useCallback(() => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e("64251").then(n.bind(n, 430326));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t,
                        analyticsLocation: E,
                        videoPlacement: T,
                        sourceAnalyticsLocations: f,
                    });
            });
        }, [E, f, t, T]);
    return "member" === l
        ? (0, i.jsxs)(d.D, {
              className: a()(h.iR, x),
              onClick: b,
              "aria-label": A.intl.string(_.default["103aY+"]),
              children: [
                  (0, i.jsx)("img", { alt: "", className: h.xn, src: p.A }),
                  (0, i.jsx)("div", { className: h.b1 }),
                  (0, i.jsx)("div", {
                      className: h.i5,
                      children: (0, i.jsx)(u.E, {
                          variant: "text-xs/semibold",
                          color: "always-white",
                          children: A.intl.string(_.default.diMhWc),
                      }),
                  }),
                  (0, i.jsx)(m.A, { className: h.Rr, inactive: !0, renderLinkComponent: () => null }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, i.jsx)("div", {
                      className: a()(h.X8, "theme-dark"),
                      children: (0, i.jsx)(r.K, {
                          variant: "icon-only",
                          size: "md",
                          "aria-label": A.intl.string(A.t.WAI6xu),
                          onClick: S,
                          icon: c.P,
                      }),
                  }),
                  (0, i.jsxs)(d.D, {
                      className: h.iT,
                      onClick: b,
                      "aria-label": A.intl.string(_.default["103aY+"]),
                      children: [
                          (0, i.jsx)("img", { alt: "", className: h.xn, src: p.A }),
                          (0, i.jsx)("div", { className: h.TQ }),
                          (0, i.jsx)(m.A, { className: h.Rr, inactive: !0, renderLinkComponent: () => null }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: h.FS,
                      children: [
                          (0, i.jsx)(u.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: A.intl.string(_.default.diMhWc),
                          }),
                          (0, i.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: A.intl.string(_.default.pycxTr),
                          }),
                      ],
                  }),
              ],
          });
}
