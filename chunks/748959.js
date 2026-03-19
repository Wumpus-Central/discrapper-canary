t.d(l, { I: () => d });
var n = t(627968),
    s = t(64700),
    a = t(397927),
    i = t(439303),
    r = t(183802),
    o = t(824049);
function d(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: d, analyticsSectionId: c } = e,
        u = s.useMemo(() => ({ pageSection: c }), [c]);
    return null == l
        ? null
        : (0, n.jsx)(i.E9, {
              newValue: u,
              children: (0, n.jsxs)("div", {
                  className: o.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: o.FS,
                          children: [
                              (0, n.jsx)(a.Heading, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(a.Text, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: o.Ui,
                              children: (0, n.jsx)(r.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: r.s.MEDIUM,
                                  analyticsLocations: d,
                              }),
                          }),
                  ],
              }),
          });
}
