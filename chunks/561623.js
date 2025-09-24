o.d(t, { default: () => N }), o(388685), o(415506);
var r = o(951288),
    n = o(647438),
    i = o(512722),
    a = o.n(i),
    l = o(442837),
    u = o(82659),
    _ = o(481060),
    c = o(366939),
    s = o(911969),
    d = o(100527),
    C = o(906732),
    m = o(563132),
    p = o(583046),
    f = o(963249),
    I = o(594174),
    h = o(853872),
    b = o(509545),
    y = o(626135),
    P = o(74538),
    L = o(937615),
    S = o(212895),
    T = o(296848),
    g = o(374649),
    v = o(807163),
    w = o(317269),
    A = o(474936),
    F = o(981631),
    x = o(388032);
let N = (e) => {
    var t, o, i, N;
    let { daysLeft: E, premiumType: U, premiumSubscription: M, analyticsSource: B, onClose: R, transitionState: Z } = e,
        [k, O] = n.useState(!1),
        { analyticsLocations: j } = (0, C.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
        D = (0, l.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return a()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        }),
        z = (0, l.e7)(
            [h.Z],
            () => ((null == M ? void 0 : M.paymentSourceId) != null ? h.Z.getPaymentSource(M.paymentSourceId) : null),
            [M],
        ),
        G = M.items[0].planId,
        Y = (0, P.Wz)(A.GP[G].skuId),
        { priceOptions: W } = (0, p.Z)({
            activeSubscription: null,
            skuIDs: [Y],
            paymentSourceId: null == M ? void 0 : M.paymentSourceId,
            isGift: !1,
        }),
        [K] = (0, g.ED)({
            subscriptionId: M.id,
            items: [
                {
                    planId: G,
                    quantity: 1,
                },
            ],
            renewal: !0,
            paymentSourceId: null == M ? void 0 : M.paymentSourceId,
            currency: W.currency,
            analyticsLocations: (0, C.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL,
        }),
        V = (0, l.e7)([b.Z], () => (0, T.oE)(G), [G]),
        X = (0, l.e7)([b.Z], () => b.Z.isFetchingForSKU(Y)),
        q =
            null == K ||
            null == (N = K.invoiceItems) ||
            null == (i = N.find((e) => e.subscriptionPlanId === G)) ||
            null == (o = i.discounts) ||
            null == (t = o.find((e) => e.type === s.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : t.amount,
        H = null != V ? (0, P.aS)(V.id, !1, !1, W) : null,
        J = null != H && null != q ? (0, L.T4)(H.amount - (null != q ? q : 0), H.currency) : null,
        { intervalType: $, intervalCount: Q } = P.ZP.getInterval(G),
        ee = U === A.p9.TIER_1,
        et = null != H ? (0, L.T4)(H.amount, H.currency) : null;
    return (n.useEffect(() => {
        y.default.track(F.rMx.OPEN_MODAL, {
            type: "Premium Uncancel Winback",
            source: B,
        });
    }, [B]),
    k)
        ? (0, r.jsx)(u.Modal, {
              actions: [],
              onClose: R,
              transitionState: Z,
              title: "",
              children: (0, r.jsx)(m.PaymentContextProvider, {
                  activeSubscription: M,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, r.jsx)(w.ZP, {
                      planId: G,
                      onClose: R,
                      paymentSourceType: null == z ? void 0 : z.type,
                  }),
              }),
          })
        : (0, r.jsx)(u.Modal, {
              title: ee
                  ? x.intl.formatToPlainString(x.t.Sngnzs, { daysLeft: E })
                  : x.intl.formatToPlainString(x.t.tdvIlZ, { daysLeft: E }),
              subtitle: ee ? x.intl.format(x.t["6Su2XV"], {}) : x.intl.format(x.t["lE+P8f"], {}),
              size: "md",
              onClose: R,
              preview:
                  null !== et
                      ? (0, r.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                switch ($) {
                                    case A.rV.YEAR:
                                        return ee
                                            ? x.intl.format(x.t.O7JRzc, { price: e })
                                            : x.intl.format(x.t["0y5kAA"], { price: e });
                                    case A.rV.MONTH:
                                        if (null != J)
                                            return x.intl.format(x.t["1/ucvr"], {
                                                discountPrice: J,
                                                defaultPrice: e,
                                            });
                                        if (ee) return x.intl.format(x.t.rbwRlZ, { price: e });
                                        if (1 === Q) return x.intl.format(x.t.C9oRCw, { price: e });
                                        return x.intl.format(x.t.TmmTgo, {
                                            price: e,
                                            intervalCount: Q,
                                        });
                                    default:
                                        throw Error("Unknown interval type ".concat($));
                                }
                            })(et),
                        })
                      : (0, r.jsx)(_.$jN, { type: _.RAz.SPINNING_CIRCLE }),
              actions: [
                  {
                      text: x.intl.string(x.t.XDpS4O),
                      variant: "secondary",
                      onClick: R,
                  },
                  {
                      text: x.intl.string(x.t["2+luBg"]),
                      variant: "primary",
                      disabled: X,
                      onClick: async () => {
                          if (null != M) {
                              let e = (0, S.tD)(G, M.currency, null == z ? void 0 : z.id);
                              null != z && z.id === M.paymentSourceId && e
                                  ? (await c.O5(M, j, M.currency, z, F.Sbl.UNCANCEL_WINBACK_MODAL), O(!0))
                                  : (R(),
                                    (0, f.Z)({
                                        initialPlanId: G,
                                        analyticsLocations: j,
                                        analyticsLocation: F.Sbl.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: Z,
              children: (0, r.jsx)(v.g, {
                  currentUser: D,
                  premiumType: U,
                  onClose: R,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
