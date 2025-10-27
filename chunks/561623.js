n.d(r, { default: () => x }), n(388685), n(415506);
var t = n(951288),
    o = n(647438),
    a = n(512722),
    i = n.n(a),
    l = n(793030),
    d = n(442837),
    _ = n(481060),
    u = n(366939),
    c = n(911969),
    s = n(100527),
    m = n(906732),
    p = n(563132),
    C = n(583046),
    b = n(963249),
    f = n(594174),
    I = n(853872),
    g = n(509545),
    h = n(626135),
    y = n(74538),
    P = n(937615),
    S = n(212895),
    T = n(296848),
    v = n(374649),
    G = n(807163),
    L = n(317269),
    F = n(474936),
    A = n(981631),
    w = n(388032);
let x = (e) => {
    var r, n, a, x;
    let { daysLeft: N, premiumType: E, premiumSubscription: U, analyticsSource: B, onClose: M, transitionState: R } = e,
        [k, O] = o.useState(!1),
        { analyticsLocations: D } = (0, m.ZP)(s.Z.PREMIUM_UNCANCEL_MODAL),
        Z = (0, d.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return i()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        }),
        z = (0, d.e7)(
            [I.Z],
            () => ((null == U ? void 0 : U.paymentSourceId) != null ? I.Z.getPaymentSource(U.paymentSourceId) : null),
            [U],
        ),
        j = U.items[0].planId,
        Y = (0, y.Wz)(F.GP[j].skuId),
        { priceOptions: W } = (0, C.Z)({
            activeSubscription: null,
            skuIDs: [Y],
            paymentSourceId: null == U ? void 0 : U.paymentSourceId,
            isGift: !1,
        }),
        [K] = (0, v.ED)({
            subscriptionId: U.id,
            items: [
                {
                    planId: j,
                    quantity: 1,
                },
            ],
            renewal: !0,
            paymentSourceId: null == U ? void 0 : U.paymentSourceId,
            currency: W.currency,
            analyticsLocations: (0, m.ZP)(s.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: s.Z.PREMIUM_UNCANCEL_MODAL,
        }),
        X = (0, d.e7)([g.Z], () => (0, T.oE)(j), [j]),
        V = (0, d.e7)([g.Z], () => g.Z.isFetchingForSKU(Y)),
        q =
            null == K ||
            null == (x = K.invoiceItems) ||
            null == (a = x.find((e) => e.subscriptionPlanId === j)) ||
            null == (n = a.discounts) ||
            null == (r = n.find((e) => e.type === c.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : r.amount,
        H = null != X ? (0, y.aS)(X.id, !1, !1, W) : null,
        J = null != H && null != q ? (0, P.T4)(H.amount - (null != q ? q : 0), H.currency) : null,
        { intervalType: $, intervalCount: Q } = y.ZP.getInterval(j),
        ee = E === F.PremiumTypes.TIER_1,
        er = null != H ? (0, P.T4)(H.amount, H.currency) : null;
    return (o.useEffect(() => {
        h.default.track(A.rMx.OPEN_MODAL, {
            type: "Premium Uncancel Winback",
            source: B,
        });
    }, [B]),
    k)
        ? (0, t.jsx)(l.Modal, {
              actions: [],
              onClose: M,
              transitionState: R,
              title: "",
              children: (0, t.jsx)(p.PaymentContextProvider, {
                  activeSubscription: U,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, t.jsx)(L.ZP, {
                      planId: j,
                      onClose: M,
                      paymentSourceType: null == z ? void 0 : z.type,
                  }),
              }),
          })
        : (0, t.jsx)(l.Modal, {
              title: ee
                  ? w.intl.formatToPlainString(w.t.Sngnzg, { daysLeft: N })
                  : w.intl.formatToPlainString(w.t.tdvIlU, { daysLeft: N }),
              subtitle: ee ? w.intl.format(w.t["6Su2Xb"], {}) : w.intl.format(w.t["lE+P8X"], {}),
              size: "md",
              onClose: M,
              preview:
                  null !== er
                      ? (0, t.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                switch ($) {
                                    case F.rV.YEAR:
                                        return ee
                                            ? w.intl.format(w.t.O7JRza, { price: e })
                                            : w.intl.format(w.t["0y5kAG"], { price: e });
                                    case F.rV.MONTH:
                                        if (null != J)
                                            return w.intl.format(w.t["1/ucvu"], {
                                                discountPrice: J,
                                                defaultPrice: e,
                                            });
                                        if (ee) return w.intl.format(w.t.rbwRlf, { price: e });
                                        if (1 === Q) return w.intl.format(w.t.C9oRCx, { price: e });
                                        return w.intl.format(w.t.TmmTgl, {
                                            price: e,
                                            intervalCount: Q,
                                        });
                                    default:
                                        throw Error("Unknown interval type ".concat($));
                                }
                            })(er),
                        })
                      : (0, t.jsx)(_.$jN, { type: _.RAz.SPINNING_CIRCLE }),
              actions: [
                  {
                      text: w.intl.string(w.t.XDpS4K),
                      variant: "secondary",
                      onClick: M,
                  },
                  {
                      text: w.intl.string(w.t["2+luBl"]),
                      variant: "primary",
                      disabled: V,
                      onClick: async () => {
                          if (null != U) {
                              let e = (0, S.tD)(j, U.currency, null == z ? void 0 : z.id);
                              null != z && z.id === U.paymentSourceId && e
                                  ? (await u.O5(U, D, U.currency, z, A.Sbl.UNCANCEL_WINBACK_MODAL), O(!0))
                                  : (M(),
                                    (0, b.Z)({
                                        initialPlanId: j,
                                        analyticsLocations: D,
                                        analyticsLocation: A.Sbl.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: R,
              children: (0, t.jsx)(G.g, {
                  currentUser: Z,
                  premiumType: E,
                  onClose: M,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
