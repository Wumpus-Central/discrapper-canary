n.d(t, { I: () => S }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
    a = n(238651),
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
    x = n(374649),
    b = n(140465),
    y = n(230916),
    h = n(562218),
    C = n(284829),
    g = n(586920),
    E = n(45474),
    j = n(594135),
    N = n(881493),
    I = n(407965),
    v = n(501090),
    O = n(474936),
    P = n(981631),
    T = n(320150);
let R = [P.O0b.PAST_DUE, P.O0b.PAUSED, P.O0b.BILLING_RETRY],
    S = (e) => {
        var t, n, s;
        let { analyticsLocation: S, analyticsLocations: D, onClose: w, transitionState: k, premiumSubscription: A } = e,
            { initialStep: L } = e,
            M = r.useRef(new a.qA()),
            [U, B] = r.useState(null),
            Z = null == (t = (0, _.Af)(A)) ? void 0 : t.planId,
            z = null != Z ? _.ZP.getPremiumType(Z) : null;
        o()(null != z, "Should not be cancelling Nitro without premiumType");
        let F = z === O.p9.TIER_0 || z === O.p9.TIER_1 || z === O.p9.TIER_2;
        null == L && (L = F ? E.R.WHAT_YOU_LOSE : E.R.CONFIRM);
        let [Y, H, W, X] = (0, v.q)(L, A, D),
            q = (0, m.Q)(),
            V = (0, b.UV)(),
            { churnUserDiscountOffer: G, isFetchingChurnDiscountOffer: K } = (0, b.WR)(
                !V || (A.status === P.O0b.CANCELED && Y !== E.R.CONFIRM_DISCOUNT),
            ),
            J = (0, y._)(A, O.Xh.PREMIUM_MONTH_TIER_2, G),
            [Q] = (0, x.ED)({
                subscriptionId: A.id,
                items: (0, _.Ue)(null != (s = null == (n = A.renewalMutations) ? void 0 : n.items) ? s : A.items),
                renewal: !0,
                analyticsLocations: D,
                analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW,
            }),
            $ = null !== Q ? _.ZP.getIntervalForInvoice(Q) : null,
            ee = (0, _.aS)(O.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: A.currency,
                paymentSourceId: A.paymentSourceId,
            }),
            et = (0, f.T4)(ee.amount, ee.currency),
            en = r.useCallback(() => {
                switch (Y) {
                    case E.R.CONFIRM:
                        return (0, i.jsx)(h.G, {});
                    case E.R.CONFIRM_DISCOUNT:
                        return (0, i.jsx)(C.U, {});
                    case E.R.DISCOUNT_APPLIED:
                        return (0, i.jsx)(g.i, {});
                    case E.R.PREVIEW:
                        return (0, i.jsx)(N.w, {});
                    case E.R.WHAT_YOU_LOSE:
                    default:
                        return (0, i.jsx)(I.n, {});
                }
            }, [Y]),
            ei = r.useCallback(async () => {
                if (R.includes(A.status)) await (0, c.EO)(A.id, D, S);
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
                        D,
                        S,
                    );
                }
            }, [A, D, S]),
            er = async () => {
                if (null == G) throw Error("Churn user discount offer is null");
                A.status === P.O0b.CANCELED
                    ? await (0, c.df)(A, G)
                    : await l.tn.post({
                          url: P.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: G.id },
                          rejectWithError: !0,
                      });
            };
        return (0, i.jsx)(d.Gt, {
            value: D,
            children: (0, i.jsxs)(j.D.Provider, {
                value: {
                    setStep: H,
                    premiumType: z,
                    onClose: () => {
                        w(),
                            p.default.track(
                                P.rMx.CANCELLATION_FLOW_STEP,
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
                                        from_step: E.O[Y],
                                        to_step: null,
                                        step_duration_ms: Date.now() - W,
                                        flow_duration_ms: Date.now() - X,
                                        location_stack: D,
                                    },
                                    (0, v.b)(A),
                                ),
                            );
                    },
                    transitionState: k,
                    premiumSubscription: A,
                    analyticsLocations: D,
                    analyticsLocation: S,
                    confettiCanvas: U,
                    churnUserDiscountOffer: G,
                    isFetchingChurnDiscountOffer: V && K,
                    fullPrice: et,
                    discountedPrice: J,
                    planId: Z,
                    paymentsBlocked: q,
                    renewalInvoice: Q,
                    renewalInvoiceDetails: $,
                    handleCancellation: ei,
                    applyOffer: er,
                },
                children: [
                    (0, i.jsx)(a.O_, {
                        ref: B,
                        className: T.confettiCanvas,
                        environment: M.current,
                    }),
                    en(),
                ],
            }),
        });
    };
