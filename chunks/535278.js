n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(774078),
    o = n(100527),
    s = n(906732),
    a = n(963249),
    c = n(706454),
    d = n(104494),
    u = n(474936),
    h = n(981631),
    _ = n(388032),
    E = n(131715);
let p =
    12633 == n.j
        ? function (e) {
              var t;
              let { dismissCurrentNotice: n, subscriptionTier: p } = e,
                  { analyticsLocations: I } = (0, s.ZP)(o.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  g = (0, d.Ng)(),
                  f = (0, l.Z)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0);
              return null == g || (null == (t = g.discount) ? void 0 : t.plan_ids.some((e) => u.GP[e].skuId !== p)) || null == g.expires_at || Object.values(f).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(r.qXd, {
                        color: r.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.RyX, { onClick: n }),
                            (0, i.jsx)(r.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: E.premiumIcon
                            }),
                            (function (e, t) {
                                let n = new Intl.NumberFormat(c.default.locale, {
                                    style: 'percent',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(t / 100);
                                return e.days > 0
                                    ? _.intl.formatToPlainString(_.t['7mw8CQ'], {
                                          days: e.days,
                                          discountPercentage: n
                                      })
                                    : e.hours > 0
                                      ? _.intl.formatToPlainString(_.t['0hYT6u'], {
                                            hours: e.hours,
                                            discountPercentage: n
                                        })
                                      : _.intl.formatToPlainString(_.t['2rh7r6'], {
                                            minutes: Math.max(e.minutes, 1),
                                            discountPercentage: n
                                        });
                            })(f, Number(g.discount.amount)),
                            (0, i.jsx)(r.EyT, {
                                onClick: () => {
                                    (0, a.Z)({
                                        subscriptionTier: p,
                                        analyticsLocations: I,
                                        analyticsObject: {
                                            page: h.ZY5.IN_APP,
                                            section: h.jXE.NOTIFICATION_BAR,
                                            object: h.qAy.BUTTON_CTA
                                        }
                                    });
                                },
                                children: _.intl.string(_.t.zLXssL)
                            })
                        ]
                    });
          }
        : null;
