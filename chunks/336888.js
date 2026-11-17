a.d(t, { default: () => x });
var n = a(477900),
    s = a(582128),
    u = a(776310),
    r = a(284009),
    c = a.n(r),
    l = a(517846),
    i = a(855986),
    o = a(793574),
    _ = a(688810),
    E = a(669815),
    m = a(86379),
    C = a(925847),
    d = a(669700),
    I = a(97352),
    T = a(129230),
    A = a(448645),
    p = a(580630),
    N = a(543767),
    w = a(526292),
    y = a(139665),
    D = a(511484),
    L = a(318998),
    O = a(95337),
    S = a(412314),
    f = a(456459),
    M = a(473702),
    P = a(916974),
    R = a(347378),
    g = a(606423),
    k = a(501957),
    h = a(652215),
    U = a(682901),
    b = a(145781);
let j = [h.Dmq.PAST_DUE, h.Dmq.PAUSED, h.Dmq.BILLING_RETRY],
    x = (e) => {
        let { analyticsLocation: t, analyticsLocations: a, onClose: r, transitionState: x, premiumSubscription: F } = e,
            { initialStep: H } = e,
            v = s.useRef(new u.OH()),
            [W, V] = s.useState(null),
            q = (0, A.EL)(F)?.planId,
            Y = null != q ? A.Ay.getPremiumType(q) : null;
        if ((c()(null != Y, "Should not be cancelling Nitro without premiumType"), null == H))
            switch (Y) {
                case U.PremiumTypes.TIER_0:
                case U.PremiumTypes.TIER_1:
                case U.PremiumTypes.TIER_2:
                    H = M.g.WHAT_YOU_LOSE;
                    break;
                default:
                    H = M.g.CONFIRM;
            }
        let [B, G, Z, Q] = ((e, t, a) => {
                let [n, u] = s.useState(e),
                    [r, c] = s.useState(Date.now()),
                    [l] = s.useState(Date.now()),
                    i = s.useCallback(
                        (e) => {
                            (T.default.track(h.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: M.T[n],
                                to_step: M.T[e],
                                step_duration_ms: Date.now() - r,
                                flow_duration_ms: Date.now() - l,
                                location_stack: a,
                                ...(0, k.j)(t),
                            }),
                                u(e),
                                c(Date.now()));
                        },
                        [a, l, r, n, t],
                    );
                return [n, i, r, l];
            })(H, F, a),
            $ = (0, m.Hp)(),
            z = (0, A.Zb)(q),
            J = (0, y.G)({ location: "PremiumSubscriptionCancellationModal", autoTrackExposure: z }),
            K = z && J,
            X = (0, w.f9)() || K,
            { churnUserDiscountOffer: ee, isFetchingChurnDiscountOffer: et } = (0, w.g5)(
                !X || (!K && F.status === h.Dmq.CANCELED && B !== M.g.CONFIRM_DISCOUNT),
            ),
            ea = (0, D.tQ)(F, U.gD.PREMIUM_MONTH_TIER_2, ee),
            [en] = (0, N.YV)({
                subscriptionId: F.id,
                items: (0, A.ee)(F.renewalMutations?.items ?? F.items),
                renewal: !0,
                analyticsLocations: a,
                analyticsLocation: o.A.CANCEL_INVOICE_PREVIEW,
            }),
            es = null !== en ? A.Ay.getIntervalForInvoice(en) : null,
            eu = (0, i.bG)(
                [I.A],
                () => {
                    if (null != I.A.get(U.gD.PREMIUM_MONTH_TIER_2))
                        try {
                            let e = (0, A.y8)(
                                U.gD.PREMIUM_MONTH_TIER_2,
                                !1,
                                !1,
                                { currency: F.currency, paymentSourceId: F.paymentSourceId },
                                !1,
                            );
                            return (0, p.$g)(e.amount, e.currency);
                        } catch {
                            return;
                        }
                },
                [F.currency, F.paymentSourceId],
            ),
            er = s.useMemo(() => (0, C.A)(), []);
        s.useEffect(() => {
            T.default.track(h.HAw.CANCELLATION_FLOW_STARTED, { location_stack: a, load_id: er, ...(0, k.j)(F) });
        }, [a, F, er]);
        let ec = s.useCallback(() => {
                (r(),
                    T.default.track(h.HAw.CANCELLATION_FLOW_STEP, {
                        from_step: M.T[B],
                        to_step: null,
                        step_duration_ms: Date.now() - Z,
                        flow_duration_ms: Date.now() - Q,
                        location_stack: a,
                        load_id: er,
                        ...(0, k.j)(F),
                    }));
            }, [r, B, Z, Q, a, er, F]),
            [el, ei] = s.useState(null),
            eo = s.useCallback(() => {
                switch (B) {
                    case M.g.CONFIRM:
                        return (0, n.jsx)(O.r, {});
                    case M.g.CONFIRM_DISCOUNT:
                        return (0, n.jsx)(S.M, {});
                    case M.g.DISCOUNT_APPLIED:
                        return (0, n.jsx)(f.V, {});
                    case M.g.PREVIEW:
                        return (0, n.jsx)(R.E, {});
                    case M.g.PAUSE_SELECT:
                        return (0, n.jsx)(L.PremiumSubscriptionPauseModalSelect, {});
                    case M.g.PAUSE_CONFIRM:
                        return (0, n.jsx)(L.cN, {});
                    case M.g.WHAT_YOU_LOSE:
                    default:
                        return (0, n.jsx)(g.Z, {});
                }
            }, [B]),
            e_ = s.useCallback(async () => {
                if (
                    (T.default.track(h.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: a,
                        load_id: er,
                        ...(0, k.j)(F),
                    }),
                    j.includes(F.status))
                )
                    await (0, E.M2)(F.id, a, t);
                else {
                    let e = F.renewalMutations?.items ?? F.items,
                        n = (0, A.ee)(e);
                    await (0, E.nV)(
                        F,
                        { items: n },
                        { amount: 0, currency: F.currency },
                        (0, A.UC)(n, F.currency, F.paymentSourceId),
                        a,
                        t,
                    );
                }
                d.Ay.fireSurveyAction(l.w.NITRO_UNSUBBED);
            }, [F, a, t, er]),
            eE = s.useCallback(async () => {
                if (null == ee) throw Error("Churn user discount offer is null");
                F.status === h.Dmq.CANCELED ? await (0, E._D)(F, ee) : await (0, E.x)(ee);
            }, [ee, F]),
            em = X && et,
            eC = s.useMemo(
                () => ({
                    setStep: G,
                    premiumType: Y,
                    onClose: ec,
                    transitionState: x,
                    premiumSubscription: F,
                    analyticsLocations: a,
                    analyticsLocation: t,
                    confettiCanvas: W,
                    churnUserDiscountOffer: ee,
                    isFetchingChurnDiscountOffer: em,
                    fullPrice: eu,
                    discountedPrice: ea,
                    planId: q,
                    isPremiumGroupContinuation: K,
                    paymentsBlocked: $,
                    renewalInvoice: en,
                    renewalInvoiceDetails: es,
                    handleCancellation: e_,
                    applyOffer: eE,
                    pauseDuration: el,
                    setPauseDuration: ei,
                }),
                [G, Y, ec, x, F, a, t, W, ee, em, eu, ea, q, K, $, en, es, e_, eE, el],
            );
        return (0, n.jsx)(_.f5, {
            value: a,
            children: (0, n.jsxs)(P.CancellationContext.Provider, {
                value: eC,
                children: [(0, n.jsx)(u.Fk, { ref: V, className: b.L, environment: v.current }), eo()],
            }),
        });
    };
