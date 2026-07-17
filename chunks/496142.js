n.d(t, { E: () => g });
var l = n(627968),
    i = n(64700),
    r = n(403581),
    a = n(160946),
    s = n(465657),
    o = n(71804),
    u = n(463376),
    c = n(558620),
    d = n(6938),
    p = n(380619),
    m = n(427858),
    C = n(428262),
    h = n(615396),
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
        C = (0, c.A)(),
        {
            selectedPlanId: h,
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
    if (null == C)
        throw new o.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: S,
                selectedPlanId: h,
                selectedSkuId: E,
                hasFetchedSubscriptionPlans: _,
            },
        });
    let T = i.useMemo(
        () => ({ handlePaymentSourceAdd: n, planGroup: t, verifiedPlanId: C.id, selectedPlan: C }),
        [n, t, C],
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
        if (null != this.selectedPlan && (0, C.ys)(this.selectedPlan.id))
            return this.isInPastDueCheckout
                ? P.intl.string(I.default.LvcUx4)
                : this.isPrepaidPaymentSource
                  ? P.intl.string(P.t.cRCCJ3)
                  : null != this.premiumSubscription
                    ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                        ? P.intl.string(P.t.zpi5pg)
                        : (0, h.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? P.intl.string(P.t.IJI7yk)
                          : P.intl.string(P.t.VPuTc5)
                    : (0, C.ff)(null, this.selectedPlan);
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
            isGift: h,
            referralTrialOfferId: A,
            checkoutPriceOptions: S,
            isInOneStepSubscriptionCheckout: P,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            activeSubscription: e.activeSubscription,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            checkoutPriceOptions: e.checkoutPriceOptions,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: t }),
        })),
        { verifiedTrialId: I } = i.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                        r = t ?? n ?? null;
                    return { verifiedTrialId: null != r && (!l || y.TP[r].skus.includes(i)) ? r : null };
                })({ trialId: e.trialId, referralTrialOfferId: A, isPremium: m, selectedSkuId: a }),
            [e.trialId, A, m, a],
        ),
        g = (0, c.A)(),
        x = i.useMemo(() => {
            if (null != e.planGroup && (null == g || e.planGroup.includes(g.id))) return e.planGroup;
            if (null != g) {
                if ((0, C.xq)(g.id)) return y.LE;
                if ((0, C.z4)(g.id)) return y.DA;
            }
            return [];
        }, [g, e.planGroup]),
        v = null != e.openInvoiceId,
        N = null == e.initialPlanId && null == e.subscriptionTier,
        M = P ? N && m : m,
        { claimableRewards: R } = (0, E.Pv)(),
        b = (0, p.px)(g, h, R),
        j = e.handleStepChange,
        O = i.useCallback(
            () =>
                P
                    ? void j(f.pn.SKU_SELECT)
                    : n
                      ? void j(f.pn.ADD_PAYMENT_STEPS)
                      : b
                        ? void j(f.pn.SELECT_FREE_SKU)
                        : j(f.pn.PLAN_SELECT),
            [j, P, b, n],
        ),
        L = (0, C.J$)(S.paymentSourceId),
        k = (0, u.R)({ hasOpenInvoice: v ?? !1 }),
        w = i.useMemo(
            () =>
                new T({
                    isTrial: t,
                    isGift: h,
                    selectedPlan: g,
                    premiumSubscription: o,
                    planGroup: x,
                    isPrepaidPaymentSource: L,
                    isInPastDueCheckout: k,
                }),
            [h, g, o, x, L, t, k],
        ),
        D = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(_, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: x,
                    verifiedTrialId: I,
                    hasOpenInvoice: v,
                    isInPastDueCheckout: k,
                    reviewWarningMessage: e.reviewWarningMessage,
                });
            },
            [x, I, e.reviewWarningMessage, v, k],
        ),
        U = null != r ? r.id : void 0,
        G = i.useMemo(() => ({ user_trial_offer_id: U }), [U]),
        F = i.useMemo(() => ({ trialId: I, planGroup: x }), [I, x]);
    return (0, l.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: M,
        onFooterBackClick: O,
        subscriptionMetadata: G,
        customFooterProps: F,
        renderStepBody: D,
        resolveInternalState: w.resolveInternalState,
        resolveTenantReviewButtonProps: w.resolveTenantReviewButtonProps,
    });
}
