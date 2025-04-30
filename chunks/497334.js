n.d(t, { S: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(927359),
    s = n(227140),
    c = n(388032),
    u = n(441393);
function d(e) {
    let { expiresAt: t, isAcknowledged: n } = e,
        i = (0, o.ZP)(t, o.aj.SHORT_TIME);
    return '' === i
        ? null
        : ((i = i.toUpperCase()), n)
          ? (0, r.jsxs)('div', {
                className: l()(u.premiumTrialBadge, u.premiumTrialAcknowledgedBadge, {}),
                children: [
                    (0, r.jsx)(a.T39, {
                        size: 'custom',
                        width: 14,
                        height: 14,
                        color: 'currentColor',
                        className: u.reverseTrialBadgeIcon
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'eyebrow',
                        children: i
                    })
                ]
            })
          : (0, r.jsx)(s.Z, {
                copy: c.intl.string(c.t['B66Z+f']),
                showStars: !1
            });
}
