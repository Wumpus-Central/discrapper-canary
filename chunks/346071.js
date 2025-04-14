n.d(t, { n: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(886969),
    s = n(580130),
    l = n(981631),
    c = n(388032),
    u = n(429680);
function d(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, a.Z)(t.endsAt),
        d = (0, i.e7)([s.Z], () => s.Z.get(t.currentEntitlementId));
    if ((null == d ? void 0 : d.sourceType) === l.kNB.REVERSE_TRIAL) return null;
    let f = '';
    return (n.days > 0 && n.hours > 0
        ? (f = c.NW.format(c.t['6r9LLi'], {
              days: n.days,
              hours: n.hours
          }))
        : n.days > 0
          ? (f = c.NW.format(c.t.c2BbVF, { days: n.days }))
          : n.hours > 0 && (f = c.NW.format(c.t['8Xm6uL'], { hours: n.hours })),
    '' === f)
        ? null
        : (0, r.jsxs)('div', {
              className: u.activeFractionalPremiumBannerContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: u.nitroIconContainer,
                      children: [
                          (0, r.jsx)(o.SrA, {
                              size: 'md',
                              color: 'white',
                              className: u.iconFractional
                          }),
                          (0, r.jsx)(o.SrA, {
                              size: 'md',
                              color: 'currentColor',
                              className: u.iconFractionalDark
                          })
                      ]
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: f
                  }),
                  (0, r.jsx)('div', { className: u.activeFractionalPremiumBannerBackgroundImage })
              ]
          });
}
