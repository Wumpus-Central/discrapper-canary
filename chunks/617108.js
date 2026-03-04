"use strict";
n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var r = n(496431),
    l = n(793574),
    s = n(688810),
    a = n(532794),
    o = n(954571),
    E = n(422936),
    c = n(635995),
    _ = n(915516),
    d = n(788868),
    A = n(652215),
    u = n(985018);
let T =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: T } = (0, s.Ay)(l.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  I = (0, E.O)(),
                  N = (0, r.A)(null != I && null != I.expires_at ? Date.parse(I.expires_at) : 0);
              return null == I ||
                  I.discount?.plan_ids.some((e) => d.hd[e].skuId !== n) ||
                  null == I.expires_at ||
                  Object.values(N).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(c.T0, {
                        onClick: () => {
                            t(),
                                o.default.track(A.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: A.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, i.jsx)(c.In, { children: (0, _.rn)(N, Number(I.discount.amount)) }),
                            (0, i.jsx)(c.fY, {
                                onClick: () => {
                                    (0, a.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: T,
                                        analyticsObject: {
                                            page: A.liQ.IN_APP,
                                            section: A.JJy.NOTIFICATION_BAR,
                                            object: A.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: u.intl.string(u.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
