n.d(t, { n: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(886969),
    a = n(388032),
    s = n(429680);
function l(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, o.Z)(t.endsAt),
        l = '';
    return (n.days > 0 && n.hours > 0
        ? (l = a.NW.format(a.t['6r9LLi'], {
              days: n.days,
              hours: n.hours
          }))
        : n.days > 0
          ? (l = a.NW.format(a.t.c2BbVF, { days: n.days }))
          : n.hours > 0 && (l = a.NW.format(a.t['8Xm6uL'], { hours: n.hours })),
    '' === l)
        ? null
        : (0, r.jsxs)('div', {
              className: s.activeFractionalPremiumBannerContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: s.nitroIconContainer,
                      children: [
                          (0, r.jsx)(i.SrA, {
                              size: 'md',
                              color: 'white',
                              className: s.iconFractional
                          }),
                          (0, r.jsx)(i.SrA, {
                              size: 'md',
                              color: 'currentColor',
                              className: s.iconFractionalDark
                          })
                      ]
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: 'text-sm/normal',
                      children: l
                  }),
                  (0, r.jsx)('div', { className: s.activeFractionalPremiumBannerBackgroundImage })
              ]
          });
}
