n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(774078),
    a = n(100527),
    s = n(906732),
    l = n(963249),
    c = n(706454),
    u = n(104494),
    d = n(474936),
    f = n(981631),
    _ = n(388032),
    p = n(50953);
function h(e, t) {
    let n = new Intl.NumberFormat(c.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? _.intl.formatToPlainString(_.t["7mw8CQ"], {
              days: e.days,
              discountPercentage: n,
          })
        : e.hours > 0
          ? _.intl.formatToPlainString(_.t["0hYT6u"], {
                hours: e.hours,
                discountPercentage: n,
            })
          : _.intl.formatToPlainString(_.t["2rh7r6"], {
                minutes: Math.max(e.minutes, 1),
                discountPercentage: n,
            });
}
let m = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: c } = e,
        { analyticsLocations: m } = (0, s.ZP)(a.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        g = (0, u.Ng)(),
        E = (0, o.Z)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0);
    return null == g ||
        (null == (t = g.discount) ? void 0 : t.plan_ids.some((e) => d.GP[e].skuId !== c)) ||
        null == g.expires_at ||
        Object.values(E).every((e) => 0 === e)
        ? null
        : (0, r.jsxs)(i.qXd, {
              color: i.DM8.PREMIUM_TIER_2,
              children: [
                  (0, r.jsx)(i.RyX, { onClick: n }),
                  (0, r.jsx)(i.SrA, {
                      size: "md",
                      color: "currentColor",
                      className: p.premiumIcon,
                  }),
                  h(E, Number(g.discount.amount)),
                  (0, r.jsx)(i.EyT, {
                      onClick: () => {
                          (0, l.Z)({
                              subscriptionTier: c,
                              analyticsLocations: m,
                              analyticsObject: {
                                  page: f.ZY5.IN_APP,
                                  section: f.jXE.NOTIFICATION_BAR,
                                  object: f.qAy.BUTTON_CTA,
                              },
                          });
                      },
                      children: _.intl.string(_.t.zLXssL),
                  }),
              ],
          });
};
