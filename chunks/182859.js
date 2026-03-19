n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(732955),
    o = n(397927),
    d = n(688810),
    c = n(893598),
    u = n(136708),
    _ = n(985018),
    m = n(636405),
    g = n(519636);
function A(e) {
    let {
            guildId: t,
            variant: l = "admin",
            className: A,
            analyticsLocation: x,
            videoPlacement: h = "sidebar",
            onDismiss: p,
        } = e,
        { analyticsLocations: T } = (0, d.Ay)(),
        E = s.useCallback(() => {
            (0, o.mMO)(async () => {
                let { default: e } = await n.e("64251").then(n.bind(n, 430326));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t,
                        analyticsLocation: x,
                        videoPlacement: h,
                        sourceAnalyticsLocations: T,
                    });
            });
        }, [x, T, t, h]);
    return "member" === l
        ? (0, i.jsxs)(o.DUT, {
              className: a()(m.iR, A),
              onClick: E,
              "aria-label": _.intl.string(u.default["103aY+"]),
              children: [
                  (0, i.jsx)("img", { alt: "", className: m.xn, src: g.A }),
                  (0, i.jsx)("div", { className: m.b1 }),
                  (0, i.jsx)("div", {
                      className: m.i5,
                      children: (0, i.jsx)(o.Text, {
                          variant: "text-xs/semibold",
                          color: "always-white",
                          children: _.intl.string(u.default.diMhWc),
                      }),
                  }),
                  (0, i.jsx)(c.A, { className: m.Rr, inactive: !0, renderLinkComponent: () => null }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, i.jsx)("div", {
                      className: a()(m.X8, "theme-dark"),
                      children: (0, i.jsx)(r.K0, {
                          variant: "icon-only",
                          size: "md",
                          "aria-label": _.intl.string(_.t.WAI6xu),
                          onClick: p,
                          icon: o.PGe,
                      }),
                  }),
                  (0, i.jsxs)(o.DUT, {
                      className: m.iT,
                      onClick: E,
                      "aria-label": _.intl.string(u.default["103aY+"]),
                      children: [
                          (0, i.jsx)("img", { alt: "", className: m.xn, src: g.A }),
                          (0, i.jsx)("div", { className: m.TQ }),
                          (0, i.jsx)(c.A, { className: m.Rr, inactive: !0, renderLinkComponent: () => null }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: m.FS,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: _.intl.string(u.default.diMhWc),
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: _.intl.string(u.default.pycxTr),
                          }),
                      ],
                  }),
              ],
          });
}
