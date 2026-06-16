"use strict";
n.d(t, { b: () => D });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(17928),
    l = n(480642),
    u = n(211159),
    c = n(166532),
    d = n(482132),
    _ = n(97352),
    h = n(526151),
    f = n(599669),
    p = n(303557),
    E = n(753390),
    m = n(606267),
    g = n(364995),
    A = n(666646),
    I = n(566980),
    T = n(216641),
    S = n(174459),
    y = n(428262),
    C = n(20654),
    N = n(652215),
    v = n(788868),
    R = n(375708),
    O = n(327105),
    b = n(469633);
function D(e) {
    let { handleStepChange: t, handleClose: n, analyticsData: s } = e,
        { guildId: D, currency: L, paymentModalArgs: w, premiumSubscriptionPaymentSourceId: M } = (0, h.Oe)(),
        {
            activeSubscription: P,
            paymentSourceId: x,
            setPaymentSourceId: k,
        } = (0, u.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
        }));
    a()(null != D, "Missing guildId"), a()(null != L && "" !== L, "Currency not defined");
    let { paymentSources: U } = w,
        { newAdditionalPlans: G, currentPremiumSubscriptionPlan: F } = (0, p.l)(),
        V = (0, o.bG)([_.A], () => (null == F ? _.A.get(b.Z) : F));
    a()(null != V, "Missing nextPremiumSubscriptionPlan");
    let B = null != x ? { paymentSourceId: x, currency: L } : { currency: L },
        j = (function (e) {
            let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                {
                    guildId: s,
                    currency: o,
                    paymentModalArgs: l,
                    premiumSubscriptionPaymentSourceId: d,
                    numGuildBoostsToPurchase: _,
                    analyticsLocation: f,
                    analyticsSourceLocation: b,
                    flowStartTime: D,
                    applicationId: L,
                    intent: w,
                    onSubscribeComplete: M,
                } = (0, h.Oe)(),
                { paymentSources: P, setIsSubmittingCurrentStep: x, isSubmittingCurrentStep: k } = l,
                {
                    activeSubscription: U,
                    paymentSourceId: G,
                    setPurchaseError: F,
                    hasAcceptedTerms: V,
                    setPurchaseState: B,
                } = (0, u.t4)((e) => ({
                    activeSubscription: e.activeSubscription,
                    paymentSourceId: e.paymentSourceId,
                    setPurchaseError: e.setPurchaseError,
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    setPurchaseState: e.setPurchaseState,
                })),
                j = (0, A.sw)(),
                {
                    newAdditionalPlans: H,
                    currentPremiumSubscriptionPlan: Y,
                    premiumGuildSubscriptionPlanId: W,
                } = (0, p.l)(),
                K = (0, m.A)({ location: "GuildBoostPurchaseModal", message: R.intl.string(O.default["tK8A/8"]) }),
                { checkoutPaymentSources: $ } = (0, g.t)(),
                z = (0, m.iB)({ checkoutPaymentSources: $, paymentSourceId: G, location: "GuildBoostPurchaseModal" }),
                q = r.useMemo(
                    () => ({
                        ...i,
                        location: f,
                        source: b,
                        subscription_plan_id: W,
                        sku_id: (0, y.mH)(v.pe.GUILD),
                        quantity: _,
                    }),
                    [i, f, b, _, W],
                ),
                Z = r.useMemo(() => {
                    let { guild_id: e, ...t } = q;
                    return t;
                }, [q]),
                [X, Q] = r.useState(!1),
                J = null != G ? { paymentSourceId: G, currency: o ?? void 0 } : { currency: o ?? void 0 },
                ee = async () => {
                    a()(null != H, "Missing newAdditionalPlans");
                    let e = (0, T.W)(P, G);
                    F(null);
                    try {
                        B(I.h.PURCHASING),
                            x(!0),
                            a()(null != G, "Missing paymentSourceId"),
                            a()(null != j, "Missing invoicePreview");
                        let r = { amount: j.total, currency: j.currency },
                            o = J.currency ?? j.currency,
                            l = (0, y.U8)(U, H, o.toLowerCase(), J.paymentSourceId);
                        if (
                            (S.default.track(N.HAw.PAYMENT_FLOW_COMPLETED, {
                                ...q,
                                duration_ms: Date.now() - D,
                                guild_id: s ?? void 0,
                                application_id: L,
                            }),
                            X)
                        )
                            return;
                        if (null == U || null == Y) {
                            a()(null != e, "Missing paymentSource");
                            let t = await (0, E.Ky)({
                                items: H,
                                paymentSource: e,
                                currency: o,
                                expectedInvoicePrice: r,
                                expectedRenewalPrice: l,
                            });
                            if (t.redirectConfirmation) return void Q(null != t.redirectURL);
                        } else {
                            let t = { items: (0, y.aE)(U, H) };
                            (t.currency = U.currency ?? o),
                                (t.paymentSource = null != d ? P[d] : void 0),
                                null == t.paymentSource &&
                                    (a()(null != e, "Missing paymentSource"), (t.paymentSource = e), (t.currency = o));
                            let n = await (0, E.nV)(U, t, r, l, i.location_stack);
                            if (n.redirectConfirmation) return void Q(null != n.redirectURL);
                        }
                        null == w && t(c.pn.CONFIRM),
                            B(I.h.COMPLETED),
                            null != s && (await (0, C.a)(s, null != w)),
                            null != w && n(),
                            M?.();
                    } catch (t) {
                        B(I.h.FAIL),
                            F(t),
                            S.default.track(N.HAw.PAYMENT_FLOW_FAILED, {
                                ...Z,
                                payment_error_code: t?.code,
                                payment_gateway:
                                    null != e ? (e.type === N.hes.CARD ? N.kM_.STRIPE : N.kM_.BRAINTREE) : null,
                                payment_source_id: G,
                                duration_ms: Date.now() - D,
                            });
                    } finally {
                        X || x(!1);
                    }
                };
            return {
                text: R.intl.string(R.t.eUEeCt),
                loading: k,
                disabled: null == G || !V || null != K || z,
                onClick: ee,
                variant: "active",
            };
        })({ handleStepChange: t, handleClose: n, analyticsData: s }),
        H = r.useCallback(() => {
            t(c.pn.ADD_PAYMENT_STEPS), k(null);
        }, [t, k]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.dZ, {
                children: (0, i.jsx)(f.pc, {
                    guildId: D,
                    paymentSources: U,
                    priceOptions: B,
                    currentPremiumSubscription: P,
                    premiumSubscriptionPaymentSourceId: M,
                    premiumSubscriptionPlan: V,
                    newAdditionalPlans: G,
                    paymentSourceId: x,
                    setPaymentSourceId: k,
                    onPaymentSourceAdd: H,
                }),
            }),
            (0, i.jsx)(d.UX, {
                children: (0, i.jsx)(l.lo, { onBackClick: () => t(c.pn.PLAN_SELECT), primaryButtonProps: j }),
            }),
        ],
    });
}
