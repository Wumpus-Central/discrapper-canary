n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => v });
var r = n(627968),
    a = n(64700),
    o = n(106778),
    i = n(284009),
    s = n.n(i),
    l = n(517846),
    _ = n(562465),
    u = n(793574),
    c = n(688810),
    d = n(323082),
    C = n(86379),
    m = n(925847),
    p = n(236698),
    f = n(954571),
    E = n(927578),
    I = n(580630),
    S = n(543767),
    h = n(526292),
    D = n(511484),
    T = n(318998),
    y = n(95337),
    A = n(412314),
    g = n(456459),
    w = n(473702),
    P = n(916974),
    O = n(347378),
    N = n(606423),
    L = n(64588),
    x = n(501957),
    U = n(788868),
    b = n(652215),
    F = n(71204);
let j = [b.Dmq.PAST_DUE, b.Dmq.PAUSED, b.Dmq.BILLING_RETRY],
    v = (t) => {
        let { analyticsLocation: e, analyticsLocations: n, onClose: i, transitionState: v, premiumSubscription: R } = t,
            { initialStep: M } = t,
            k = a.useRef(new o.OH()),
            [B, W] = a.useState(null),
            q = (0, E.EL)(R)?.planId,
            H = null != q ? E.Ay.getPremiumType(q) : null;
        s()(null != H, "Should not be cancelling Nitro without premiumType");
        let V = H === U.PremiumTypes.TIER_0 || H === U.PremiumTypes.TIER_1 || H === U.PremiumTypes.TIER_2;
        null == M && (M = V ? w.g.WHAT_YOU_LOSE : w.g.CONFIRM);
        let [K, Y, G, z] = (0, L.U)(M, R, n),
            $ = (0, C.Hp)(),
            X = (0, h.f9)(),
            { churnUserDiscountOffer: Q, isFetchingChurnDiscountOffer: Z } = (0, h.g5)(
                !X || (R.status === b.Dmq.CANCELED && K !== w.g.CONFIRM_DISCOUNT),
            ),
            J = (0, D.tQ)(R, U.gD.PREMIUM_MONTH_TIER_2, Q),
            [tt] = (0, S.Kq)({
                subscriptionId: R.id,
                items: (0, E.ee)(R.renewalMutations?.items ?? R.items),
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: u.A.CANCEL_INVOICE_PREVIEW,
            }),
            te = null !== tt ? E.Ay.getIntervalForInvoice(tt) : null,
            tn = (0, E.y8)(U.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: R.currency,
                paymentSourceId: R.paymentSourceId,
            }),
            tr = (0, I.$g)(tn.amount, tn.currency),
            ta = a.useMemo(() => (0, m.A)(), []);
        a.useEffect(() => {
            f.default.track(b.HAw.CANCELLATION_FLOW_STARTED, { location_stack: n, load_id: ta, ...(0, x.j)(R) });
        }, [n, R, ta]);
        let [to, ti] = a.useState(null),
            ts = a.useCallback(() => {
                switch (K) {
                    case w.g.CONFIRM:
                        return (0, r.jsx)(y.r, {});
                    case w.g.CONFIRM_DISCOUNT:
                        return (0, r.jsx)(A.M, {});
                    case w.g.DISCOUNT_APPLIED:
                        return (0, r.jsx)(g.V, {});
                    case w.g.PREVIEW:
                        return (0, r.jsx)(O.E, {});
                    case w.g.PAUSE_SELECT:
                        return (0, r.jsx)(T.PremiumSubscriptionPauseModalSelect, {});
                    case w.g.PAUSE_CONFIRM:
                        return (0, r.jsx)(T.cN, {});
                    case w.g.WHAT_YOU_LOSE:
                    default:
                        return (0, r.jsx)(N.Z, {});
                }
            }, [K]),
            tl = a.useCallback(async () => {
                if (
                    (f.default.track(b.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: n,
                        load_id: ta,
                        ...(0, x.j)(R),
                    }),
                    j.includes(R.status))
                )
                    await (0, d.M2)(R.id, n, e);
                else {
                    let t = R.renewalMutations?.items ?? R.items,
                        r = (0, E.ee)(t);
                    await (0, d.nV)(
                        R,
                        { items: r },
                        { amount: 0, currency: R.currency },
                        (0, E.UC)(r, R.currency, R.paymentSourceId),
                        n,
                        e,
                    );
                }
                p.Ay.fireSurveyAction(l.w.NITRO_UNSUBBED);
            }, [R, n, e, ta]),
            t_ = async () => {
                if (null == Q) throw Error("Churn user discount offer is null");
                R.status === b.Dmq.CANCELED
                    ? await (0, d._D)(R, Q)
                    : await _.Bo.post({
                          url: b.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: Q.id },
                          rejectWithError: !0,
                      });
            };
        return (0, r.jsx)(c.f5, {
            value: n,
            children: (0, r.jsxs)(P.CancellationContext.Provider, {
                value: {
                    setStep: Y,
                    premiumType: H,
                    onClose: () => {
                        i(),
                            f.default.track(b.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: w.T[K],
                                to_step: null,
                                step_duration_ms: Date.now() - G,
                                flow_duration_ms: Date.now() - z,
                                location_stack: n,
                                load_id: ta,
                                ...(0, x.j)(R),
                            });
                    },
                    transitionState: v,
                    premiumSubscription: R,
                    analyticsLocations: n,
                    analyticsLocation: e,
                    confettiCanvas: B,
                    churnUserDiscountOffer: Q,
                    isFetchingChurnDiscountOffer: X && Z,
                    fullPrice: tr,
                    discountedPrice: J,
                    planId: q,
                    paymentsBlocked: $,
                    renewalInvoice: tt,
                    renewalInvoiceDetails: te,
                    handleCancellation: tl,
                    applyOffer: t_,
                    pauseDuration: to,
                    setPauseDuration: ti,
                },
                children: [(0, r.jsx)(o.Fk, { ref: W, className: F.L, environment: k.current }), ts()],
            }),
        });
    };
