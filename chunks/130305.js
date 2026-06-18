"use strict";
n.d(t, { b: () => w });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(17928),
    l = n(529427),
    u = n(655857),
    c = n(480642),
    d = n(211159),
    _ = n(166532),
    h = n(482132),
    f = n(97352),
    p = n(526151),
    E = n(599669),
    m = n(303557),
    g = n(753390),
    A = n(606267),
    I = n(364995),
    T = n(666646),
    S = n(566980),
    y = n(216641),
    C = n(174459),
    N = n(428262),
    v = n(20654),
    R = n(652215),
    O = n(788868),
    b = n(375708),
    D = n(327105),
    L = n(469633);
function w(e) {
    let { handleStepChange: t, handleClose: n, analyticsData: s } = e,
        { guildId: w, paymentModalArgs: M, premiumSubscriptionPaymentSourceId: P } = (0, p.Oe)(),
        {
            activeSubscription: x,
            paymentSourceId: k,
            setPaymentSourceId: U,
        } = (0, d.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
        })),
        { displayCurrency: G } = (0, u.Jn)();
    if (null == w) throw new l.vd({ message: "Missing guildId" });
    a()(null != G && "" !== G, "Currency not defined");
    let { paymentSources: F } = M,
        { newAdditionalPlans: V, currentPremiumSubscriptionPlan: B } = (0, m.l)(),
        j = (0, o.bG)([f.A], () => (null == B ? f.A.get(L.Z) : B));
    a()(null != j, "Missing nextPremiumSubscriptionPlan");
    let H = null != k ? { paymentSourceId: k, currency: G } : { currency: G },
        Y = (function (e) {
            let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                {
                    guildId: s,
                    paymentModalArgs: o,
                    premiumSubscriptionPaymentSourceId: l,
                    numGuildBoostsToPurchase: c,
                    analyticsLocation: h,
                    analyticsSourceLocation: f,
                    flowStartTime: E,
                    applicationId: L,
                    intent: w,
                    onSubscribeComplete: M,
                } = (0, p.Oe)(),
                { displayCurrency: P } = (0, u.Jn)(),
                { paymentSources: x, setIsSubmittingCurrentStep: k, isSubmittingCurrentStep: U } = o,
                {
                    activeSubscription: G,
                    paymentSourceId: F,
                    setPurchaseError: V,
                    hasAcceptedTerms: B,
                    setPurchaseState: j,
                } = (0, d.t4)((e) => ({
                    activeSubscription: e.activeSubscription,
                    paymentSourceId: e.paymentSourceId,
                    setPurchaseError: e.setPurchaseError,
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    setPurchaseState: e.setPurchaseState,
                })),
                H = (0, T.sw)(),
                {
                    newAdditionalPlans: Y,
                    currentPremiumSubscriptionPlan: W,
                    premiumGuildSubscriptionPlanId: K,
                } = (0, m.l)(),
                $ = (0, A.A)({ location: "GuildBoostPurchaseModal", message: b.intl.string(D.default["tK8A/8"]) }),
                { checkoutPaymentSources: z } = (0, I.t)(),
                q = (0, A.iB)({ checkoutPaymentSources: z, paymentSourceId: F, location: "GuildBoostPurchaseModal" }),
                Z = r.useMemo(
                    () => ({
                        ...i,
                        location: h,
                        source: f,
                        subscription_plan_id: K,
                        sku_id: (0, N.mH)(O.pe.GUILD),
                        quantity: c,
                    }),
                    [i, h, f, c, K],
                ),
                X = r.useMemo(() => {
                    let { guild_id: e, ...t } = Z;
                    return t;
                }, [Z]),
                [Q, J] = r.useState(!1),
                ee = null != F ? { paymentSourceId: F, currency: P ?? void 0 } : { currency: P ?? void 0 },
                et = async () => {
                    a()(null != Y, "Missing newAdditionalPlans");
                    let e = (0, y.W)(x, F);
                    V(null);
                    try {
                        j(S.h.PURCHASING),
                            k(!0),
                            a()(null != F, "Missing paymentSourceId"),
                            a()(null != H, "Missing invoicePreview");
                        let r = { amount: H.total, currency: H.currency },
                            o = ee.currency ?? H.currency,
                            u = (0, N.U8)(G, Y, o.toLowerCase(), ee.paymentSourceId);
                        if (
                            (C.default.track(R.HAw.PAYMENT_FLOW_COMPLETED, {
                                ...Z,
                                duration_ms: Date.now() - E,
                                guild_id: s ?? void 0,
                                application_id: L,
                            }),
                            Q)
                        )
                            return;
                        if (null == G || null == W) {
                            a()(null != e, "Missing paymentSource");
                            let t = await (0, g.Ky)({
                                items: Y,
                                paymentSource: e,
                                currency: o,
                                expectedInvoicePrice: r,
                                expectedRenewalPrice: u,
                            });
                            if (t.redirectConfirmation) return void J(null != t.redirectURL);
                        } else {
                            let t = { items: (0, N.aE)(G, Y) };
                            (t.currency = G.currency ?? o),
                                (t.paymentSource = null != l ? x[l] : void 0),
                                null == t.paymentSource &&
                                    (a()(null != e, "Missing paymentSource"), (t.paymentSource = e), (t.currency = o));
                            let n = await (0, g.nV)(G, t, r, u, i.location_stack);
                            if (n.redirectConfirmation) return void J(null != n.redirectURL);
                        }
                        null == w && t(_.pn.CONFIRM),
                            j(S.h.COMPLETED),
                            null != s && (await (0, v.a)(s, null != w)),
                            null != w && n(),
                            M?.();
                    } catch (t) {
                        j(S.h.FAIL),
                            V(t),
                            C.default.track(R.HAw.PAYMENT_FLOW_FAILED, {
                                ...X,
                                payment_error_code: t?.code,
                                payment_gateway:
                                    null != e ? (e.type === R.hes.CARD ? R.kM_.STRIPE : R.kM_.BRAINTREE) : null,
                                payment_source_id: F,
                                duration_ms: Date.now() - E,
                            });
                    } finally {
                        Q || k(!1);
                    }
                };
            return {
                text: b.intl.string(b.t.eUEeCt),
                loading: U,
                disabled: null == F || !B || null != $ || q,
                onClick: et,
                variant: "active",
            };
        })({ handleStepChange: t, handleClose: n, analyticsData: s }),
        W = r.useCallback(() => {
            t(_.pn.ADD_PAYMENT_STEPS), U(null);
        }, [t, U]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.dZ, {
                children: (0, i.jsx)(E.pc, {
                    guildId: w,
                    paymentSources: F,
                    priceOptions: H,
                    currentPremiumSubscription: x,
                    premiumSubscriptionPaymentSourceId: P,
                    premiumSubscriptionPlan: j,
                    newAdditionalPlans: V,
                    paymentSourceId: k,
                    setPaymentSourceId: U,
                    onPaymentSourceAdd: W,
                }),
            }),
            (0, i.jsx)(h.UX, {
                children: (0, i.jsx)(c.lo, { onBackClick: () => t(_.pn.PLAN_SELECT), primaryButtonProps: Y }),
            }),
        ],
    });
}
