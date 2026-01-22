t.d(l, {
    I: () => o,
}),
    t(228524);
var n = t(627968),
    a = t(64700),
    s = t(397927),
    i = t(439303),
    d = t(183802),
    r = t(963879);

function o(e) {
    let { leaderboard: l, skuId: t, applicationId: o, guildId: c, analyticsLocations: u, analyticsSectionId: f } = e,
        g = a.useMemo(
            () => ({
                pageSection: f,
            }),
            [f],
        );
    return null == l
        ? null
        : (0, n.jsx)(i.E9, {
              newValue: g,
              children: (0, n.jsxs)("div", {
                  className: r.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: r.FS,
                          children: [
                              (0, n.jsx)(s.Heading, {
                                  variant: "display-lg",
                                  color: "text-strong",
                                  children: l.title,
                              }),
                              (0, n.jsx)(s.Text, {
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
