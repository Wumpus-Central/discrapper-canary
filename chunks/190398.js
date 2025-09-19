n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(704215),
    s = n(481060),
    c = n(266454),
    u = n(626135),
    d = n(981631),
    p = n(388032),
    f = n(861509);
function h() {
    let e = (0, c.zu)(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_BADGE);
    return (i.useEffect(() => {
        u.default.track(d.rMx.NITRO_TAB_BADGE_SHOWN, { type: "September 2025 Marketing Moment Nitro Tab Badge" });
    }, []),
    e)
        ? (0, r.jsxs)("div", {
              className: a()(f.premiumTrialBadge, f.premiumTrialAcknowledgedBadge, {}),
              children: [
                  (0, r.jsx)(s.T39, {
                      size: "custom",
                      width: 14,
                      height: 14,
                      color: "currentColor",
                      className: f.clockIcon,
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: p.intl.string(p.t.OS9KPj),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: a()(f.premiumTrialBadge, f.backgroundGradient),
              children: (0, r.jsx)(s.Text, {
                  variant: "eyebrow",
                  color: "always-white",
                  children: p.intl.string(p.t.OS9KPj),
              }),
          });
}
