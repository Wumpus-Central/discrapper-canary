n.d(t, { E: () => g });
var l = n(627968),
    i = n(64700),
    r = n(403581),
    a = n(160946),
    s = n(465657),
    o = n(71804),
    u = n(463376),
    c = n(558620),
    d = n(316915),
    p = n(380619),
    m = n(427858),
    h = n(428262),
    C = n(615396),
    E = n(951305),
    f = n(166532),
    A = n(424517),
    S = n(652215),
    y = n(202541),
    P = n(375708),
    I = n(327105);
function _(e) {
    let {
            effectivePlanGroup: t,
            handlePaymentSourceAdd: n,
            reviewWarningMessage: r,
            verifiedTrialId: s,
            hasOpenInvoice: u,
            isInPastDueCheckout: p,
        } = e,
        h = (0, c.A)(),
        {
            selectedPlanId: C,
            selectedSkuId: E,
            purchaseState: f,
            unifiedCheckoutFlow: S,
            activeSubscription: y,
            isGift: P,
            skuIds: I,
        } = (0, d.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
            skuIds: e.skuIds,
        })),
        _ = (0, a.Y)(I);
    if (null == h)
        throw new o.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: S,
                selectedPlanId: C,
                selectedSkuId: E,
                hasFetchedSubscriptionPlans: _,
            },
        });
    let T = i.useMemo(
        () => ({ handlePaymentSourceAdd: n, planGroup: t, verifiedPlanId: h.id, selectedPlan: h }),
        [n, t, h],
    );
    return null == y || P
        ? (0, l.jsx)(A._, { ...T, verifiedTrialId: s, reviewWarningMessage: r })
        : (0, l.jsx)(m.A, { ...T, purchaseState: f, hasOpenInvoice: u, isInPastDueCheckout: p });
}
class T {
    isTrial;
    isGift;
    selectedPlan;
    premiumSubscription;
    planGroup;
    isPrepaidPaymentSource;
    isInPastDueCheckout;
    constructor({
        isTrial: e,
        isGift: t,
        selectedPlan: n,
        premiumSubscription: l,
        planGroup: i,
        isPrepaidPaymentSource: r,
        isInPastDueCheckout: a,
    }) {
        (this.isTrial = e),
            (this.isGift = t),
            (this.selectedPlan = n),
            (this.premiumSubscription = l),
            (this.planGroup = i),
            (this.isPrepaidPaymentSource = r),
            (this.isInPastDueCheckout = a);
    }
    resolveDisabledPurchase(e, t) {
        let { paymentSource: n, invoicePreview: l } = t;
        return !(!e.disablePurchase && null != l && (this.isGift || !this.isTrial || null == n || n.canRedeemTrial()));
    }
    resolveReviewButtonLabel() {
        if (this.isGift) return P.intl.string(P.t.ouo4FK);
        if (null != this.selectedPlan && (0, h.ys)(this.selectedPlan.id))
            return this.isInPastDueCheckout
                ? P.intl.string(I.default.LvcUx4)
                : this.isPrepaidPaymentSource
                  ? P.intl.string(P.t.cRCCJ3)
                  : null != this.premiumSubscription
                    ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                        ? P.intl.string(P.t.zpi5pg)
                        : (0, C.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? P.intl.string(P.t.IJI7yk)
                          : P.intl.string(P.t.VPuTc5)
                    : (0, h.ff)(null, this.selectedPlan);
        return P.intl.string(P.t.YScQSF);
    }
    resolveTenantReviewButtonProps = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: i, hasAcceptedTerms: a } = e,
            s = this.resolveReviewButtonLabel();
        return this.isTrial
            ? {
                  variant: "expressive",
                  text: s,
                  onClick: a ? t : S.tEg,
                  loading: n,
                  disabled: i,
                  iconPosition: "start",
                  icon: () => (0, l.jsx)(r.t, { color: "currentColor" }),
                  dataTestId: a ? "purchase" : "submitButton",
              }
            : {
                  variant: "active",
                  text: this.resolveReviewButtonLabel(),
                  dataTestId: "purchase",
                  onClick: t,
                  loading: n,
                  disabled: i,
              };
    };
    resolveInternalState = (e, t) => ({ disablePurchase: this.resolveDisabledPurchase(e, t) });
}
function g(e) {
    let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: r } = (0, u.i)(),
        {
            selectedSkuId: a,
            activeSubscription: o,
            isPremium: m,
            isGift: C,
            referralTrialOfferId: A,
            checkoutPriceOptions: S,
            isInOneStepSubscriptionCheckout: P,
            shouldDisallowPlanSelection: I,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            activeSubscription: e.activeSubscription,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            checkoutPriceOptions: e.checkoutPriceOptions,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: t }),
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        { verifiedTrialId: g } = i.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                        r = t ?? n ?? null;
                    return { verifiedTrialId: null != r && (!l || y.TP[r].skus.includes(i)) ? r : null };
                })({ trialId: e.trialId, referralTrialOfferId: A, isPremium: m, selectedSkuId: a }),
            [e.trialId, A, m, a],
        ),
        x = (0, c.A)(),
        v = i.useMemo(() => {
            if (null != e.planGroup && (null == x || e.planGroup.includes(x.id))) return e.planGroup;
            if (null != x) {
                if ((0, h.xq)(x.id)) return y.LE;
                if ((0, h.z4)(x.id)) return y.DA;
            }
            return [];
        }, [x, e.planGroup]),
        N = null != e.openInvoiceId,
        M = null == e.initialPlanId && null == e.subscriptionTier,
        R = i.useMemo(() => !I && (P ? M && m : m), [P, M, m, I]),
        { claimableRewards: b } = (0, E.Pv)(),
        j = (0, p.px)(x, C, b),
        O = e.handleStepChange,
        L = i.useCallback(
            () =>
                P
                    ? void O(f.pn.SKU_SELECT)
                    : n
                      ? void O(f.pn.ADD_PAYMENT_STEPS)
                      : j
                        ? void O(f.pn.SELECT_FREE_SKU)
                        : O(f.pn.PLAN_SELECT),
            [O, P, j, n],
        ),
        w = (0, h.J$)(S.paymentSourceId),
        k = (0, u.R)({ hasOpenInvoice: N ?? !1 }),
        D = i.useMemo(
            () =>
                new T({
                    isTrial: t,
                    isGift: C,
                    selectedPlan: x,
                    premiumSubscription: o,
                    planGroup: v,
                    isPrepaidPaymentSource: w,
                    isInPastDueCheckout: k,
                }),
            [C, x, o, v, w, t, k],
        ),
        U = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(_, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: v,
                    verifiedTrialId: g,
                    hasOpenInvoice: N,
                    isInPastDueCheckout: k,
                    reviewWarningMessage: e.reviewWarningMessage,
                });
            },
            [v, g, e.reviewWarningMessage, N, k],
        ),
        G = null != r ? r.id : void 0,
        F = i.useMemo(() => ({ user_trial_offer_id: G }), [G]),
        H = i.useMemo(() => ({ trialId: g, planGroup: v }), [g, v]);
    return (0, l.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: R,
        onFooterBackClick: L,
        subscriptionMetadata: F,
        customFooterProps: H,
        renderStepBody: U,
        resolveInternalState: D.resolveInternalState,
        resolveTenantReviewButtonProps: D.resolveTenantReviewButtonProps,
    });
}
