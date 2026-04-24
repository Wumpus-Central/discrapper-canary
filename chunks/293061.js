"use strict";
r.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => R });
var a = r(627968),
    i = r(64700),
    n = r(106778),
    s = r(284009),
    l = r.n(s),
    o = r(517846),
    c = r(636537),
    d = r(793574),
    u = r(688810),
    _ = r(323082),
    p = r(86379),
    m = r(925847),
    h = r(27620),
    f = r(954571),
    g = r(927578),
    b = r(580630),
    v = r(543767),
    y = r(526292),
    A = r(511484),
    C = r(318998),
    x = r(95337),
    I = r(412314),
    E = r(456459),
    w = r(473702),
    T = r(916974),
    S = r(347378),
    D = r(606423),
    N = r(501957),
    L = r(652215),
    j = r(788868),
    P = r(71204);
let O = [L.Dmq.PAST_DUE, L.Dmq.PAUSED, L.Dmq.BILLING_RETRY],
    R = (e) => {
        let { analyticsLocation: t, analyticsLocations: r, onClose: s, transitionState: R, premiumSubscription: M } = e,
            { initialStep: k } = e,
            B = i.useRef(new n.OH()),
            [F, G] = i.useState(null),
            H = (0, g.EL)(M)?.planId,
            U = null != H ? g.Ay.getPremiumType(H) : null;
        l()(null != U, "Should not be cancelling Nitro without premiumType");
        let V = U === j.PremiumTypes.TIER_0 || U === j.PremiumTypes.TIER_1 || U === j.PremiumTypes.TIER_2;
        null == k && (k = V ? w.g.WHAT_YOU_LOSE : w.g.CONFIRM);
        let [W, Z, Y, J] = ((e, t, r) => {
                let [a, n] = i.useState(e),
                    [s, l] = i.useState(Date.now()),
                    [o] = i.useState(Date.now()),
                    c = i.useCallback(
                        (e) => {
                            f.default.track(L.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: w.T[a],
                                to_step: w.T[e],
                                step_duration_ms: Date.now() - s,
                                flow_duration_ms: Date.now() - o,
                                location_stack: r,
                                ...(0, N.j)(t),
                            }),
                                n(e),
                                l(Date.now());
                        },
                        [r, o, s, a, t],
                    );
                return [a, c, s, o];
            })(k, M, r),
            $ = (0, p.Hp)(),
            z = (0, y.f9)(),
            { churnUserDiscountOffer: q, isFetchingChurnDiscountOffer: K } = (0, y.g5)(
                !z || (M.status === L.Dmq.CANCELED && W !== w.g.CONFIRM_DISCOUNT),
            ),
            X = (0, A.tQ)(M, j.gD.PREMIUM_MONTH_TIER_2, q),
            [Q] = (0, v.Kq)({
                subscriptionId: M.id,
                items: (0, g.ee)(M.renewalMutations?.items ?? M.items),
                renewal: !0,
                analyticsLocations: r,
                analyticsLocation: d.A.CANCEL_INVOICE_PREVIEW,
            }),
            ee = null !== Q ? g.Ay.getIntervalForInvoice(Q) : null,
            et = (0, g.y8)(j.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: M.currency,
                paymentSourceId: M.paymentSourceId,
            }),
            er = (0, b.$g)(et.amount, et.currency),
            ea = i.useMemo(() => (0, m.A)(), []);
        i.useEffect(() => {
            f.default.track(L.HAw.CANCELLATION_FLOW_STARTED, { location_stack: r, load_id: ea, ...(0, N.j)(M) });
        }, [r, M, ea]);
        let [ei, en] = i.useState(null),
            es = i.useCallback(() => {
                switch (W) {
                    case w.g.CONFIRM:
                        return (0, a.jsx)(x.r, {});
                    case w.g.CONFIRM_DISCOUNT:
                        return (0, a.jsx)(I.M, {});
                    case w.g.DISCOUNT_APPLIED:
                        return (0, a.jsx)(E.V, {});
                    case w.g.PREVIEW:
                        return (0, a.jsx)(S.E, {});
                    case w.g.PAUSE_SELECT:
                        return (0, a.jsx)(C.PremiumSubscriptionPauseModalSelect, {});
                    case w.g.PAUSE_CONFIRM:
                        return (0, a.jsx)(C.cN, {});
                    case w.g.WHAT_YOU_LOSE:
                    default:
                        return (0, a.jsx)(D.Z, {});
                }
            }, [W]),
            el = i.useCallback(async () => {
                if (
                    (f.default.track(L.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: r,
                        load_id: ea,
                        ...(0, N.j)(M),
                    }),
                    O.includes(M.status))
                )
                    await (0, _.M2)(M.id, r, t);
                else {
                    let e = M.renewalMutations?.items ?? M.items,
                        a = (0, g.ee)(e);
                    await (0, _.nV)(
                        M,
                        { items: a },
                        { amount: 0, currency: M.currency },
                        (0, g.UC)(a, M.currency, M.paymentSourceId),
                        r,
                        t,
                    );
                }
                h.Ay.fireSurveyAction(o.w.NITRO_UNSUBBED);
            }, [M, r, t, ea]),
            eo = async () => {
                if (null == q) throw Error("Churn user discount offer is null");
                M.status === L.Dmq.CANCELED
                    ? await (0, _._D)(M, q)
                    : await c.Bo.post({
                          url: L.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: q.id },
                          rejectWithError: !0,
                      });
            };
        return (0, a.jsx)(u.f5, {
            value: r,
            children: (0, a.jsxs)(T.CancellationContext.Provider, {
                value: {
                    setStep: Z,
                    premiumType: U,
                    onClose: () => {
                        s(),
                            f.default.track(L.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: w.T[W],
                                to_step: null,
                                step_duration_ms: Date.now() - Y,
                                flow_duration_ms: Date.now() - J,
                                location_stack: r,
                                load_id: ea,
                                ...(0, N.j)(M),
                            });
                    },
                    transitionState: R,
                    premiumSubscription: M,
                    analyticsLocations: r,
                    analyticsLocation: t,
                    confettiCanvas: F,
                    churnUserDiscountOffer: q,
                    isFetchingChurnDiscountOffer: z && K,
                    fullPrice: er,
                    discountedPrice: X,
                    planId: H,
                    paymentsBlocked: $,
                    renewalInvoice: Q,
                    renewalInvoiceDetails: ee,
                    handleCancellation: el,
                    applyOffer: eo,
                    pauseDuration: ei,
                    setPauseDuration: en,
                },
                children: [(0, a.jsx)(n.Fk, { ref: G, className: P.L, environment: B.current }), es()],
            }),
        });
    };
