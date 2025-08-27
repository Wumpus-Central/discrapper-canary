n.d(e, { I: () => S }), n(388685), n(415506);
var i = n(951288),
    a = n(647438),
    r = n(238651),
    s = n(512722),
    l = n.n(s),
    o = n(544891),
    c = n(355467),
    u = n(100527),
    d = n(906732),
    m = n(211242),
    p = n(626135),
    x = n(74538),
    f = n(937615),
    _ = n(374649),
    y = n(140465),
    h = n(230916),
    j = n(562218),
    E = n(284829),
    g = n(586920),
    C = n(45474),
    b = n(594135),
    N = n(881493),
    O = n(407965),
    P = n(501090),
    I = n(474936),
    T = n(981631),
    R = n(320150);
let v = [T.O0b.PAST_DUE, T.O0b.PAUSED, T.O0b.BILLING_RETRY],
    S = (t) => {
        var e, n, s;
        let { analyticsLocation: S, analyticsLocations: w, onClose: D, transitionState: k, premiumSubscription: A } = t,
            { initialStep: M } = t,
            L = a.useRef(new r.qA()),
            [U, Z] = a.useState(null),
            z = null == (e = (0, x.Af)(A)) ? void 0 : e.planId,
            F = null != z ? x.ZP.getPremiumType(z) : null;
        l()(null != F, "Should not be cancelling Nitro without premiumType");
        let B = F === I.p9.TIER_0 || F === I.p9.TIER_1 || F === I.p9.TIER_2;
        null == M && (M = B ? C.R.WHAT_YOU_LOSE : C.R.CONFIRM);
        let [W, Y, H, X] = (0, P.q)(M, A, w),
            q = (0, m.Q)(),
            V = (0, y.UV)(),
            { churnUserDiscountOffer: G, isFetchingChurnDiscountOffer: K } = (0, y.WR)(
                !V || (A.status === T.O0b.CANCELED && W !== C.R.CONFIRM_DISCOUNT),
            ),
            J = (0, h._n)(A, I.Xh.PREMIUM_MONTH_TIER_2, G),
            [Q] = (0, _.ED)({
                subscriptionId: A.id,
                items: (0, x.Ue)(null != (s = null == (n = A.renewalMutations) ? void 0 : n.items) ? s : A.items),
                renewal: !0,
                analyticsLocations: w,
                analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW,
            }),
            $ = null !== Q ? x.ZP.getIntervalForInvoice(Q) : null,
            tt = (0, x.aS)(I.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: A.currency,
                paymentSourceId: A.paymentSourceId,
            }),
            te = (0, f.T4)(tt.amount, tt.currency),
            tn = a.useCallback(() => {
                switch (W) {
                    case C.R.CONFIRM:
                        return (0, i.jsx)(j.G, {});
                    case C.R.CONFIRM_DISCOUNT:
                        return (0, i.jsx)(E.U, {});
                    case C.R.DISCOUNT_APPLIED:
                        return (0, i.jsx)(g.i, {});
                    case C.R.PREVIEW:
                        return (0, i.jsx)(N.w, {});
                    case C.R.WHAT_YOU_LOSE:
                    default:
                        return (0, i.jsx)(O.n, {});
                }
            }, [W]),
            ti = a.useCallback(async () => {
                if (v.includes(A.status)) await (0, c.EO)(A.id, w, S);
                else {
                    var t, e;
                    let n = null != (e = null == (t = A.renewalMutations) ? void 0 : t.items) ? e : A.items,
                        i = (0, x.Ue)(n);
                    await (0, c.Mg)(
                        A,
                        { items: i },
                        {
                            amount: 0,
                            currency: A.currency,
                        },
                        (0, x.UX)(i, A.currency, A.paymentSourceId),
                        w,
                        S,
                    );
                }
            }, [A, w, S]),
            ta = async () => {
                if (null == G) throw Error("Churn user discount offer is null");
                A.status === T.O0b.CANCELED
                    ? await (0, c.df)(A, G)
                    : await o.tn.post({
                          url: T.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: G.id },
                          rejectWithError: !0,
                      });
            };
        return (0, i.jsx)(d.Gt, {
            value: w,
            children: (0, i.jsxs)(b.D.Provider, {
                value: {
                    setStep: Y,
                    premiumType: F,
                    onClose: () => {
                        D(),
                            p.default.track(
                                T.rMx.CANCELLATION_FLOW_STEP,
                                (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (e) {
                                                var i;
                                                (i = n[e]),
                                                    e in t
                                                        ? Object.defineProperty(t, e, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (t[e] = i);
                                            });
                                    }
                                    return t;
                                })(
                                    {
                                        from_step: C.O[W],
                                        to_step: null,
                                        step_duration_ms: Date.now() - H,
                                        flow_duration_ms: Date.now() - X,
                                        location_stack: w,
                                    },
                                    (0, P.b)(A),
                                ),
                            );
                    },
                    transitionState: k,
                    premiumSubscription: A,
                    analyticsLocations: w,
                    analyticsLocation: S,
                    confettiCanvas: U,
                    churnUserDiscountOffer: G,
                    isFetchingChurnDiscountOffer: V && K,
                    fullPrice: te,
                    discountedPrice: J,
                    planId: z,
                    paymentsBlocked: q,
                    renewalInvoice: Q,
                    renewalInvoiceDetails: $,
                    handleCancellation: ti,
                    applyOffer: ta,
                },
                children: [
                    (0, i.jsx)(r.O_, {
                        ref: Z,
                        className: R.confettiCanvas,
                        environment: L.current,
                    }),
                    tn(),
                ],
            }),
        });
    };
