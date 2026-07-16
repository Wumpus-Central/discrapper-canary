n.d(t, { E: () => x });
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
    h = n(428262),
    C = n(615396),
    A = n(951305),
    E = n(166532),
    f = n(800471),
    y = n(424517),
    S = n(652215),
    P = n(202541),
    T = n(375708),
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
            selectedSkuId: A,
            purchaseState: E,
            unifiedCheckoutFlow: f,
            activeSubscription: S,
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
        I = (0, a.Y)(T);
    if (null == h)
        throw new o.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: f,
                selectedPlanId: C,
                selectedSkuId: A,
                hasFetchedSubscriptionPlans: I,
            },
        });
    let _ = i.useMemo(
        () => ({ handlePaymentSourceAdd: n, planGroup: t, verifiedPlanId: h.id, selectedPlan: h }),
        [n, t, h],
    );
    return null == S || P
        ? (0, l.jsx)(y._, { ..._, verifiedTrialId: s, reviewWarningMessage: r })
        : (0, l.jsx)(m.A, { ..._, purchaseState: E, hasOpenInvoice: u, isInPastDueCheckout: p });
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
        if (null != this.selectedPlan && (0, h.ys)(this.selectedPlan.id))
            return this.isInPastDueCheckout
                ? T.intl.string(I.default.LvcUx4)
                : this.isPrepaidPaymentSource
                  ? T.intl.string(T.t.cRCCJ3)
                  : null != this.premiumSubscription
                    ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                        ? T.intl.string(T.t.zpi5pg)
                        : (0, C.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? T.intl.string(T.t.IJI7yk)
                          : T.intl.string(T.t.VPuTc5)
                    : (0, h.ff)(null, this.selectedPlan);
        return T.intl.string(T.t.YScQSF);
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
function x(e) {
    let {
            selectedSkuId: t,
            activeSubscription: n,
            isPremium: r,
            isGift: a,
            startedPaymentFlowWithPaymentSources: o,
            referralTrialOfferId: m,
            checkoutPriceOptions: C,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            activeSubscription: e.activeSubscription,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        { isEligibleForTrial: y, isPremiumGroupPurchase: S, userTrialOffer: T } = (0, u.i)(),
        { verifiedTrialId: I } = i.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                        r = t ?? n ?? null;
                    return { verifiedTrialId: null != r && (!l || P.TP[r].skus.includes(i)) ? r : null };
                })({ trialId: e.trialId, referralTrialOfferId: m, isPremium: r, selectedSkuId: t }),
            [e.trialId, m, r, t],
        ),
        x = (0, c.A)(),
        v = i.useMemo(() => {
            if (null != e.planGroup && (null == x || e.planGroup.includes(x.id))) return e.planGroup;
            if (null != x) {
                if ((0, h.xq)(x.id)) return P.LE;
                if ((0, h.z4)(x.id)) return P.DA;
            }
            return [];
        }, [x, e.planGroup]),
        N = null != e.openInvoiceId,
        b = null == e.initialPlanId && null == e.subscriptionTier,
        R = (0, f.vT)({ isTrial: y, isGift: a, selectedSkuId: t, startedPaymentFlowWithPaymentSources: o }),
        M = R ? b && r : r,
        { claimableRewards: j } = (0, A.Pv)(),
        O = (0, p.px)(x, a, j),
        L = e.handleStepChange,
        w = i.useCallback(
            () =>
                R
                    ? void L(E.pn.SKU_SELECT)
                    : S
                      ? void L(E.pn.ADD_PAYMENT_STEPS)
                      : O
                        ? void L(E.pn.SELECT_FREE_SKU)
                        : L(E.pn.PLAN_SELECT),
            [L, R, O, S],
        ),
        D = (0, h.J$)(C.paymentSourceId),
        k = (0, u.R)({ hasOpenInvoice: N ?? !1 }),
        U = i.useMemo(
            () =>
                new g({
                    isTrial: y,
                    isGift: a,
                    selectedPlan: x,
                    premiumSubscription: n,
                    planGroup: v,
                    isPrepaidPaymentSource: D,
                    isInPastDueCheckout: k,
                }),
            [a, x, n, v, D, y, k],
        ),
        G = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(_, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: v,
                    verifiedTrialId: I,
                    hasOpenInvoice: N,
                    isInPastDueCheckout: k,
                    reviewWarningMessage: e.reviewWarningMessage,
                });
            },
            [v, I, e.reviewWarningMessage, N, k],
        ),
        F = null != T ? T.id : void 0,
        B = i.useMemo(() => ({ user_trial_offer_id: F }), [F]),
        Y = i.useMemo(() => ({ trialId: I, planGroup: v }), [I, v]);
    return (0, l.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: M,
        onFooterBackClick: w,
        subscriptionMetadata: B,
        customFooterProps: Y,
        renderStepBody: G,
        resolveInternalState: U.resolveInternalState,
        resolveTenantReviewButtonProps: U.resolveTenantReviewButtonProps,
    });
}
