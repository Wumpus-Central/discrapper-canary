n.d(e, { PremiumBrandRefreshSubscriptionCancellationModal: () => j });
var r = n(627968),
    a = n(64700),
    o = n(106778),
    i = n(284009),
    s = n.n(i),
    l = n(517846),
    _ = n(636537),
    u = n(793574),
    c = n(688810),
    d = n(323082),
    C = n(86379),
    m = n(925847),
    p = n(27620),
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
    L = n(501957),
    x = n(652215),
    b = n(788868),
    U = n(71204);
let F = [x.Dmq.PAST_DUE, x.Dmq.PAUSED, x.Dmq.BILLING_RETRY],
    j = (t) => {
        let { analyticsLocation: e, analyticsLocations: n, onClose: i, transitionState: j, premiumSubscription: R } = t,
            { initialStep: v } = t,
            M = a.useRef(new o.OH()),
            [k, B] = a.useState(null),
            W = (0, E.EL)(R)?.planId,
            q = null != W ? E.Ay.getPremiumType(W) : null;
        s()(null != q, "Should not be cancelling Nitro without premiumType");
        let H = q === b.PremiumTypes.TIER_0 || q === b.PremiumTypes.TIER_1 || q === b.PremiumTypes.TIER_2;
        null == v && (v = H ? w.g.WHAT_YOU_LOSE : w.g.CONFIRM);
        let [V, K, Y, G] = ((t, e, n) => {
                let [r, o] = a.useState(t),
                    [i, s] = a.useState(Date.now()),
                    [l] = a.useState(Date.now()),
                    _ = a.useCallback(
                        (t) => {
                            f.default.track(x.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: w.T[r],
                                to_step: w.T[t],
                                step_duration_ms: Date.now() - i,
                                flow_duration_ms: Date.now() - l,
                                location_stack: n,
                                ...(0, L.j)(e),
                            }),
                                o(t),
                                s(Date.now());
                        },
                        [n, l, i, r, e],
                    );
                return [r, _, i, l];
            })(v, R, n),
            z = (0, C.Hp)(),
            $ = (0, h.f9)(),
            { churnUserDiscountOffer: X, isFetchingChurnDiscountOffer: Q } = (0, h.g5)(
                !$ || (R.status === x.Dmq.CANCELED && V !== w.g.CONFIRM_DISCOUNT),
            ),
            Z = (0, D.tQ)(R, b.gD.PREMIUM_MONTH_TIER_2, X),
            [J] = (0, S.Kq)({
                subscriptionId: R.id,
                items: (0, E.ee)(R.renewalMutations?.items ?? R.items),
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: u.A.CANCEL_INVOICE_PREVIEW,
            }),
            tt = null !== J ? E.Ay.getIntervalForInvoice(J) : null,
            te = (0, E.y8)(b.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: R.currency,
                paymentSourceId: R.paymentSourceId,
            }),
            tn = (0, I.$g)(te.amount, te.currency),
            tr = a.useMemo(() => (0, m.A)(), []);
        a.useEffect(() => {
            f.default.track(x.HAw.CANCELLATION_FLOW_STARTED, { location_stack: n, load_id: tr, ...(0, L.j)(R) });
        }, [n, R, tr]);
        let [ta, to] = a.useState(null),
            ti = a.useCallback(() => {
                switch (V) {
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
            }, [V]),
            ts = a.useCallback(async () => {
                if (
                    (f.default.track(x.HAw.CANCELLATION_FLOW_COMPLETED, {
                        location_stack: n,
                        load_id: tr,
                        ...(0, L.j)(R),
                    }),
                    F.includes(R.status))
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
            }, [R, n, e, tr]),
            tl = async () => {
                if (null == X) throw Error("Churn user discount offer is null");
                R.status === x.Dmq.CANCELED
                    ? await (0, d._D)(R, X)
                    : await _.Bo.post({
                          url: x.Rsh.USER_OFFER_REDEEM,
                          body: { user_discount_offer_id: X.id },
                          rejectWithError: !0,
                      });
            };
        return (0, r.jsx)(c.f5, {
            value: n,
            children: (0, r.jsxs)(P.CancellationContext.Provider, {
                value: {
                    setStep: K,
                    premiumType: q,
                    onClose: () => {
                        i(),
                            f.default.track(x.HAw.CANCELLATION_FLOW_STEP, {
                                from_step: w.T[V],
                                to_step: null,
                                step_duration_ms: Date.now() - Y,
                                flow_duration_ms: Date.now() - G,
                                location_stack: n,
                                load_id: tr,
                                ...(0, L.j)(R),
                            });
                    },
                    transitionState: j,
                    premiumSubscription: R,
                    analyticsLocations: n,
                    analyticsLocation: e,
                    confettiCanvas: k,
                    churnUserDiscountOffer: X,
                    isFetchingChurnDiscountOffer: $ && Q,
                    fullPrice: tn,
                    discountedPrice: Z,
                    planId: W,
                    paymentsBlocked: z,
                    renewalInvoice: J,
                    renewalInvoiceDetails: tt,
                    handleCancellation: ts,
                    applyOffer: tl,
                    pauseDuration: ta,
                    setPauseDuration: to,
                },
                children: [(0, r.jsx)(o.Fk, { ref: B, className: U.L, environment: M.current }), ti()],
            }),
        });
    };
