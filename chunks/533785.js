t.d(n, { t: () => d }), t(953529);
var l = t(54381),
    i = t(473749),
    a = t(481060),
    o = t(590961),
    s = t(840724),
    r = t(661009);
function d(e) {
    let { leaderboard: n, skuId: t, applicationId: d, guildId: c, analyticsLocations: u, analyticsSectionId: g } = e,
        p = i.useMemo(() => ({ pageSection: g }), [g]);
    return null == n
        ? null
        : (0, l.jsx)(o.hL, {
              newValue: p,
              children: (0, l.jsxs)("div", {
                  className: r.container,
                  children: [
                      (0, l.jsxs)("div", {
                          className: r.textContainer,
                          children: [
                              (0, l.jsx)(a.Heading, {
                                  variant: "display-lg",
                                  color: "text-primary",
                                  children: n.title,
                              }),
                              (0, l.jsx)(a.Text, {
                                  variant: "text-lg/semibold",
                                  color: "text-secondary",
                                  children: n.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, l.jsx)("div", {
                              className: r.cardContainer,
                              children: (0, l.jsx)(s.C, {
                                  positionInSection: 0,
                                  applicationId: d,
                                  skuId: t,
                                  variant: s.Z.MEDIUM,
                                  guildId: c,
                                  analyticsLocations: u,
                              }),
                          }),
                  ],
              }),
          });
}
