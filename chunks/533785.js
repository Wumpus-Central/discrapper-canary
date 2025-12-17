t.d(n, { t: () => d }), t(953529);
var l = t(54381),
    i = t(473749),
    a = t(481060),
    o = t(590961),
    s = t(840724),
    r = t(746749);
function d(e) {
    let { leaderboard: n, skuId: t, applicationId: d, guildId: c, analyticsLocations: u, analyticsSectionId: f } = e,
        g = i.useMemo(() => ({ pageSection: f }), [f]);
    return null == n
        ? null
        : (0, l.jsx)(o.hL, {
              newValue: g,
              children: (0, l.jsxs)("div", {
                  className: r.container,
                  children: [
                      (0, l.jsxs)("div", {
                          className: r.textContainer,
                          children: [
                              (0, l.jsx)(a.Heading, {
                                  variant: "display-lg",
                                  color: "text-strong",
                                  children: n.title,
                              }),
                              (0, l.jsx)(a.Text, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: n.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, l.jsx)("div", {
                              className: r.cardContainer,
                              children: (0, l.jsx)(s.ZP, {
                                  positionInSection: 0,
                                  applicationId: d,
                                  skuId: t,
                                  variant: s.Zp.MEDIUM,
                                  guildId: c,
                                  analyticsLocations: u,
                              }),
                          }),
                  ],
              }),
          });
}
