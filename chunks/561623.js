n.d(e, { default: () => U }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(793030),
    u = n(442837),
    c = n(481060),
    f = n(366939),
    d = n(911969),
    s = n(100527),
    p = n(906732),
    m = n(563132),
    y = n(583046),
    C = n(963249),
    I = n(594174),
    P = n(853872),
    _ = n(509545),
    b = n(626135),
    v = n(74538),
    S = n(937615),
    x = n(212895),
    g = n(296848),
    N = n(374649),
    L = n(807163),
    A = n(317269),
    E = n(474936),
    w = n(981631),
    M = n(388032);
let U = (t) => {
    var e, n, l, U;
    let { daysLeft: h, premiumType: Z, premiumSubscription: k, analyticsSource: O, onClose: T, transitionState: D } = t,
        [R, j] = i.useState(!1),
        { analyticsLocations: B } = (0, p.ZP)(s.Z.PREMIUM_UNCANCEL_MODAL),
        G = (0, u.e7)([I.default], () => {
            let t = I.default.getCurrentUser();
            return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
        }),
        z = (0, u.e7)(
            [P.Z],
            () => ((null == k ? void 0 : k.paymentSourceId) != null ? P.Z.getPaymentSource(k.paymentSourceId) : null),
            [k],
        ),
        W = k.items[0].planId,
        K = (0, v.Wz)(E.GP[W].skuId),
        { priceOptions: X } = (0, y.Z)({
            activeSubscription: null,
            skuIDs: [K],
            paymentSourceId: null == k ? void 0 : k.paymentSourceId,
            isGift: !1,
        }),
        [F] = (0, N.ED)({
            subscriptionId: k.id,
            items: [
                {
                    planId: W,
                    quantity: 1,
                },
            ],
            renewal: !0,
            paymentSourceId: null == k ? void 0 : k.paymentSourceId,
            currency: X.currency,
            analyticsLocations: (0, p.ZP)(s.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: s.Z.PREMIUM_UNCANCEL_MODAL,
        }),
        V = (0, u.e7)([_.Z], () => (0, g.oE)(W), [W]),
        q = (0, u.e7)([_.Z], () => _.Z.isFetchingForSKU(K)),
        H =
            null == F ||
            null == (U = F.invoiceItems) ||
            null == (l = U.find((t) => t.subscriptionPlanId === W)) ||
            null == (n = l.discounts) ||
            null == (e = n.find((t) => t.type === d.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : e.amount,
        J = null != V ? (0, v.aS)(V.id, !1, !1, X) : null,
        Y = null != J && null != H ? (0, S.T4)(J.amount - (null != H ? H : 0), J.currency) : null,
        { intervalType: $, intervalCount: Q } = v.ZP.getInterval(W),
        tt = Z === E.PremiumTypes.TIER_1,
        te = null != J ? (0, S.T4)(J.amount, J.currency) : null;
    return (i.useEffect(() => {
        b.default.track(w.rMx.OPEN_MODAL, {
            type: "Premium Uncancel Winback",
            source: O,
        });
    }, [O]),
    R)
        ? (0, r.jsx)(o.Modal, {
              actions: [],
              onClose: T,
              transitionState: D,
              title: "",
              children: (0, r.jsx)(m.PaymentContextProvider, {
                  activeSubscription: k,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, r.jsx)(A.ZP, {
                      planId: W,
                      onClose: T,
                      paymentSourceType: null == z ? void 0 : z.type,
                  }),
              }),
          })
        : (0, r.jsx)(o.Modal, {
              title: tt
                  ? M.intl.formatToPlainString(M.t.Sngnzg, { daysLeft: h })
                  : M.intl.formatToPlainString(M.t.tdvIlU, { daysLeft: h }),
              subtitle: tt ? M.intl.format(M.t["6Su2Xb"], {}) : M.intl.format(M.t["lE+P8X"], {}),
              size: "md",
              onClose: T,
              preview:
                  null !== te
                      ? (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: (function (t) {
                                switch ($) {
                                    case E.rV.YEAR:
                                        return tt
                                            ? M.intl.format(M.t.O7JRza, { price: t })
                                            : M.intl.format(M.t["0y5kAG"], { price: t });
                                    case E.rV.MONTH:
                                        if (null != Y)
                                            return M.intl.format(M.t["1/ucvu"], {
                                                discountPrice: Y,
                                                defaultPrice: t,
                                            });
                                        if (tt) return M.intl.format(M.t.rbwRlf, { price: t });
                                        if (1 === Q) return M.intl.format(M.t.C9oRCx, { price: t });
                                        return M.intl.format(M.t.TmmTgl, {
                                            price: t,
                                            intervalCount: Q,
                                        });
                                    default:
                                        throw Error("Unknown interval type ".concat($));
                                }
                            })(te),
                        })
                      : (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
              actions: [
                  {
                      text: M.intl.string(M.t.XDpS4K),
                      variant: "secondary",
                      onClick: T,
                  },
                  {
                      text: M.intl.string(M.t["2+luBl"]),
                      variant: "primary",
                      disabled: q,
                      onClick: async () => {
                          if (null != k) {
                              let t = (0, x.tD)(W, k.currency, null == z ? void 0 : z.id);
                              null != z && z.id === k.paymentSourceId && t
                                  ? (await f.O5(k, B, k.currency, z, w.Sbl.UNCANCEL_WINBACK_MODAL), j(!0))
                                  : (T(),
                                    (0, C.Z)({
                                        initialPlanId: W,
                                        analyticsLocations: B,
                                        analyticsLocation: w.Sbl.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: D,
              children: (0, r.jsx)(L.g, {
                  currentUser: G,
                  premiumType: Z,
                  onClose: T,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
