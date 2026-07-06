n.d(t, { E: () => x });
var l = n(627968),
    i = n(64700),
    r = n(403581),
    a = n(160946),
    s = n(65258),
    o = n(465657),
    u = n(71804),
    c = n(463376),
    d = n(558620),
    p = n(650170),
    m = n(380619),
    h = n(427858),
    C = n(428262),
    E = n(615396),
    A = n(937008),
    f = n(166532),
    S = n(800471),
    y = n(424517),
    P = n(652215),
    I = n(202541),
    T = n(375708),
    _ = n(327105);
function g(e) {
    let {
            effectivePlanGroup: t,
            handlePaymentSourceAdd: n,
            reviewWarningMessage: r,
            verifiedTrialId: s,
            hasOpenInvoice: o,
            isInPastDueCheckout: c,
        } = e,
        m = (0, d.A)(),
        {
            selectedPlanId: C,
            selectedSkuId: E,
            purchaseState: A,
            unifiedCheckoutFlow: f,
            activeSubscription: S,
            isGift: P,
            skuIds: I,
        } = (0, p.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
            skuIds: e.skuIds,
        })),
        T = (0, a.Y)(I);
    if (null == m)
        throw new u.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: f,
                selectedPlanId: C,
                selectedSkuId: E,
                hasFetchedSubscriptionPlans: T,
            },
        });
    let _ = i.useMemo(
        () => ({ handlePaymentSourceAdd: n, planGroup: t, verifiedPlanId: m.id, selectedPlan: m }),
        [n, t, m],
    );
    return null == S || P
        ? (0, l.jsx)(y._, { ..._, verifiedTrialId: s, reviewWarningMessage: r })
        : (0, l.jsx)(h.A, { ..._, purchaseState: A, hasOpenInvoice: o, isInPastDueCheckout: c });
}
class v {
    isTrial;
    isGift;
    selectedPlan;
    premiumSubscription;
    planGroup;
    isPrepaidPaymentSource;
    hasOpenInvoice;
    constructor({
        isTrial: e,
        isGift: t,
        selectedPlan: n,
        premiumSubscription: l,
        planGroup: i,
        isPrepaidPaymentSource: r,
        hasOpenInvoice: a,
    }) {
        (this.isTrial = e),
            (this.isGift = t),
            (this.selectedPlan = n),
            (this.premiumSubscription = l),
            (this.planGroup = i),
            (this.isPrepaidPaymentSource = r),
            (this.hasOpenInvoice = a);
    }
    resolveDisabledPurchase(e, t) {
        let { paymentSource: n, invoicePreview: l } = t;
        return !(!e.disablePurchase && null != l && (this.isGift || !this.isTrial || null == n || n.canRedeemTrial()));
    }
    get isInPastDueCheckout() {
        return (
            !!(0, s.u)() &&
            null != this.premiumSubscription &&
            this.premiumSubscription.status === P.Dmq.PAST_DUE &&
            this.hasOpenInvoice
        );
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
                        : (0, E.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? T.intl.string(T.t.IJI7yk)
                          : T.intl.string(T.t.VPuTc5)
                    : (0, C.ff)(null, this.selectedPlan);
        return T.intl.string(T.t.YScQSF);
    }
    resolveTenantReviewButtonProps = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: i, handleShowLegalFlash: a, hasAcceptedTerms: s } = e,
            o = this.resolveReviewButtonLabel();
        return this.isTrial
            ? {
                  variant: "expressive",
                  text: o,
                  onClick: s ? t : a,
                  loading: n,
                  disabled: i,
                  iconPosition: "start",
                  icon: () => (0, l.jsx)(r.t, { color: "currentColor" }),
                  dataTestId: s ? "purchase" : "submitButton",
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
            startedPaymentFlowWithPaymentSources: s,
            referralTrialOfferId: u,
            checkoutPriceOptions: h,
        } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            activeSubscription: e.activeSubscription,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        { isEligibleForTrial: E, isPremiumGroupPurchase: y, userTrialOffer: P } = (0, c.i)(),
        { verifiedTrialId: T } = i.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                        r = t ?? n ?? null;
                    return { verifiedTrialId: null != r && (!l || I.TP[r].skus.includes(i)) ? r : null };
                })({ trialId: e.trialId, referralTrialOfferId: u, isPremium: r, selectedSkuId: t }),
            [e.trialId, u, r, t],
        ),
        _ = (0, d.A)(),
        x = i.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != _) {
                if ((0, C.xq)(_.id)) return I.LE;
                if ((0, C.z4)(_.id)) return I.DA;
            }
            return [];
        }, [_, e.planGroup]),
        N = null != e.openInvoiceId,
        R = null == e.initialPlanId && null == e.subscriptionTier,
        b = (0, S.vT)({ isTrial: E, isGift: a, selectedSkuId: t, startedPaymentFlowWithPaymentSources: s }),
        M = b ? R && r : r,
        { claimableRewards: O } = (0, A.Pv)(),
        j = (0, m.px)(_, a, O),
        L = e.handleStepChange,
        D = i.useCallback(
            () =>
                b
                    ? void L(f.pn.SKU_SELECT)
                    : y
                      ? void L(f.pn.ADD_PAYMENT_STEPS)
                      : j
                        ? void L(f.pn.SELECT_FREE_SKU)
                        : L(f.pn.PLAN_SELECT),
            [L, b, j, y],
        ),
        U = (0, C.J$)(h.paymentSourceId),
        w = i.useMemo(
            () =>
                new v({
                    isTrial: E,
                    isGift: a,
                    selectedPlan: _,
                    premiumSubscription: n,
                    planGroup: x,
                    isPrepaidPaymentSource: U,
                    hasOpenInvoice: N,
                }),
            [a, _, n, x, U, E, N],
        ),
        k = w.isInPastDueCheckout,
        G = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(g, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: x,
                    verifiedTrialId: T,
                    hasOpenInvoice: N,
                    reviewWarningMessage: e.reviewWarningMessage,
                    isInPastDueCheckout: k,
                });
            },
            [x, T, e.reviewWarningMessage, N, k],
        ),
        F = null != P ? P.id : void 0,
        B = i.useMemo(() => ({ user_trial_offer_id: F }), [F]),
        Y = i.useMemo(() => ({ trialId: T, planGroup: x }), [T, x]);
    return (0, l.jsx)(o.Y, {
        ...e,
        isBackButtonEligible: M,
        onFooterBackClick: D,
        subscriptionMetadata: B,
        customFooterProps: Y,
        renderStepBody: G,
        resolveInternalState: w.resolveInternalState,
        resolveTenantReviewButtonProps: w.resolveTenantReviewButtonProps,
    });
}
