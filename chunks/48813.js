(n.d(t, { I: () => R }), n(388685), n(415506));
var r = n(255367),
    i = n(73800),
    a = n(505266),
    s = n(512722),
    o = n.n(s),
    l = n(544891),
    c = n(355467),
    u = n(100527),
    d = n(906732),
    m = n(211242),
    p = n(626135),
    _ = n(74538),
    f = n(937615),
    b = n(374649),
    x = n(140465),
    y = n(230916),
    h = n(562218),
    C = n(284829),
    j = n(586920),
    E = n(45474),
    O = n(594135),
    P = n(881493),
    g = n(407965),
    v = n(501090),
    N = n(474936),
    I = n(981631),
    T = n(301692);
let S = [I.O0b.PAST_DUE, I.O0b.PAUSED, I.O0b.BILLING_RETRY],
    R = (e) => {
        var t, n, s;
        let { analyticsLocation: R, analyticsLocations: w, onClose: D, transitionState: k, premiumSubscription: A, discountPrimary: L } = e,
            { initialStep: M } = e,
            U = i.useRef(new a.qA()),
            [B, Z] = i.useState(null),
            z = null == (t = (0, _.Af)(A)) ? void 0 : t.planId,
            F = null != z ? _.ZP.getPremiumType(z) : null;
        o()(null != F, 'Should not be cancelling Nitro without premiumType');
        let Y = F === N.p9.TIER_0 || F === N.p9.TIER_1 || F === N.p9.TIER_2;
        null == M && (M = Y ? E.R.WHAT_YOU_LOSE : E.R.CONFIRM);
        let [H, W, X, q] = (0, v.q)(M, A, w),
            V = (0, m.Q)(),
            G = (0, x.UV)(),
            { churnUserDiscountOffer: K, isFetchingChurnDiscountOffer: J } = (0, x.WR)(!G || H !== E.R.WHAT_YOU_LOSE),
            Q = (0, y._)(A, N.Xh.PREMIUM_MONTH_TIER_2, K),
            [$] = (0, b.ED)({
                subscriptionId: A.id,
                items: (0, _.Ue)(null != (s = null == (n = A.renewalMutations) ? void 0 : n.items) ? s : A.items),
                renewal: !0,
                analyticsLocations: w,
                analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW
            }),
            ee = null !== $ ? _.ZP.getIntervalForInvoice($) : null,
            et = (0, _.aS)(N.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: A.currency,
                paymentSourceId: A.paymentSourceId
            }),
            en = (0, f.T4)(et.amount, et.currency),
            er = (e) => {
                (D(),
                    p.default.track(
                        I.rMx.CANCELLATION_FLOW_STEP,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })(
                            {
                                from_step: E.O[e],
                                to_step: null,
                                step_duration_ms: Date.now() - X,
                                flow_duration_ms: Date.now() - q,
                                location_stack: w
                            },
                            (0, v.b)(A)
                        )
                    ));
            },
            ei = i.useCallback(() => {
                switch (H) {
                    case E.R.CONFIRM:
                        return (0, r.jsx)(h.G, {});
                    case E.R.CONFIRM_DISCOUNT:
                        return (0, r.jsx)(C.U, {});
                    case E.R.DISCOUNT_APPLIED:
                        return (0, r.jsx)(j.i, {});
                    case E.R.PREVIEW:
                        return (0, r.jsx)(P.w, {});
                    case E.R.WHAT_YOU_LOSE:
                    default:
                        return (0, r.jsx)(g.n, {});
                }
            }, [H]),
            ea = i.useCallback(async () => {
                if (S.includes(A.status)) await (0, c.EO)(A.id, w, R);
                else {
                    var e, t;
                    let n = null != (t = null == (e = A.renewalMutations) ? void 0 : e.items) ? t : A.items,
                        r = (0, _.Ue)(n);
                    await (0, c.Mg)(
                        A,
                        { items: r },
                        {
                            amount: 0,
                            currency: A.currency
                        },
                        (0, _.UX)(r, A.currency, A.paymentSourceId),
                        w,
                        R
                    );
                }
            }, [A, w, R]),
            es = i.useCallback(async () => {
                if (null == K) throw Error('Churn user discount offer is null');
                await l.tn.post({
                    url: I.ANM.USER_OFFER_REDEEM,
                    body: { user_discount_offer_id: K.id },
                    rejectWithError: !0
                });
            }, [K]);
        return (0, r.jsx)(d.Gt, {
            value: w,
            children: (0, r.jsxs)(O.D.Provider, {
                value: {
                    setStep: W,
                    premiumType: F,
                    onClose: () => er(H),
                    transitionState: k,
                    premiumSubscription: A,
                    analyticsLocations: w,
                    analyticsLocation: R,
                    confettiCanvas: B,
                    discountPrimary: L,
                    churnUserDiscountOffer: K,
                    isFetchingChurnDiscountOffer: G && J,
                    fullPrice: en,
                    discountedPrice: Q,
                    planId: z,
                    paymentsBlocked: V,
                    renewalInvoice: $,
                    renewalInvoiceDetails: ee,
                    handleCancellation: ea,
                    applyOffer: es
                },
                children: [
                    (0, r.jsx)(a.O_, {
                        ref: Z,
                        className: T.confettiCanvas,
                        environment: U.current
                    }),
                    ei()
                ]
            })
        });
    };
