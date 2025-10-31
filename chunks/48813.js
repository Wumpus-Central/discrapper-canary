n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => k }), n(388685), n(415506);
var a = n(951288),
    r = n(647438),
    i = n(238651),
    l = n(512722),
    o = n.n(l),
    s = n(544891),
    c = n(355467),
    u = n(100527),
    d = n(906732),
    _ = n(211242),
    m = n(845220),
    O = n(626135),
    f = n(74538),
    E = n(937615),
    p = n(374649),
    y = n(140465),
    b = n(230916),
    S = n(398775),
    C = n(562218),
    P = n(284829),
    T = n(586920),
    v = n(45474),
    R = n(594135),
    I = n(881493),
    w = n(407965),
    A = n(501090),
    D = n(323321),
    h = n(474936),
    x = n(981631),
    N = n(320150);
function M(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            a.forEach(function (e) {
                var a;
                (a = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = a);
            });
    }
    return t;
}
let g = [x.O0b.PAST_DUE, x.O0b.PAUSED, x.O0b.BILLING_RETRY],
    k = (t) => {
        var e, n, l;
        let { analyticsLocation: k, analyticsLocations: L, onClose: U, transitionState: j, premiumSubscription: F } = t,
            { initialStep: W } = t,
            B = r.useRef(new i.qA()),
            [G, Y] = r.useState(null),
            H = null == (e = (0, f.Af)(F)) ? void 0 : e.planId,
            V = null != H ? f.ZP.getPremiumType(H) : null;
        o()(null != V, "Should not be cancelling Nitro without premiumType");
        let X = V === h.PremiumTypes.TIER_0 || V === h.PremiumTypes.TIER_1 || V === h.PremiumTypes.TIER_2;
        null == W && (W = X ? v.R.WHAT_YOU_LOSE : v.R.CONFIRM);
        let [Z, q, z, K] = (0, A.q)(W, F, L),
            Q = (0, _.Q)(),
            J = (0, y.UV)(),
            { churnUserDiscountOffer: $, isFetchingChurnDiscountOffer: tt } = (0, y.WR)(
                !J || (F.status === x.O0b.CANCELED && Z !== v.R.CONFIRM_DISCOUNT),
            ),
            te = (0, b._n)(F, h.Xh.PREMIUM_MONTH_TIER_2, $),
            [tn] = (0, p.ED)({
                subscriptionId: F.id,
                items: (0, f.Ue)(null != (l = null == (n = F.renewalMutations) ? void 0 : n.items) ? l : F.items),
                renewal: !0,
                analyticsLocations: L,
                analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW,
            }),
            ta = null !== tn ? f.ZP.getIntervalForInvoice(tn) : null,
            tr = (0, f.aS)(h.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: F.currency,
                paymentSourceId: F.paymentSourceId,
            }),
            ti = (0, E.T4)(tr.amount, tr.currency),
            tl = r.useMemo(() => (0, m.b)(), []);
        r.useEffect(() => {
            O.default.track(
                x.rMx.CANCELLATION_FLOW_STARTED,
                M(
                    {
                        location_stack: L,
                        load_id: tl,
                    },
                    (0, D.v)(F),
                ),
            );
        }, [L, F, tl]);
        let [to, ts] = r.useState(null),
            tc = r.useCallback(() => {
                switch (Z) {
                    case v.R.CONFIRM:
                        return (0, a.jsx)(C.G, {});
                    case v.R.CONFIRM_DISCOUNT:
                        return (0, a.jsx)(P.U, {});
                    case v.R.DISCOUNT_APPLIED:
                        return (0, a.jsx)(T.i, {});
                    case v.R.PREVIEW:
                        return (0, a.jsx)(I.w, {});
                    case v.R.PAUSE_SELECT:
                        return (0, a.jsx)(S.PremiumSubscriptionPauseModalSelect, {});
                    case v.R.PAUSE_CONFIRM:
                        return (0, a.jsx)(S.Sz, {});
                    case v.R.WHAT_YOU_LOSE:
                    default:
                        return (0, a.jsx)(w.n, {});
                }
            }, [Z]),
            tu = r.useCallback(async () => {
                if (
                    (O.default.track(
                        x.rMx.CANCELLATION_FLOW_COMPLETED,
                        M(
                            {
                                location_stack: L,
                                load_id: tl,
                            },
                            (0, D.v)(F),
                        ),
                    ),
                    g.includes(F.status))
                )
                    await (0, c.EO)(F.id, L, k);
                else {
                    var t, e;
                    let n = null != (e = null == (t = F.renewalMutations) ? void 0 : t.items) ? e : F.items,
                        a = (0, f.Ue)(n);
                    await (0, c.Mg)(
                        F,
                        { items: a },
                        {
                            amount: 0,
                            currency: F.currency,
                        },
                        (0, f.UX)(a, F.currency, F.paymentSourceId),
                        L,
                        k,
                    );
                }
            }, [F, L, k, tl]),
            td = async () => {
                if (null == $) throw Error("Churn user discount offer is null");
                F.status === x.O0b.CANCELED
                    ? await (0, c.df)(F, $)
                    : await s.tn.post({
                          url: x.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: $.id },
                          rejectWithError: !0,
                      });
            };
        return (0, a.jsx)(d.Gt, {
            value: L,
            children: (0, a.jsxs)(R.CancellationContext.Provider, {
                value: {
                    setStep: q,
                    premiumType: V,
                    onClose: () => {
                        U(),
                            O.default.track(
                                x.rMx.CANCELLATION_FLOW_STEP,
                                M(
                                    {
                                        from_step: v.O[Z],
                                        to_step: null,
                                        step_duration_ms: Date.now() - z,
                                        flow_duration_ms: Date.now() - K,
                                        location_stack: L,
                                        load_id: tl,
                                    },
                                    (0, D.v)(F),
                                ),
                            );
                    },
                    transitionState: j,
                    premiumSubscription: F,
                    analyticsLocations: L,
                    analyticsLocation: k,
                    confettiCanvas: G,
                    churnUserDiscountOffer: $,
                    isFetchingChurnDiscountOffer: J && tt,
                    fullPrice: ti,
                    discountedPrice: te,
                    planId: H,
                    paymentsBlocked: Q,
                    renewalInvoice: tn,
                    renewalInvoiceDetails: ta,
                    handleCancellation: tu,
                    applyOffer: td,
                    pauseDuration: to,
                    setPauseDuration: ts,
                },
                children: [
                    (0, a.jsx)(i.O_, {
                        ref: Y,
                        className: N.confettiCanvas,
                        environment: B.current,
                    }),
                    tc(),
                ],
            }),
        });
    };
