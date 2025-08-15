n.d(t, { Z: () => T });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(774078),
    a = n(100527),
    o = n(906732),
    c = n(963249),
    s = n(706454),
    u = n(104494),
    d = n(474936),
    _ = n(981631),
    E = n(388032),
    I = n(50953);
let T = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: T } = e,
        { analyticsLocations: O } = (0, o.ZP)(a.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        p = (0, u.Ng)(),
        N = (0, l.Z)(null != p && null != p.expires_at ? Date.parse(p.expires_at) : 0);
    return null == p ||
        (null == (t = p.discount) ? void 0 : t.plan_ids.some((e) => d.GP[e].skuId !== T)) ||
        null == p.expires_at ||
        Object.values(N).every((e) => 0 === e)
        ? null
        : (0, r.jsxs)(i.qXd, {
              color: i.DM8.PREMIUM_TIER_2,
              children: [
                  (0, r.jsx)(i.RyX, { onClick: n }),
                  (0, r.jsx)(i.SrA, {
                      size: "md",
                      color: "currentColor",
                      className: I.premiumIcon,
                  }),
                  (function (e, t) {
                      let n = new Intl.NumberFormat(s.default.locale, {
                          style: "percent",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                      }).format(t / 100);
                      return e.days > 0
                          ? E.intl.formatToPlainString(E.t["7mw8CQ"], {
                                days: e.days,
                                discountPercentage: n,
                            })
                          : e.hours > 0
                            ? E.intl.formatToPlainString(E.t["0hYT6u"], {
                                  hours: e.hours,
                                  discountPercentage: n,
                              })
                            : E.intl.formatToPlainString(E.t["2rh7r6"], {
                                  minutes: Math.max(e.minutes, 1),
                                  discountPercentage: n,
                              });
                  })(N, Number(p.discount.amount)),
                  (0, r.jsx)(i.EyT, {
                      onClick: () => {
                          (0, c.Z)({
                              subscriptionTier: T,
                              analyticsLocations: O,
                              analyticsObject: {
                                  page: _.ZY5.IN_APP,
                                  section: _.jXE.NOTIFICATION_BAR,
                                  object: _.qAy.BUTTON_CTA,
                              },
                          });
                      },
                      children: E.intl.string(E.t.zLXssL),
                  }),
              ],
          });
};
