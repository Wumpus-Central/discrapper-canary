"use strict";
n.d(t, { E: () => C });
var i = n(627968),
    r = n(64700),
    s = n(403581),
    a = n(160946),
    o = n(465657),
    l = n(71804),
    u = n(463376),
    c = n(558620),
    d = n(46332),
    _ = n(380619),
    h = n(427858),
    f = n(428262),
    p = n(615396),
    E = n(937008),
    m = n(166532),
    g = n(800471),
    A = n(424517),
    I = n(788868),
    T = n(375708);
function S(e) {
    let {
            openInvoiceId: t,
            effectivePlanGroup: n,
            handlePaymentSourceAdd: s,
            reviewWarningMessage: o,
            verifiedTrialId: u,
        } = e,
        _ = (0, c.A)(),
        {
            selectedPlanId: f,
            selectedSkuId: p,
            purchaseState: E,
            unifiedCheckoutFlow: m,
            activeSubscription: g,
            isGift: I,
            skuIds: T,
        } = (0, d.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
            skuIds: e.skuIds,
        })),
        S = (0, a.Y)(T);
    if (null == _)
        throw new l.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: m,
                selectedPlanId: f,
                selectedSkuId: p,
                hasFetchedSubscriptionPlans: S,
            },
        });
    let y = r.useMemo(
        () => ({ handlePaymentSourceAdd: s, planGroup: n, verifiedPlanId: _.id, selectedPlan: _ }),
        [s, n, _],
    );
    return null == g || I
        ? (0, i.jsx)(A._, { ...y, verifiedTrialId: u, reviewWarningMessage: o })
        : (0, i.jsx)(h.A, { ...y, purchaseState: E, premiumSubscription: g, hasOpenInvoice: null != t });
}
class y {
    isTrial;
    isGift;
    selectedPlan;
    premiumSubscription;
    planGroup;
    isPrepaidPaymentSource;
    constructor({
        isTrial: e,
        isGift: t,
        selectedPlan: n,
        premiumSubscription: i,
        planGroup: r,
        isPrepaidPaymentSource: s,
    }) {
        (this.isTrial = e),
            (this.isGift = t),
            (this.selectedPlan = n),
            (this.premiumSubscription = i),
            (this.planGroup = r),
            (this.isPrepaidPaymentSource = s);
    }
    resolveDisabledPurchase(e, t) {
        let { paymentSource: n, invoicePreview: i } = t;
        return !(!e.disablePurchase && null != i && (this.isGift || !this.isTrial || null == n || n.canRedeemTrial()));
    }
    resolveReviewButtonLabel() {
        if (this.isGift) return T.intl.string(T.t.ouo4FK);
        if (null != this.selectedPlan && (0, f.ys)(this.selectedPlan.id))
            return this.isPrepaidPaymentSource
                ? T.intl.string(T.t.cRCCJ3)
                : null != this.premiumSubscription
                  ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                      ? T.intl.string(T.t.zpi5pg)
                      : (0, p.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                        ? T.intl.string(T.t.IJI7yk)
                        : T.intl.string(T.t.VPuTc5)
                  : (0, f.ff)(null, this.selectedPlan);
        return T.intl.string(T.t.YScQSF);
    }
    resolveTenantReviewButtonProps = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: r, handleShowLegalFlash: a, hasAcceptedTerms: o } = e,
            l = this.resolveReviewButtonLabel();
        return this.isTrial
            ? {
                  variant: "expressive",
                  text: l,
                  onClick: o ? t : a,
                  loading: n,
                  disabled: r,
                  iconPosition: "start",
                  icon: () => (0, i.jsx)(s.t, { color: "currentColor" }),
                  dataTestId: o ? "purchase" : "submitButton",
              }
            : {
                  variant: "active",
                  text: this.resolveReviewButtonLabel(),
                  dataTestId: "purchase",
                  onClick: t,
                  loading: n,
                  disabled: r,
              };
    };
    resolveInternalState = (e, t) => ({ disablePurchase: this.resolveDisabledPurchase(e, t) });
}
function C(e) {
    let {
            selectedSkuId: t,
            activeSubscription: n,
            isPremium: s,
            isGift: a,
            startedPaymentFlowWithPaymentSources: l,
            referralTrialOfferId: h,
            checkoutPriceOptions: p,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            activeSubscription: e.activeSubscription,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        { isEligibleForTrial: A, isPremiumGroupPurchase: T, userTrialOffer: C } = (0, u.i)(),
        { verifiedTrialId: N } = r.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: i, selectedSkuId: r } = e,
                        s = t ?? n ?? null;
                    return { verifiedTrialId: null != s && (!i || I.TP[s].skus.includes(r)) ? s : null };
                })({ trialId: e.trialId, referralTrialOfferId: h, isPremium: s, selectedSkuId: t }),
            [e.trialId, h, s, t],
        ),
        v = (0, c.A)(),
        R = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != v) {
                if ((0, f.xq)(v.id)) return I.LE;
                if ((0, f.z4)(v.id)) return I.DA;
            }
            return [];
        }, [v, e.planGroup]),
        O = r.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, i.jsx)(S, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: R,
                    verifiedTrialId: N,
                    openInvoiceId: e.openInvoiceId,
                    reviewWarningMessage: e.reviewWarningMessage,
                });
            },
            [R, N, e.openInvoiceId, e.reviewWarningMessage],
        ),
        b = null == e.initialPlanId && null == e.subscriptionTier,
        D = (0, g.vT)({ isTrial: A, isGift: a, selectedSkuId: t, startedPaymentFlowWithPaymentSources: l }),
        L = D ? b && s : s,
        { claimableRewards: w } = (0, E.Pv)(),
        M = (0, _.px)(v, a, w),
        P = e.handleStepChange,
        x = r.useCallback(
            () =>
                D
                    ? void P(m.pn.SKU_SELECT)
                    : T
                      ? void P(m.pn.ADD_PAYMENT_STEPS)
                      : M
                        ? void P(m.pn.SELECT_FREE_SKU)
                        : P(m.pn.PLAN_SELECT),
            [P, D, M, T],
        ),
        k = (0, f.J$)(p.paymentSourceId),
        U = r.useMemo(
            () =>
                new y({
                    isTrial: A,
                    isGift: a,
                    selectedPlan: v,
                    premiumSubscription: n,
                    planGroup: R,
                    isPrepaidPaymentSource: k,
                }),
            [a, v, n, R, k, A],
        ),
        G = null != C ? C.id : void 0,
        F = r.useMemo(() => ({ user_trial_offer_id: G }), [G]),
        V = r.useMemo(() => ({ trialId: N, planGroup: R }), [N, R]);
    return (0, i.jsx)(o.Y, {
        ...e,
        isBackButtonEligible: L,
        onFooterBackClick: x,
        subscriptionMetadata: F,
        customFooterProps: V,
        renderStepBody: O,
        resolveInternalState: U.resolveInternalState,
        resolveTenantReviewButtonProps: U.resolveTenantReviewButtonProps,
    });
}
