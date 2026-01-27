n.d(t, {
    A: () => N,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(496431),
    o = n(793574),
    a = n(688810),
    s = n(532794),
    c = n(954571),
    u = n(804412),
    E = n(422936),
    d = n(635995),
    _ = n(915516),
    T = n(788868),
    A = n(652215),
    I = n(985018),
    O = n(237082);
let N =
    21552 == n.j
        ? function (e) {
              var t;
              let { dismissCurrentNotice: n, subscriptionTier: N } = e,
                  { analyticsLocations: p } = (0, a.Ay)(o.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  R = (0, E.O)(),
                  S = (0, l.A)(null != R && null != R.expires_at ? Date.parse(R.expires_at) : 0),
                  { variant: P, showNagbar: y } = (0, u.Ay)("PremiumDiscountEndingNotice");
              if (
                  null == R ||
                  (null == (t = R.discount) ? void 0 : t.plan_ids.some((e) => T.hd[e].skuId !== N)) ||
                  null == R.expires_at ||
                  Object.values(S).every((e) => 0 === e) ||
                  !y
              )
                  return null;
              let f = () => {
                  (0, s.A)({
                      subscriptionTier: N,
                      analyticsLocations: p,
                      analyticsObject: {
                          page: A.liQ.IN_APP,
                          section: A.JJy.NOTIFICATION_BAR,
                          object: A.ZSU.BUTTON_CTA,
                      },
                  });
              };
              return P === u.CJ.NAGBAR_REFRESH
                  ? (0, r.jsxs)(d.T0, {
                        onClick: () => {
                            n(),
                                c.default.track(A.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: A.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, r.jsx)(d.In, {
                                children: (0, _.rn)(S, Number(R.discount.amount)),
                            }),
                            (0, r.jsx)(d.fY, {
                                onClick: f,
                                text: I.intl.string(I.t.zLXssK),
                            }),
                        ],
                    })
                  : (0, r.jsxs)(i.$Td, {
                        color: i.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(i.PMB, {
                                noticeType: A.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                onClick: n,
                            }),
                            (0, r.jsx)(i.tvc, {
                                size: "md",
                                color: "currentColor",
                                className: O.PC,
                            }),
                            (0, _.rn)(S, Number(R.discount.amount)),
                            (0, r.jsx)(i.zr9, {
                                onClick: f,
                                children: I.intl.string(I.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
