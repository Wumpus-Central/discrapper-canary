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
    let { fractionalPremiumInfo: t } = e,
        n = t.fractionalState === l.a$.FP_SUB_PAUSED,
        f = (0, a.Z)(t.endsAt, n),
        _ = (0, i.e7)([s.Z], () => s.Z.get(t.currentEntitlementId));
    if ((null == _ ? void 0 : _.sourceType) === c.kNB.REVERSE_TRIAL) return null;
    let p = '';
    return (f.days > 0 && f.hours > 0
        ? (p = u.NW.format(u.t['6r9LLi'], {
              days: f.days,
              hours: f.hours
          }))
        : f.days > 0
          ? (p = u.NW.format(u.t.c2BbVF, { days: f.days }))
          : f.hours > 0 && (p = u.NW.format(u.t['8Xm6uL'], { hours: f.hours })),
    '' === p)
        ? null
        : (0, r.jsxs)('div', {
              className: d.activeFractionalPremiumBannerContainer,
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
                      children: p
                  }),
                  (0, r.jsx)('div', { className: d.activeFractionalPremiumBannerBackgroundImage })
              ]
          });
}
