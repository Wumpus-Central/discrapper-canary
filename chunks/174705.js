r.d(t, { default: () => w });
var n = r(627968),
    a = r(64700),
    i = r(284009),
    l = r.n(i),
    o = r(189213),
    s = r(311907),
    _ = r(834730),
    u = r(289873),
    c = r(158032),
    d = r(155718),
    m = r(793574),
    p = r(688810),
    C = r(156312),
    y = r(853398),
    f = r(532794),
    I = r(287809),
    b = r(295405),
    g = r(97352),
    A = r(954571),
    h = r(927578),
    x = r(580630),
    v = r(83617),
    S = r(615396),
    N = r(543767),
    E = r(96304),
    M = r(380083),
    P = r(788868),
    L = r(652215),
    T = r(985018);
let w = (e) => {
    let { daysLeft: t, premiumType: r, premiumSubscription: i, analyticsSource: w, onClose: U, transitionState: j } = e,
        [k, D] = a.useState(!1),
        { analyticsLocations: G } = (0, p.Ay)(m.A.PREMIUM_UNCANCEL_MODAL),
        F = (0, s.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        }),
        R = (0, s.bG)([b.A], () => (i?.paymentSourceId != null ? b.A.getPaymentSource(i.paymentSourceId) : null), [i]),
        O = i.items[0].planId,
        B = (0, h.mH)(P.hd[O].skuId),
        { priceOptions: K } = (0, y.A)({
            activeSubscription: null,
            skuIDs: [B],
            paymentSourceId: i?.paymentSourceId,
            isGift: !1,
        }),
        [W] = (0, N.Kq)({
            subscriptionId: i.id,
            items: [{ planId: O, quantity: 1 }],
            renewal: !0,
            paymentSourceId: i?.paymentSourceId,
            currency: K.currency,
            analyticsLocations: (0, p.Ay)(m.A.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: m.A.PREMIUM_UNCANCEL_MODAL,
        }),
        z = (0, s.bG)([g.A], () => (0, S.c9)(O), [O]),
        H = (0, s.bG)([g.A], () => g.A.isFetchingForSKU(B)),
        Z = W?.invoiceItems
            ?.find((e) => e.subscriptionPlanId === O)
            ?.discounts?.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
        q = null != z ? (0, h.y8)(z.id, !1, !1, K) : null,
        $ = null != q && null != Z ? (0, x.$g)(q.amount - (Z ?? 0), q.currency) : null,
        { intervalType: X, intervalCount: Y } = h.Ay.getInterval(O),
        V = r === P.PremiumTypes.TIER_1,
        J = null != q ? (0, x.$g)(q.amount, q.currency) : null;
    return (a.useEffect(() => {
        A.default.track(L.HAw.OPEN_MODAL, { type: "Premium Uncancel Winback", source: w });
    }, [w]),
    k)
        ? (0, n.jsx)(o.Modal, {
              actions: [],
              onClose: U,
              transitionState: j,
              title: "",
              children: (0, n.jsx)(C.PaymentContextProvider, {
                  activeSubscription: i,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, n.jsx)(M.Ay, { planId: O, onClose: U, paymentSourceType: R?.type }),
              }),
          })
        : (0, n.jsx)(o.Modal, {
              title: V
                  ? T.intl.formatToPlainString(T.t.Sngnzg, { daysLeft: t })
                  : T.intl.formatToPlainString(T.t.tdvIlU, { daysLeft: t }),
              subtitle: V ? T.intl.format(T.t["6Su2Xb"], {}) : T.intl.format(T.t["lE+P8X"], {}),
              size: "md",
              onClose: U,
              preview:
                  null !== J
                      ? (0, n.jsx)(_.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                switch (X) {
                                    case P.WT.YEAR:
                                        return V
                                            ? T.intl.format(T.t.O7JRza, { price: e })
                                            : T.intl.format(T.t["0y5kAG"], { price: e });
                                    case P.WT.MONTH:
                                        if (null != $)
                                            return T.intl.format(T.t["1/ucvu"], { discountPrice: $, defaultPrice: e });
                                        if (V) return T.intl.format(T.t.rbwRlf, { price: e });
                                        if (1 === Y) return T.intl.format(T.t.C9oRCx, { price: e });
                                        return T.intl.format(T.t.TmmTgl, { price: e, intervalCount: Y });
                                    default:
                                        throw Error(`Unknown interval type ${X}`);
                                }
                            })(J),
                        })
                      : (0, n.jsx)(u.y, { type: u.t.SPINNING_CIRCLE }),
              actions: [
                  { text: T.intl.string(T.t.XDpS4K), variant: "secondary", onClick: U },
                  {
                      text: T.intl.string(T.t["2+luBl"]),
                      variant: "primary",
                      disabled: H,
                      onClick: async () => {
                          if (null != i) {
                              let e = (0, v.jJ)(O, i.currency, R?.id);
                              null != R && R.id === i.paymentSourceId && e
                                  ? (await c.Ir(i, G, i.currency, R, L.ThZ.UNCANCEL_WINBACK_MODAL), D(!0))
                                  : (U(),
                                    (0, f.A)({
                                        initialPlanId: O,
                                        analyticsLocations: G,
                                        analyticsLocation: L.ThZ.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: j,
              children: (0, n.jsx)(E.l, {
                  currentUser: F,
                  premiumType: r,
                  onClose: U,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
