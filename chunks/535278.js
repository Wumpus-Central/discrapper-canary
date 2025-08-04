n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(774078),
    a = n(100527),
    o = n(906732),
    s = n(963249),
    c = n(706454),
    u = n(104494),
    d = n(474936),
    _ = n(981631),
    E = n(388032),
    p = n(131715);
let I = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: I } = e,
        { analyticsLocations: O } = (0, o.ZP)(a.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        S = (0, u.Ng)(),
        f = (0, l.Z)(null != S && null != S.expires_at ? Date.parse(S.expires_at) : 0);
    return null == S || (null == (t = S.discount) ? void 0 : t.plan_ids.some((e) => d.GP[e].skuId !== I)) || null == S.expires_at || Object.values(f).every((e) => 0 === e)
        ? null
        : (0, r.jsxs)(i.qXd, {
              color: i.DM8.PREMIUM_TIER_2,
              children: [
                  (0, r.jsx)(i.RyX, { onClick: n }),
                  (0, r.jsx)(i.SrA, {
                      size: 'md',
                      color: 'currentColor',
                      className: p.premiumIcon
                  }),
                  (function (e, t) {
                      let n = new Intl.NumberFormat(c.default.locale, {
                          style: 'percent',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                      }).format(t / 100);
                      return e.days > 0
                          ? E.intl.formatToPlainString(E.t['7mw8CQ'], {
                                days: e.days,
                                discountPercentage: n
                            })
                          : e.hours > 0
                            ? E.intl.formatToPlainString(E.t['0hYT6u'], {
                                  hours: e.hours,
                                  discountPercentage: n
                              })
                            : E.intl.formatToPlainString(E.t['2rh7r6'], {
                                  minutes: Math.max(e.minutes, 1),
                                  discountPercentage: n
                              });
                  })(f, Number(S.discount.amount)),
                  (0, r.jsx)(i.EyT, {
                      onClick: () => {
                          (0, s.Z)({
                              subscriptionTier: I,
                              analyticsLocations: O,
                              analyticsObject: {
                                  page: _.ZY5.IN_APP,
                                  section: _.jXE.NOTIFICATION_BAR,
                                  object: _.qAy.BUTTON_CTA
                              }
                          });
                      },
                      children: E.intl.string(E.t.zLXssL)
                  })
              ]
          });
};
