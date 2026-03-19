a.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => k });
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
    N = a(412314),
    O = a(456459),
    P = a(473702),
    g = a(916974),
    w = a(347378),
    L = a(606423),
    h = a(64588),
    U = a(501957),
    x = a(788868),
    M = a(652215),
    R = a(2929);
let v = [M.Dmq.PAST_DUE, M.Dmq.PAUSED, M.Dmq.BILLING_RETRY],
    k = (t) => {
        let { analyticsLocation: e, analyticsLocations: a, onClose: i, transitionState: k, premiumSubscription: j } = t,
            { initialStep: b } = t,
            F = r.useRef(new s.OH()),
            [W, q] = r.useState(null),
            H = (0, D.EL)(j)?.planId,
            V = null != H ? D.Ay.getPremiumType(H) : null;
        l()(null != V, "Should not be cancelling Nitro without premiumType");
        let B = V === x.PremiumTypes.TIER_0 || V === x.PremiumTypes.TIER_1 || V === x.PremiumTypes.TIER_2;
        null == b && (b = B ? P.g.WHAT_YOU_LOSE : P.g.CONFIRM);
        let [K, Y, z, G] = (0, h.U)(b, j, a),
            Q = (0, _.Hp)(),
            X = (0, f.f9)(),
            { churnUserDiscountOffer: Z, isFetchingChurnDiscountOffer: $ } = (0, f.g5)(
                !X || (j.status === M.Dmq.CANCELED && K !== P.g.CONFIRM_DISCOUNT),
            ),
            J = (0, A.tQ)(j, x.gD.PREMIUM_MONTH_TIER_2, Z),
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
            S.default.track(M.HAw.CANCELLATION_FLOW_STARTED, { location_stack: a, load_id: tr, ...(0, U.j)(j) });
        }, [a, j, tr]);
        let [ts, ti] = r.useState(null),
            tl = r.useCallback(() => {
                switch (K) {
                    case P.g.CONFIRM:
                        return (0, n.jsx)(T.r, {});
                    case P.g.CONFIRM_DISCOUNT:
                        return (0, n.jsx)(N.M, {});
                    case P.g.DISCOUNT_APPLIED:
                        return (0, n.jsx)(O.V, {});
                    case P.g.PREVIEW:
                        return (0, n.jsx)(w.E, {});
                    case P.g.PAUSE_SELECT:
                        return (0, n.jsx)(I.PremiumSubscriptionPauseModalSelect, {});
                    case P.g.PAUSE_CONFIRM:
                        return (0, n.jsx)(I.cN, {});
                    case P.g.WHAT_YOU_LOSE:
                    default:
                        return (0, n.jsx)(L.Z, {});
                }
            }, [K]),
            tu = r.useCallback(async () => {
                if (
                    (S.default.track(M.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: a,
                        load_id: tr,
                        ...(0, U.j)(j),
                    }),
                    v.includes(j.status))
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
                if (null == Z) throw Error("Churn user discount offer is null");
                j.status === M.Dmq.CANCELED
                    ? await (0, o._D)(j, Z)
                    : await c.Bo.post({
                          url: M.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: Z.id },
                          rejectWithError: !0,
                      });
            };
        return (0, n.jsx)(m.f5, {
            value: a,
            children: (0, n.jsxs)(g.CancellationContext.Provider, {
                value: {
                    setStep: Y,
                    premiumType: V,
                    onClose: () => {
                        i(),
                            S.default.track(M.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: P.T[K],
                                to_step: null,
                                step_duration_ms: Date.now() - z,
                                flow_duration_ms: Date.now() - G,
                                location_stack: a,
                                load_id: tr,
                                ...(0, U.j)(j),
                            });
                    },
                    transitionState: k,
                    premiumSubscription: j,
                    analyticsLocations: a,
                    analyticsLocation: e,
                    confettiCanvas: W,
                    churnUserDiscountOffer: Z,
                    isFetchingChurnDiscountOffer: X && $,
                    fullPrice: tn,
                    discountedPrice: J,
                    planId: H,
                    paymentsBlocked: Q,
                    renewalInvoice: tt,
                    renewalInvoiceDetails: te,
                    handleCancellation: tu,
                    applyOffer: tc,
                    pauseDuration: ts,
                    setPauseDuration: ti,
                },
                children: [(0, n.jsx)(s.Fk, { ref: q, className: R.L, environment: F.current }), tl()],
            }),
        });
    };
