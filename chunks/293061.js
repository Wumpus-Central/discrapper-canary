a.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => b });
var n = a(477900),
    s = a(582128),
    r = a(776310),
    u = a(284009),
    c = a.n(u),
    l = a(517846),
    i = a(17928),
    o = a(793574),
    _ = a(688810),
    E = a(277984),
    m = a(86379),
    C = a(925847),
    d = a(27620),
    I = a(97352),
    T = a(174459),
    A = a(927578),
    N = a(580630),
    p = a(543767),
    w = a(526292),
    y = a(511484),
    D = a(318998),
    L = a(95337),
    O = a(412314),
    S = a(456459),
    f = a(473702),
    M = a(916974),
    P = a(347378),
    R = a(606423),
    g = a(501957),
    k = a(652215),
    h = a(202541),
    U = a(164829);
let j = [k.Dmq.PAST_DUE, k.Dmq.PAUSED, k.Dmq.BILLING_RETRY],
    b = (e) => {
        let { analyticsLocation: t, analyticsLocations: a, onClose: u, transitionState: b, premiumSubscription: x } = e,
            { initialStep: F } = e,
            H = s.useRef(new r.OH()),
            [v, W] = s.useState(null),
            V = (0, A.EL)(x)?.planId,
            q = null != V ? A.Ay.getPremiumType(V) : null;
        if ((c()(null != q, "Should not be cancelling Nitro without premiumType"), null == F))
            switch (q) {
                case h.PremiumTypes.TIER_0:
                case h.PremiumTypes.TIER_1:
                case h.PremiumTypes.TIER_2:
                    F = f.g.WHAT_YOU_LOSE;
                    break;
                default:
                    F = f.g.CONFIRM;
            }
        let [B, Y, G, Q] = ((e, t, a) => {
                let [n, r] = s.useState(e),
                    [u, c] = s.useState(Date.now()),
                    [l] = s.useState(Date.now()),
                    i = s.useCallback(
                        (e) => {
                            (T.default.track(k.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: f.T[n],
                                to_step: f.T[e],
                                step_duration_ms: Date.now() - u,
                                flow_duration_ms: Date.now() - l,
                                location_stack: a,
                                ...(0, g.j)(t),
                            }),
                                r(e),
                                c(Date.now()));
                        },
                        [a, l, u, n, t],
                    );
                return [n, i, u, l];
            })(F, x, a),
            Z = (0, m.Hp)(),
            $ = (0, w.f9)(),
            { churnUserDiscountOffer: z, isFetchingChurnDiscountOffer: J } = (0, w.g5)(
                !$ || (x.status === k.Dmq.CANCELED && B !== f.g.CONFIRM_DISCOUNT),
            ),
            K = (0, y.tQ)(x, h.gD.PREMIUM_MONTH_TIER_2, z),
            [X] = (0, p.YV)({
                subscriptionId: x.id,
                items: (0, A.ee)(x.renewalMutations?.items ?? x.items),
                renewal: !0,
                analyticsLocations: a,
                analyticsLocation: o.A.CANCEL_INVOICE_PREVIEW,
            }),
            ee = null !== X ? A.Ay.getIntervalForInvoice(X) : null,
            et = (0, i.bG)(
                [I.A],
                () => {
                    if (null != I.A.get(h.gD.PREMIUM_MONTH_TIER_2))
                        try {
                            let e = (0, A.y8)(
                                h.gD.PREMIUM_MONTH_TIER_2,
                                !1,
                                !1,
                                { currency: x.currency, paymentSourceId: x.paymentSourceId },
                                !1,
                            );
                            return (0, N.$g)(e.amount, e.currency);
                        } catch {
                            return;
                        }
                },
                [x.currency, x.paymentSourceId],
            ),
            ea = s.useMemo(() => (0, C.A)(), []);
        s.useEffect(() => {
            T.default.track(k.HAw.CANCELLATION_FLOW_STARTED, { location_stack: a, load_id: ea, ...(0, g.j)(x) });
        }, [a, x, ea]);
        let en = s.useCallback(() => {
                (u(),
                    T.default.track(k.HAw.CANCELLATION_FLOW_STEP, {
                        from_step: f.T[B],
                        to_step: null,
                        step_duration_ms: Date.now() - G,
                        flow_duration_ms: Date.now() - Q,
                        location_stack: a,
                        load_id: ea,
                        ...(0, g.j)(x),
                    }));
            }, [u, B, G, Q, a, ea, x]),
            [es, er] = s.useState(null),
            eu = s.useCallback(() => {
                switch (B) {
                    case f.g.CONFIRM:
                        return (0, n.jsx)(L.r, {});
                    case f.g.CONFIRM_DISCOUNT:
                        return (0, n.jsx)(O.M, {});
                    case f.g.DISCOUNT_APPLIED:
                        return (0, n.jsx)(S.V, {});
                    case f.g.PREVIEW:
                        return (0, n.jsx)(P.E, {});
                    case f.g.PAUSE_SELECT:
                        return (0, n.jsx)(D.PremiumSubscriptionPauseModalSelect, {});
                    case f.g.PAUSE_CONFIRM:
                        return (0, n.jsx)(D.cN, {});
                    case f.g.WHAT_YOU_LOSE:
                    default:
                        return (0, n.jsx)(R.Z, {});
                }
            }, [B]),
            ec = s.useCallback(async () => {
                if (
                    (T.default.track(k.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: a,
                        load_id: ea,
                        ...(0, g.j)(x),
                    }),
                    j.includes(x.status))
                )
                    await (0, E.M2)(x.id, a, t);
                else {
                    let e = x.renewalMutations?.items ?? x.items,
                        n = (0, A.ee)(e);
                    await (0, E.nV)(
                        x,
                        { items: n },
                        { amount: 0, currency: x.currency },
                        (0, A.UC)(n, x.currency, x.paymentSourceId),
                        a,
                        t,
                    );
                }
                d.Ay.fireSurveyAction(l.w.NITRO_UNSUBBED);
            }, [x, a, t, ea]),
            el = s.useCallback(async () => {
                if (null == z) throw Error("Churn user discount offer is null");
                x.status === k.Dmq.CANCELED ? await (0, E._D)(x, z) : await (0, E.x)(z);
            }, [z, x]),
            ei = $ && J,
            eo = s.useMemo(
                () => ({
                    setStep: Y,
                    premiumType: q,
                    onClose: en,
                    transitionState: b,
                    premiumSubscription: x,
                    analyticsLocations: a,
                    analyticsLocation: t,
                    confettiCanvas: v,
                    churnUserDiscountOffer: z,
                    isFetchingChurnDiscountOffer: ei,
                    fullPrice: et,
                    discountedPrice: K,
                    planId: V,
                    paymentsBlocked: Z,
                    renewalInvoice: X,
                    renewalInvoiceDetails: ee,
                    handleCancellation: ec,
                    applyOffer: el,
                    pauseDuration: es,
                    setPauseDuration: er,
                }),
                [Y, q, en, b, x, a, t, v, z, ei, et, K, V, Z, X, ee, ec, el, es],
            );
        return (0, n.jsx)(_.f5, {
            value: a,
            children: (0, n.jsxs)(M.CancellationContext.Provider, {
                value: eo,
                children: [(0, n.jsx)(r.Fk, { ref: W, className: U.L, environment: H.current }), eu()],
            }),
        });
    };
