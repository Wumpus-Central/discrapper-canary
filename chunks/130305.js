"use strict";
n.d(t, { b: () => L });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(17928),
    l = n(655857),
    u = n(480642),
    c = n(211159),
    d = n(166532),
    _ = n(482132),
    h = n(97352),
    f = n(526151),
    p = n(599669),
    E = n(303557),
    m = n(753390),
    g = n(606267),
    A = n(364995),
    I = n(666646),
    T = n(566980),
    S = n(216641),
    y = n(174459),
    C = n(428262),
    N = n(20654),
    v = n(652215),
    R = n(788868),
    O = n(375708),
    b = n(327105),
    D = n(469633);
function L(e) {
    let { handleStepChange: t, handleClose: n, analyticsData: s } = e,
        { guildId: L, paymentModalArgs: w, premiumSubscriptionPaymentSourceId: M } = (0, f.Oe)(),
        {
            activeSubscription: P,
            paymentSourceId: x,
            setPaymentSourceId: k,
        } = (0, c.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
        })),
        { displayCurrency: U } = (0, l.Jn)();
    a()(null != L, "Missing guildId"), a()(null != U && "" !== U, "Currency not defined");
    let { paymentSources: G } = w,
        { newAdditionalPlans: F, currentPremiumSubscriptionPlan: V } = (0, E.l)(),
        B = (0, o.bG)([h.A], () => (null == V ? h.A.get(D.Z) : V));
    a()(null != B, "Missing nextPremiumSubscriptionPlan");
    let j = null != x ? { paymentSourceId: x, currency: U } : { currency: U },
        H = (function (e) {
            let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                {
                    guildId: s,
                    paymentModalArgs: o,
                    premiumSubscriptionPaymentSourceId: u,
                    numGuildBoostsToPurchase: _,
                    analyticsLocation: h,
                    analyticsSourceLocation: p,
                    flowStartTime: D,
                    applicationId: L,
                    intent: w,
                    onSubscribeComplete: M,
                } = (0, f.Oe)(),
                { displayCurrency: P } = (0, l.Jn)(),
                { paymentSources: x, setIsSubmittingCurrentStep: k, isSubmittingCurrentStep: U } = o,
                {
                    activeSubscription: G,
                    paymentSourceId: F,
                    setPurchaseError: V,
                    hasAcceptedTerms: B,
                    setPurchaseState: j,
                } = (0, c.t4)((e) => ({
                    activeSubscription: e.activeSubscription,
                    paymentSourceId: e.paymentSourceId,
                    setPurchaseError: e.setPurchaseError,
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    setPurchaseState: e.setPurchaseState,
                })),
                H = (0, I.sw)(),
                {
                    newAdditionalPlans: Y,
                    currentPremiumSubscriptionPlan: W,
                    premiumGuildSubscriptionPlanId: K,
                } = (0, E.l)(),
                $ = (0, g.A)({ location: "GuildBoostPurchaseModal", message: O.intl.string(b.default["tK8A/8"]) }),
                { checkoutPaymentSources: z } = (0, A.t)(),
                q = (0, g.iB)({ checkoutPaymentSources: z, paymentSourceId: F, location: "GuildBoostPurchaseModal" }),
                Z = r.useMemo(
                    () => ({
                        ...i,
                        location: h,
                        source: p,
                        subscription_plan_id: K,
                        sku_id: (0, C.mH)(R.pe.GUILD),
                        quantity: _,
                    }),
                    [i, h, p, _, K],
                ),
                X = r.useMemo(() => {
                    let { guild_id: e, ...t } = Z;
                    return t;
                }, [Z]),
                [Q, J] = r.useState(!1),
                ee = null != F ? { paymentSourceId: F, currency: P ?? void 0 } : { currency: P ?? void 0 },
                et = async () => {
                    a()(null != Y, "Missing newAdditionalPlans");
                    let e = (0, S.W)(x, F);
                    V(null);
                    try {
                        j(T.h.PURCHASING),
                            k(!0),
                            a()(null != F, "Missing paymentSourceId"),
                            a()(null != H, "Missing invoicePreview");
                        let r = { amount: H.total, currency: H.currency },
                            o = ee.currency ?? H.currency,
                            l = (0, C.U8)(G, Y, o.toLowerCase(), ee.paymentSourceId);
                        if (
                            (y.default.track(v.HAw.PAYMENT_FLOW_COMPLETED, {
                                ...Z,
                                duration_ms: Date.now() - D,
                                guild_id: s ?? void 0,
                                application_id: L,
                            }),
                            Q)
                        )
                            return;
                        if (null == G || null == W) {
                            a()(null != e, "Missing paymentSource");
                            let t = await (0, m.Ky)({
                                items: Y,
                                paymentSource: e,
                                currency: o,
                                expectedInvoicePrice: r,
                                expectedRenewalPrice: l,
                            });
                            if (t.redirectConfirmation) return void J(null != t.redirectURL);
                        } else {
                            let t = { items: (0, C.aE)(G, Y) };
                            (t.currency = G.currency ?? o),
                                (t.paymentSource = null != u ? x[u] : void 0),
                                null == t.paymentSource &&
                                    (a()(null != e, "Missing paymentSource"), (t.paymentSource = e), (t.currency = o));
                            let n = await (0, m.nV)(G, t, r, l, i.location_stack);
                            if (n.redirectConfirmation) return void J(null != n.redirectURL);
                        }
                        null == w && t(d.pn.CONFIRM),
                            j(T.h.COMPLETED),
                            null != s && (await (0, N.a)(s, null != w)),
                            null != w && n(),
                            M?.();
                    } catch (t) {
                        j(T.h.FAIL),
                            V(t),
                            y.default.track(v.HAw.PAYMENT_FLOW_FAILED, {
                                ...X,
                                payment_error_code: t?.code,
                                payment_gateway:
                                    null != e ? (e.type === v.hes.CARD ? v.kM_.STRIPE : v.kM_.BRAINTREE) : null,
                                payment_source_id: F,
                                duration_ms: Date.now() - D,
                            });
                    } finally {
                        Q || k(!1);
                    }
                };
            return {
                text: O.intl.string(O.t.eUEeCt),
                loading: U,
                disabled: null == F || !B || null != $ || q,
                onClick: et,
                variant: "active",
            };
        })({ handleStepChange: t, handleClose: n, analyticsData: s }),
        Y = r.useCallback(() => {
            t(d.pn.ADD_PAYMENT_STEPS), k(null);
        }, [t, k]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.dZ, {
                children: (0, i.jsx)(p.pc, {
                    guildId: L,
                    paymentSources: G,
                    priceOptions: j,
                    currentPremiumSubscription: P,
                    premiumSubscriptionPaymentSourceId: M,
                    premiumSubscriptionPlan: B,
                    newAdditionalPlans: F,
                    paymentSourceId: x,
                    setPaymentSourceId: k,
                    onPaymentSourceAdd: Y,
                }),
            }),
            (0, i.jsx)(_.UX, {
                children: (0, i.jsx)(u.lo, { onBackClick: () => t(d.pn.PLAN_SELECT), primaryButtonProps: H }),
            }),
        ],
    });
}
