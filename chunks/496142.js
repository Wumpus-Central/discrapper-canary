"use strict";
n.d(t, { E: () => R });
var i = n(627968),
    r = n(64700),
    s = n(403581),
    a = n(160946),
    o = n(65258),
    l = n(465657),
    u = n(71804),
    d = n(463376),
    c = n(558620),
    _ = n(650170),
    h = n(380619),
    f = n(427858),
    E = n(428262),
    p = n(615396),
    m = n(937008),
    g = n(166532),
    A = n(800471),
    I = n(424517),
    T = n(652215),
    S = n(202541),
    N = n(375708),
    C = n(327105);
function y(e) {
    let {
            effectivePlanGroup: t,
            handlePaymentSourceAdd: n,
            reviewWarningMessage: s,
            verifiedTrialId: o,
            hasOpenInvoice: l,
            isInPastDueCheckout: d,
        } = e,
        h = (0, c.A)(),
        {
            selectedPlanId: E,
            selectedSkuId: p,
            purchaseState: m,
            unifiedCheckoutFlow: g,
            activeSubscription: A,
            isGift: T,
            skuIds: S,
        } = (0, _.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
            skuIds: e.skuIds,
        })),
        N = (0, a.Y)(S);
    if (null == h)
        throw new u.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: g,
                selectedPlanId: E,
                selectedSkuId: p,
                hasFetchedSubscriptionPlans: N,
            },
        });
    let C = r.useMemo(
        () => ({ handlePaymentSourceAdd: n, planGroup: t, verifiedPlanId: h.id, selectedPlan: h }),
        [n, t, h],
    );
    return null == A || T
        ? (0, i.jsx)(I._, { ...C, verifiedTrialId: o, reviewWarningMessage: s })
        : (0, i.jsx)(f.A, { ...C, purchaseState: m, hasOpenInvoice: l, isInPastDueCheckout: d });
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
        premiumSubscription: i,
        planGroup: r,
        isPrepaidPaymentSource: s,
        hasOpenInvoice: a,
    }) {
        (this.isTrial = e),
            (this.isGift = t),
            (this.selectedPlan = n),
            (this.premiumSubscription = i),
            (this.planGroup = r),
            (this.isPrepaidPaymentSource = s),
            (this.hasOpenInvoice = a);
    }
    resolveDisabledPurchase(e, t) {
        let { paymentSource: n, invoicePreview: i } = t;
        return !(!e.disablePurchase && null != i && (this.isGift || !this.isTrial || null == n || n.canRedeemTrial()));
    }
    get isInPastDueCheckout() {
        return (
            !!(0, o.u)() &&
            null != this.premiumSubscription &&
            this.premiumSubscription.status === T.Dmq.PAST_DUE &&
            this.hasOpenInvoice
        );
    }
    resolveReviewButtonLabel() {
        if (this.isGift) return N.intl.string(N.t.ouo4FK);
        if (null != this.selectedPlan && (0, E.ys)(this.selectedPlan.id))
            return this.isInPastDueCheckout
                ? N.intl.string(C.default.LvcUx4)
                : this.isPrepaidPaymentSource
                  ? N.intl.string(N.t.cRCCJ3)
                  : null != this.premiumSubscription
                    ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                        ? N.intl.string(N.t.zpi5pg)
                        : (0, p.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? N.intl.string(N.t.IJI7yk)
                          : N.intl.string(N.t.VPuTc5)
                    : (0, E.ff)(null, this.selectedPlan);
        return N.intl.string(N.t.YScQSF);
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
function R(e) {
    let {
            selectedSkuId: t,
            activeSubscription: n,
            isPremium: s,
            isGift: a,
            startedPaymentFlowWithPaymentSources: o,
            referralTrialOfferId: u,
            checkoutPriceOptions: f,
        } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            activeSubscription: e.activeSubscription,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        { isEligibleForTrial: p, isPremiumGroupPurchase: I, userTrialOffer: T } = (0, d.i)(),
        { verifiedTrialId: N } = r.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: i, selectedSkuId: r } = e,
                        s = t ?? n ?? null;
                    return { verifiedTrialId: null != s && (!i || S.TP[s].skus.includes(r)) ? s : null };
                })({ trialId: e.trialId, referralTrialOfferId: u, isPremium: s, selectedSkuId: t }),
            [e.trialId, u, s, t],
        ),
        C = (0, c.A)(),
        R = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != C) {
                if ((0, E.xq)(C.id)) return S.LE;
                if ((0, E.z4)(C.id)) return S.DA;
            }
            return [];
        }, [C, e.planGroup]),
        O = null != e.openInvoiceId,
        b = null == e.initialPlanId && null == e.subscriptionTier,
        L = (0, A.vT)({ isTrial: p, isGift: a, selectedSkuId: t, startedPaymentFlowWithPaymentSources: o }),
        D = L ? b && s : s,
        { claimableRewards: P } = (0, m.Pv)(),
        w = (0, h.px)(C, a, P),
        M = e.handleStepChange,
        x = r.useCallback(
            () =>
                L
                    ? void M(g.pn.SKU_SELECT)
                    : I
                      ? void M(g.pn.ADD_PAYMENT_STEPS)
                      : w
                        ? void M(g.pn.SELECT_FREE_SKU)
                        : M(g.pn.PLAN_SELECT),
            [M, L, w, I],
        ),
        U = (0, E.J$)(f.paymentSourceId),
        k = r.useMemo(
            () =>
                new v({
                    isTrial: p,
                    isGift: a,
                    selectedPlan: C,
                    premiumSubscription: n,
                    planGroup: R,
                    isPrepaidPaymentSource: U,
                    hasOpenInvoice: O,
                }),
            [a, C, n, R, U, p, O],
        ),
        G = k.isInPastDueCheckout,
        V = r.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, i.jsx)(y, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: R,
                    verifiedTrialId: N,
                    hasOpenInvoice: O,
                    reviewWarningMessage: e.reviewWarningMessage,
                    isInPastDueCheckout: G,
                });
            },
            [R, N, e.reviewWarningMessage, O, G],
        ),
        F = null != T ? T.id : void 0,
        B = r.useMemo(() => ({ user_trial_offer_id: F }), [F]),
        j = r.useMemo(() => ({ trialId: N, planGroup: R }), [N, R]);
    return (0, i.jsx)(l.Y, {
        ...e,
        isBackButtonEligible: D,
        onFooterBackClick: x,
        subscriptionMetadata: B,
        customFooterProps: j,
        renderStepBody: V,
        resolveInternalState: k.resolveInternalState,
        resolveTenantReviewButtonProps: k.resolveTenantReviewButtonProps,
    });
}
