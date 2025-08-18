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
    y = n(140465),
    b = n(230916),
    h = n(562218),
    g = n(284829),
    C = n(586920),
    j = n(45474),
    E = n(594135),
    I = n(881493),
    v = n(407965),
    N = n(501090),
    P = n(474936),
    O = n(981631),
    T = n(320150);
let R = [O.O0b.PAST_DUE, O.O0b.PAUSED, O.O0b.BILLING_RETRY],
    S = (e) => {
        var t, n, s;
        let { analyticsLocation: S, analyticsLocations: w, onClose: D, transitionState: k, premiumSubscription: A } = e,
            { initialStep: L } = e,
            M = r.useRef(new a.qA()),
            [U, B] = r.useState(null),
            Z = null == (t = (0, _.Af)(A)) ? void 0 : t.planId,
            z = null != Z ? _.ZP.getPremiumType(Z) : null;
        o()(null != z, "Should not be cancelling Nitro without premiumType");
        let F = z === P.p9.TIER_0 || z === P.p9.TIER_1 || z === P.p9.TIER_2;
        null == L && (L = F ? j.R.WHAT_YOU_LOSE : j.R.CONFIRM);
        let [Y, H, W, X] = (0, N.q)(L, A, w),
            q = (0, m.Q)(),
            V = (0, y.UV)(),
            { churnUserDiscountOffer: G, isFetchingChurnDiscountOffer: K } = (0, y.WR)(
                !V || (null != A.canceledAt && Y !== j.R.CONFIRM_DISCOUNT),
            ),
            J = (0, b._)(A, P.Xh.PREMIUM_MONTH_TIER_2, G),
            [Q] = (0, x.ED)({
                subscriptionId: A.id,
                items: (0, _.Ue)(null != (s = null == (n = A.renewalMutations) ? void 0 : n.items) ? s : A.items),
                renewal: !0,
                analyticsLocations: w,
                analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW,
            }),
            $ = null !== Q ? _.ZP.getIntervalForInvoice(Q) : null,
            ee = (0, _.aS)(P.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: A.currency,
                paymentSourceId: A.paymentSourceId,
            }),
            et = (0, f.T4)(ee.amount, ee.currency),
            en = r.useCallback(() => {
                switch (Y) {
                    case j.R.CONFIRM:
                        return (0, i.jsx)(h.G, {});
                    case j.R.CONFIRM_DISCOUNT:
                        return (0, i.jsx)(g.U, {});
                    case j.R.DISCOUNT_APPLIED:
                        return (0, i.jsx)(C.i, {});
                    case j.R.PREVIEW:
                        return (0, i.jsx)(I.w, {});
                    case j.R.WHAT_YOU_LOSE:
                    default:
                        return (0, i.jsx)(v.n, {});
                }
            }, [Y]),
            ei = r.useCallback(async () => {
                if (R.includes(A.status)) await (0, c.EO)(A.id, w, S);
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
                        S,
                    );
                }
            }, [A, w, S]),
            er = async () => {
                if (null == G) throw Error("Churn user discount offer is null");
                null != A.canceledAt
                    ? await (0, c.df)(A, G)
                    : await l.tn.post({
                          url: O.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: G.id },
                          rejectWithError: !0,
                      });
            };
        return (0, i.jsx)(d.Gt, {
            value: w,
            children: (0, i.jsxs)(E.D.Provider, {
                value: {
                    setStep: H,
                    premiumType: z,
                    onClose: () => {
                        D(),
                            p.default.track(
                                O.rMx.CANCELLATION_FLOW_STEP,
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
                                        from_step: j.O[Y],
                                        to_step: null,
                                        step_duration_ms: Date.now() - W,
                                        flow_duration_ms: Date.now() - X,
                                        location_stack: w,
                                    },
                                    (0, N.b)(A),
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
