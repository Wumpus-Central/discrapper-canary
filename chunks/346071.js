n.d(t, { n: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(886969),
    s = n(580130),
    l = n(474936),
    c = n(981631),
    u = n(388032),
    d = n(429680);
function f(e) {
    let { fractionalPremiumInfo: t, variant: n = 'default', style: f } = e,
        _ = t.fractionalState === l.a$.FP_SUB_PAUSED,
        p = (0, a.Z)(t.endsAt, _),
        h = (0, i.e7)([s.Z], () => s.Z.get(t.currentEntitlementId));
    if ((null == h ? void 0 : h.sourceType) === c.kNB.REVERSE_TRIAL) return null;
    let m = '',
        g = {
            trial: {
                days_and_hours: u.t.SQyVVV,
                days: u.t['2ifAYG'],
                hours: u.t.kZSTYm
            },
            default: {
                days_and_hours: u.t['6r9LLi'],
                days: u.t.c2BbVF,
                hours: u.t['8Xm6uL']
            }
        };
    return (p.days > 0 && p.hours > 0
        ? (m = u.intl.format(g[n].days_and_hours, {
              days: p.days,
              hours: p.hours
          }))
        : p.days > 0
          ? (m = u.intl.format(g[n].days, { days: p.days }))
          : p.hours > 0 && (m = u.intl.format(g[n].hours, { hours: p.hours })),
    '' === m)
        ? null
        : (0, r.jsxs)('div', {
              className: d.activeFractionalPremiumBannerContainer,
              style: f,
              children: [
                  (0, r.jsxs)('div', {
                      className: d.nitroIconContainer,
                      children: [
                          (0, r.jsx)(o.SrA, {
                              size: 'md',
                              color: 'white',
                              className: d.iconFractional
                          }),
                          (0, r.jsx)(o.SrA, {
                              size: 'md',
                              color: 'currentColor',
                              className: d.iconFractionalDark
                          })
                      ]
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: m
                  }),
                  (0, r.jsx)('div', { className: d.activeFractionalPremiumBannerBackgroundImage })
              ]
          });
}
