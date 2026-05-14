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
    f = e(834252),
    I = e(853398),
    A = e(532794),
    C = e(287809),
    S = e(295405),
    P = e(97352),
    N = e(174459),
    L = e(428262),
    b = e(580630),
    E = e(83617),
    U = e(615396),
    _ = e(543767),
    g = e(137728),
    h = e(771566),
    M = e(788868),
    T = e(652215),
    k = e(375708);
let v = (t) => {
    let { daysLeft: n, premiumType: e, premiumSubscription: l, analyticsSource: v, onClose: x, transitionState: w } = t,
        [R, D] = r.useState(!1),
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
        [z] = (0, _.YV)({
            subscriptionId: l.id,
            items: [{ planId: W, quantity: 1 }],
            renewal: !0,
            paymentSourceId: l?.paymentSourceId,
            currency: K.currency,
            analyticsLocations: (0, y.Ay)(p.A.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: p.A.PREMIUM_UNCANCEL_MODAL,
        }),
        H = (0, c.bG)([P.A], () => (0, U.c9)(W), [W]),
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
        N.default.track(T.HAw.OPEN_MODAL, { type: "Premium Uncancel Winback", source: v });
    }, [v]),
    R)
        ? (0, i.jsx)(u.Modal, {
              actions: [],
              onClose: x,
              transitionState: w,
              title: "",
              children: (0, i.jsx)(f.PaymentContextProvider, {
                  activeSubscription: l,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, i.jsx)(h.Ay, { planId: W, onClose: x, paymentSourceType: G?.type }),
              }),
          })
        : (0, i.jsx)(u.Modal, {
              title: q
                  ? k.intl.formatToPlainString(k.t.Sngnzg, { daysLeft: n })
                  : k.intl.formatToPlainString(k.t.tdvIlU, { daysLeft: n }),
              subtitle: q ? k.intl.format(k.t["6Su2Xb"], {}) : k.intl.format(k.t["lE+P8X"], {}),
              size: "md",
              onClose: x,
              preview:
                  null !== V
                      ? (0, i.jsx)(o.E, {
                            variant: "text-sm/normal",
                            children: (function (t) {
                                switch (Y) {
                                    case M.WT.YEAR:
                                        return q
                                            ? k.intl.format(k.t.O7JRza, { price: t })
                                            : k.intl.format(k.t["0y5kAG"], { price: t });
                                    case M.WT.MONTH:
                                        if (null != J)
                                            return k.intl.format(k.t["1/ucvu"], { discountPrice: J, defaultPrice: t });
                                        if (q) return k.intl.format(k.t.rbwRlf, { price: t });
                                        if (1 === Z) return k.intl.format(k.t.C9oRCx, { price: t });
                                        return k.intl.format(k.t.TmmTgl, { price: t, intervalCount: Z });
                                    default:
                                        throw Error(`Unknown interval type ${Y}`);
                                }
                            })(V),
                        })
                      : (0, i.jsx)(s.y, { type: s.t.SPINNING_CIRCLE }),
              actions: [
                  { text: k.intl.string(k.t.XDpS4K), variant: "secondary", onClick: x },
                  {
                      text: k.intl.string(k.t["2+luBl"]),
                      variant: "primary",
                      disabled: X,
                      onClick: async () => {
                          if (null != l) {
                              let t = (0, E.jJ)(W, l.currency, G?.id);
                              null != G && G.id === l.paymentSourceId && t
                                  ? (await d.Ir(l, O, l.currency, G, T.ThZ.UNCANCEL_WINBACK_MODAL), D(!0))
                                  : (x(),
                                    (0, A.A)({
                                        initialPlanId: W,
                                        analyticsLocations: O,
                                        analyticsLocation: T.ThZ.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: w,
              children: (0, i.jsx)(g.l, {
                  currentUser: j,
                  premiumType: e,
                  onClose: x,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
