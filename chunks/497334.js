n.d(t, { S: () => h });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(704215),
    o = n(481060),
    s = n(927359),
    c = n(605236),
    u = n(227140),
    d = n(388032),
    p = n(306544);
function h(e) {
    let { expiresAt: t } = e,
        n = (0, s.ZP)(t, s.aj.SHORT_TIME),
        i = (0, c.un)(a.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2);
    return '' === n
        ? null
        : ((n = n.toUpperCase()), i)
          ? (0, r.jsxs)('div', {
                className: l()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, {}),
                children: [
                    (0, r.jsx)(o.T39, {
                        size: 'custom',
                        width: 14,
                        height: 14,
                        color: 'currentColor',
                        className: p.reverseTrialBadgeIcon
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'eyebrow',
                        color: 'text-secondary',
                        children: n
                    })
                ]
            })
          : (0, r.jsx)(u.Z, {
                copy: d.intl.string(d.t['B66Z+f']),
                showStars: !1
            });
}
