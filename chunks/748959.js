t.d(l, { I: () => o });
var n = t(627968),
    s = t(64700),
    a = t(397927),
    i = t(439303),
    d = t(183802),
    r = t(963879);
function o(e) {
    let { leaderboard: l, skuId: t, applicationId: o, guildId: c, analyticsLocations: u, analyticsSectionId: g } = e,
        _ = s.useMemo(() => ({ pageSection: g }), [g]);
    return null == l
        ? null
        : (0, n.jsx)(i.E9, {
              newValue: _,
              children: (0, n.jsxs)("div", {
                  className: r.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: r.FS,
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
                              className: r.Ui,
                              children: (0, n.jsx)(d.A, {
                                  positionInSection: 0,
                                  applicationId: o,
                                  skuId: t,
                                  variant: d.s.MEDIUM,
                                  guildId: c,
                                  analyticsLocations: u,
                              }),
                          }),
                  ],
              }),
          });
}
