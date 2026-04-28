a.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => U });
var s = a(627968),
    n = a(64700),
    r = a(106778),
    u = a(284009),
    l = a.n(u),
    i = a(517846),
    c = a(636537),
    o = a(793574),
    _ = a(688810),
    E = a(323082),
    d = a(86379),
    m = a(925847),
    C = a(27620),
    I = a(954571),
    T = a(927578),
    A = a(580630),
    p = a(543767),
    D = a(526292),
    L = a(511484),
    N = a(318998),
    O = a(95337),
    S = a(412314),
    w = a(456459),
    f = a(473702),
    y = a(916974),
    R = a(347378),
    P = a(606423),
    M = a(501957),
    g = a(652215),
    h = a(788868),
    k = a(71204);
let j = [g.Dmq.PAST_DUE, g.Dmq.PAUSED, g.Dmq.BILLING_RETRY],
    U = (e) => {
        let { analyticsLocation: t, analyticsLocations: a, onClose: u, transitionState: U, premiumSubscription: F } = e,
            { initialStep: x } = e,
            b = n.useRef(new r.OH()),
            [H, W] = n.useState(null),
            v = (0, T.EL)(F)?.planId,
            q = null != v ? T.Ay.getPremiumType(v) : null;
        l()(null != q, "Should not be cancelling Nitro without premiumType");
        let B = q === h.PremiumTypes.TIER_0 || q === h.PremiumTypes.TIER_1 || q === h.PremiumTypes.TIER_2;
        null == x && (x = B ? f.g.WHAT_YOU_LOSE : f.g.CONFIRM);
        let [V, Y, G, K] = ((e, t, a) => {
                let [s, r] = n.useState(e),
                    [u, l] = n.useState(Date.now()),
                    [i] = n.useState(Date.now()),
                    c = n.useCallback(
                        (e) => {
                            I.default.track(g.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: f.T[s],
                                to_step: f.T[e],
                                step_duration_ms: Date.now() - u,
                                flow_duration_ms: Date.now() - i,
                                location_stack: a,
                                ...(0, M.j)(t),
                            }),
                                r(e),
                                l(Date.now());
                        },
                        [a, i, u, s, t],
                    );
                return [s, c, u, i];
            })(x, F, a),
            Q = (0, d.Hp)(),
            Z = (0, D.f9)(),
            { churnUserDiscountOffer: $, isFetchingChurnDiscountOffer: z } = (0, D.g5)(
                !Z || (F.status === g.Dmq.CANCELED && V !== f.g.CONFIRM_DISCOUNT),
            ),
            J = (0, L.tQ)(F, h.gD.PREMIUM_MONTH_TIER_2, $),
            [X] = (0, p.Kq)({
                subscriptionId: F.id,
                items: (0, T.ee)(F.renewalMutations?.items ?? F.items),
                renewal: !0,
                analyticsLocations: a,
                analyticsLocation: o.A.CANCEL_INVOICE_PREVIEW,
            }),
            ee = null !== X ? T.Ay.getIntervalForInvoice(X) : null,
            et = (0, T.y8)(h.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: F.currency,
                paymentSourceId: F.paymentSourceId,
            }),
            ea = (0, A.$g)(et.amount, et.currency),
            es = n.useMemo(() => (0, m.A)(), []);
        n.useEffect(() => {
            I.default.track(g.HAw.CANCELLATION_FLOW_STARTED, { location_stack: a, load_id: es, ...(0, M.j)(F) });
        }, [a, F, es]);
        let [en, er] = n.useState(null),
            eu = n.useCallback(() => {
                switch (V) {
                    case f.g.CONFIRM:
                        return (0, s.jsx)(O.r, {});
                    case f.g.CONFIRM_DISCOUNT:
                        return (0, s.jsx)(S.M, {});
                    case f.g.DISCOUNT_APPLIED:
                        return (0, s.jsx)(w.V, {});
                    case f.g.PREVIEW:
                        return (0, s.jsx)(R.E, {});
                    case f.g.PAUSE_SELECT:
                        return (0, s.jsx)(N.PremiumSubscriptionPauseModalSelect, {});
                    case f.g.PAUSE_CONFIRM:
                        return (0, s.jsx)(N.cN, {});
                    case f.g.WHAT_YOU_LOSE:
                    default:
                        return (0, s.jsx)(P.Z, {});
                }
            }, [V]),
            el = n.useCallback(async () => {
                if (
                    (I.default.track(g.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: a,
                        load_id: es,
                        ...(0, M.j)(F),
                    }),
                    j.includes(F.status))
                )
                    await (0, E.M2)(F.id, a, t);
                else {
                    let e = F.renewalMutations?.items ?? F.items,
                        s = (0, T.ee)(e);
                    await (0, E.nV)(
                        F,
                        { items: s },
                        { amount: 0, currency: F.currency },
                        (0, T.UC)(s, F.currency, F.paymentSourceId),
                        a,
                        t,
                    );
                }
                C.Ay.fireSurveyAction(i.w.NITRO_UNSUBBED);
            }, [F, a, t, es]),
            ei = async () => {
                if (null == $) throw Error("Churn user discount offer is null");
                F.status === g.Dmq.CANCELED
                    ? await (0, E._D)(F, $)
                    : await c.Bo.post({
                          url: g.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: $.id },
                          rejectWithError: !0,
                      });
            };
        return (0, s.jsx)(_.f5, {
            value: a,
            children: (0, s.jsxs)(y.CancellationContext.Provider, {
                value: {
                    setStep: Y,
                    premiumType: q,
                    onClose: () => {
                        u(),
                            I.default.track(g.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: f.T[V],
                                to_step: null,
                                step_duration_ms: Date.now() - G,
                                flow_duration_ms: Date.now() - K,
                                location_stack: a,
                                load_id: es,
                                ...(0, M.j)(F),
                            });
                    },
                    transitionState: U,
                    premiumSubscription: F,
                    analyticsLocations: a,
                    analyticsLocation: t,
                    confettiCanvas: H,
                    churnUserDiscountOffer: $,
                    isFetchingChurnDiscountOffer: Z && z,
                    fullPrice: ea,
                    discountedPrice: J,
                    planId: v,
                    paymentsBlocked: Q,
                    renewalInvoice: X,
                    renewalInvoiceDetails: ee,
                    handleCancellation: el,
                    applyOffer: ei,
                    pauseDuration: en,
                    setPauseDuration: er,
                },
                children: [(0, s.jsx)(r.Fk, { ref: W, className: k.L, environment: b.current }), eu()],
            }),
        });
    };
