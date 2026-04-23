a.d(t, { default: () => T });
var r = a(627968),
    n = a(64700),
    i = a(284009),
    l = a.n(i),
    s = a(189213),
    o = a(17928),
    _ = a(834730),
    c = a(289873),
    d = a(158032),
    u = a(155718),
    m = a(793574),
    p = a(688810),
    C = a(156312),
    f = a(853398),
    x = a(532794),
    y = a(287809),
    b = a(295405),
    g = a(97352),
    I = a(954571),
    h = a(927578),
    v = a(580630),
    A = a(83617),
    N = a(615396),
    S = a(543767),
    j = a(380124),
    E = a(771566),
    M = a(788868),
    P = a(652215),
    L = a(985018);
let T = (e) => {
    let { daysLeft: t, premiumType: a, premiumSubscription: i, analyticsSource: T, onClose: U, transitionState: w } = e,
        [k, D] = n.useState(!1),
        { analyticsLocations: O } = (0, p.Ay)(m.A.PREMIUM_UNCANCEL_MODAL),
        R = (0, o.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        }),
        F = (0, o.bG)([b.A], () => (i?.paymentSourceId != null ? b.A.getPaymentSource(i.paymentSourceId) : null), [i]),
        G = i.items[0].planId,
        z = (0, h.mH)(M.hd[G].skuId),
        { priceOptions: B } = (0, f.A)({
            activeSubscription: null,
            skuIDs: [z],
            paymentSourceId: i?.paymentSourceId,
            isGift: !1,
        }),
        [H] = (0, S.Kq)({
            subscriptionId: i.id,
            items: [{ planId: G, quantity: 1 }],
            renewal: !0,
            paymentSourceId: i?.paymentSourceId,
            currency: B.currency,
            analyticsLocations: (0, p.Ay)(m.A.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: m.A.PREMIUM_UNCANCEL_MODAL,
        }),
        K = (0, o.bG)([g.A], () => (0, N.c9)(G), [G]),
        W = (0, o.bG)([g.A], () => g.A.isFetchingForSKU(z)),
        Z = H?.invoiceItems
            ?.find((e) => e.subscriptionPlanId === G)
            ?.discounts?.find((e) => e.type === u.iS.SUBSCRIPTION_PLAN)?.amount,
        $ = null != K ? (0, h.y8)(K.id, !1, !1, B) : null,
        q = null != $ && null != Z ? (0, v.$g)($.amount - (Z ?? 0), $.currency) : null,
        { intervalType: X, intervalCount: V } = h.Ay.getInterval(G),
        Y = a === M.PremiumTypes.TIER_1,
        J = null != $ ? (0, v.$g)($.amount, $.currency) : null;
    return (n.useEffect(() => {
        I.default.track(P.HAw.OPEN_MODAL, { type: "Premium Uncancel Winback", source: T });
    }, [T]),
    k)
        ? (0, r.jsx)(s.Modal, {
              actions: [],
              onClose: U,
              transitionState: w,
              title: "",
              children: (0, r.jsx)(C.PaymentContextProvider, {
                  activeSubscription: i,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, r.jsx)(E.Ay, { planId: G, onClose: U, paymentSourceType: F?.type }),
              }),
          })
        : (0, r.jsx)(s.Modal, {
              title: Y
                  ? L.intl.formatToPlainString(L.t.Sngnzg, { daysLeft: t })
                  : L.intl.formatToPlainString(L.t.tdvIlU, { daysLeft: t }),
              subtitle: Y ? L.intl.format(L.t["6Su2Xb"], {}) : L.intl.format(L.t["lE+P8X"], {}),
              size: "md",
              onClose: U,
              preview:
                  null !== J
                      ? (0, r.jsx)(_.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                switch (X) {
                                    case M.WT.YEAR:
                                        return Y
                                            ? L.intl.format(L.t.O7JRza, { price: e })
                                            : L.intl.format(L.t["0y5kAG"], { price: e });
                                    case M.WT.MONTH:
                                        if (null != q)
                                            return L.intl.format(L.t["1/ucvu"], { discountPrice: q, defaultPrice: e });
                                        if (Y) return L.intl.format(L.t.rbwRlf, { price: e });
                                        if (1 === V) return L.intl.format(L.t.C9oRCx, { price: e });
                                        return L.intl.format(L.t.TmmTgl, { price: e, intervalCount: V });
                                    default:
                                        throw Error(`Unknown interval type ${X}`);
                                }
                            })(J),
                        })
                      : (0, r.jsx)(c.y, { type: c.t.SPINNING_CIRCLE }),
              actions: [
                  { text: L.intl.string(L.t.XDpS4K), variant: "secondary", onClick: U },
                  {
                      text: L.intl.string(L.t["2+luBl"]),
                      variant: "primary",
                      disabled: W,
                      onClick: async () => {
                          if (null != i) {
                              let e = (0, A.jJ)(G, i.currency, F?.id);
                              null != F && F.id === i.paymentSourceId && e
                                  ? (await d.Ir(i, O, i.currency, F, P.ThZ.UNCANCEL_WINBACK_MODAL), D(!0))
                                  : (U(),
                                    (0, x.A)({
                                        initialPlanId: G,
                                        analyticsLocations: O,
                                        analyticsLocation: P.ThZ.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: w,
              children: (0, r.jsx)(j.l, {
                  currentUser: R,
                  premiumType: a,
                  onClose: U,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
