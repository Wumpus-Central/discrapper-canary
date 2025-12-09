n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => L }), n(388685), n(415506);
var a = n(54381),
    r = n(473749),
    i = n(921254),
    l = n(512722),
    o = n.n(l),
    s = n(547943),
    c = n(544891),
    u = n(355467),
    d = n(100527),
    _ = n(906732),
    m = n(211242),
    O = n(845220),
    f = n(588529),
    E = n(626135),
    p = n(74538),
    y = n(937615),
    S = n(374649),
    b = n(140465),
    C = n(230916),
    P = n(398775),
    T = n(562218),
    v = n(284829),
    R = n(586920),
    I = n(45474),
    A = n(594135),
    D = n(881493),
    w = n(407965),
    h = n(501090),
    N = n(323321),
    x = n(474936),
    M = n(981631),
    U = n(320150);
function g(t) {
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
let k = [M.O0b.PAST_DUE, M.O0b.PAUSED, M.O0b.BILLING_RETRY],
    L = (t) => {
        var e, n, l;
        let { analyticsLocation: L, analyticsLocations: j, onClose: F, transitionState: W, premiumSubscription: B } = t,
            { initialStep: Y } = t,
            G = r.useRef(new i.qA()),
            [Z, H] = r.useState(null),
            V = null == (e = (0, p.Af)(B)) ? void 0 : e.planId,
            X = null != V ? p.ZP.getPremiumType(V) : null;
        o()(null != X, "Should not be cancelling Nitro without premiumType");
        let q = X === x.PremiumTypes.TIER_0 || X === x.PremiumTypes.TIER_1 || X === x.PremiumTypes.TIER_2;
        null == Y && (Y = q ? I.R.WHAT_YOU_LOSE : I.R.CONFIRM);
        let [z, K, Q, J] = (0, h.q)(Y, B, j),
            $ = (0, m.Q)(),
            tt = (0, b.UV)(),
            { churnUserDiscountOffer: te, isFetchingChurnDiscountOffer: tn } = (0, b.WR)(
                !tt || (B.status === M.O0b.CANCELED && z !== I.R.CONFIRM_DISCOUNT),
            ),
            ta = (0, C._n)(B, x.Xh.PREMIUM_MONTH_TIER_2, te),
            [tr] = (0, S.ED)({
                subscriptionId: B.id,
                items: (0, p.Ue)(null != (l = null == (n = B.renewalMutations) ? void 0 : n.items) ? l : B.items),
                renewal: !0,
                analyticsLocations: j,
                analyticsLocation: d.Z.CANCEL_INVOICE_PREVIEW,
            }),
            ti = null !== tr ? p.ZP.getIntervalForInvoice(tr) : null,
            tl = (0, p.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: B.currency,
                paymentSourceId: B.paymentSourceId,
            }),
            to = (0, y.T4)(tl.amount, tl.currency),
            ts = r.useMemo(() => (0, O.b)(), []);
        r.useEffect(() => {
            E.default.track(
                M.rMx.CANCELLATION_FLOW_STARTED,
                g(
                    {
                        location_stack: j,
                        load_id: ts,
                    },
                    (0, N.v)(B),
                ),
            );
        }, [j, B, ts]);
        let [tc, tu] = r.useState(null),
            td = r.useCallback(() => {
                switch (z) {
                    case I.R.CONFIRM:
                        return (0, a.jsx)(T.G, {});
                    case I.R.CONFIRM_DISCOUNT:
                        return (0, a.jsx)(v.U, {});
                    case I.R.DISCOUNT_APPLIED:
                        return (0, a.jsx)(R.i, {});
                    case I.R.PREVIEW:
                        return (0, a.jsx)(D.w, {});
                    case I.R.PAUSE_SELECT:
                        return (0, a.jsx)(P.PremiumSubscriptionPauseModalSelect, {});
                    case I.R.PAUSE_CONFIRM:
                        return (0, a.jsx)(P.Sz, {});
                    case I.R.WHAT_YOU_LOSE:
                    default:
                        return (0, a.jsx)(w.n, {});
                }
            }, [z]),
            t_ = r.useCallback(async () => {
                if (
                    (E.default.track(
                        M.rMx.CANCELLATION_FLOW_COMPLETED,
                        g(
                            {
                                location_stack: j,
                                load_id: ts,
                            },
                            (0, N.v)(B),
                        ),
                    ),
                    k.includes(B.status))
                )
                    await (0, u.EO)(B.id, j, L);
                else {
                    var t, e;
                    let n = null != (e = null == (t = B.renewalMutations) ? void 0 : t.items) ? e : B.items,
                        a = (0, p.Ue)(n);
                    await (0, u.Mg)(
                        B,
                        { items: a },
                        {
                            amount: 0,
                            currency: B.currency,
                        },
                        (0, p.UX)(a, B.currency, B.paymentSourceId),
                        j,
                        L,
                    );
                }
                f.ZP.fireSurveyAction(s.Y.NITRO_UNSUBBED);
            }, [B, j, L, ts]),
            tm = async () => {
                if (null == te) throw Error("Churn user discount offer is null");
                B.status === M.O0b.CANCELED
                    ? await (0, u.df)(B, te)
                    : await c.tn.post({
                          url: M.ANM.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: te.id },
                          rejectWithError: !0,
                      });
            };
        return (0, a.jsx)(_.Gt, {
            value: j,
            children: (0, a.jsxs)(A.CancellationContext.Provider, {
                value: {
                    setStep: K,
                    premiumType: X,
                    onClose: () => {
                        F(),
                            E.default.track(
                                M.rMx.CANCELLATION_FLOW_STEP,
                                g(
                                    {
                                        from_step: I.O[z],
                                        to_step: null,
                                        step_duration_ms: Date.now() - Q,
                                        flow_duration_ms: Date.now() - J,
                                        location_stack: j,
                                        load_id: ts,
                                    },
                                    (0, N.v)(B),
                                ),
                            );
                    },
                    transitionState: W,
                    premiumSubscription: B,
                    analyticsLocations: j,
                    analyticsLocation: L,
                    confettiCanvas: Z,
                    churnUserDiscountOffer: te,
                    isFetchingChurnDiscountOffer: tt && tn,
                    fullPrice: to,
                    discountedPrice: ta,
                    planId: V,
                    paymentsBlocked: $,
                    renewalInvoice: tr,
                    renewalInvoiceDetails: ti,
                    handleCancellation: t_,
                    applyOffer: tm,
                    pauseDuration: tc,
                    setPauseDuration: tu,
                },
                children: [
                    (0, a.jsx)(i.O_, {
                        ref: H,
                        className: U.confettiCanvas,
                        environment: G.current,
                    }),
                    td(),
                ],
            }),
        });
    };
