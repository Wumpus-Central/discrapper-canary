"use strict";
n.d(t, { E: () => I });
var i = n(627968),
    r = n(64700),
    s = n(160946),
    a = n(465657),
    o = n(71804),
    l = n(463376),
    u = n(558620),
    c = n(211159),
    d = n(380619),
    _ = n(427858),
    h = n(428262),
    f = n(937008),
    p = n(166532),
    E = n(800471),
    m = n(424517),
    g = n(788868);
function A(e) {
    let {
            openInvoiceId: t,
            effectivePlanGroup: n,
            handlePaymentSourceAdd: a,
            reviewWarningMessage: l,
            verifiedTrialId: d,
        } = e,
        h = (0, u.A)(),
        {
            selectedPlanId: f,
            selectedSkuId: p,
            purchaseState: E,
            unifiedCheckoutFlow: g,
            activeSubscription: A,
            isGift: I,
            skuIds: T,
        } = (0, c.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
            skuIds: e.skuIds,
        })),
        S = (0, s.Y)(T);
    if (null == h)
        throw new o.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: g,
                selectedPlanId: f,
                selectedSkuId: p,
                hasFetchedSubscriptionPlans: S,
            },
        });
    let y = r.useMemo(
        () => ({ handlePaymentSourceAdd: a, planGroup: n, verifiedPlanId: h.id, selectedPlan: h }),
        [a, n, h],
    );
    return null == A || I
        ? (0, i.jsx)(m._, { ...y, verifiedTrialId: d, reviewWarningMessage: l })
        : (0, i.jsx)(_.A, { ...y, purchaseState: E, premiumSubscription: A, hasOpenInvoice: null != t });
}
function I(e) {
    let {
            selectedSkuId: t,
            isPremium: n,
            isGift: s,
            startedPaymentFlowWithPaymentSources: o,
            referralTrialOfferId: _,
        } = (0, c.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { isEligibleForTrial: m, isPremiumGroupPurchase: I, userTrialOffer: T } = (0, l.i)(),
        { verifiedTrialId: S } = r.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: i, selectedSkuId: r } = e,
                        s = t ?? n ?? null;
                    return { verifiedTrialId: null != s && (!i || g.TP[s].skus.includes(r)) ? s : null };
                })({ trialId: e.trialId, referralTrialOfferId: _, isPremium: n, selectedSkuId: t }),
            [e.trialId, _, n, t],
        ),
        y = (0, u.A)(),
        C = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != y) {
                if ((0, h.xq)(y.id)) return g.LE;
                if ((0, h.z4)(y.id)) return g.DA;
            }
            return [];
        }, [y, e.planGroup]),
        N = r.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, i.jsx)(A, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: C,
                    verifiedTrialId: S,
                    openInvoiceId: e.openInvoiceId,
                    reviewWarningMessage: e.reviewWarningMessage,
                });
            },
            [C, S, e.openInvoiceId, e.reviewWarningMessage],
        ),
        v = null == e.initialPlanId && null == e.subscriptionTier,
        R = (0, E.vT)({ isTrial: m, isGift: s, selectedSkuId: t, startedPaymentFlowWithPaymentSources: o }),
        O = R ? v && n : n,
        { claimableRewards: b } = (0, f.Pv)(),
        D = (0, d.px)(y, s, b),
        L = e.handleStepChange,
        w = r.useCallback(
            () =>
                R
                    ? void L(p.pn.SKU_SELECT)
                    : I
                      ? void L(p.pn.ADD_PAYMENT_STEPS)
                      : D
                        ? void L(p.pn.SELECT_FREE_SKU)
                        : L(p.pn.PLAN_SELECT),
            [L, R, D, I],
        ),
        M = r.useCallback(
            (e, t) => {
                let { paymentSource: n, invoicePreview: i } = t,
                    r = e.disablePurchase || null == i || (!s && null != n && m && !n.canRedeemTrial());
                return { ...e, disablePurchase: r };
            },
            [m, s],
        ),
        P = null != T ? T.id : void 0,
        x = r.useMemo(() => ({ user_trial_offer_id: P }), [P]),
        k = r.useMemo(() => ({ isTrial: m, trialId: S, planGroup: C }), [S, C, m]);
    return (0, i.jsx)(a.Y, {
        ...e,
        isBackButtonEligible: O,
        onFooterBackClick: w,
        subscriptionMetadata: x,
        customFooterProps: k,
        renderStepBody: N,
        resolveInternalState: M,
    });
}
