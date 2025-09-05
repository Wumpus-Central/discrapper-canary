n.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => j }), n(388685), n(415506);
var r = n(951288),
    a = n(647438),
    u = n(238651),
    o = n(512722),
    i = n.n(o),
    s = n(544891),
    c = n(355467),
    l = n(100527),
    _ = n(906732),
    p = n(211242),
    f = n(626135),
    O = n(74538),
    d = n(937615),
    b = n(374649),
    y = n(140465),
    E = n(230916),
    m = n(562218),
    w = n(284829),
    I = n(586920),
    C = n(45474),
    R = n(594135),
    v = n(881493),
    P = n(407965),
    S = n(501090),
    h = n(474936),
    D = n(981631),
    N = n(853141);
let T = [D.O0b.PAST_DUE, D.O0b.PAUSED, D.O0b.BILLING_RETRY],
    j = (e) => {
        var t, n, o;
        let { analyticsLocation: j, analyticsLocations: L, onClose: M, transitionState: g, premiumSubscription: A } = e,
            { initialStep: U } = e,
            k = a.useRef(new u.qA()),
            [x, F] = a.useState(null),
            W = null == (t = (0, O.Af)(A)) ? void 0 : t.planId,
            G = null != W ? O.ZP.getPremiumType(W) : null;
        i()(null != G, "Should not be cancelling Nitro without premiumType");
        let H = G === h.p9.TIER_0 || G === h.p9.TIER_1 || G === h.p9.TIER_2;
        null == U && (U = H ? C.R.WHAT_YOU_LOSE : C.R.CONFIRM);
        let [V, q, X, Y] = (0, S.q)(U, A, L),
            Z = (0, p.Q)(),
            B = (0, y.UV)(),
            { churnUserDiscountOffer: Q, isFetchingChurnDiscountOffer: z } = (0, y.WR)(
                !B || (A.status === D.O0b.CANCELED && V !== C.R.CONFIRM_DISCOUNT),
            ),
            J = (0, E._n)(A, h.Xh.PREMIUM_MONTH_TIER_2, Q),
            [K] = (0, b.ED)({
                subscriptionId: A.id,
                items: (0, O.Ue)(null != (o = null == (n = A.renewalMutations) ? void 0 : n.items) ? o : A.items),
                renewal: !0,
                analyticsLocations: L,
                analyticsLocation: l.Z.CANCEL_INVOICE_PREVIEW,
            }),
            $ = null !== K ? O.ZP.getIntervalForInvoice(K) : null,
            ee = (0, O.aS)(h.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: A.currency,
                paymentSourceId: A.paymentSourceId,
            }),
            et = (0, d.T4)(ee.amount, ee.currency),
            en = a.useCallback(() => {
                switch (V) {
                    case C.R.CONFIRM:
                        return (0, r.jsx)(m.G, {});
                    case C.R.CONFIRM_DISCOUNT:
                        return (0, r.jsx)(w.U, {});
                    case C.R.DISCOUNT_APPLIED:
                        return (0, r.jsx)(I.i, {});
                    case C.R.PREVIEW:
                        return (0, r.jsx)(v.w, {});
                    case C.R.WHAT_YOU_LOSE:
                    default:
                        return (0, r.jsx)(P.n, {});
                }
            }, [V]),
            er = a.useCallback(async () => {
                if (T.includes(A.status)) await (0, c.EO)(A.id, L, j);
                else {
                    var e, t;
                    let n = null != (t = null == (e = A.renewalMutations) ? void 0 : e.items) ? t : A.items,
                        r = (0, O.Ue)(n);
                    await (0, c.Mg)(
                        A,
                        { items: r },
                        {
                            amount: 0,
                            currency: A.currency,
                        },
                        (0, O.UX)(r, A.currency, A.paymentSourceId),
                        L,
                        j,
                    );
                }
            }, [A, L, j]),
            ea = async () => {
                if (null == Q) throw Error("Churn user discount offer is null");
                A.status === D.O0b.CANCELED
                    ? await (0, c.df)(A, Q)
                    : await s.tn.post({
                          url: D.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: Q.id },
                          rejectWithError: !0,
                      });
            };
        return (0, r.jsx)(_.Gt, {
            value: L,
            children: (0, r.jsxs)(R.D.Provider, {
                value: {
                    setStep: q,
                    premiumType: G,
                    onClose: () => {
                        M(),
                            f.default.track(
                                D.rMx.CANCELLATION_FLOW_STEP,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        from_step: C.O[V],
                                        to_step: null,
                                        step_duration_ms: Date.now() - X,
                                        flow_duration_ms: Date.now() - Y,
                                        location_stack: L,
                                    },
                                    (0, S.b)(A),
                                ),
                            );
                    },
                    transitionState: g,
                    premiumSubscription: A,
                    analyticsLocations: L,
                    analyticsLocation: j,
                    confettiCanvas: x,
                    churnUserDiscountOffer: Q,
                    isFetchingChurnDiscountOffer: B && z,
                    fullPrice: et,
                    discountedPrice: J,
                    planId: W,
                    paymentsBlocked: Z,
                    renewalInvoice: K,
                    renewalInvoiceDetails: $,
                    handleCancellation: er,
                    applyOffer: ea,
                },
                children: [
                    (0, r.jsx)(u.O_, {
                        ref: F,
                        className: N.confettiCanvas,
                        environment: k.current,
                    }),
                    en(),
                ],
            }),
        });
    };
