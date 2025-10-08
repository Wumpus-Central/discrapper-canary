n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => U }), n(388685), n(415506);
var a = n(951288),
    r = n(647438),
    i = n(238651),
    l = n(512722),
    s = n.n(l),
    u = n(544891),
    o = n(355467),
    c = n(100527),
    d = n(906732),
    m = n(211242),
    O = n(845220),
    _ = n(626135),
    f = n(74538),
    E = n(937615),
    p = n(374649),
    S = n(140465),
    y = n(230916),
    b = n(398775),
    C = n(562218),
    P = n(284829),
    R = n(586920),
    v = n(45474),
    I = n(594135),
    T = n(881493),
    w = n(407965),
    A = n(501090),
    D = n(323321),
    h = n(474936),
    N = n(981631),
    M = n(853141);
function g(t) {
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
let L = [N.O0b.PAST_DUE, N.O0b.PAUSED, N.O0b.BILLING_RETRY],
    U = (t) => {
        var e, n, l;
        let { analyticsLocation: U, analyticsLocations: k, onClose: x, transitionState: j, premiumSubscription: F } = t,
            { initialStep: W } = t,
            B = r.useRef(new i.qA()),
            [X, Y] = r.useState(null),
            G = null == (e = (0, f.Af)(F)) ? void 0 : e.planId,
            H = null != G ? f.ZP.getPremiumType(G) : null;
        s()(null != H, "Should not be cancelling Nitro without premiumType");
        let V = H === h.PremiumTypes.TIER_0 || H === h.PremiumTypes.TIER_1 || H === h.PremiumTypes.TIER_2;
        null == W && (W = V ? v.R.WHAT_YOU_LOSE : v.R.CONFIRM);
        let [Z, q, z, Q] = (0, A.q)(W, F, k),
            K = (0, m.Q)(),
            J = (0, S.UV)(),
            { churnUserDiscountOffer: $, isFetchingChurnDiscountOffer: tt } = (0, S.WR)(
                !J || (F.status === N.O0b.CANCELED && Z !== v.R.CONFIRM_DISCOUNT),
            ),
            te = (0, y._n)(F, h.Xh.PREMIUM_MONTH_TIER_2, $),
            [tn] = (0, p.ED)({
                subscriptionId: F.id,
                items: (0, f.Ue)(null != (l = null == (n = F.renewalMutations) ? void 0 : n.items) ? l : F.items),
                renewal: !0,
                analyticsLocations: k,
                analyticsLocation: c.Z.CANCEL_INVOICE_PREVIEW,
            }),
            ta = null !== tn ? f.ZP.getIntervalForInvoice(tn) : null,
            tr = (0, f.aS)(h.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: F.currency,
                paymentSourceId: F.paymentSourceId,
            }),
            ti = (0, E.T4)(tr.amount, tr.currency),
            tl = r.useMemo(() => (0, O.b)(), []);
        r.useEffect(() => {
            _.default.track(
                N.rMx.CANCELLATION_FLOW_STARTED,
                g(
                    {
                        location_stack: k,
                        load_id: tl,
                    },
                    (0, D.v)(F),
                ),
            );
        }, [k, F, tl]);
        let [ts, tu] = r.useState(null),
            to = r.useCallback(() => {
                switch (Z) {
                    case v.R.CONFIRM:
                        return (0, a.jsx)(C.G, {});
                    case v.R.CONFIRM_DISCOUNT:
                        return (0, a.jsx)(P.U, {});
                    case v.R.DISCOUNT_APPLIED:
                        return (0, a.jsx)(R.i, {});
                    case v.R.PREVIEW:
                        return (0, a.jsx)(T.w, {});
                    case v.R.PAUSE_SELECT:
                        return (0, a.jsx)(b.PremiumSubscriptionPauseModalSelect, {});
                    case v.R.PAUSE_CONFIRM:
                        return (0, a.jsx)(b.Sz, {});
                    case v.R.WHAT_YOU_LOSE:
                    default:
                        return (0, a.jsx)(w.n, {});
                }
            }, [Z]),
            tc = r.useCallback(async () => {
                if (
                    (_.default.track(
                        N.rMx.CANCELLATION_FLOW_COMPLETED,
                        g(
                            {
                                location_stack: k,
                                load_id: tl,
                            },
                            (0, D.v)(F),
                        ),
                    ),
                    L.includes(F.status))
                )
                    await (0, o.EO)(F.id, k, U);
                else {
                    var t, e;
                    let n = null != (e = null == (t = F.renewalMutations) ? void 0 : t.items) ? e : F.items,
                        a = (0, f.Ue)(n);
                    await (0, o.Mg)(
                        F,
                        { items: a },
                        {
                            amount: 0,
                            currency: F.currency,
                        },
                        (0, f.UX)(a, F.currency, F.paymentSourceId),
                        k,
                        U,
                    );
                }
            }, [F, k, U, tl]),
            td = async () => {
                if (null == $) throw Error("Churn user discount offer is null");
                F.status === N.O0b.CANCELED
                    ? await (0, o.df)(F, $)
                    : await u.tn.post({
                          url: N.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: $.id },
                          rejectWithError: !0,
                      });
            };
        return (0, a.jsx)(d.Gt, {
            value: k,
            children: (0, a.jsxs)(I.CancellationContext.Provider, {
                value: {
                    setStep: q,
                    premiumType: H,
                    onClose: () => {
                        x(),
                            _.default.track(
                                N.rMx.CANCELLATION_FLOW_STEP,
                                g(
                                    {
                                        from_step: v.O[Z],
                                        to_step: null,
                                        step_duration_ms: Date.now() - z,
                                        flow_duration_ms: Date.now() - Q,
                                        location_stack: k,
                                        load_id: tl,
                                    },
                                    (0, D.v)(F),
                                ),
                            );
                    },
                    transitionState: j,
                    premiumSubscription: F,
                    analyticsLocations: k,
                    analyticsLocation: U,
                    confettiCanvas: X,
                    churnUserDiscountOffer: $,
                    isFetchingChurnDiscountOffer: J && tt,
                    fullPrice: ti,
                    discountedPrice: te,
                    planId: G,
                    paymentsBlocked: K,
                    renewalInvoice: tn,
                    renewalInvoiceDetails: ta,
                    handleCancellation: tc,
                    applyOffer: td,
                    pauseDuration: ts,
                    setPauseDuration: tu,
                },
                children: [
                    (0, a.jsx)(i.O_, {
                        ref: Y,
                        className: M.confettiCanvas,
                        environment: B.current,
                    }),
                    to(),
                ],
            }),
        });
    };
