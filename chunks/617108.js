n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(496431),
    s = n(793574),
    o = n(688810),
    l = n(532794),
    c = n(954571),
    u = n(804412),
    d = n(422936),
    f = n(635995),
    p = n(915516),
    _ = n(788868),
    h = n(652215),
    m = n(985018),
    g = n(237082);
let E = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: E } = e,
        { analyticsLocations: y } = (0, o.Ay)(s.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        b = (0, d.O)(),
        O = (0, a.A)(null != b && null != b.expires_at ? Date.parse(b.expires_at) : 0),
        { variant: v, showNagbar: A } = (0, u.Ay)("PremiumDiscountEndingNotice");
    if (
        null == b ||
        (null == (t = b.discount) ? void 0 : t.plan_ids.some((e) => _.hd[e].skuId !== E)) ||
        null == b.expires_at ||
        Object.values(O).every((e) => 0 === e) ||
        !A
    )
        return null;
    let I = () => {
        (0, l.A)({
            subscriptionTier: E,
            analyticsLocations: y,
            analyticsObject: {
                page: h.liQ.IN_APP,
                section: h.JJy.NOTIFICATION_BAR,
                object: h.ZSU.BUTTON_CTA,
            },
        });
    };
    return v === u.CJ.NAGBAR_REFRESH
        ? (0, r.jsxs)(f.T0, {
              onClick: () => {
                  n(),
                      c.default.track(h.HAw.APP_NOTICE_CLOSED, {
                          notice_type: h.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                      });
              },
              children: [
                  (0, r.jsx)(f.In, {
                      children: (0, p.rn)(O, Number(b.discount.amount)),
                  }),
                  (0, r.jsx)(f.fY, {
                      onClick: I,
                      text: m.intl.string(m.t.zLXssK),
                  }),
              ],
          })
        : (0, r.jsxs)(i.$Td, {
              color: i.Hv$.PREMIUM_TIER_2,
              children: [
                  (0, r.jsx)(i.PMB, {
                      noticeType: h.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                      onClick: n,
                  }),
                  (0, r.jsx)(i.tvc, {
                      size: "md",
                      color: "currentColor",
                      className: g.PC,
                  }),
                  (0, p.rn)(O, Number(b.discount.amount)),
                  (0, r.jsx)(i.zr9, {
                      onClick: I,
                      children: m.intl.string(m.t.zLXssK),
                  }),
              ],
          });
};
