n.d(e, { default: () => U });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    l = n.n(a),
    o = n(158954),
    u = n(311907),
    c = n(397927),
    s = n(158032),
    d = n(155718),
    _ = n(793574),
    p = n(688810),
    m = n(156312),
    y = n(853398),
    f = n(532794),
    C = n(287809),
    I = n(295405),
    A = n(97352),
    b = n(954571),
    S = n(927578),
    P = n(580630),
    g = n(83617),
    x = n(615396),
    L = n(543767),
    v = n(96304),
    N = n(380083),
    h = n(788868),
    E = n(652215),
    M = n(985018);
let U = (t) => {
    let { daysLeft: e, premiumType: n, premiumSubscription: a, analyticsSource: U, onClose: k, transitionState: w } = t,
        [T, D] = i.useState(!1),
        { analyticsLocations: O } = (0, p.Ay)(_.A.PREMIUM_UNCANCEL_MODAL),
        R = (0, u.bG)([C.default], () => {
            let t = C.default.getCurrentUser();
            return l()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
        }),
        G = (0, u.bG)([I.A], () => (a?.paymentSourceId != null ? I.A.getPaymentSource(a.paymentSourceId) : null), [a]),
        j = a.items[0].planId,
        B = (0, S.mH)(h.hd[j].skuId),
        { priceOptions: q } = (0, y.A)({
            activeSubscription: null,
            skuIDs: [B],
            paymentSourceId: a?.paymentSourceId,
            isGift: !1,
        }),
        [K] = (0, L.Kq)({
            subscriptionId: a.id,
            items: [{ planId: j, quantity: 1 }],
            renewal: !0,
            paymentSourceId: a?.paymentSourceId,
            currency: q.currency,
            analyticsLocations: (0, p.Ay)(_.A.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: _.A.PREMIUM_UNCANCEL_MODAL,
        }),
        W = (0, u.bG)([A.A], () => (0, x.c9)(j), [j]),
        z = (0, u.bG)([A.A], () => A.A.isFetchingForSKU(B)),
        $ = K?.invoiceItems
            ?.find((t) => t.subscriptionPlanId === j)
            ?.discounts?.find((t) => t.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
        F = null != W ? (0, S.y8)(W.id, !1, !1, q) : null,
        H = null != F && null != $ ? (0, P.$g)(F.amount - ($ ?? 0), F.currency) : null,
        { intervalType: X, intervalCount: J } = S.Ay.getInterval(j),
        Z = n === h.PremiumTypes.TIER_1,
        Q = null != F ? (0, P.$g)(F.amount, F.currency) : null;
    return (i.useEffect(() => {
        b.default.track(E.HAw.OPEN_MODAL, { type: "Premium Uncancel Winback", source: U });
    }, [U]),
    T)
        ? (0, r.jsx)(o.Modal, {
              actions: [],
              onClose: k,
              transitionState: w,
              title: "",
              children: (0, r.jsx)(m.PaymentContextProvider, {
                  activeSubscription: a,
                  stepConfigs: [],
                  skuIDs: [],
                  children: (0, r.jsx)(N.Ay, { planId: j, onClose: k, paymentSourceType: G?.type }),
              }),
          })
        : (0, r.jsx)(o.Modal, {
              title: Z
                  ? M.intl.formatToPlainString(M.t.Sngnzg, { daysLeft: e })
                  : M.intl.formatToPlainString(M.t.tdvIlU, { daysLeft: e }),
              subtitle: Z ? M.intl.format(M.t["6Su2Xb"], {}) : M.intl.format(M.t["lE+P8X"], {}),
              size: "md",
              onClose: k,
              preview:
                  null !== Q
                      ? (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: (function (t) {
                                switch (X) {
                                    case h.WT.YEAR:
                                        return Z
                                            ? M.intl.format(M.t.O7JRza, { price: t })
                                            : M.intl.format(M.t["0y5kAG"], { price: t });
                                    case h.WT.MONTH:
                                        if (null != H)
                                            return M.intl.format(M.t["1/ucvu"], { discountPrice: H, defaultPrice: t });
                                        if (Z) return M.intl.format(M.t.rbwRlf, { price: t });
                                        if (1 === J) return M.intl.format(M.t.C9oRCx, { price: t });
                                        return M.intl.format(M.t.TmmTgl, { price: t, intervalCount: J });
                                    default:
                                        throw Error(`Unknown interval type ${X}`);
                                }
                            })(Q),
                        })
                      : (0, r.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE }),
              actions: [
                  { text: M.intl.string(M.t.XDpS4K), variant: "secondary", onClick: k },
                  {
                      text: M.intl.string(M.t["2+luBl"]),
                      variant: "primary",
                      disabled: z,
                      onClick: async () => {
                          if (null != a) {
                              let t = (0, g.jJ)(j, a.currency, G?.id);
                              null != G && G.id === a.paymentSourceId && t
                                  ? (await s.Ir(a, O, a.currency, G, E.ThZ.UNCANCEL_WINBACK_MODAL), D(!0))
                                  : (k(),
                                    (0, f.A)({
                                        initialPlanId: j,
                                        analyticsLocations: O,
                                        analyticsLocation: E.ThZ.UNCANCEL_WINBACK_MODAL,
                                    }));
                          }
                      },
                  },
              ],
              transitionState: w,
              children: (0, r.jsx)(v.l, {
                  currentUser: R,
                  premiumType: n,
                  onClose: k,
                  isDowngrade: !1,
                  isPremiumRebrand: !0,
              }),
          });
};
