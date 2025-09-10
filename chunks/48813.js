n.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => j }), n(388685), n(415506);
var r = n(951288),
    a = n(647438),
    o = n(238651),
    l = n(512722),
    u = n.n(l),
    c = n(544891),
    i = n(355467),
    s = n(100527),
    _ = n(906732),
    f = n(211242),
    O = n(845220),
    d = n(626135),
    E = n(74538),
    p = n(937615),
    b = n(374649),
    C = n(140465),
    m = n(230916),
    y = n(562218),
    I = n(284829),
    w = n(586920),
    R = n(45474),
    v = n(594135),
    T = n(881493),
    L = n(407965),
    N = n(501090),
    P = n(323321),
    S = n(474936),
    D = n(981631),
    h = n(320150);
function M(e) {
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
}
let A = [D.O0b.PAST_DUE, D.O0b.PAUSED, D.O0b.BILLING_RETRY],
    j = (e) => {
        var t, n, l;
        let { analyticsLocation: j, analyticsLocations: k, onClose: g, transitionState: U, premiumSubscription: x } = e,
            { initialStep: F } = e,
            W = a.useRef(new o.qA()),
            [H, V] = a.useState(null),
            q = null == (t = (0, E.Af)(x)) ? void 0 : t.planId,
            G = null != q ? E.ZP.getPremiumType(q) : null;
        u()(null != G, "Should not be cancelling Nitro without premiumType");
        let X = G === S.p9.TIER_0 || G === S.p9.TIER_1 || G === S.p9.TIER_2;
        null == F && (F = X ? R.R.WHAT_YOU_LOSE : R.R.CONFIRM);
        let [Y, Z, B, Q] = (0, N.q)(F, x, k),
            z = (0, f.Q)(),
            J = (0, C.UV)(),
            { churnUserDiscountOffer: K, isFetchingChurnDiscountOffer: $ } = (0, C.WR)(
                !J || (x.status === D.O0b.CANCELED && Y !== R.R.CONFIRM_DISCOUNT),
            ),
            ee = (0, m._n)(x, S.Xh.PREMIUM_MONTH_TIER_2, K),
            [et] = (0, b.ED)({
                subscriptionId: x.id,
                items: (0, E.Ue)(null != (l = null == (n = x.renewalMutations) ? void 0 : n.items) ? l : x.items),
                renewal: !0,
                analyticsLocations: k,
                analyticsLocation: s.Z.CANCEL_INVOICE_PREVIEW,
            }),
            en = null !== et ? E.ZP.getIntervalForInvoice(et) : null,
            er = (0, E.aS)(S.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: x.currency,
                paymentSourceId: x.paymentSourceId,
            }),
            ea = (0, p.T4)(er.amount, er.currency),
            eo = a.useMemo(() => (0, O.b)(), []);
        a.useEffect(() => {
            d.default.track(
                D.rMx.CANCELLATION_FLOW_STARTED,
                M(
                    {
                        location_stack: k,
                        load_id: eo,
                    },
                    (0, P.v)(x),
                ),
            );
        }, [k, x, eo]);
        let el = a.useCallback(() => {
                switch (Y) {
                    case R.R.CONFIRM:
                        return (0, r.jsx)(y.G, {});
                    case R.R.CONFIRM_DISCOUNT:
                        return (0, r.jsx)(I.U, {});
                    case R.R.DISCOUNT_APPLIED:
                        return (0, r.jsx)(w.i, {});
                    case R.R.PREVIEW:
                        return (0, r.jsx)(T.w, {});
                    case R.R.WHAT_YOU_LOSE:
                    default:
                        return (0, r.jsx)(L.n, {});
                }
            }, [Y]),
            eu = a.useCallback(async () => {
                if (
                    (d.default.track(
                        D.rMx.CANCELLATION_FLOW_COMPLETED,
                        M(
                            {
                                location_stack: k,
                                load_id: eo,
                            },
                            (0, P.v)(x),
                        ),
                    ),
                    A.includes(x.status))
                )
                    await (0, i.EO)(x.id, k, j);
                else {
                    var e, t;
                    let n = null != (t = null == (e = x.renewalMutations) ? void 0 : e.items) ? t : x.items,
                        r = (0, E.Ue)(n);
                    await (0, i.Mg)(
                        x,
                        { items: r },
                        {
                            amount: 0,
                            currency: x.currency,
                        },
                        (0, E.UX)(r, x.currency, x.paymentSourceId),
                        k,
                        j,
                    );
                }
            }, [x, k, j, eo]),
            ec = async () => {
                if (null == K) throw Error("Churn user discount offer is null");
                x.status === D.O0b.CANCELED
                    ? await (0, i.df)(x, K)
                    : await c.tn.post({
                          url: D.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: K.id },
                          rejectWithError: !0,
                      });
            };
        return (0, r.jsx)(_.Gt, {
            value: k,
            children: (0, r.jsxs)(v.D.Provider, {
                value: {
                    setStep: Z,
                    premiumType: G,
                    onClose: () => {
                        g(),
                            d.default.track(
                                D.rMx.CANCELLATION_FLOW_STEP,
                                M(
                                    {
                                        from_step: R.O[Y],
                                        to_step: null,
                                        step_duration_ms: Date.now() - B,
                                        flow_duration_ms: Date.now() - Q,
                                        location_stack: k,
                                        load_id: eo,
                                    },
                                    (0, P.v)(x),
                                ),
                            );
                    },
                    transitionState: U,
                    premiumSubscription: x,
                    analyticsLocations: k,
                    analyticsLocation: j,
                    confettiCanvas: H,
                    churnUserDiscountOffer: K,
                    isFetchingChurnDiscountOffer: J && $,
                    fullPrice: ea,
                    discountedPrice: ee,
                    planId: q,
                    paymentsBlocked: z,
                    renewalInvoice: et,
                    renewalInvoiceDetails: en,
                    handleCancellation: eu,
                    applyOffer: ec,
                },
                children: [
                    (0, r.jsx)(o.O_, {
                        ref: V,
                        className: h.confettiCanvas,
                        environment: W.current,
                    }),
                    el(),
                ],
            }),
        });
    };
