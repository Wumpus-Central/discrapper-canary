r.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => R });
var n = r(627968),
    a = r(64700),
    o = r(106778),
    i = r(284009),
    s = r.n(i),
    l = r(517846),
    _ = r(562465),
    u = r(384904),
    c = r(793574),
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
    y = r(318998),
    h = r(95337),
    A = r(412314),
    g = r(456459),
    P = r(473702),
    O = r(916974),
    w = r(347378),
    N = r(606423),
    L = r(64588),
    x = r(501957),
    U = r(788868),
    b = r(652215),
    F = r(247027);
let v = [b.Dmq.PAST_DUE, b.Dmq.PAUSED, b.Dmq.BILLING_RETRY],
    R = (e) => {
        let { analyticsLocation: t, analyticsLocations: r, onClose: i, transitionState: R, premiumSubscription: j } = e,
            { initialStep: M } = e,
            k = a.useRef(new o.OH()),
            [W, q] = a.useState(null),
            B = (0, E.EL)(j)?.planId,
            H = null != B ? E.Ay.getPremiumType(B) : null;
        s()(null != H, "Should not be cancelling Nitro without premiumType");
        let V = H === U.PremiumTypes.TIER_0 || H === U.PremiumTypes.TIER_1 || H === U.PremiumTypes.TIER_2;
        null == M && (M = V ? P.g.WHAT_YOU_LOSE : P.g.CONFIRM);
        let [K, Y, G, z] = (0, L.U)(M, j, r),
            $ = (0, m.H)(),
            X = (0, D.f9)(),
            { churnUserDiscountOffer: Q, isFetchingChurnDiscountOffer: Z } = (0, D.g5)(
                !X || (j.status === b.Dmq.CANCELED && K !== P.g.CONFIRM_DISCOUNT),
            ),
            J = (0, T.tQ)(j, U.gD.PREMIUM_MONTH_TIER_2, Q),
            [ee] = (0, S.Kq)({
                subscriptionId: j.id,
                items: (0, E.ee)(j.renewalMutations?.items ?? j.items),
                renewal: !0,
                analyticsLocations: r,
                analyticsLocation: c.A.CANCEL_INVOICE_PREVIEW,
            }),
            et = null !== ee ? E.Ay.getIntervalForInvoice(ee) : null,
            er = (0, E.y8)(U.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: j.currency,
                paymentSourceId: j.paymentSourceId,
            }),
            en = (0, I.$g)(er.amount, er.currency),
            ea = a.useMemo(() => (0, C.A)(), []);
        a.useEffect(() => {
            f.default.track(b.HAw.CANCELLATION_FLOW_STARTED, { location_stack: r, load_id: ea, ...(0, x.j)(j) });
        }, [r, j, ea]);
        let [eo, ei] = a.useState(null),
            es = a.useCallback(() => {
                switch (K) {
                    case P.g.CONFIRM:
                        return (0, n.jsx)(h.r, {});
                    case P.g.CONFIRM_DISCOUNT:
                        return (0, n.jsx)(A.M, {});
                    case P.g.DISCOUNT_APPLIED:
                        return (0, n.jsx)(g.V, {});
                    case P.g.PREVIEW:
                        return (0, n.jsx)(w.E, {});
                    case P.g.PAUSE_SELECT:
                        return (0, n.jsx)(y.PremiumSubscriptionPauseModalSelect, {});
                    case P.g.PAUSE_CONFIRM:
                        return (0, n.jsx)(y.cN, {});
                    case P.g.WHAT_YOU_LOSE:
                    default:
                        return (0, n.jsx)(N.Z, {});
                }
            }, [K]),
            el = a.useCallback(async () => {
                if (
                    (f.default.track(b.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: r,
                        load_id: ea,
                        ...(0, x.j)(j),
                    }),
                    v.includes(j.status))
                )
                    await (0, u.M2)(j.id, r, t);
                else {
                    let e = j.renewalMutations?.items ?? j.items,
                        n = (0, E.ee)(e);
                    await (0, u.nV)(
                        j,
                        { items: n },
                        { amount: 0, currency: j.currency },
                        (0, E.UC)(n, j.currency, j.paymentSourceId),
                        r,
                        t,
                    );
                }
                p.Ay.fireSurveyAction(l.w.NITRO_UNSUBBED);
            }, [j, r, t, ea]),
            e_ = async () => {
                if (null == Q) throw Error("Churn user discount offer is null");
                j.status === b.Dmq.CANCELED
                    ? await (0, u._D)(j, Q)
                    : await _.Bo.post({
                          url: b.Rsh.USER_OFFER_REDEEM,
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
                            f.default.track(b.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: P.T[K],
                                to_step: null,
                                step_duration_ms: Date.now() - G,
                                flow_duration_ms: Date.now() - z,
                                location_stack: r,
                                load_id: ea,
                                ...(0, x.j)(j),
                            });
                    },
                    transitionState: R,
                    premiumSubscription: j,
                    analyticsLocations: r,
                    analyticsLocation: t,
                    confettiCanvas: W,
                    churnUserDiscountOffer: Q,
                    isFetchingChurnDiscountOffer: X && Z,
                    fullPrice: en,
                    discountedPrice: J,
                    planId: B,
                    paymentsBlocked: $,
                    renewalInvoice: ee,
                    renewalInvoiceDetails: et,
                    handleCancellation: el,
                    applyOffer: e_,
                    pauseDuration: eo,
                    setPauseDuration: ei,
                },
                children: [(0, n.jsx)(o.Fk, { ref: q, className: F.L, environment: k.current }), es()],
            }),
        });
    };
