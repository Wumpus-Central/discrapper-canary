a.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => j });
var s = a(627968),
    n = a(64700),
    r = a(106778),
    u = a(284009),
    c = a.n(u),
    l = a(517846),
    i = a(793574),
    o = a(688810),
    _ = a(277984),
    E = a(86379),
    m = a(925847),
    d = a(27620),
    C = a(174459),
    I = a(428262),
    T = a(580630),
    A = a(543767),
    w = a(526292),
    L = a(410516),
    N = a(318998),
    p = a(95337),
    D = a(412314),
    O = a(456459),
    S = a(473702),
    f = a(916974),
    y = a(347378),
    P = a(606423),
    R = a(501957),
    M = a(652215),
    g = a(202541),
    k = a(71204);
let h = [M.Dmq.PAST_DUE, M.Dmq.PAUSED, M.Dmq.BILLING_RETRY],
    j = (e) => {
        let { analyticsLocation: t, analyticsLocations: a, onClose: u, transitionState: j, premiumSubscription: U } = e,
            { initialStep: x } = e,
            F = n.useRef(new r.OH()),
            [b, H] = n.useState(null),
            v = (0, I.EL)(U)?.planId,
            W = null != v ? I.Ay.getPremiumType(v) : null;
        if ((c()(null != W, "Should not be cancelling Nitro without premiumType"), null == x))
            switch (W) {
                case g.PremiumTypes.TIER_0:
                case g.PremiumTypes.TIER_1:
                case g.PremiumTypes.TIER_2:
                    x = S.g.WHAT_YOU_LOSE;
                    break;
                default:
                    x = S.g.CONFIRM;
            }
        let [V, q, B, Y] = ((e, t, a) => {
                let [s, r] = n.useState(e),
                    [u, c] = n.useState(Date.now()),
                    [l] = n.useState(Date.now()),
                    i = n.useCallback(
                        (e) => {
                            C.default.track(M.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: S.T[s],
                                to_step: S.T[e],
                                step_duration_ms: Date.now() - u,
                                flow_duration_ms: Date.now() - l,
                                location_stack: a,
                                ...(0, R.j)(t),
                            }),
                                r(e),
                                c(Date.now());
                        },
                        [a, l, u, s, t],
                    );
                return [s, i, u, l];
            })(x, U, a),
            G = (0, E.Hp)(),
            Q = (0, w.f9)(),
            { churnUserDiscountOffer: Z, isFetchingChurnDiscountOffer: $ } = (0, w.g5)(
                !Q || (U.status === M.Dmq.CANCELED && V !== S.g.CONFIRM_DISCOUNT),
            ),
            z = (0, L.tQ)(U, g.gD.PREMIUM_MONTH_TIER_2, Z),
            [J] = (0, A.YV)({
                subscriptionId: U.id,
                items: (0, I.ee)(U.renewalMutations?.items ?? U.items),
                renewal: !0,
                analyticsLocations: a,
                analyticsLocation: i.A.CANCEL_INVOICE_PREVIEW,
            }),
            K = null !== J ? I.Ay.getIntervalForInvoice(J) : null,
            X = (0, I.y8)(g.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: U.currency,
                paymentSourceId: U.paymentSourceId,
            }),
            ee = (0, T.$g)(X.amount, X.currency),
            et = n.useMemo(() => (0, m.A)(), []);
        n.useEffect(() => {
            C.default.track(M.HAw.CANCELLATION_FLOW_STARTED, { location_stack: a, load_id: et, ...(0, R.j)(U) });
        }, [a, U, et]);
        let [ea, es] = n.useState(null),
            en = n.useCallback(() => {
                switch (V) {
                    case S.g.CONFIRM:
                        return (0, s.jsx)(p.r, {});
                    case S.g.CONFIRM_DISCOUNT:
                        return (0, s.jsx)(D.M, {});
                    case S.g.DISCOUNT_APPLIED:
                        return (0, s.jsx)(O.V, {});
                    case S.g.PREVIEW:
                        return (0, s.jsx)(y.E, {});
                    case S.g.PAUSE_SELECT:
                        return (0, s.jsx)(N.PremiumSubscriptionPauseModalSelect, {});
                    case S.g.PAUSE_CONFIRM:
                        return (0, s.jsx)(N.cN, {});
                    case S.g.WHAT_YOU_LOSE:
                    default:
                        return (0, s.jsx)(P.Z, {});
                }
            }, [V]),
            er = n.useCallback(async () => {
                if (
                    (C.default.track(M.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: a,
                        load_id: et,
                        ...(0, R.j)(U),
                    }),
                    h.includes(U.status))
                )
                    await (0, _.M2)(U.id, a, t);
                else {
                    let e = U.renewalMutations?.items ?? U.items,
                        s = (0, I.ee)(e);
                    await (0, _.nV)(
                        U,
                        { items: s },
                        { amount: 0, currency: U.currency },
                        (0, I.UC)(s, U.currency, U.paymentSourceId),
                        a,
                        t,
                    );
                }
                d.Ay.fireSurveyAction(l.w.NITRO_UNSUBBED);
            }, [U, a, t, et]),
            eu = async () => {
                if (null == Z) throw Error("Churn user discount offer is null");
                U.status === M.Dmq.CANCELED ? await (0, _._D)(U, Z) : await (0, _.x)(Z);
            };
        return (0, s.jsx)(o.f5, {
            value: a,
            children: (0, s.jsxs)(f.CancellationContext.Provider, {
                value: {
                    setStep: q,
                    premiumType: W,
                    onClose: () => {
                        u(),
                            C.default.track(M.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: S.T[V],
                                to_step: null,
                                step_duration_ms: Date.now() - B,
                                flow_duration_ms: Date.now() - Y,
                                location_stack: a,
                                load_id: et,
                                ...(0, R.j)(U),
                            });
                    },
                    transitionState: j,
                    premiumSubscription: U,
                    analyticsLocations: a,
                    analyticsLocation: t,
                    confettiCanvas: b,
                    churnUserDiscountOffer: Z,
                    isFetchingChurnDiscountOffer: Q && $,
                    fullPrice: ee,
                    discountedPrice: z,
                    planId: v,
                    paymentsBlocked: G,
                    renewalInvoice: J,
                    renewalInvoiceDetails: K,
                    handleCancellation: er,
                    applyOffer: eu,
                    pauseDuration: ea,
                    setPauseDuration: es,
                },
                children: [(0, s.jsx)(r.Fk, { ref: H, className: k.L, environment: F.current }), en()],
            }),
        });
    };
