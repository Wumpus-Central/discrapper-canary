var i = e(477900),
    r = e(582128),
    a = e(284009),
    l = e.n(a),
    u = e(855986),
    c = e(189213),
    s = e(834730),
    o = e(289873),
    d = e(158032),
    m = e(155718),
    p = e(793574),
    y = e(688810),
    f = e(945897),
    I = e(803496),
    A = e(778705),
    C = e(287809),
    S = e(295405),
    N = e(97352),
    P = e(129230),
    b = e(879610),
    L = e(580630),
    h = e(83617),
    E = e(615396),
    U = e(543767),
    _ = e(736560),
    g = e(231308),
    M = e(682901),
    T = e(652215),
    k = e(792996);
e.d(
    n,
    {},
    {
        default: (t) => {
            let {
                    daysLeft: n,
                    premiumType: e,
                    premiumSubscription: a,
                    analyticsSource: v,
                    onClose: w,
                    transitionState: R,
                } = t,
                [x, D] = r.useState(!1),
                { analyticsLocations: O } = (0, y.Ay)(p.A.PREMIUM_UNCANCEL_MODAL),
                j = (0, u.bG)([C.default], () => {
                    let t = C.default.getCurrentUser();
                    return (l()(null != t, "ProfileItem: currentUser cannot be undefined"), t);
                }),
                G = (0, u.bG)(
                    [S.A],
                    () => (a?.paymentSourceId != null ? S.A.getPaymentSource(a.paymentSourceId) : null),
                    [a],
                ),
                W = a.items[0].planId,
                B = (0, b.mH)(M.hd[W].skuId),
                { priceOptions: K } = (0, I.A)({
                    activeSubscription: null,
                    skuIDs: [B],
                    paymentSourceId: a?.paymentSourceId,
                    isGift: !1,
                }),
                [z] = (0, U.YV)({
                    subscriptionId: a.id,
                    items: [{ planId: W, quantity: 1 }],
                    renewal: !0,
                    preventFetch: !K.loaded,
                    paymentSourceId: a?.paymentSourceId,
                    analyticsLocations: (0, y.Ay)(p.A.PREMIUM_UNCANCEL_MODAL),
                    analyticsLocation: p.A.PREMIUM_UNCANCEL_MODAL,
                }),
                F = (0, u.bG)([N.A], () => (0, E.c9)(W), [W]),
                H = (0, u.bG)([N.A], () => N.A.isFetchingForSKU(B)),
                X = z?.invoiceItems
                    ?.find((t) => t.subscriptionPlanId === W)
                    ?.discounts?.find((t) => t.type === m.iS.SUBSCRIPTION_PLAN)?.amount,
                $ = null != F ? (0, b.y8)(F.id, !1, !1, K) : null,
                J = null != $ && null != X ? (0, L.$g)($.amount - (X ?? 0), $.currency) : null,
                { intervalType: Y, intervalCount: Z } = b.Ay.getInterval(W),
                q = e === M.PremiumTypes.TIER_1,
                V = null != $ ? (0, L.$g)($.amount, $.currency) : null;
            return (r.useEffect(() => {
                P.default.track(T.HAw.OPEN_MODAL, { type: "Premium Uncancel Winback", source: v });
            }, [v]),
            x)
                ? (0, i.jsx)(c.a, {
                      actions: [],
                      onClose: w,
                      transitionState: R,
                      title: "",
                      children: (0, i.jsx)(f.M, {
                          activeSubscription: a,
                          stepConfigs: [],
                          skuIDs: [],
                          children: (0, i.jsx)(g.Ay, { planId: W, onClose: w, paymentSourceType: G?.type }),
                      }),
                  })
                : (0, i.jsx)(c.a, {
                      title: q
                          ? k.intl.formatToPlainString(k.t.Sngnzg, { daysLeft: n })
                          : k.intl.formatToPlainString(k.t.tdvIlU, { daysLeft: n }),
                      subtitle: q ? k.intl.format(k.t["6Su2Xb"], {}) : k.intl.format(k.t["lE+P8X"], {}),
                      size: "md",
                      onClose: w,
                      preview:
                          null !== V
                              ? (0, i.jsx)(s.E, {
                                    variant: "body-sm/normal",
                                    children: (function (t) {
                                        switch (Y) {
                                            case M.WT.YEAR:
                                                return q
                                                    ? k.intl.format(k.t.O7JRza, { price: t })
                                                    : k.intl.format(k.t["0y5kAG"], { price: t });
                                            case M.WT.MONTH:
                                                if (null != J)
                                                    return k.intl.format(k.t["1/ucvu"], {
                                                        discountPrice: J,
                                                        defaultPrice: t,
                                                    });
                                                if (q) return k.intl.format(k.t.rbwRlf, { price: t });
                                                if (1 === Z) return k.intl.format(k.t.C9oRCx, { price: t });
                                                return k.intl.format(k.t.TmmTgl, { price: t, intervalCount: Z });
                                            default:
                                                throw Error(`Unknown interval type ${Y}`);
                                        }
                                    })(V),
                                })
                              : (0, i.jsx)(o.y, { type: o.t.SPINNING_CIRCLE }),
                      actions: [
                          { text: k.intl.string(k.t.XDpS4K), variant: "secondary", onClick: w },
                          {
                              text: k.intl.string(k.t["2+luBl"]),
                              variant: "primary",
                              disabled: H,
                              onClick: async () => {
                                  if (null != a) {
                                      let t = (0, h.jJ)(W, a.currency, G?.id);
                                      null != G && G.id === a.paymentSourceId && t
                                          ? (await d.Ir(a, O, a.currency, G, T.ThZ.UNCANCEL_WINBACK_MODAL), D(!0))
                                          : (w(),
                                            (0, A.A)({
                                                initialPlanId: W,
                                                analyticsLocations: O,
                                                analyticsLocation: T.ThZ.UNCANCEL_WINBACK_MODAL,
                                            }));
                                  }
                              },
                          },
                      ],
                      transitionState: R,
                      children: (0, i.jsx)(_.l, {
                          currentUser: j,
                          premiumType: e,
                          onClose: w,
                          isDowngrade: !1,
                          isPremiumRebrand: !0,
                      }),
                  });
        },
    },
);
