n.d(t, { E: () => v });
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
    E = n(937008),
    A = n(166532),
    S = n(800471),
    f = n(424517),
    y = n(652215),
    P = n(202541),
    T = n(375708),
    _ = n(327105);
function I(e) {
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
            purchaseState: A,
            unifiedCheckoutFlow: S,
            activeSubscription: y,
            isGift: P,
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
        _ = (0, a.Y)(T);
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
    let I = i.useMemo(
        () => ({ handlePaymentSourceAdd: n, planGroup: t, verifiedPlanId: C.id, selectedPlan: C }),
        [n, t, C],
    );
    return null == y || P
        ? (0, l.jsx)(f._, { ...I, verifiedTrialId: s, reviewWarningMessage: r })
        : (0, l.jsx)(m.A, { ...I, purchaseState: A, hasOpenInvoice: u, isInPastDueCheckout: p });
}
class g {
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
        if (this.isGift) return T.intl.string(T.t.ouo4FK);
        if (null != this.selectedPlan && (0, C.ys)(this.selectedPlan.id))
            return this.isInPastDueCheckout
                ? T.intl.string(_.default.LvcUx4)
                : this.isPrepaidPaymentSource
                  ? T.intl.string(T.t.cRCCJ3)
                  : null != this.premiumSubscription
                    ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                        ? T.intl.string(T.t.zpi5pg)
                        : (0, h.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? T.intl.string(T.t.IJI7yk)
                          : T.intl.string(T.t.VPuTc5)
                    : (0, C.ff)(null, this.selectedPlan);
        return T.intl.string(T.t.YScQSF);
    }
    resolveTenantReviewButtonProps = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: i, hasAcceptedTerms: a } = e,
            s = this.resolveReviewButtonLabel();
        return this.isTrial
            ? {
                  variant: "expressive",
                  text: s,
                  onClick: a ? t : y.tEg,
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
function v(e) {
    let {
            selectedSkuId: t,
            activeSubscription: n,
            isPremium: r,
            isGift: a,
            startedPaymentFlowWithPaymentSources: o,
            referralTrialOfferId: m,
            checkoutPriceOptions: h,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            activeSubscription: e.activeSubscription,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        { isEligibleForTrial: f, isPremiumGroupPurchase: y, userTrialOffer: T } = (0, u.i)(),
        { verifiedTrialId: _ } = i.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                        r = t ?? n ?? null;
                    return { verifiedTrialId: null != r && (!l || P.TP[r].skus.includes(i)) ? r : null };
                })({ trialId: e.trialId, referralTrialOfferId: m, isPremium: r, selectedSkuId: t }),
            [e.trialId, m, r, t],
        ),
        v = (0, c.A)(),
        x = i.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != v) {
                if ((0, C.xq)(v.id)) return P.LE;
                if ((0, C.z4)(v.id)) return P.DA;
            }
            return [];
        }, [v, e.planGroup]),
        N = null != e.openInvoiceId,
        R = null == e.initialPlanId && null == e.subscriptionTier,
        b = (0, S.vT)({ isTrial: f, isGift: a, selectedSkuId: t, startedPaymentFlowWithPaymentSources: o }),
        M = b ? R && r : r,
        { claimableRewards: O } = (0, E.Pv)(),
        j = (0, p.px)(v, a, O),
        L = e.handleStepChange,
        D = i.useCallback(
            () =>
                b
                    ? void L(A.pn.SKU_SELECT)
                    : y
                      ? void L(A.pn.ADD_PAYMENT_STEPS)
                      : j
                        ? void L(A.pn.SELECT_FREE_SKU)
                        : L(A.pn.PLAN_SELECT),
            [L, b, j, y],
        ),
        w = (0, C.J$)(h.paymentSourceId),
        U = (0, u.R)({ hasOpenInvoice: N ?? !1 }),
        k = i.useMemo(
            () =>
                new g({
                    isTrial: f,
                    isGift: a,
                    selectedPlan: v,
                    premiumSubscription: n,
                    planGroup: x,
                    isPrepaidPaymentSource: w,
                    isInPastDueCheckout: U,
                }),
            [a, v, n, x, w, f, U],
        ),
        G = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(I, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: x,
                    verifiedTrialId: _,
                    hasOpenInvoice: N,
                    isInPastDueCheckout: U,
                    reviewWarningMessage: e.reviewWarningMessage,
                });
            },
            [x, _, e.reviewWarningMessage, N, U],
        ),
        F = null != T ? T.id : void 0,
        B = i.useMemo(() => ({ user_trial_offer_id: F }), [F]),
        Y = i.useMemo(() => ({ trialId: _, planGroup: x }), [_, x]);
    return (0, l.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: M,
        onFooterBackClick: D,
        subscriptionMetadata: B,
        customFooterProps: Y,
        renderStepBody: G,
        resolveInternalState: k.resolveInternalState,
        resolveTenantReviewButtonProps: k.resolveTenantReviewButtonProps,
    });
}
