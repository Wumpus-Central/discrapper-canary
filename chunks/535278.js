n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(774078),
    o = n(100527),
    s = n(906732),
    l = n(963249),
    c = n(931118),
    u = n(622909),
    d = n(959052),
    f = n(533246),
    _ = n(474936),
    p = n(981631),
    h = n(388032),
    m = n(655227);
let g = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: g } = e,
        { analyticsLocations: E } = (0, s.ZP)(o.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        b = (0, u.N)(),
        y = (0, a.Z)(null != b && null != b.expires_at ? Date.parse(b.expires_at) : 0),
        { variant: O, showNagbar: v } = (0, c.ZP)("PremiumDiscountEndingNotice");
    if (
        null == b ||
        (null == (t = b.discount) ? void 0 : t.plan_ids.some((e) => _.GP[e].skuId !== g)) ||
        null == b.expires_at ||
        Object.values(y).every((e) => 0 === e) ||
        !v
    )
        return null;
    let I = () => {
        (0, l.Z)({
            subscriptionTier: g,
            analyticsLocations: E,
            analyticsObject: {
                page: p.ZY5.IN_APP,
                section: p.jXE.NOTIFICATION_BAR,
                object: p.qAy.BUTTON_CTA,
            },
        });
    };
    return O === c.tE.NAGBAR_REFRESH
        ? (0, r.jsxs)(d.eJ, {
              onClick: n,
              children: [
                  (0, r.jsx)(d.Jy, { children: (0, f.TV)(y, Number(b.discount.amount)) }),
                  (0, r.jsx)(d.OJ, {
                      onClick: I,
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
                  (0, f.TV)(y, Number(b.discount.amount)),
                  (0, r.jsx)(i.EyT, {
                      onClick: I,
                      children: h.intl.string(h.t.zLXssK),
                  }),
              ],
          });
};
