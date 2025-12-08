e.d(n, { default: () => U }), e(388685), e(415506);
var r = e(54381),
    i = e(473749),
    l = e(512722),
    a = e.n(l),
    o = e(793030),
    u = e(442837),
    c = e(481060),
    s = e(366939),
    d = e(911969),
    p = e(100527),
    m = e(906732),
    f = e(563132),
    _ = e(583046),
    y = e(963249),
    C = e(594174),
    I = e(853872),
    P = e(509545),
    v = e(626135),
    S = e(74538),
    b = e(937615),
    x = e(212895),
    g = e(296848),
    N = e(374649),
    L = e(807163),
    A = e(317269),
    E = e(474936),
    w = e(981631),
    M = e(388032);
let U = (t) => {
    var n, e, l, U;
    let { daysLeft: h, premiumType: Z, premiumSubscription: k, analyticsSource: O, onClose: T, transitionState: D } = t,
        [R, j] = i.useState(!1),
        { analyticsLocations: B } = (0, m.ZP)(p.Z.PREMIUM_UNCANCEL_MODAL),
        G = (0, u.e7)([C.default], () => {
            let t = C.default.getCurrentUser();
            return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
        }),
        z = (0, u.e7)(
            [I.Z],
            () => ((null == k ? void 0 : k.paymentSourceId) != null ? I.Z.getPaymentSource(k.paymentSourceId) : null),
            [k],
        ),
        W = k.items[0].planId,
        K = (0, S.Wz)(E.GP[W].skuId),
        { priceOptions: X } = (0, _.Z)({
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
            analyticsLocations: (0, m.ZP)(p.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: p.Z.PREMIUM_UNCANCEL_MODAL,
        }),
        V = (0, u.e7)([P.Z], () => (0, g.oE)(W), [W]),
        q = (0, u.e7)([P.Z], () => P.Z.isFetchingForSKU(K)),
        H =
            null == F ||
            null == (U = F.invoiceItems) ||
            null == (l = U.find((t) => t.subscriptionPlanId === W)) ||
            null == (e = l.discounts) ||
            null == (n = e.find((t) => t.type === d.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : n.amount,
        J = null != V ? (0, S.aS)(V.id, !1, !1, X) : null,
        Y = null != J && null != H ? (0, b.T4)(J.amount - (null != H ? H : 0), J.currency) : null,
        { intervalType: $, intervalCount: Q } = S.ZP.getInterval(W),
        tt = Z === E.PremiumTypes.TIER_1,
        tn = null != J ? (0, b.T4)(J.amount, J.currency) : null;
    return (i.useEffect(() => {
        v.default.track(w.rMx.OPEN_MODAL, {
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
              children: (0, r.jsx)(f.PaymentContextProvider, {
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
                  null !== tn
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
                            })(tn),
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
                                  ? (await s.O5(k, B, k.currency, z, w.Sbl.UNCANCEL_WINBACK_MODAL), j(!0))
                                  : (T(),
                                    (0, y.Z)({
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
