n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(65538);
function o(e) {
    let { badgeCopy: t, acknowledgedBadgeCopy: n, isDismissed: i } = e;
    return i
        ? (0, r.jsxs)("div", {
              className: l()(s.premiumBadge, s.premiumAcknowledgedBadge),
              children: [
                  (0, r.jsx)(a.T39, {
                      size: "custom",
                      width: 10,
                      height: 10,
                      color: "currentColor",
                      className: s.BadgeClockIcon,
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: n,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: l()(s.premiumBadge, s.premiumUnacknowledgedBadge),
              children: (0, r.jsx)(a.Text, {
                  variant: "eyebrow",
                  className: s.premiumUnacknowledgedBadgeCopy,
                  children: t,
              }),
          });
}
