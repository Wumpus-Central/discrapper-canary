n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(990547),
    s = n(79766),
    o = n(481060),
    c = n(213609),
    u = n(65538);
function d(e) {
    let { componentId: t, badgeCopy: n, acknowledgedBadgeCopy: i, isDismissed: d } = e;
    return ((0, c.Z)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: s.I.PREMIUM_TAB,
            component_id: t,
        },
    }),
    d)
        ? (0, r.jsxs)("div", {
              className: l()(u.premiumBadge, u.premiumAcknowledgedBadge),
              children: [
                  (0, r.jsx)(o.T39, {
                      size: "custom",
                      width: 10,
                      height: 10,
                      color: "currentColor",
                      className: u.BadgeClockIcon,
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: i,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: l()(u.premiumBadge, u.premiumUnacknowledgedBadge),
              children: (0, r.jsx)(o.Text, {
                  variant: "eyebrow",
                  className: u.premiumUnacknowledgedBadgeCopy,
                  children: n,
              }),
          });
}
