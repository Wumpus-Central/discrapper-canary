n.d(t, { I: () => R }), n(388685), n(415506);
var i = n(255367),
    r = n(73800),
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
    g = n(284829),
    C = n(586920),
    j = n(45474),
    E = n(594135),
    O = n(881493),
    P = n(407965),
    v = n(501090),
    N = n(474936),
    I = n(981631),
    T = n(301692);
let S = [I.O0b.PAST_DUE, I.O0b.PAUSED, I.O0b.BILLING_RETRY],
    R = (e) => {
        var t, n, s;
        let {
                analyticsLocation: R,
                analyticsLocations: w,
                onClose: D,
                transitionState: k,
                premiumSubscription: A,
                discountPrimary: M,
            } = e,
            { initialStep: L } = e,
            U = r.useRef(new a.qA()),
            [B, Z] = r.useState(null),
            z = null == (t = (0, _.Af)(A)) ? void 0 : t.planId,
            F = null != z ? _.ZP.getPremiumType(z) : null;
        o()(null != F, "Should not be cancelling Nitro without premiumType");
        let Y = F === N.p9.TIER_0 || F === N.p9.TIER_1 || F === N.p9.TIER_2;
        null == L && (L = Y ? j.R.WHAT_YOU_LOSE : j.R.CONFIRM);
        let [H, W, X, q] = (0, v.q)(L, A, w),
            V = (0, m.Q)(),
            G = (0, x.UV)(),
            { churnUserDiscountOffer: K, isFetchingChurnDiscountOffer: J } = (0, x.WR)(
                !G || (null != A.canceledAt && H !== j.R.CONFIRM_DISCOUNT),
            ),
            Q = (0, y._)(A, N.Xh.PREMIUM_MONTH_TIER_2, K),
            [$] = (0, b.ED)({
                subscriptionId: A.id,
                items: (0, _.Ue)(null != (s = null == (n = A.renewalMutations) ? void 0 : n.items) ? s : A.items),
                renewal: !0,
                analyticsLocations: w,
                analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW,
            }),
            ee = null !== $ ? _.ZP.getIntervalForInvoice($) : null,
            et = (0, _.aS)(N.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: A.currency,
                paymentSourceId: A.paymentSourceId,
            }),
            en = (0, f.T4)(et.amount, et.currency),
            ei = (e) => {
                D(),
                    p.default.track(
                        I.rMx.CANCELLATION_FLOW_STEP,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })(
                            {
                                from_step: j.O[e],
                                to_step: null,
                                step_duration_ms: Date.now() - X,
                                flow_duration_ms: Date.now() - q,
                                location_stack: w,
                            },
                            (0, v.b)(A),
                        ),
                    );
            },
            er = r.useCallback(() => {
                switch (H) {
                    case j.R.CONFIRM:
                        return (0, i.jsx)(h.G, {});
                    case j.R.CONFIRM_DISCOUNT:
                        return (0, i.jsx)(g.U, {});
                    case j.R.DISCOUNT_APPLIED:
                        return (0, i.jsx)(C.i, {});
                    case j.R.PREVIEW:
                        return (0, i.jsx)(O.w, {});
                    case j.R.WHAT_YOU_LOSE:
                    default:
                        return (0, i.jsx)(P.n, {});
                }
            }, [H]),
            ea = r.useCallback(async () => {
                if (S.includes(A.status)) await (0, c.EO)(A.id, w, R);
                else {
                    var e, t;
                    let n = null != (t = null == (e = A.renewalMutations) ? void 0 : e.items) ? t : A.items,
                        i = (0, _.Ue)(n);
                    await (0, c.Mg)(
                        A,
                        { items: i },
                        {
                            amount: 0,
                            currency: A.currency,
                        },
                        (0, _.UX)(i, A.currency, A.paymentSourceId),
                        w,
                        R,
                    );
                }
            }, [A, w, R]),
            es = async () => {
                if (null == K) throw Error("Churn user discount offer is null");
                null != A.canceledAt
                    ? await (0, c.df)(A, K)
                    : await l.tn.post({
                          url: I.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: K.id },
                          rejectWithError: !0,
                      });
            };
        return (0, i.jsx)(d.Gt, {
            value: w,
            children: (0, i.jsxs)(E.D.Provider, {
                value: {
                    setStep: W,
                    premiumType: F,
                    onClose: () => ei(H),
                    transitionState: k,
                    premiumSubscription: A,
                    analyticsLocations: w,
                    analyticsLocation: R,
                    confettiCanvas: B,
                    discountPrimary: M,
                    churnUserDiscountOffer: K,
                    isFetchingChurnDiscountOffer: G && J,
                    fullPrice: en,
                    discountedPrice: Q,
                    planId: z,
                    paymentsBlocked: V,
                    renewalInvoice: $,
                    renewalInvoiceDetails: ee,
                    handleCancellation: ea,
                    applyOffer: es,
                },
                children: [
                    (0, i.jsx)(a.O_, {
                        ref: Z,
                        className: T.confettiCanvas,
                        environment: U.current,
                    }),
                    er(),
                ],
            }),
        });
    };
