n.d(t, { S: () => f });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(704215),
    s = n(481060),
    o = n(927359),
    c = n(266454),
    u = n(227140),
    d = n(388032),
    p = n(22373);
function f(e) {
    let { expiresAt: t } = e,
        n = (0, o.ZP)(t, o.aj.SHORT_TIME),
        i = (0, c.zu)(a.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2);
    return "" === n
        ? null
        : ((n = n.toUpperCase()), i)
          ? (0, r.jsxs)("div", {
                className: l()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, {}),
                children: [
                    (0, r.jsx)(s.T39, {
                        size: "custom",
                        width: 14,
                        height: 14,
                        color: "currentColor",
                        className: p.reverseTrialBadgeIcon,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "eyebrow",
                        color: "text-secondary",
                        children: n,
                    }),
                ],
            })
          : (0, r.jsx)(u.Z, {
                copy: d.intl.string(d.t["B66Z+f"]),
                showStars: !1,
            });
}
