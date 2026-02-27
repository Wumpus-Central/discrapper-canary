n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => R });
var r = n(627968),
    a = n(64700),
    o = n(106778),
    i = n(284009),
    s = n.n(i),
    l = n(517846),
    _ = n(562465),
    u = n(384904),
    c = n(793574),
    d = n(688810),
    m = n(86379),
    C = n(925847),
    p = n(236698),
    f = n(954571),
    E = n(927578),
    I = n(580630),
    S = n(543767),
    D = n(526292),
    T = n(511484),
    h = n(318998),
    y = n(95337),
    A = n(412314),
    g = n(456459),
    P = n(473702),
    O = n(916974),
    w = n(347378),
    L = n(606423),
    x = n(64588),
    N = n(501957),
    U = n(788868),
    b = n(652215),
    F = n(247027);
let v = [b.Dmq.PAST_DUE, b.Dmq.PAUSED, b.Dmq.BILLING_RETRY],
    R = (t) => {
        let { analyticsLocation: e, analyticsLocations: n, onClose: i, transitionState: R, premiumSubscription: k } = t,
            { initialStep: j } = t,
            M = a.useRef(new o.OH()),
            [W, q] = a.useState(null),
            B = (0, E.EL)(k)?.planId,
            H = null != B ? E.Ay.getPremiumType(B) : null;
        s()(null != H, "Should not be cancelling Nitro without premiumType");
        let K = H === U.PremiumTypes.TIER_0 || H === U.PremiumTypes.TIER_1 || H === U.PremiumTypes.TIER_2;
        null == j && (j = K ? P.g.WHAT_YOU_LOSE : P.g.CONFIRM);
        let [V, Y, G, $] = (0, x.U)(j, k, n),
            z = (0, m.H)(),
            X = (0, D.f9)(),
            { churnUserDiscountOffer: Q, isFetchingChurnDiscountOffer: Z } = (0, D.g5)(
                !X || (k.status === b.Dmq.CANCELED && V !== P.g.CONFIRM_DISCOUNT),
            ),
            J = (0, T.tQ)(k, U.gD.PREMIUM_MONTH_TIER_2, Q),
            [tt] = (0, S.Kq)({
                subscriptionId: k.id,
                items: (0, E.ee)(k.renewalMutations?.items ?? k.items),
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: c.A.CANCEL_INVOICE_PREVIEW,
            }),
            te = null !== tt ? E.Ay.getIntervalForInvoice(tt) : null,
            tn = (0, E.y8)(U.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: k.currency,
                paymentSourceId: k.paymentSourceId,
            }),
            tr = (0, I.$g)(tn.amount, tn.currency),
            ta = a.useMemo(() => (0, C.A)(), []);
        a.useEffect(() => {
            f.default.track(b.HAw.CANCELLATION_FLOW_STARTED, { location_stack: n, load_id: ta, ...(0, N.j)(k) });
        }, [n, k, ta]);
        let [to, ti] = a.useState(null),
            ts = a.useCallback(() => {
                switch (V) {
                    case P.g.CONFIRM:
                        return (0, r.jsx)(y.r, {});
                    case P.g.CONFIRM_DISCOUNT:
                        return (0, r.jsx)(A.M, {});
                    case P.g.DISCOUNT_APPLIED:
                        return (0, r.jsx)(g.V, {});
                    case P.g.PREVIEW:
                        return (0, r.jsx)(w.E, {});
                    case P.g.PAUSE_SELECT:
                        return (0, r.jsx)(h.PremiumSubscriptionPauseModalSelect, {});
                    case P.g.PAUSE_CONFIRM:
                        return (0, r.jsx)(h.cN, {});
                    case P.g.WHAT_YOU_LOSE:
                    default:
                        return (0, r.jsx)(L.Z, {});
                }
            }, [V]),
            tl = a.useCallback(async () => {
                if (
                    (f.default.track(b.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: n,
                        load_id: ta,
                        ...(0, N.j)(k),
                    }),
                    v.includes(k.status))
                )
                    await (0, u.M2)(k.id, n, e);
                else {
                    let t = k.renewalMutations?.items ?? k.items,
                        r = (0, E.ee)(t);
                    await (0, u.nV)(
                        k,
                        { items: r },
                        { amount: 0, currency: k.currency },
                        (0, E.UC)(r, k.currency, k.paymentSourceId),
                        n,
                        e,
                    );
                }
                p.Ay.fireSurveyAction(l.w.NITRO_UNSUBBED);
            }, [k, n, e, ta]),
            t_ = async () => {
                if (null == Q) throw Error("Churn user discount offer is null");
                k.status === b.Dmq.CANCELED
                    ? await (0, u._D)(k, Q)
                    : await _.Bo.post({
                          url: b.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: Q.id },
                          rejectWithError: !0,
                      });
            };
        return (0, r.jsx)(d.f5, {
            value: n,
            children: (0, r.jsxs)(O.CancellationContext.Provider, {
                value: {
                    setStep: Y,
                    premiumType: H,
                    onClose: () => {
                        i(),
                            f.default.track(b.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: P.T[V],
                                to_step: null,
                                step_duration_ms: Date.now() - G,
                                flow_duration_ms: Date.now() - $,
                                location_stack: n,
                                load_id: ta,
                                ...(0, N.j)(k),
                            });
                    },
                    transitionState: R,
                    premiumSubscription: k,
                    analyticsLocations: n,
                    analyticsLocation: e,
                    confettiCanvas: W,
                    churnUserDiscountOffer: Q,
                    isFetchingChurnDiscountOffer: X && Z,
                    fullPrice: tr,
                    discountedPrice: J,
                    planId: B,
                    paymentsBlocked: z,
                    renewalInvoice: tt,
                    renewalInvoiceDetails: te,
                    handleCancellation: tl,
                    applyOffer: t_,
                    pauseDuration: to,
                    setPauseDuration: ti,
                },
                children: [(0, r.jsx)(o.Fk, { ref: q, className: F.L, environment: M.current }), ts()],
            }),
        });
    };
