t.d(l, { I: () => c });
var n = t(627968),
    s = t(64700),
    a = t(534514),
    i = t(834730),
    r = t(439303),
    o = t(183802),
    d = t(514270);
function c(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: c, analyticsSectionId: u } = e,
        _ = s.useMemo(() => ({ pageSection: u }), [u]);
    return null == l
        ? null
        : (0, n.jsx)(r.E9, {
              newValue: _,
              children: (0, n.jsxs)("div", {
                  className: d.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: d.FS,
                          children: [
                              (0, n.jsx)(a.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(i.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: d.Ui,
                              children: (0, n.jsx)(o.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: o.s.MEDIUM,
                                  analyticsLocations: c,
                              }),
                          }),
                  ],
              }),
          });
}
