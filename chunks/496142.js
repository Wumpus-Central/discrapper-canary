"use strict";
n.d(t, { E: () => T });
var i = n(627968),
    r = n(64700),
    s = n(465657),
    a = n(71804),
    o = n(426398),
    l = n(463376),
    u = n(655857),
    c = n(558620),
    d = n(211159),
    _ = n(380619),
    h = n(427858),
    f = n(428262),
    p = n(937008),
    E = n(166532),
    m = n(800471),
    g = n(953761),
    A = n(788868);
let I = (e) => {
    let {
            openInvoiceId: t,
            effectivePlanGroup: n,
            handlePaymentSourceAdd: s,
            reviewWarningMessage: _,
            verifiedTrialId: f,
        } = e,
        p = (0, c.A)(),
        {
            selectedPlanId: E,
            selectedSkuId: m,
            purchaseState: A,
            unifiedCheckoutFlow: I,
            activeSubscription: T,
            isGift: S,
        } = (0, d.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
        })),
        { paymentSources: y } = (0, o.jm)(),
        { discountOffer: C, isEligibleForDiscount: N, isEligibleForTrial: v } = (0, l.i)(),
        { dropdownCurrencies: R, hasFetchedRelatedSubscriptionPlans: O, setCheckoutCurrency: b } = (0, u.Jn)(),
        D = r.useCallback((e) => b(e), [b]);
    if (null == p)
        throw new a.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: I,
                selectedPlanId: E,
                hasFetchedSubscriptionPlans: O,
                selectedSkuId: m,
            },
        });
    let L = r.useMemo(() => {
            let e = C?.discount?.planIds;
            return N && null != C && null != e && null != p && e.includes(p.id);
        }, [N, C, p]),
        w = r.useMemo(() => v || null != f, [v, f]),
        M = { paymentSources: y, handlePaymentSourceAdd: s, planGroup: n },
        P = p.id;
    if (null == T || S) {
        let e = { ...M, selectedPlanId: P, trialId: f, reviewWarningMessage: _, isTrial: w, isDiscount: L };
        return (0, i.jsx)(g._, { ...e });
    }
    {
        let e = {
            ...M,
            currencies: R,
            onCurrencyChange: D,
            purchaseState: A,
            premiumSubscription: T,
            planId: P,
            hasOpenInvoice: null != t,
        };
        return (0, i.jsx)(h.A, { ...e });
    }
};
function T(e) {
    let {
            selectedSkuId: t,
            isPremium: n,
            isGift: a,
            startedPaymentFlowWithPaymentSources: o,
            referralTrialOfferId: u,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { isEligibleForTrial: h, isPremiumGroupPurchase: g, userTrialOffer: T } = (0, l.i)(),
        { verifiedTrialId: S } = r.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: i, selectedSkuId: r } = e,
                        s = t ?? n ?? null;
                    return { verifiedTrialId: null != s && (!i || A.TP[s].skus.includes(r)) ? s : null };
                })({ trialId: e.trialId, referralTrialOfferId: u, isPremium: n, selectedSkuId: t }),
            [e.trialId, u, n, t],
        ),
        y = (0, c.A)(),
        C = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != y) {
                if ((0, f.xq)(y.id)) return A.LE;
                if ((0, f.z4)(y.id)) return A.DA;
            }
            return [];
        }, [y, e.planGroup]),
        N = r.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, i.jsx)(I, {
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
        R = (0, m.vT)({ isTrial: h, isGift: a, selectedSkuId: t, startedPaymentFlowWithPaymentSources: o }),
        O = R ? v && n : n,
        { claimableRewards: b } = (0, p.Pv)(),
        D = (0, _.px)(y, a, b),
        L = e.handleStepChange,
        w = r.useCallback(
            () =>
                R
                    ? void L(E.pn.SKU_SELECT)
                    : g
                      ? void L(E.pn.ADD_PAYMENT_STEPS)
                      : D
                        ? void L(E.pn.SELECT_FREE_SKU)
                        : L(E.pn.PLAN_SELECT),
            [L, R, D, g],
        ),
        M = r.useCallback(
            (e, t) => {
                let { paymentSource: n, invoicePreview: i } = t,
                    r = e.disablePurchase || null == i || (!a && null != n && h && !n.canRedeemTrial());
                return { ...e, disablePurchase: r };
            },
            [h, a],
        ),
        P = null != T ? T.id : void 0,
        x = r.useMemo(() => ({ user_trial_offer_id: P }), [P]),
        k = r.useMemo(() => ({ isTrial: h, trialId: S, planGroup: C }), [S, C, h]);
    return (0, i.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: O,
        onFooterBackClick: w,
        subscriptionMetadata: x,
        customFooterProps: k,
        renderStepBody: N,
        resolveInternalState: M,
    });
}
