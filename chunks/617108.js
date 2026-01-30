n.d(t, {
    A: () => T,
});
var r = n(627968);
n(64700);
var i = n(496431),
    l = n(793574),
    o = n(688810),
    a = n(532794),
    s = n(954571),
    c = n(422936),
    u = n(635995),
    E = n(915516),
    d = n(788868),
    _ = n(652215),
    A = n(985018);
let T =
    21552 == n.j
        ? function (e) {
              var t;
              let { dismissCurrentNotice: n, subscriptionTier: T } = e,
                  { analyticsLocations: I } = (0, o.Ay)(l.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  O = (0, c.O)(),
                  N = (0, i.A)(null != O && null != O.expires_at ? Date.parse(O.expires_at) : 0);
              return null == O ||
                  (null == (t = O.discount) ? void 0 : t.plan_ids.some((e) => d.hd[e].skuId !== T)) ||
                  null == O.expires_at ||
                  Object.values(N).every((e) => 0 === e)
                  ? null
                  : (0, r.jsxs)(u.T0, {
                        onClick: () => {
                            n(),
                                s.default.track(_.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: _.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, r.jsx)(u.In, {
                                children: (0, E.rn)(N, Number(O.discount.amount)),
                            }),
                            (0, r.jsx)(u.fY, {
                                onClick: () => {
                                    (0, a.A)({
                                        subscriptionTier: T,
                                        analyticsLocations: I,
                                        analyticsObject: {
                                            page: _.liQ.IN_APP,
                                            section: _.JJy.NOTIFICATION_BAR,
                                            object: _.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: A.intl.string(A.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
