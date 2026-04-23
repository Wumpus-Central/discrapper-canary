"use strict";
r.d(t, { PremiumBrandRefreshSubscriptionCancellationModal: () => M });
var a = r(627968),
    i = r(64700),
    n = r(106778),
    l = r(284009),
    s = r.n(l),
    o = r(517846),
    c = r(562465),
    d = r(793574),
    u = r(688810),
    _ = r(323082),
    p = r(86379),
    h = r(925847),
    m = r(236698),
    f = r(954571),
    g = r(927578),
    A = r(580630),
    C = r(543767),
    v = r(526292),
    b = r(511484),
    x = r(318998),
    I = r(95337),
    y = r(412314),
    E = r(456459),
    w = r(473702),
    T = r(916974),
    S = r(347378),
    N = r(606423),
    L = r(64588),
    j = r(501957),
    O = r(788868),
    D = r(652215),
    P = r(71204);
let R = [D.Dmq.PAST_DUE, D.Dmq.PAUSED, D.Dmq.BILLING_RETRY],
    M = (e) => {
        let { analyticsLocation: t, analyticsLocations: r, onClose: l, transitionState: M, premiumSubscription: k } = e,
            { initialStep: B } = e,
            F = i.useRef(new n.OH()),
            [U, W] = i.useState(null),
            G = (0, g.EL)(k)?.planId,
            H = null != G ? g.Ay.getPremiumType(G) : null;
        s()(null != H, "Should not be cancelling Nitro without premiumType");
        let V = H === O.PremiumTypes.TIER_0 || H === O.PremiumTypes.TIER_1 || H === O.PremiumTypes.TIER_2;
        null == B && (B = V ? w.g.WHAT_YOU_LOSE : w.g.CONFIRM);
        let [Z, K, J, Y] = (0, L.U)(B, k, r),
            $ = (0, p.Hp)(),
            z = (0, v.f9)(),
            { churnUserDiscountOffer: q, isFetchingChurnDiscountOffer: X } = (0, v.g5)(
                !z || (k.status === D.Dmq.CANCELED && Z !== w.g.CONFIRM_DISCOUNT),
            ),
            Q = (0, b.tQ)(k, O.gD.PREMIUM_MONTH_TIER_2, q),
            [ee] = (0, C.Kq)({
                subscriptionId: k.id,
                items: (0, g.ee)(k.renewalMutations?.items ?? k.items),
                renewal: !0,
                analyticsLocations: r,
                analyticsLocation: d.A.CANCEL_INVOICE_PREVIEW,
            }),
            et = null !== ee ? g.Ay.getIntervalForInvoice(ee) : null,
            er = (0, g.y8)(O.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: k.currency,
                paymentSourceId: k.paymentSourceId,
            }),
            ea = (0, A.$g)(er.amount, er.currency),
            ei = i.useMemo(() => (0, h.A)(), []);
        i.useEffect(() => {
            f.default.track(D.HAw.CANCELLATION_FLOW_STARTED, { location_stack: r, load_id: ei, ...(0, j.j)(k) });
        }, [r, k, ei]);
        let [en, el] = i.useState(null),
            es = i.useCallback(() => {
                switch (Z) {
                    case w.g.CONFIRM:
                        return (0, a.jsx)(I.r, {});
                    case w.g.CONFIRM_DISCOUNT:
                        return (0, a.jsx)(y.M, {});
                    case w.g.DISCOUNT_APPLIED:
                        return (0, a.jsx)(E.V, {});
                    case w.g.PREVIEW:
                        return (0, a.jsx)(S.E, {});
                    case w.g.PAUSE_SELECT:
                        return (0, a.jsx)(x.PremiumSubscriptionPauseModalSelect, {});
                    case w.g.PAUSE_CONFIRM:
                        return (0, a.jsx)(x.cN, {});
                    case w.g.WHAT_YOU_LOSE:
                    default:
                        return (0, a.jsx)(N.Z, {});
                }
            }, [Z]),
            eo = i.useCallback(async () => {
                if (
                    (f.default.track(D.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: r,
                        load_id: ei,
                        ...(0, j.j)(k),
                    }),
                    R.includes(k.status))
                )
                    await (0, _.M2)(k.id, r, t);
                else {
                    let e = k.renewalMutations?.items ?? k.items,
                        a = (0, g.ee)(e);
                    await (0, _.nV)(
                        k,
                        { items: a },
                        { amount: 0, currency: k.currency },
                        (0, g.UC)(a, k.currency, k.paymentSourceId),
                        r,
                        t,
                    );
                }
                m.Ay.fireSurveyAction(o.w.NITRO_UNSUBBED);
            }, [k, r, t, ei]),
            ec = async () => {
                if (null == q) throw Error("Churn user discount offer is null");
                k.status === D.Dmq.CANCELED
                    ? await (0, _._D)(k, q)
                    : await c.Bo.post({
                          url: D.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: q.id },
                          rejectWithError: !0,
                      });
            };
        return (0, a.jsx)(u.f5, {
            value: r,
            children: (0, a.jsxs)(T.CancellationContext.Provider, {
                value: {
                    setStep: K,
                    premiumType: H,
                    onClose: () => {
                        l(),
                            f.default.track(D.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: w.T[Z],
                                to_step: null,
                                step_duration_ms: Date.now() - J,
                                flow_duration_ms: Date.now() - Y,
                                location_stack: r,
                                load_id: ei,
                                ...(0, j.j)(k),
                            });
                    },
                    transitionState: M,
                    premiumSubscription: k,
                    analyticsLocations: r,
                    analyticsLocation: t,
                    confettiCanvas: U,
                    churnUserDiscountOffer: q,
                    isFetchingChurnDiscountOffer: z && X,
                    fullPrice: ea,
                    discountedPrice: Q,
                    planId: G,
                    paymentsBlocked: $,
                    renewalInvoice: ee,
                    renewalInvoiceDetails: et,
                    handleCancellation: eo,
                    applyOffer: ec,
                    pauseDuration: en,
                    setPauseDuration: el,
                },
                children: [(0, a.jsx)(n.Fk, { ref: W, className: P.L, environment: F.current }), es()],
            }),
        });
    };
