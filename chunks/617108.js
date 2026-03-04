n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var l = n(496431),
    r = n(793574),
    a = n(688810),
    s = n(532794),
    o = n(954571),
    c = n(422936),
    _ = n(635995),
    E = n(915516),
    d = n(788868),
    u = n(652215),
    A = n(985018);
let T = function (e) {
    let { dismissCurrentNotice: t, subscriptionTier: n } = e,
        { analyticsLocations: T } = (0, a.Ay)(r.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        I = (0, c.O)(),
        N = (0, l.A)(null != I && null != I.expires_at ? Date.parse(I.expires_at) : 0);
    return null == I ||
        I.discount?.plan_ids.some((e) => d.hd[e].skuId !== n) ||
        null == I.expires_at ||
        Object.values(N).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(_.T0, {
              onClick: () => {
                  t(), o.default.track(u.HAw.APP_NOTICE_CLOSED, { notice_type: u.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING });
              },
              children: [
                  (0, i.jsx)(_.In, { children: (0, E.rn)(N, Number(I.discount.amount)) }),
                  (0, i.jsx)(_.fY, {
                      onClick: () => {
                          (0, s.A)({
                              subscriptionTier: n,
                              analyticsLocations: T,
                              analyticsObject: {
                                  page: u.liQ.IN_APP,
                                  section: u.JJy.NOTIFICATION_BAR,
                                  object: u.ZSU.BUTTON_CTA,
                              },
                          });
                      },
                      text: A.intl.string(A.t.zLXssK),
                  }),
              ],
          });
};
