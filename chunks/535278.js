n.d(t, {
    A: () => g,
    Z: () => E,
});
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(774078),
    o = n(100527),
    s = n(906732),
    l = n(963249),
    c = n(706454),
    u = n(931118),
    d = n(104494),
    f = n(959052),
    _ = n(474936),
    p = n(981631),
    h = n(388032),
    m = n(50953);
function g(e, t) {
    let n = new Intl.NumberFormat(c.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? h.intl.formatToPlainString(h.t["7mw8CZ"], {
              days: e.days,
              discountPercentage: n,
          })
        : e.hours > 0
          ? h.intl.formatToPlainString(h.t["0hYT6o"], {
                hours: e.hours,
                discountPercentage: n,
            })
          : h.intl.formatToPlainString(h.t["2rh7rw"], {
                minutes: Math.max(e.minutes, 1),
                discountPercentage: n,
            });
}
let E = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: c } = e,
        { analyticsLocations: E } = (0, s.ZP)(o.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        b = (0, d.Ng)(),
        y = (0, a.Z)(null != b && null != b.expires_at ? Date.parse(b.expires_at) : 0),
        { variant: O } = (0, u.ZP)("PremiumDiscountEndingNotice");
    if (
        null == b ||
        (null == (t = b.discount) ? void 0 : t.plan_ids.some((e) => _.GP[e].skuId !== c)) ||
        null == b.expires_at ||
        Object.values(y).every((e) => 0 === e)
    )
        return null;
    let v = () => {
        (0, l.Z)({
            subscriptionTier: c,
            analyticsLocations: E,
            analyticsObject: {
                page: p.ZY5.IN_APP,
                section: p.jXE.NOTIFICATION_BAR,
                object: p.qAy.BUTTON_CTA,
            },
        });
    };
    return O === u.tE.NAGBAR_REFRESH
        ? (0, r.jsxs)(f.eJ, {
              onClick: n,
              children: [
                  (0, r.jsx)(f.Jy, { children: g(y, Number(b.discount.amount)) }),
                  (0, r.jsx)(f.OJ, {
                      onClick: v,
                      text: h.intl.string(h.t.zLXssK),
                  }),
              ],
          })
        : (0, r.jsxs)(i.qXd, {
              color: i.DM8.PREMIUM_TIER_2,
              children: [
                  (0, r.jsx)(i.RyX, { onClick: n }),
                  (0, r.jsx)(i.SrA, {
                      size: "md",
                      color: "currentColor",
                      className: m.premiumIcon,
                  }),
                  g(y, Number(b.discount.amount)),
                  (0, r.jsx)(i.EyT, {
                      onClick: v,
                      children: h.intl.string(h.t.zLXssK),
                  }),
              ],
          });
};
