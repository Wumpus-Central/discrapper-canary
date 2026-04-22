"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(496431),
    l = n(793574),
    s = n(688810),
    a = n(532794),
    o = n(954571),
    c = n(422936),
    u = n(635995),
    d = n(915516),
    _ = n(788868),
    E = n(652215),
    A = n(985018);
let m =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: m } = (0, s.Ay)(l.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  I = (0, c.O)(),
                  T = (0, r.A)(null != I && null != I.expires_at ? Date.parse(I.expires_at) : 0);
              return null == I ||
                  I.discount?.plan_ids.some((e) => _.hd[e].skuId !== n) ||
                  null == I.expires_at ||
                  Object.values(T).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(u.T0, {
                        onClick: () => {
                            t(),
                                o.default.track(E.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: E.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, i.jsx)(u.In, { children: (0, d.rn)(T, Number(I.discount.amount)) }),
                            (0, i.jsx)(u.fY, {
                                onClick: () => {
                                    (0, a.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: m,
                                        analyticsObject: {
                                            page: E.liQ.IN_APP,
                                            section: E.JJy.NOTIFICATION_BAR,
                                            object: E.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: A.intl.string(A.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
