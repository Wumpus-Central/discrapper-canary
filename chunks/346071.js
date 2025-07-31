n.d(t, { n: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(886969),
    o = n(474936),
    s = n(388032),
    l = n(429680),
    c = n(774945);
function u(e) {
    let { fractionalPremiumInfo: t, variant: n = 'default', enablePremiumBrandRefresh: u = !1, style: d } = e,
        _ = t.fractionalState === o.a$.FP_SUB_PAUSED,
        f = (0, a.Z)(t.endsAt, _),
        p = '',
        h = {
            trial: {
                days_and_hours: s.t.SQyVVV,
                days: s.t['2ifAYG'],
                hours: s.t.kZSTYm
            },
            default: {
                days_and_hours: s.t['6r9LLi'],
                days: s.t.c2BbVF,
                hours: s.t['8Xm6uL']
            }
        };
    return (f.days > 0 && f.hours > 0
        ? (p = s.intl.format(h[n].days_and_hours, {
              days: f.days,
              hours: f.hours
          }))
        : f.days > 0
          ? (p = s.intl.format(h[n].days, { days: f.days }))
          : f.hours > 0 && (p = s.intl.format(h[n].hours, { hours: f.hours })),
    '' === p)
        ? null
        : u
          ? (0, r.jsxs)('div', {
                className: l.premiumBrandRefreshContainer,
                style: d,
                children: [
                    (0, r.jsx)('img', {
                        src: c,
                        alt: 'Nitro Icon',
                        className: l.premiumBrandRefreshIcon
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        children: p
                    })
                ]
            })
          : (0, r.jsxs)('div', {
                className: l.activeFractionalPremiumBannerContainer,
                style: d,
                children: [
                    (0, r.jsxs)('div', {
                        className: l.nitroIconContainer,
                        children: [
                            (0, r.jsx)(i.SrA, {
                                size: 'md',
                                color: 'white',
                                className: l.iconFractional
                            }),
                            (0, r.jsx)(i.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: l.iconFractionalDark
                            })
                        ]
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: p
                    }),
                    (0, r.jsx)('div', { className: l.activeFractionalPremiumBannerBackgroundImage })
                ]
            });
}
