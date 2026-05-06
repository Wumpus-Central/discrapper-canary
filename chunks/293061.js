a.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => j });
var n = a(627968),
    s = a(64700),
    r = a(106778),
    u = a(284009),
    l = a.n(u),
    c = a(517846),
    i = a(793574),
    o = a(688810),
    _ = a(753390),
    E = a(86379),
    m = a(925847),
    C = a(27620),
    d = a(174459),
    I = a(927578),
    T = a(580630),
    A = a(543767),
    L = a(367319),
    N = a(511484),
    p = a(318998),
    w = a(95337),
    D = a(412314),
    O = a(456459),
    S = a(473702),
    y = a(916974),
    f = a(347378),
    P = a(606423),
    R = a(501957),
    M = a(652215),
    g = a(788868),
    k = a(71204);
let h = [M.Dmq.PAST_DUE, M.Dmq.PAUSED, M.Dmq.BILLING_RETRY],
    j = (e) => {
        let { analyticsLocation: t, analyticsLocations: a, onClose: u, transitionState: j, premiumSubscription: U } = e,
            { initialStep: x } = e,
            F = s.useRef(new r.OH()),
            [H, b] = s.useState(null),
            v = (0, I.EL)(U)?.planId,
            W = null != v ? I.Ay.getPremiumType(v) : null;
        l()(null != W, "Should not be cancelling Nitro without premiumType");
        let V = W === g.PremiumTypes.TIER_0 || W === g.PremiumTypes.TIER_1 || W === g.PremiumTypes.TIER_2;
        null == x && (x = V ? S.g.WHAT_YOU_LOSE : S.g.CONFIRM);
        let [q, B, Y, G] = ((e, t, a) => {
                let [n, r] = s.useState(e),
                    [u, l] = s.useState(Date.now()),
                    [c] = s.useState(Date.now()),
                    i = s.useCallback(
                        (e) => {
                            d.default.track(M.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: S.T[n],
                                to_step: S.T[e],
                                step_duration_ms: Date.now() - u,
                                flow_duration_ms: Date.now() - c,
                                location_stack: a,
                                ...(0, R.j)(t),
                            }),
                                r(e),
                                l(Date.now());
                        },
                        [a, c, u, n, t],
                    );
                return [n, i, u, c];
            })(x, U, a),
            Q = (0, E.Hp)(),
            Z = (0, L.f9)(),
            { churnUserDiscountOffer: $, isFetchingChurnDiscountOffer: z } = (0, L.g5)(
                !Z || (U.status === M.Dmq.CANCELED && q !== S.g.CONFIRM_DISCOUNT),
            ),
            J = (0, N.tQ)(U, g.gD.PREMIUM_MONTH_TIER_2, $),
            [K] = (0, A.YV)({
                subscriptionId: U.id,
                items: (0, I.ee)(U.renewalMutations?.items ?? U.items),
                renewal: !0,
                analyticsLocations: a,
                analyticsLocation: i.A.CANCEL_INVOICE_PREVIEW,
            }),
            X = null !== K ? I.Ay.getIntervalForInvoice(K) : null,
            ee = (0, I.y8)(g.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: U.currency,
                paymentSourceId: U.paymentSourceId,
            }),
            et = (0, T.$g)(ee.amount, ee.currency),
            ea = s.useMemo(() => (0, m.A)(), []);
        s.useEffect(() => {
            d.default.track(M.HAw.CANCELLATION_FLOW_STARTED, { location_stack: a, load_id: ea, ...(0, R.j)(U) });
        }, [a, U, ea]);
        let [en, es] = s.useState(null),
            er = s.useCallback(() => {
                switch (q) {
                    case S.g.CONFIRM:
                        return (0, n.jsx)(w.r, {});
                    case S.g.CONFIRM_DISCOUNT:
                        return (0, n.jsx)(D.M, {});
                    case S.g.DISCOUNT_APPLIED:
                        return (0, n.jsx)(O.V, {});
                    case S.g.PREVIEW:
                        return (0, n.jsx)(f.E, {});
                    case S.g.PAUSE_SELECT:
                        return (0, n.jsx)(p.PremiumSubscriptionPauseModalSelect, {});
                    case S.g.PAUSE_CONFIRM:
                        return (0, n.jsx)(p.cN, {});
                    case S.g.WHAT_YOU_LOSE:
                    default:
                        return (0, n.jsx)(P.Z, {});
                }
            }, [q]),
            eu = s.useCallback(async () => {
                if (
                    (d.default.track(M.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: a,
                        load_id: ea,
                        ...(0, R.j)(U),
                    }),
                    h.includes(U.status))
                )
                    await (0, _.M2)(U.id, a, t);
                else {
                    let e = U.renewalMutations?.items ?? U.items,
                        n = (0, I.ee)(e);
                    await (0, _.nV)(
                        U,
                        { items: n },
                        { amount: 0, currency: U.currency },
                        (0, I.UC)(n, U.currency, U.paymentSourceId),
                        a,
                        t,
                    );
                }
                C.Ay.fireSurveyAction(c.w.NITRO_UNSUBBED);
            }, [U, a, t, ea]),
            el = async () => {
                if (null == $) throw Error("Churn user discount offer is null");
                U.status === M.Dmq.CANCELED ? await (0, _._D)(U, $) : await (0, _.x)($);
            };
        return (0, n.jsx)(o.f5, {
            value: a,
            children: (0, n.jsxs)(y.CancellationContext.Provider, {
                value: {
                    setStep: B,
                    premiumType: W,
                    onClose: () => {
                        u(),
                            d.default.track(M.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: S.T[q],
                                to_step: null,
                                step_duration_ms: Date.now() - Y,
                                flow_duration_ms: Date.now() - G,
                                location_stack: a,
                                load_id: ea,
                                ...(0, R.j)(U),
                            });
                    },
                    transitionState: j,
                    premiumSubscription: U,
                    analyticsLocations: a,
                    analyticsLocation: t,
                    confettiCanvas: H,
                    churnUserDiscountOffer: $,
                    isFetchingChurnDiscountOffer: Z && z,
                    fullPrice: et,
                    discountedPrice: J,
                    planId: v,
                    paymentsBlocked: Q,
                    renewalInvoice: K,
                    renewalInvoiceDetails: X,
                    handleCancellation: eu,
                    applyOffer: el,
                    pauseDuration: en,
                    setPauseDuration: es,
                },
                children: [(0, n.jsx)(r.Fk, { ref: b, className: k.L, environment: F.current }), er()],
            }),
        });
    };
