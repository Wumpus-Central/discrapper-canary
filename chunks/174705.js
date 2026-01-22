e.d(n, {
    default: () => h,
}),
    e(896048),
    e(65821);
var i = e(627968),
    l = e(64700),
    r = e(284009),
    a = e.n(r),
    c = e(158954),
    u = e(311907),
    o = e(397927),
    s = e(158032),
    d = e(155718),
    f = e(793574),
    p = e(688810),
    m = e(156312),
    y = e(853398),
    I = e(532794),
    A = e(287809),
    C = e(295405),
    b = e(97352),
    S = e(954571),
    _ = e(927578),
    v = e(580630),
    P = e(83617),
    L = e(615396),
    N = e(543767),
    x = e(96304),
    E = e(380083),
    U = e(788868),
    g = e(652215),
    M = e(985018);
let h = (t) => {
    var n, e, r, h;
    let { daysLeft: T, premiumType: k, premiumSubscription: w, analyticsSource: D, onClose: R, transitionState: O } = t,
        [j, G] = l.useState(!1),
        { analyticsLocations: q } = (0, p.Ay)(f.A.PREMIUM_UNCANCEL_MODAL),
        K = (0, u.bG)([A.default], () => {
            let t = A.default.getCurrentUser();
            return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
        }),
        W = (0, u.bG)(
            [C.A],
            () => ((null == w ? void 0 : w.paymentSourceId) != null ? C.A.getPaymentSource(w.paymentSourceId) : null),
            [w],
        ),
        z = w.items[0].planId,
        B = (0, _.mH)(U.hd[z].skuId),
        { priceOptions: F } = (0, y.A)({
            activeSubscription: null,
            skuIDs: [B],
            paymentSourceId: null == w ? void 0 : w.paymentSourceId,
            isGift: !1,
        }),
        [H] = (0, N.Kq)({
            subscriptionId: w.id,
            items: [
                {
                    planId: z,
                    quantity: 1,
                },
            ],
            renewal: !0,
            paymentSourceId: null == w ? void 0 : w.paymentSourceId,
            currency: F.currency,
            analyticsLocations: (0, p.Ay)(f.A.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: f.A.PREMIUM_UNCANCEL_MODAL,
        }),
        X = (0, u.bG)([b.A], () => (0, L.c9)(z), [z]),
        $ = (0, u.bG)([b.A], () => b.A.isFetchingForSKU(B)),
        J =
            null == H ||
            null == (h = H.invoiceItems) ||
            null == (r = h.find((t) => t.subscriptionPlanId === z)) ||
            null == (e = r.discounts) ||
            null == (n = e.find((t) => t.type === d.iS.SUBSCRIPTION_PLAN))
                ? void 0
                : n.amount,
        Z = null != X ? (0, _.y8)(X.id, !1, !1, F) : null,
        Q = null != Z && null != J ? (0, v.$g)(Z.amount - (null != J ? J : 0), Z.currency) : null,
        { intervalType: V, intervalCount: Y } = _.Ay.getInterval(z),
        tt = k === U.PremiumTypes.TIER_1,
        tn = null != Z ? (0, v.$g)(Z.amount, Z.currency) : null;
    return (l.useEffect(() => {
        S.default.track(g.HAw.OPEN_MODAL, {
            type: "Premium Uncancel Winback",
            source: D,
        });
    }, [D]),
    j)
        ? (0, i.jsx)(c.Modal, {
              actions: [],
              onClose: R,
              transitionState: O,
              title: "",
              children: (0, i.jsx)(m.PaymentContextProvider, {
                  activeSubscription: w,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, i.jsx)(E.Ay, {
                      planId: z,
                      onClose: R,
                      paymentSourceType: null == W ? void 0 : W.type,
                  }),
              }),
          })
        : (0, i.jsx)(c.Modal, {
              title: tt
                  ? M.intl.formatToPlainString(M.t.Sngnzg, {
                        daysLeft: T,
                    })
                  : M.intl.formatToPlainString(M.t.tdvIlU, {
                        daysLeft: T,
                    }),
              subtitle: tt ? M.intl.format(M.t["6Su2Xb"], {}) : M.intl.format(M.t["lE+P8X"], {}),
              size: "md",
              onClose: R,
              preview:
                  null !== tn
                      ? (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: (function (t) {
                                switch (V) {
                                    case U.WT.YEAR:
                                        return tt
                                            ? M.intl.format(M.t.O7JRza, {
                                                  price: t,
                                              })
                                            : M.intl.format(M.t["0y5kAG"], {
                                                  price: t,
                                              });
                                    case U.WT.MONTH:
                                        if (null != Q)
                                            return M.intl.format(M.t["1/ucvu"], {
                                                discountPrice: Q,
                                                defaultPrice: t,
                                            });
                                        if (tt)
                                            return M.intl.format(M.t.rbwRlf, {
                                                price: t,
                                            });
                                        if (1 === Y)
                                            return M.intl.format(M.t.C9oRCx, {
                                                price: t,
                                            });
                                        return M.intl.format(M.t.TmmTgl, {
                                            price: t,
                                            intervalCount: Y,
                                        });
                                    default:
                                        throw Error("Unknown interval type ".concat(V));
                                }
                            })(tn),
                        })
                      : (0, i.jsx)(o.y$y, {
                            type: o.tVU.SPINNING_CIRCLE,
                        }),
              actions: [
                  {
                      text: M.intl.string(M.t.XDpS4K),
                      variant: "secondary",
                      onClick: R,
                  },
                  {
                      text: M.intl.string(M.t["2+luBl"]),
                      variant: "primary",
                      disabled: $,
                      onClick: async () => {
                          if (null != w) {
                              let t = (0, P.jJ)(z, w.currency, null == W ? void 0 : W.id);
                              null != W && W.id === w.paymentSourceId && t
                                  ? (await s.Ir(w, q, w.currency, W, g.ThZ.UNCANCEL_WINBACK_MODAL), G(!0))
                                  : (R(),
                                    (0, I.A)({
                                        initialPlanId: z,
                                        analyticsLocations: q,
                                        analyticsLocation: g.ThZ.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: O,
              children: (0, i.jsx)(x.l, {
                  currentUser: K,
                  premiumType: k,
                  onClose: R,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
