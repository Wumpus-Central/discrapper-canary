n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => L }), n(388685), n(415506);
var a = n(54381),
    r = n(473749),
    i = n(921254),
    l = n(512722),
    o = n.n(l),
    s = n(544891),
    u = n(355467),
    c = n(100527),
    d = n(906732),
    _ = n(211242),
    m = n(845220),
    O = n(588529),
    f = n(626135),
    E = n(74538),
    p = n(937615),
    b = n(374649),
    y = n(140465),
    S = n(230916),
    C = n(398775),
    P = n(562218),
    v = n(284829),
    T = n(586920),
    R = n(45474),
    I = n(594135),
    w = n(881493),
    A = n(407965),
    D = n(501090),
    h = n(323321),
    g = n(474936),
    x = n(981631),
    N = n(320150);
function M(t) {
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
let k = [x.O0b.PAST_DUE, x.O0b.PAUSED, x.O0b.BILLING_RETRY],
    L = (t) => {
        var e, n, l;
        let { analyticsLocation: L, analyticsLocations: U, onClose: j, transitionState: F, premiumSubscription: W } = t,
            { initialStep: B } = t,
            G = r.useRef(new i.qA()),
            [Y, Z] = r.useState(null),
            H = null == (e = (0, E.Af)(W)) ? void 0 : e.planId,
            V = null != H ? E.ZP.getPremiumType(H) : null;
        o()(null != V, "Should not be cancelling Nitro without premiumType");
        let X = V === g.PremiumTypes.TIER_0 || V === g.PremiumTypes.TIER_1 || V === g.PremiumTypes.TIER_2;
        null == B && (B = X ? R.R.WHAT_YOU_LOSE : R.R.CONFIRM);
        let [q, z, K, Q] = (0, D.q)(B, W, U),
            J = (0, _.Q)(),
            $ = (0, y.UV)(),
            { churnUserDiscountOffer: tt, isFetchingChurnDiscountOffer: te } = (0, y.WR)(
                !$ || (W.status === x.O0b.CANCELED && q !== R.R.CONFIRM_DISCOUNT),
            ),
            tn = (0, S._n)(W, g.Xh.PREMIUM_MONTH_TIER_2, tt),
            [ta] = (0, b.ED)({
                subscriptionId: W.id,
                items: (0, E.Ue)(null != (l = null == (n = W.renewalMutations) ? void 0 : n.items) ? l : W.items),
                renewal: !0,
                analyticsLocations: U,
                analyticsLocation: c.Z.CANCEL_INVOICE_PREVIEW,
            }),
            tr = null !== ta ? E.ZP.getIntervalForInvoice(ta) : null,
            ti = (0, E.aS)(g.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: W.currency,
                paymentSourceId: W.paymentSourceId,
            }),
            tl = (0, p.T4)(ti.amount, ti.currency),
            to = r.useMemo(() => (0, m.b)(), []);
        r.useEffect(() => {
            f.default.track(
                x.rMx.CANCELLATION_FLOW_STARTED,
                M(
                    {
                        location_stack: U,
                        load_id: to,
                    },
                    (0, h.v)(W),
                ),
            );
        }, [U, W, to]);
        let [ts, tu] = r.useState(null),
            tc = r.useCallback(() => {
                switch (q) {
                    case R.R.CONFIRM:
                        return (0, a.jsx)(P.G, {});
                    case R.R.CONFIRM_DISCOUNT:
                        return (0, a.jsx)(v.U, {});
                    case R.R.DISCOUNT_APPLIED:
                        return (0, a.jsx)(T.i, {});
                    case R.R.PREVIEW:
                        return (0, a.jsx)(w.w, {});
                    case R.R.PAUSE_SELECT:
                        return (0, a.jsx)(C.PremiumSubscriptionPauseModalSelect, {});
                    case R.R.PAUSE_CONFIRM:
                        return (0, a.jsx)(C.Sz, {});
                    case R.R.WHAT_YOU_LOSE:
                    default:
                        return (0, a.jsx)(A.n, {});
                }
            }, [q]),
            td = r.useCallback(async () => {
                if (
                    (f.default.track(
                        x.rMx.CANCELLATION_FLOW_COMPLETED,
                        M(
                            {
                                location_stack: U,
                                load_id: to,
                            },
                            (0, h.v)(W),
                        ),
                    ),
                    k.includes(W.status))
                )
                    await (0, u.EO)(W.id, U, L);
                else {
                    var t, e;
                    let n = null != (e = null == (t = W.renewalMutations) ? void 0 : t.items) ? e : W.items,
                        a = (0, E.Ue)(n);
                    await (0, u.Mg)(
                        W,
                        { items: a },
                        {
                            amount: 0,
                            currency: W.currency,
                        },
                        (0, E.UX)(a, W.currency, W.paymentSourceId),
                        U,
                        L,
                    );
                }
                O.ZP.triggerEmbeddedSurvey("nitro_unsub");
            }, [W, U, L, to]),
            t_ = async () => {
                if (null == tt) throw Error("Churn user discount offer is null");
                W.status === x.O0b.CANCELED
                    ? await (0, u.df)(W, tt)
                    : await s.tn.post({
                          url: x.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: tt.id },
                          rejectWithError: !0,
                      });
            };
        return (0, a.jsx)(d.Gt, {
            value: U,
            children: (0, a.jsxs)(I.CancellationContext.Provider, {
                value: {
                    setStep: z,
                    premiumType: V,
                    onClose: () => {
                        j(),
                            f.default.track(
                                x.rMx.CANCELLATION_FLOW_STEP,
                                M(
                                    {
                                        from_step: R.O[q],
                                        to_step: null,
                                        step_duration_ms: Date.now() - K,
                                        flow_duration_ms: Date.now() - Q,
                                        location_stack: U,
                                        load_id: to,
                                    },
                                    (0, h.v)(W),
                                ),
                            );
                    },
                    transitionState: F,
                    premiumSubscription: W,
                    analyticsLocations: U,
                    analyticsLocation: L,
                    confettiCanvas: Y,
                    churnUserDiscountOffer: tt,
                    isFetchingChurnDiscountOffer: $ && te,
                    fullPrice: tl,
                    discountedPrice: tn,
                    planId: H,
                    paymentsBlocked: J,
                    renewalInvoice: ta,
                    renewalInvoiceDetails: tr,
                    handleCancellation: td,
                    applyOffer: t_,
                    pauseDuration: ts,
                    setPauseDuration: tu,
                },
                children: [
                    (0, a.jsx)(i.O_, {
                        ref: Z,
                        className: N.confettiCanvas,
                        environment: G.current,
                    }),
                    tc(),
                ],
            }),
        });
    };
