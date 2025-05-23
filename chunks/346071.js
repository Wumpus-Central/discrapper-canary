n.d(t, { n: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(886969),
    a = n(474936),
    s = n(388032),
    l = n(462783);
function c(e) {
    let { fractionalPremiumInfo: t, variant: n = 'default', style: c } = e,
        u = t.fractionalState === a.a$.FP_SUB_PAUSED,
        d = (0, o.Z)(t.endsAt, u),
        f = '',
        _ = {
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
    return (d.days > 0 && d.hours > 0
        ? (f = s.intl.format(_[n].days_and_hours, {
              days: d.days,
              hours: d.hours
          }))
        : d.days > 0
          ? (f = s.intl.format(_[n].days, { days: d.days }))
          : d.hours > 0 && (f = s.intl.format(_[n].hours, { hours: d.hours })),
    '' === f)
        ? null
        : (0, r.jsxs)('div', {
              className: l.activeFractionalPremiumBannerContainer,
              style: c,
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
                      children: f
                  }),
                  (0, r.jsx)('div', { className: l.activeFractionalPremiumBannerBackgroundImage })
              ]
          });
}
