a.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => v });
var n = a(627968),
    r = a(64700),
    s = a(106778),
    i = a(284009),
    l = a.n(i),
    u = a(517846),
    c = a(562465),
    o = a(384904),
    d = a(793574),
    m = a(688810),
    _ = a(86379),
    E = a(925847),
    C = a(236698),
    S = a(954571),
    D = a(927578),
    p = a(580630),
    y = a(543767),
    f = a(526292),
    A = a(511484),
    I = a(318998),
    T = a(95337),
    O = a(412314),
    P = a(456459),
    g = a(473702),
    N = a(916974),
    w = a(347378),
    h = a(606423),
    L = a(64588),
    U = a(501957),
    x = a(788868),
    k = a(652215),
    M = a(247027);
let R = [k.Dmq.PAST_DUE, k.Dmq.PAUSED, k.Dmq.BILLING_RETRY],
    v = (t) => {
        let { analyticsLocation: e, analyticsLocations: a, onClose: i, transitionState: v, premiumSubscription: j } = t,
            { initialStep: b } = t,
            F = r.useRef(new s.OH()),
            [W, q] = r.useState(null),
            H = (0, D.EL)(j)?.planId,
            B = null != H ? D.Ay.getPremiumType(H) : null;
        l()(null != B, "Should not be cancelling Nitro without premiumType");
        let V = B === x.PremiumTypes.TIER_0 || B === x.PremiumTypes.TIER_1 || B === x.PremiumTypes.TIER_2;
        null == b && (b = V ? g.g.WHAT_YOU_LOSE : g.g.CONFIRM);
        let [K, Y, G, Q] = (0, L.U)(b, j, a),
            X = (0, _.H)(),
            Z = (0, f.f9)(),
            { churnUserDiscountOffer: $, isFetchingChurnDiscountOffer: z } = (0, f.g5)(
                !Z || (j.status === k.Dmq.CANCELED && K !== g.g.CONFIRM_DISCOUNT),
            ),
            J = (0, A.tQ)(j, x.gD.PREMIUM_MONTH_TIER_2, $),
            [tt] = (0, y.Kq)({
                subscriptionId: j.id,
                items: (0, D.ee)(j.renewalMutations?.items ?? j.items),
                renewal: !0,
                analyticsLocations: a,
                analyticsLocation: d.A.CANCEL_INVOICE_PREVIEW,
            }),
            te = null !== tt ? D.Ay.getIntervalForInvoice(tt) : null,
            ta = (0, D.y8)(x.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: j.currency,
                paymentSourceId: j.paymentSourceId,
            }),
            tn = (0, p.$g)(ta.amount, ta.currency),
            tr = r.useMemo(() => (0, E.A)(), []);
        r.useEffect(() => {
            S.default.track(k.HAw.CANCELLATION_FLOW_STARTED, { location_stack: a, load_id: tr, ...(0, U.j)(j) });
        }, [a, j, tr]);
        let [ts, ti] = r.useState(null),
            tl = r.useCallback(() => {
                switch (K) {
                    case g.g.CONFIRM:
                        return (0, n.jsx)(T.r, {});
                    case g.g.CONFIRM_DISCOUNT:
                        return (0, n.jsx)(O.M, {});
                    case g.g.DISCOUNT_APPLIED:
                        return (0, n.jsx)(P.V, {});
                    case g.g.PREVIEW:
                        return (0, n.jsx)(w.E, {});
                    case g.g.PAUSE_SELECT:
                        return (0, n.jsx)(I.PremiumSubscriptionPauseModalSelect, {});
                    case g.g.PAUSE_CONFIRM:
                        return (0, n.jsx)(I.cN, {});
                    case g.g.WHAT_YOU_LOSE:
                    default:
                        return (0, n.jsx)(h.Z, {});
                }
            }, [K]),
            tu = r.useCallback(async () => {
                if (
                    (S.default.track(k.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: a,
                        load_id: tr,
                        ...(0, U.j)(j),
                    }),
                    R.includes(j.status))
                )
                    await (0, o.M2)(j.id, a, e);
                else {
                    let t = j.renewalMutations?.items ?? j.items,
                        n = (0, D.ee)(t);
                    await (0, o.nV)(
                        j,
                        { items: n },
                        { amount: 0, currency: j.currency },
                        (0, D.UC)(n, j.currency, j.paymentSourceId),
                        a,
                        e,
                    );
                }
                C.Ay.fireSurveyAction(u.w.NITRO_UNSUBBED);
            }, [j, a, e, tr]),
            tc = async () => {
                if (null == $) throw Error("Churn user discount offer is null");
                j.status === k.Dmq.CANCELED
                    ? await (0, o._D)(j, $)
                    : await c.Bo.post({
                          url: k.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: $.id },
                          rejectWithError: !0,
                      });
            };
        return (0, n.jsx)(m.f5, {
            value: a,
            children: (0, n.jsxs)(N.CancellationContext.Provider, {
                value: {
                    setStep: Y,
                    premiumType: B,
                    onClose: () => {
                        i(),
                            S.default.track(k.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: g.T[K],
                                to_step: null,
                                step_duration_ms: Date.now() - G,
                                flow_duration_ms: Date.now() - Q,
                                location_stack: a,
                                load_id: tr,
                                ...(0, U.j)(j),
                            });
                    },
                    transitionState: v,
                    premiumSubscription: j,
                    analyticsLocations: a,
                    analyticsLocation: e,
                    confettiCanvas: W,
                    churnUserDiscountOffer: $,
                    isFetchingChurnDiscountOffer: Z && z,
                    fullPrice: tn,
                    discountedPrice: J,
                    planId: H,
                    paymentsBlocked: X,
                    renewalInvoice: tt,
                    renewalInvoiceDetails: te,
                    handleCancellation: tu,
                    applyOffer: tc,
                    pauseDuration: ts,
                    setPauseDuration: ti,
                },
                children: [(0, n.jsx)(s.Fk, { ref: q, className: M.L, environment: F.current }), tl()],
            }),
        });
    };
