n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => L }), n(388685), n(415506);
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
    f = n(845220),
    O = n(626135),
    E = n(74538),
    m = n(937615),
    p = n(374649),
    y = n(140465),
    b = n(230916),
    C = n(398775),
    S = n(562218),
    v = n(284829),
    R = n(586920),
    P = n(45474),
    I = n(594135),
    T = n(881493),
    w = n(407965),
    A = n(501090),
    D = n(323321),
    h = n(474936),
    N = n(981631),
    g = n(320150);
function x(t) {
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
let k = [N.O0b.PAST_DUE, N.O0b.PAUSED, N.O0b.BILLING_RETRY],
    L = (t) => {
        var e, n, l;
        let { analyticsLocation: L, analyticsLocations: M, onClose: U, transitionState: j, premiumSubscription: F } = t,
            { initialStep: W } = t,
            B = r.useRef(new i.qA()),
            [X, Y] = r.useState(null),
            G = null == (e = (0, E.Af)(F)) ? void 0 : e.planId,
            H = null != G ? E.ZP.getPremiumType(G) : null;
        o()(null != H, "Should not be cancelling Nitro without premiumType");
        let V = H === h.p9.TIER_0 || H === h.p9.TIER_1 || H === h.p9.TIER_2;
        null == W && (W = V ? P.R.WHAT_YOU_LOSE : P.R.CONFIRM);
        let [Z, q, z, Q] = (0, A.q)(W, F, M),
            K = (0, _.Q)(),
            J = (0, y.UV)(),
            { churnUserDiscountOffer: $, isFetchingChurnDiscountOffer: tt } = (0, y.WR)(
                !J || (F.status === N.O0b.CANCELED && Z !== P.R.CONFIRM_DISCOUNT),
            ),
            te = (0, b._n)(F, h.Xh.PREMIUM_MONTH_TIER_2, $),
            [tn] = (0, p.ED)({
                subscriptionId: F.id,
                items: (0, E.Ue)(null != (l = null == (n = F.renewalMutations) ? void 0 : n.items) ? l : F.items),
                renewal: !0,
                analyticsLocations: M,
                analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW,
            }),
            ta = null !== tn ? E.ZP.getIntervalForInvoice(tn) : null,
            tr = (0, E.aS)(h.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: F.currency,
                paymentSourceId: F.paymentSourceId,
            }),
            ti = (0, m.T4)(tr.amount, tr.currency),
            tl = r.useMemo(() => (0, f.b)(), []);
        r.useEffect(() => {
            O.default.track(
                N.rMx.CANCELLATION_FLOW_STARTED,
                x(
                    {
                        location_stack: M,
                        load_id: tl,
                    },
                    (0, D.v)(F),
                ),
            );
        }, [M, F, tl]);
        let [to, ts] = r.useState(null),
            tc = r.useCallback(() => {
                switch (Z) {
                    case P.R.CONFIRM:
                        return (0, a.jsx)(S.G, {});
                    case P.R.CONFIRM_DISCOUNT:
                        return (0, a.jsx)(v.U, {});
                    case P.R.DISCOUNT_APPLIED:
                        return (0, a.jsx)(R.i, {});
                    case P.R.PREVIEW:
                        return (0, a.jsx)(T.w, {});
                    case P.R.PAUSE_SELECT:
                        return (0, a.jsx)(C.of, {});
                    case P.R.PAUSE_CONFIRM:
                        return (0, a.jsx)(C.Sz, {});
                    case P.R.WHAT_YOU_LOSE:
                    default:
                        return (0, a.jsx)(w.n, {});
                }
            }, [Z]),
            tu = r.useCallback(async () => {
                if (
                    (O.default.track(
                        N.rMx.CANCELLATION_FLOW_COMPLETED,
                        x(
                            {
                                location_stack: M,
                                load_id: tl,
                            },
                            (0, D.v)(F),
                        ),
                    ),
                    k.includes(F.status))
                )
                    await (0, c.EO)(F.id, M, L);
                else {
                    var t, e;
                    let n = null != (e = null == (t = F.renewalMutations) ? void 0 : t.items) ? e : F.items,
                        a = (0, E.Ue)(n);
                    await (0, c.Mg)(
                        F,
                        { items: a },
                        {
                            amount: 0,
                            currency: F.currency,
                        },
                        (0, E.UX)(a, F.currency, F.paymentSourceId),
                        M,
                        L,
                    );
                }
            }, [F, M, L, tl]),
            td = async () => {
                if (null == $) throw Error("Churn user discount offer is null");
                F.status === N.O0b.CANCELED
                    ? await (0, c.df)(F, $)
                    : await s.tn.post({
                          url: N.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: $.id },
                          rejectWithError: !0,
                      });
            };
        return (0, a.jsx)(d.Gt, {
            value: M,
            children: (0, a.jsxs)(I.D.Provider, {
                value: {
                    setStep: q,
                    premiumType: H,
                    onClose: () => {
                        U(),
                            O.default.track(
                                N.rMx.CANCELLATION_FLOW_STEP,
                                x(
                                    {
                                        from_step: P.O[Z],
                                        to_step: null,
                                        step_duration_ms: Date.now() - z,
                                        flow_duration_ms: Date.now() - Q,
                                        location_stack: M,
                                        load_id: tl,
                                    },
                                    (0, D.v)(F),
                                ),
                            );
                    },
                    transitionState: j,
                    premiumSubscription: F,
                    analyticsLocations: M,
                    analyticsLocation: L,
                    confettiCanvas: X,
                    churnUserDiscountOffer: $,
                    isFetchingChurnDiscountOffer: J && tt,
                    fullPrice: ti,
                    discountedPrice: te,
                    planId: G,
                    paymentsBlocked: K,
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
                        className: g.confettiCanvas,
                        environment: B.current,
                    }),
                    tc(),
                ],
            }),
        });
    };
