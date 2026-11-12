a.d(t, { default: () => b });
var s = a(477900),
    n = a(582128),
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
    N = a(580630),
    w = a(543767),
    y = a(526292),
    D = a(511484),
    L = a(318998),
    O = a(95337),
    f = a(412314),
    p = a(456459),
    S = a(473702),
    M = a(916974),
    P = a(347378),
    R = a(606423),
    g = a(501957),
    k = a(652215),
    h = a(682901),
    U = a(145781);
let j = [k.Dmq.PAST_DUE, k.Dmq.PAUSED, k.Dmq.BILLING_RETRY],
    b = (e) => {
        let { analyticsLocation: t, analyticsLocations: a, onClose: r, transitionState: b, premiumSubscription: x } = e,
            { initialStep: F } = e,
            H = n.useRef(new u.OH()),
            [v, W] = n.useState(null),
            V = (0, A.EL)(x)?.planId,
            q = null != V ? A.Ay.getPremiumType(V) : null;
        if ((c()(null != q, "Should not be cancelling Nitro without premiumType"), null == F))
            switch (q) {
                case h.PremiumTypes.TIER_0:
                case h.PremiumTypes.TIER_1:
                case h.PremiumTypes.TIER_2:
                    F = S.g.WHAT_YOU_LOSE;
                    break;
                default:
                    F = S.g.CONFIRM;
            }
        let [Y, B, G, Q] = ((e, t, a) => {
                let [s, u] = n.useState(e),
                    [r, c] = n.useState(Date.now()),
                    [l] = n.useState(Date.now()),
                    i = n.useCallback(
                        (e) => {
                            (T.default.track(k.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: S.T[s],
                                to_step: S.T[e],
                                step_duration_ms: Date.now() - r,
                                flow_duration_ms: Date.now() - l,
                                location_stack: a,
                                ...(0, g.j)(t),
                            }),
                                u(e),
                                c(Date.now()));
                        },
                        [a, l, r, s, t],
                    );
                return [s, i, r, l];
            })(F, x, a),
            Z = (0, m.Hp)(),
            $ = (0, y.f9)(),
            { churnUserDiscountOffer: z, isFetchingChurnDiscountOffer: J } = (0, y.g5)(
                !$ || (x.status === k.Dmq.CANCELED && Y !== S.g.CONFIRM_DISCOUNT),
            ),
            K = (0, D.tQ)(x, h.gD.PREMIUM_MONTH_TIER_2, z),
            [X] = (0, w.YV)({
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
            ea = n.useMemo(() => (0, C.A)(), []);
        n.useEffect(() => {
            T.default.track(k.HAw.CANCELLATION_FLOW_STARTED, { location_stack: a, load_id: ea, ...(0, g.j)(x) });
        }, [a, x, ea]);
        let es = n.useCallback(() => {
                (r(),
                    T.default.track(k.HAw.CANCELLATION_FLOW_STEP, {
                        from_step: S.T[Y],
                        to_step: null,
                        step_duration_ms: Date.now() - G,
                        flow_duration_ms: Date.now() - Q,
                        location_stack: a,
                        load_id: ea,
                        ...(0, g.j)(x),
                    }));
            }, [r, Y, G, Q, a, ea, x]),
            [en, eu] = n.useState(null),
            er = n.useCallback(() => {
                switch (Y) {
                    case S.g.CONFIRM:
                        return (0, s.jsx)(O.r, {});
                    case S.g.CONFIRM_DISCOUNT:
                        return (0, s.jsx)(f.M, {});
                    case S.g.DISCOUNT_APPLIED:
                        return (0, s.jsx)(p.V, {});
                    case S.g.PREVIEW:
                        return (0, s.jsx)(P.E, {});
                    case S.g.PAUSE_SELECT:
                        return (0, s.jsx)(L.PremiumSubscriptionPauseModalSelect, {});
                    case S.g.PAUSE_CONFIRM:
                        return (0, s.jsx)(L.cN, {});
                    case S.g.WHAT_YOU_LOSE:
                    default:
                        return (0, s.jsx)(R.Z, {});
                }
            }, [Y]),
            ec = n.useCallback(async () => {
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
                        s = (0, A.ee)(e);
                    await (0, E.nV)(
                        x,
                        { items: s },
                        { amount: 0, currency: x.currency },
                        (0, A.UC)(s, x.currency, x.paymentSourceId),
                        a,
                        t,
                    );
                }
                d.Ay.fireSurveyAction(l.w.NITRO_UNSUBBED);
            }, [x, a, t, ea]),
            el = n.useCallback(async () => {
                if (null == z) throw Error("Churn user discount offer is null");
                x.status === k.Dmq.CANCELED ? await (0, E._D)(x, z) : await (0, E.x)(z);
            }, [z, x]),
            ei = $ && J,
            eo = n.useMemo(
                () => ({
                    setStep: B,
                    premiumType: q,
                    onClose: es,
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
                    pauseDuration: en,
                    setPauseDuration: eu,
                }),
                [B, q, es, b, x, a, t, v, z, ei, et, K, V, Z, X, ee, ec, el, en],
            );
        return (0, s.jsx)(_.f5, {
            value: a,
            children: (0, s.jsxs)(M.CancellationContext.Provider, {
                value: eo,
                children: [(0, s.jsx)(u.Fk, { ref: W, className: U.L, environment: H.current }), er()],
            }),
        });
    };
