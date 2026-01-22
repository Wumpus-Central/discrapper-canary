n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => M }), n(896048), n(65821);
var a = n(627968),
    r = n(64700),
    i = n(106778),
    l = n(284009),
    s = n.n(l),
    u = n(517846),
    o = n(562465),
    c = n(384904),
    d = n(793574),
    m = n(688810),
    f = n(86379),
    _ = n(925847),
    E = n(236698),
    y = n(954571),
    p = n(927578),
    C = n(580630),
    S = n(543767),
    O = n(526292),
    D = n(511484),
    g = n(318998),
    P = n(95337),
    b = n(412314),
    A = n(456459),
    w = n(473702),
    I = n(916974),
    T = n(347378),
    v = n(606423),
    h = n(64588),
    N = n(501957),
    L = n(788868),
    j = n(652215),
    U = n(247027);
function k(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            a.forEach(function (e) {
                var a;
                (a = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = a);
            });
    }
    return t;
}
let x = [j.Dmq.PAST_DUE, j.Dmq.PAUSED, j.Dmq.BILLING_RETRY],
    M = (t) => {
        var e, n, l;
        let { analyticsLocation: M, analyticsLocations: R, onClose: F, transitionState: W, premiumSubscription: q } = t,
            { initialStep: H } = t,
            V = r.useRef(new i.OH()),
            [B, K] = r.useState(null),
            Y = null == (n = (0, p.EL)(q)) ? void 0 : n.planId,
            G = null != Y ? p.Ay.getPremiumType(Y) : null;
        s()(null != G, "Should not be cancelling Nitro without premiumType");
        let Q = G === L.PremiumTypes.TIER_0 || G === L.PremiumTypes.TIER_1 || G === L.PremiumTypes.TIER_2;
        null == H && (H = Q ? w.g.WHAT_YOU_LOSE : w.g.CONFIRM);
        let [X, Z, $, z] = (0, h.U)(H, q, R),
            J = (0, f.H)(),
            tt = (0, O.f9)(),
            { churnUserDiscountOffer: te, isFetchingChurnDiscountOffer: tn } = (0, O.g5)(
                !tt || (q.status === j.Dmq.CANCELED && X !== w.g.CONFIRM_DISCOUNT),
            ),
            ta = (0, D.tQ)(q, L.gD.PREMIUM_MONTH_TIER_2, te),
            [tr] = (0, S.Kq)({
                subscriptionId: q.id,
                items: (0, p.ee)(null != (e = null == (l = q.renewalMutations) ? void 0 : l.items) ? e : q.items),
                renewal: !0,
                analyticsLocations: R,
                analyticsLocation: d.A.CANCEL_INVOICE_PREVIEW,
            }),
            ti = null !== tr ? p.Ay.getIntervalForInvoice(tr) : null,
            tl = (0, p.y8)(L.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: q.currency,
                paymentSourceId: q.paymentSourceId,
            }),
            ts = (0, C.$g)(tl.amount, tl.currency),
            tu = r.useMemo(() => (0, _.A)(), []);
        r.useEffect(() => {
            y.default.track(
                j.HAw.CANCELLATION_FLOW_STARTED,
                k(
                    {
                        location_stack: R,
                        load_id: tu,
                    },
                    (0, N.j)(q),
                ),
            );
        }, [R, q, tu]);
        let [to, tc] = r.useState(null),
            td = r.useCallback(() => {
                switch (X) {
                    case w.g.CONFIRM:
                        return (0, a.jsx)(P.r, {});
                    case w.g.CONFIRM_DISCOUNT:
                        return (0, a.jsx)(b.M, {});
                    case w.g.DISCOUNT_APPLIED:
                        return (0, a.jsx)(A.V, {});
                    case w.g.PREVIEW:
                        return (0, a.jsx)(T.E, {});
                    case w.g.PAUSE_SELECT:
                        return (0, a.jsx)(g.PremiumSubscriptionPauseModalSelect, {});
                    case w.g.PAUSE_CONFIRM:
                        return (0, a.jsx)(g.cN, {});
                    case w.g.WHAT_YOU_LOSE:
                    default:
                        return (0, a.jsx)(v.Z, {});
                }
            }, [X]),
            tm = r.useCallback(async () => {
                if (
                    (y.default.track(
                        j.HAw.CANCELLATION_FLOW_COMPLETED,
                        k(
                            {
                                location_stack: R,
                                load_id: tu,
                            },
                            (0, N.j)(q),
                        ),
                    ),
                    x.includes(q.status))
                )
                    await (0, c.M2)(q.id, R, M);
                else {
                    var t, e;
                    let n = null != (t = null == (e = q.renewalMutations) ? void 0 : e.items) ? t : q.items,
                        a = (0, p.ee)(n);
                    await (0, c.nV)(
                        q,
                        { items: a },
                        {
                            amount: 0,
                            currency: q.currency,
                        },
                        (0, p.UC)(a, q.currency, q.paymentSourceId),
                        R,
                        M,
                    );
                }
                E.Ay.fireSurveyAction(u.w.NITRO_UNSUBBED);
            }, [q, R, M, tu]),
            tf = async () => {
                if (null == te) throw Error("Churn user discount offer is null");
                q.status === j.Dmq.CANCELED
                    ? await (0, c._D)(q, te)
                    : await o.Bo.post({
                          url: j.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: te.id },
                          rejectWithError: !0,
                      });
            };
        return (0, a.jsx)(m.f5, {
            value: R,
            children: (0, a.jsxs)(I.CancellationContext.Provider, {
                value: {
                    setStep: Z,
                    premiumType: G,
                    onClose: () => {
                        F(),
                            y.default.track(
                                j.HAw.CANCELLATION_FLOW_STEP,
                                k(
                                    {
                                        from_step: w.T[X],
                                        to_step: null,
                                        step_duration_ms: Date.now() - $,
                                        flow_duration_ms: Date.now() - z,
                                        location_stack: R,
                                        load_id: tu,
                                    },
                                    (0, N.j)(q),
                                ),
                            );
                    },
                    transitionState: W,
                    premiumSubscription: q,
                    analyticsLocations: R,
                    analyticsLocation: M,
                    confettiCanvas: B,
                    churnUserDiscountOffer: te,
                    isFetchingChurnDiscountOffer: tt && tn,
                    fullPrice: ts,
                    discountedPrice: ta,
                    planId: Y,
                    paymentsBlocked: J,
                    renewalInvoice: tr,
                    renewalInvoiceDetails: ti,
                    handleCancellation: tm,
                    applyOffer: tf,
                    pauseDuration: to,
                    setPauseDuration: tc,
                },
                children: [
                    (0, a.jsx)(i.Fk, {
                        ref: K,
                        className: U.L,
                        environment: V.current,
                    }),
                    td(),
                ],
            }),
        });
    };
