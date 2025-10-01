t.d(r, { default: () => x }), t(388685), t(415506);
var n = t(951288),
    o = t(647438),
    a = t(512722),
    i = t.n(a),
    l = t(793030),
    d = t(442837),
    _ = t(481060),
    u = t(366939),
    c = t(911969),
    s = t(100527),
    m = t(906732),
    C = t(563132),
    p = t(583046),
    f = t(963249),
    b = t(594174),
    I = t(853872),
    g = t(509545),
    h = t(626135),
    y = t(74538),
    P = t(937615),
    L = t(212895),
    S = t(296848),
    v = t(374649),
    T = t(807163),
    G = t(317269),
    w = t(474936),
    A = t(981631),
    F = t(388032);
let x = (e) => {
    var r, t, a, x;
    let { daysLeft: N, premiumType: E, premiumSubscription: U, analyticsSource: B, onClose: M, transitionState: R } = e,
        [O, Z] = o.useState(!1),
        { analyticsLocations: k } = (0, m.ZP)(s.Z.PREMIUM_UNCANCEL_MODAL),
        D = (0, d.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return i()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        }),
        z = (0, d.e7)(
            [I.Z],
            () => ((null == U ? void 0 : U.paymentSourceId) != null ? I.Z.getPaymentSource(U.paymentSourceId) : null),
            [U],
        ),
        j = U.items[0].planId,
        Y = (0, y.Wz)(w.GP[j].skuId),
        { priceOptions: W } = (0, p.Z)({
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
        V = (0, d.e7)([g.Z], () => (0, S.oE)(j), [j]),
        X = (0, d.e7)([g.Z], () => g.Z.isFetchingForSKU(Y)),
        q =
            null == K ||
            null == (x = K.invoiceItems) ||
            null == (a = x.find((e) => e.subscriptionPlanId === j)) ||
            null == (t = a.discounts) ||
            null == (r = t.find((e) => e.type === c.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : r.amount,
        H = null != V ? (0, y.aS)(V.id, !1, !1, W) : null,
        J = null != H && null != q ? (0, P.T4)(H.amount - (null != q ? q : 0), H.currency) : null,
        { intervalType: $, intervalCount: Q } = y.ZP.getInterval(j),
        ee = E === w.p9.TIER_1,
        er = null != H ? (0, P.T4)(H.amount, H.currency) : null;
    return (o.useEffect(() => {
        h.default.track(A.rMx.OPEN_MODAL, {
            type: "Premium Uncancel Winback",
            source: B,
        });
    }, [B]),
    O)
        ? (0, n.jsx)(l.Modal, {
              actions: [],
              onClose: M,
              transitionState: R,
              title: "",
              children: (0, n.jsx)(C.PaymentContextProvider, {
                  activeSubscription: U,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, n.jsx)(G.ZP, {
                      planId: j,
                      onClose: M,
                      paymentSourceType: null == z ? void 0 : z.type,
                  }),
              }),
          })
        : (0, n.jsx)(l.Modal, {
              title: ee
                  ? F.intl.formatToPlainString(F.t.Sngnzs, { daysLeft: N })
                  : F.intl.formatToPlainString(F.t.tdvIlZ, { daysLeft: N }),
              subtitle: ee ? F.intl.format(F.t["6Su2XV"], {}) : F.intl.format(F.t["lE+P8f"], {}),
              size: "md",
              onClose: M,
              preview:
                  null !== er
                      ? (0, n.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                switch ($) {
                                    case w.rV.YEAR:
                                        return ee
                                            ? F.intl.format(F.t.O7JRzc, { price: e })
                                            : F.intl.format(F.t["0y5kAA"], { price: e });
                                    case w.rV.MONTH:
                                        if (null != J)
                                            return F.intl.format(F.t["1/ucvr"], {
                                                discountPrice: J,
                                                defaultPrice: e,
                                            });
                                        if (ee) return F.intl.format(F.t.rbwRlZ, { price: e });
                                        if (1 === Q) return F.intl.format(F.t.C9oRCw, { price: e });
                                        return F.intl.format(F.t.TmmTgo, {
                                            price: e,
                                            intervalCount: Q,
                                        });
                                    default:
                                        throw Error("Unknown interval type ".concat($));
                                }
                            })(er),
                        })
                      : (0, n.jsx)(_.$jN, { type: _.RAz.SPINNING_CIRCLE }),
              actions: [
                  {
                      text: F.intl.string(F.t.XDpS4O),
                      variant: "secondary",
                      onClick: M,
                  },
                  {
                      text: F.intl.string(F.t["2+luBg"]),
                      variant: "primary",
                      disabled: X,
                      onClick: async () => {
                          if (null != U) {
                              let e = (0, L.tD)(j, U.currency, null == z ? void 0 : z.id);
                              null != z && z.id === U.paymentSourceId && e
                                  ? (await u.O5(U, k, U.currency, z, A.Sbl.UNCANCEL_WINBACK_MODAL), Z(!0))
                                  : (M(),
                                    (0, f.Z)({
                                        initialPlanId: j,
                                        analyticsLocations: k,
                                        analyticsLocation: A.Sbl.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: R,
              children: (0, n.jsx)(T.g, {
                  currentUser: D,
                  premiumType: E,
                  onClose: M,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
