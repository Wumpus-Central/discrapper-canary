r.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => R });
var n = r(627968),
    a = r(64700),
    o = r(106778),
    i = r(284009),
    s = r.n(i),
    l = r(517846),
    _ = r(562465),
    c = r(384904),
    u = r(793574),
    d = r(688810),
    m = r(86379),
    C = r(925847),
    p = r(236698),
    f = r(954571),
    E = r(927578),
    I = r(580630),
    S = r(543767),
    D = r(526292),
    T = r(511484),
    h = r(318998),
    y = r(95337),
    A = r(412314),
    g = r(456459),
    P = r(473702),
    O = r(916974),
    w = r(347378),
    x = r(606423),
    L = r(64588),
    N = r(501957),
    b = r(788868),
    U = r(652215),
    v = r(2929);
let F = [U.Dmq.PAST_DUE, U.Dmq.PAUSED, U.Dmq.BILLING_RETRY],
    R = (e) => {
        let { analyticsLocation: t, analyticsLocations: r, onClose: i, transitionState: R, premiumSubscription: k } = e,
            { initialStep: j } = e,
            M = a.useRef(new o.OH()),
            [W, q] = a.useState(null),
            B = (0, E.EL)(k)?.planId,
            H = null != B ? E.Ay.getPremiumType(B) : null;
        s()(null != H, "Should not be cancelling Nitro without premiumType");
        let K = H === b.PremiumTypes.TIER_0 || H === b.PremiumTypes.TIER_1 || H === b.PremiumTypes.TIER_2;
        null == j && (j = K ? P.g.WHAT_YOU_LOSE : P.g.CONFIRM);
        let [V, Y, G, $] = (0, L.U)(j, k, r),
            z = (0, m.H)(),
            X = (0, D.f9)(),
            { churnUserDiscountOffer: Q, isFetchingChurnDiscountOffer: Z } = (0, D.g5)(
                !X || (k.status === U.Dmq.CANCELED && V !== P.g.CONFIRM_DISCOUNT),
            ),
            J = (0, T.tQ)(k, b.gD.PREMIUM_MONTH_TIER_2, Q),
            [ee] = (0, S.Kq)({
                subscriptionId: k.id,
                items: (0, E.ee)(k.renewalMutations?.items ?? k.items),
                renewal: !0,
                analyticsLocations: r,
                analyticsLocation: u.A.CANCEL_INVOICE_PREVIEW,
            }),
            et = null !== ee ? E.Ay.getIntervalForInvoice(ee) : null,
            er = (0, E.y8)(b.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: k.currency,
                paymentSourceId: k.paymentSourceId,
            }),
            en = (0, I.$g)(er.amount, er.currency),
            ea = a.useMemo(() => (0, C.A)(), []);
        a.useEffect(() => {
            f.default.track(U.HAw.CANCELLATION_FLOW_STARTED, { location_stack: r, load_id: ea, ...(0, N.j)(k) });
        }, [r, k, ea]);
        let [eo, ei] = a.useState(null),
            es = a.useCallback(() => {
                switch (V) {
                    case P.g.CONFIRM:
                        return (0, n.jsx)(y.r, {});
                    case P.g.CONFIRM_DISCOUNT:
                        return (0, n.jsx)(A.M, {});
                    case P.g.DISCOUNT_APPLIED:
                        return (0, n.jsx)(g.V, {});
                    case P.g.PREVIEW:
                        return (0, n.jsx)(w.E, {});
                    case P.g.PAUSE_SELECT:
                        return (0, n.jsx)(h.PremiumSubscriptionPauseModalSelect, {});
                    case P.g.PAUSE_CONFIRM:
                        return (0, n.jsx)(h.cN, {});
                    case P.g.WHAT_YOU_LOSE:
                    default:
                        return (0, n.jsx)(x.Z, {});
                }
            }, [V]),
            el = a.useCallback(async () => {
                if (
                    (f.default.track(U.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: r,
                        load_id: ea,
                        ...(0, N.j)(k),
                    }),
                    F.includes(k.status))
                )
                    await (0, c.M2)(k.id, r, t);
                else {
                    let e = k.renewalMutations?.items ?? k.items,
                        n = (0, E.ee)(e);
                    await (0, c.nV)(
                        k,
                        { items: n },
                        { amount: 0, currency: k.currency },
                        (0, E.UC)(n, k.currency, k.paymentSourceId),
                        r,
                        t,
                    );
                }
                p.Ay.fireSurveyAction(l.w.NITRO_UNSUBBED);
            }, [k, r, t, ea]),
            e_ = async () => {
                if (null == Q) throw Error("Churn user discount offer is null");
                k.status === U.Dmq.CANCELED
                    ? await (0, c._D)(k, Q)
                    : await _.Bo.post({
                          url: U.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: Q.id },
                          rejectWithError: !0,
                      });
            };
        return (0, n.jsx)(d.f5, {
            value: r,
            children: (0, n.jsxs)(O.CancellationContext.Provider, {
                value: {
                    setStep: Y,
                    premiumType: H,
                    onClose: () => {
                        i(),
                            f.default.track(U.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: P.T[V],
                                to_step: null,
                                step_duration_ms: Date.now() - G,
                                flow_duration_ms: Date.now() - $,
                                location_stack: r,
                                load_id: ea,
                                ...(0, N.j)(k),
                            });
                    },
                    transitionState: R,
                    premiumSubscription: k,
                    analyticsLocations: r,
                    analyticsLocation: t,
                    confettiCanvas: W,
                    churnUserDiscountOffer: Q,
                    isFetchingChurnDiscountOffer: X && Z,
                    fullPrice: en,
                    discountedPrice: J,
                    planId: B,
                    paymentsBlocked: z,
                    renewalInvoice: ee,
                    renewalInvoiceDetails: et,
                    handleCancellation: el,
                    applyOffer: e_,
                    pauseDuration: eo,
                    setPauseDuration: ei,
                },
                children: [(0, n.jsx)(o.Fk, { ref: q, className: v.L, environment: M.current }), es()],
            }),
        });
    };
