e.d(n, { default: () => v });
var i = e(627968),
    r = e(64700),
    l = e(284009),
    a = e.n(l),
    u = e(189213),
    c = e(17928),
    o = e(834730),
    s = e(289873),
    d = e(158032),
    m = e(155718),
    p = e(793574),
    y = e(688810),
    f = e(197510),
    I = e(803496),
    A = e(532794),
    C = e(287809),
    S = e(295405),
    P = e(97352),
    N = e(174459),
    L = e(428262),
    b = e(580630),
    h = e(83617),
    E = e(615396),
    U = e(543767),
    _ = e(137728),
    g = e(771566),
    M = e(788868),
    k = e(652215),
    T = e(375708);
let v = (t) => {
    let { daysLeft: n, premiumType: e, premiumSubscription: l, analyticsSource: v, onClose: R, transitionState: w } = t,
        [x, D] = r.useState(!1),
        { analyticsLocations: O } = (0, y.Ay)(p.A.PREMIUM_UNCANCEL_MODAL),
        j = (0, c.bG)([C.default], () => {
            let t = C.default.getCurrentUser();
            return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
        }),
        G = (0, c.bG)([S.A], () => (l?.paymentSourceId != null ? S.A.getPaymentSource(l.paymentSourceId) : null), [l]),
        W = l.items[0].planId,
        B = (0, L.mH)(M.hd[W].skuId),
        { priceOptions: K } = (0, I.A)({
            activeSubscription: null,
            skuIDs: [B],
            paymentSourceId: l?.paymentSourceId,
            isGift: !1,
        }),
        [z] = (0, U.YV)({
            subscriptionId: l.id,
            items: [{ planId: W, quantity: 1 }],
            renewal: !0,
            paymentSourceId: l?.paymentSourceId,
            currency: K.currency,
            analyticsLocations: (0, y.Ay)(p.A.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: p.A.PREMIUM_UNCANCEL_MODAL,
        }),
        H = (0, c.bG)([P.A], () => (0, E.c9)(W), [W]),
        X = (0, c.bG)([P.A], () => P.A.isFetchingForSKU(B)),
        $ = z?.invoiceItems
            ?.find((t) => t.subscriptionPlanId === W)
            ?.discounts?.find((t) => t.type === m.iS.SUBSCRIPTION_PLAN)?.amount,
        F = null != H ? (0, L.y8)(H.id, !1, !1, K) : null,
        J = null != F && null != $ ? (0, b.$g)(F.amount - ($ ?? 0), F.currency) : null,
        { intervalType: Y, intervalCount: Z } = L.Ay.getInterval(W),
        q = e === M.PremiumTypes.TIER_1,
        V = null != F ? (0, b.$g)(F.amount, F.currency) : null;
    return (r.useEffect(() => {
        N.default.track(k.HAw.OPEN_MODAL, { type: "Premium Uncancel Winback", source: v });
    }, [v]),
    x)
        ? (0, i.jsx)(u.Modal, {
              actions: [],
              onClose: R,
              transitionState: w,
              title: "",
              children: (0, i.jsx)(f.CheckoutRootProvider, {
                  activeSubscription: l,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, i.jsx)(g.Ay, { planId: W, onClose: R, paymentSourceType: G?.type }),
              }),
          })
        : (0, i.jsx)(u.Modal, {
              title: q
                  ? T.intl.formatToPlainString(T.t.Sngnzg, { daysLeft: n })
                  : T.intl.formatToPlainString(T.t.tdvIlU, { daysLeft: n }),
              subtitle: q ? T.intl.format(T.t["6Su2Xb"], {}) : T.intl.format(T.t["lE+P8X"], {}),
              size: "md",
              onClose: R,
              preview:
                  null !== V
                      ? (0, i.jsx)(o.E, {
                            variant: "text-sm/normal",
                            children: (function (t) {
                                switch (Y) {
                                    case M.WT.YEAR:
                                        return q
                                            ? T.intl.format(T.t.O7JRza, { price: t })
                                            : T.intl.format(T.t["0y5kAG"], { price: t });
                                    case M.WT.MONTH:
                                        if (null != J)
                                            return T.intl.format(T.t["1/ucvu"], { discountPrice: J, defaultPrice: t });
                                        if (q) return T.intl.format(T.t.rbwRlf, { price: t });
                                        if (1 === Z) return T.intl.format(T.t.C9oRCx, { price: t });
                                        return T.intl.format(T.t.TmmTgl, { price: t, intervalCount: Z });
                                    default:
                                        throw Error(`Unknown interval type ${Y}`);
                                }
                            })(V),
                        })
                      : (0, i.jsx)(s.y, { type: s.t.SPINNING_CIRCLE }),
              actions: [
                  { text: T.intl.string(T.t.XDpS4K), variant: "secondary", onClick: R },
                  {
                      text: T.intl.string(T.t["2+luBl"]),
                      variant: "primary",
                      disabled: X,
                      onClick: async () => {
                          if (null != l) {
                              let t = (0, h.jJ)(W, l.currency, G?.id);
                              null != G && G.id === l.paymentSourceId && t
                                  ? (await d.Ir(l, O, l.currency, G, k.ThZ.UNCANCEL_WINBACK_MODAL), D(!0))
                                  : (R(),
                                    (0, A.A)({
                                        initialPlanId: W,
                                        analyticsLocations: O,
                                        analyticsLocation: k.ThZ.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: w,
              children: (0, i.jsx)(_.l, {
                  currentUser: j,
                  premiumType: e,
                  onClose: R,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
