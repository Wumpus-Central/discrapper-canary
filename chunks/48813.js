n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => A }), n(388685), n(415506);
var r = n(951288),
    a = n(647438),
    o = n(238651),
    u = n(512722),
    i = n.n(u),
    l = n(544891),
    s = n(355467),
    c = n(100527),
    _ = n(906732),
    d = n(211242),
    f = n(845220),
    O = n(626135),
    p = n(74538),
    b = n(937615),
    E = n(374649),
    y = n(140465),
    m = n(230916),
    C = n(562218),
    w = n(284829),
    I = n(586920),
    R = n(45474),
    v = n(594135),
    P = n(881493),
    T = n(407965),
    L = n(501090),
    N = n(474936),
    S = n(981631),
    D = n(320150);
function h(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
let M = [S.O0b.PAST_DUE, S.O0b.PAUSED, S.O0b.BILLING_RETRY],
    A = (t) => {
        var e, n, u;
        let { analyticsLocation: A, analyticsLocations: j, onClose: k, transitionState: g, premiumSubscription: U } = t,
            { initialStep: x } = t,
            F = a.useRef(new o.qA()),
            [W, G] = a.useState(null),
            H = null == (e = (0, p.Af)(U)) ? void 0 : e.planId,
            V = null != H ? p.ZP.getPremiumType(H) : null;
        i()(null != V, "Should not be cancelling Nitro without premiumType");
        let q = V === N.p9.TIER_0 || V === N.p9.TIER_1 || V === N.p9.TIER_2;
        null == x && (x = q ? R.R.WHAT_YOU_LOSE : R.R.CONFIRM);
        let [X, Y, Z, B] = (0, L.q)(x, U, j),
            Q = (0, d.Q)(),
            z = (0, y.UV)(),
            { churnUserDiscountOffer: J, isFetchingChurnDiscountOffer: K } = (0, y.WR)(
                !z || (U.status === S.O0b.CANCELED && X !== R.R.CONFIRM_DISCOUNT),
            ),
            $ = (0, m._n)(U, N.Xh.PREMIUM_MONTH_TIER_2, J),
            [tt] = (0, E.ED)({
                subscriptionId: U.id,
                items: (0, p.Ue)(null != (u = null == (n = U.renewalMutations) ? void 0 : n.items) ? u : U.items),
                renewal: !0,
                analyticsLocations: j,
                analyticsLocation: c.Z.CANCEL_INVOICE_PREVIEW,
            }),
            te = null !== tt ? p.ZP.getIntervalForInvoice(tt) : null,
            tn = (0, p.aS)(N.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: U.currency,
                paymentSourceId: U.paymentSourceId,
            }),
            tr = (0, b.T4)(tn.amount, tn.currency),
            ta = a.useMemo(() => (0, f.b)(), []);
        a.useEffect(() => {
            O.default.track(
                S.rMx.CANCELLATION_FLOW_STARTED,
                h(
                    {
                        location_stack: j,
                        load_id: ta,
                    },
                    (0, L.b)(U),
                ),
            );
        }, [j, U, ta]);
        let to = a.useCallback(() => {
                switch (X) {
                    case R.R.CONFIRM:
                        return (0, r.jsx)(C.G, {});
                    case R.R.CONFIRM_DISCOUNT:
                        return (0, r.jsx)(w.U, {});
                    case R.R.DISCOUNT_APPLIED:
                        return (0, r.jsx)(I.i, {});
                    case R.R.PREVIEW:
                        return (0, r.jsx)(P.w, {});
                    case R.R.WHAT_YOU_LOSE:
                    default:
                        return (0, r.jsx)(T.n, {});
                }
            }, [X]),
            tu = a.useCallback(async () => {
                if (
                    (O.default.track(
                        S.rMx.CANCELLATION_FLOW_COMPLETED,
                        h(
                            {
                                location_stack: j,
                                load_id: ta,
                            },
                            (0, L.b)(U),
                        ),
                    ),
                    M.includes(U.status))
                )
                    await (0, s.EO)(U.id, j, A);
                else {
                    var t, e;
                    let n = null != (e = null == (t = U.renewalMutations) ? void 0 : t.items) ? e : U.items,
                        r = (0, p.Ue)(n);
                    await (0, s.Mg)(
                        U,
                        { items: r },
                        {
                            amount: 0,
                            currency: U.currency,
                        },
                        (0, p.UX)(r, U.currency, U.paymentSourceId),
                        j,
                        A,
                    );
                }
            }, [U, j, A, ta]),
            ti = async () => {
                if (null == J) throw Error("Churn user discount offer is null");
                U.status === S.O0b.CANCELED
                    ? await (0, s.df)(U, J)
                    : await l.tn.post({
                          url: S.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: J.id },
                          rejectWithError: !0,
                      });
            };
        return (0, r.jsx)(_.Gt, {
            value: j,
            children: (0, r.jsxs)(v.D.Provider, {
                value: {
                    setStep: Y,
                    premiumType: V,
                    onClose: () => {
                        k(),
                            O.default.track(
                                S.rMx.CANCELLATION_FLOW_STEP,
                                h(
                                    {
                                        from_step: R.O[X],
                                        to_step: null,
                                        step_duration_ms: Date.now() - Z,
                                        flow_duration_ms: Date.now() - B,
                                        location_stack: j,
                                        load_id: ta,
                                    },
                                    (0, L.b)(U),
                                ),
                            );
                    },
                    transitionState: g,
                    premiumSubscription: U,
                    analyticsLocations: j,
                    analyticsLocation: A,
                    confettiCanvas: W,
                    churnUserDiscountOffer: J,
                    isFetchingChurnDiscountOffer: z && K,
                    fullPrice: tr,
                    discountedPrice: $,
                    planId: H,
                    paymentsBlocked: Q,
                    renewalInvoice: tt,
                    renewalInvoiceDetails: te,
                    handleCancellation: tu,
                    applyOffer: ti,
                },
                children: [
                    (0, r.jsx)(o.O_, {
                        ref: G,
                        className: D.confettiCanvas,
                        environment: F.current,
                    }),
                    to(),
                ],
            }),
        });
    };
