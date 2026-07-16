a.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => x });
var n = a(627968),
    s = a(64700),
    r = a(106778),
    u = a(284009),
    c = a.n(u),
    l = a(517846),
    i = a(17928),
    o = a(793574),
    _ = a(688810),
    E = a(277984),
    m = a(86379),
    d = a(925847),
    C = a(27620),
    I = a(97352),
    T = a(174459),
    A = a(428262),
    N = a(580630),
    p = a(543767),
    w = a(526292),
    y = a(410516),
    D = a(318998),
    L = a(95337),
    O = a(412314),
    S = a(456459),
    f = a(473702),
    P = a(916974),
    M = a(347378),
    R = a(606423),
    g = a(501957),
    h = a(652215),
    k = a(202541),
    U = a(71204);
let j = [h.Dmq.PAST_DUE, h.Dmq.PAUSED, h.Dmq.BILLING_RETRY],
    x = (e) => {
        let { analyticsLocation: t, analyticsLocations: a, onClose: u, transitionState: x, premiumSubscription: F } = e,
            { initialStep: b } = e,
            H = s.useRef(new r.OH()),
            [v, W] = s.useState(null),
            V = (0, A.EL)(F)?.planId,
            q = null != V ? A.Ay.getPremiumType(V) : null;
        if ((c()(null != q, "Should not be cancelling Nitro without premiumType"), null == b))
            switch (q) {
                case k.PremiumTypes.TIER_0:
                case k.PremiumTypes.TIER_1:
                case k.PremiumTypes.TIER_2:
                    b = f.g.WHAT_YOU_LOSE;
                    break;
                default:
                    b = f.g.CONFIRM;
            }
        let [B, Y, G, Q] = ((e, t, a) => {
                let [n, r] = s.useState(e),
                    [u, c] = s.useState(Date.now()),
                    [l] = s.useState(Date.now()),
                    i = s.useCallback(
                        (e) => {
                            T.default.track(h.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: f.T[n],
                                to_step: f.T[e],
                                step_duration_ms: Date.now() - u,
                                flow_duration_ms: Date.now() - l,
                                location_stack: a,
                                ...(0, g.j)(t),
                            }),
                                r(e),
                                c(Date.now());
                        },
                        [a, l, u, n, t],
                    );
                return [n, i, u, l];
            })(b, F, a),
            Z = (0, m.Hp)(),
            $ = (0, w.f9)(),
            { churnUserDiscountOffer: z, isFetchingChurnDiscountOffer: J } = (0, w.g5)(
                !$ || (F.status === h.Dmq.CANCELED && B !== f.g.CONFIRM_DISCOUNT),
            ),
            K = (0, y.tQ)(F, k.gD.PREMIUM_MONTH_TIER_2, z),
            [X] = (0, p.YV)({
                subscriptionId: F.id,
                items: (0, A.ee)(F.renewalMutations?.items ?? F.items),
                renewal: !0,
                analyticsLocations: a,
                analyticsLocation: o.A.CANCEL_INVOICE_PREVIEW,
            }),
            ee = null !== X ? A.Ay.getIntervalForInvoice(X) : null,
            et = (0, i.bG)([I.A], () => {
                if (null != I.A.get(k.gD.PREMIUM_MONTH_TIER_2))
                    try {
                        let e = (0, A.y8)(
                            k.gD.PREMIUM_MONTH_TIER_2,
                            !1,
                            !1,
                            { currency: F.currency, paymentSourceId: F.paymentSourceId },
                            !1,
                        );
                        return (0, N.$g)(e.amount, e.currency);
                    } catch {
                        return;
                    }
            }, [F.currency, F.paymentSourceId]),
            ea = s.useMemo(() => (0, d.A)(), []);
        s.useEffect(() => {
            T.default.track(h.HAw.CANCELLATION_FLOW_STARTED, { location_stack: a, load_id: ea, ...(0, g.j)(F) });
        }, [a, F, ea]);
        let [en, es] = s.useState(null),
            er = s.useCallback(() => {
                switch (B) {
                    case f.g.CONFIRM:
                        return (0, n.jsx)(L.r, {});
                    case f.g.CONFIRM_DISCOUNT:
                        return (0, n.jsx)(O.M, {});
                    case f.g.DISCOUNT_APPLIED:
                        return (0, n.jsx)(S.V, {});
                    case f.g.PREVIEW:
                        return (0, n.jsx)(M.E, {});
                    case f.g.PAUSE_SELECT:
                        return (0, n.jsx)(D.PremiumSubscriptionPauseModalSelect, {});
                    case f.g.PAUSE_CONFIRM:
                        return (0, n.jsx)(D.cN, {});
                    case f.g.WHAT_YOU_LOSE:
                    default:
                        return (0, n.jsx)(R.Z, {});
                }
            }, [B]),
            eu = s.useCallback(async () => {
                if (
                    (T.default.track(h.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: a,
                        load_id: ea,
                        ...(0, g.j)(F),
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
                C.Ay.fireSurveyAction(l.w.NITRO_UNSUBBED);
            }, [F, a, t, ea]),
            ec = async () => {
                if (null == z) throw Error("Churn user discount offer is null");
                F.status === h.Dmq.CANCELED ? await (0, E._D)(F, z) : await (0, E.x)(z);
            };
        return (0, n.jsx)(_.f5, {
            value: a,
            children: (0, n.jsxs)(P.CancellationContext.Provider, {
                value: {
                    setStep: Y,
                    premiumType: q,
                    onClose: () => {
                        u(),
                            T.default.track(h.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: f.T[B],
                                to_step: null,
                                step_duration_ms: Date.now() - G,
                                flow_duration_ms: Date.now() - Q,
                                location_stack: a,
                                load_id: ea,
                                ...(0, g.j)(F),
                            });
                    },
                    transitionState: x,
                    premiumSubscription: F,
                    analyticsLocations: a,
                    analyticsLocation: t,
                    confettiCanvas: v,
                    churnUserDiscountOffer: z,
                    isFetchingChurnDiscountOffer: $ && J,
                    fullPrice: et,
                    discountedPrice: K,
                    planId: V,
                    paymentsBlocked: Z,
                    renewalInvoice: X,
                    renewalInvoiceDetails: ee,
                    handleCancellation: eu,
                    applyOffer: ec,
                    pauseDuration: en,
                    setPauseDuration: es,
                },
                children: [(0, n.jsx)(r.Fk, { ref: W, className: U.L, environment: H.current }), er()],
            }),
        });
    };
