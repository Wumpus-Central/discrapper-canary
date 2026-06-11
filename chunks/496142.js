n.d(t, { E: () => P });
var l = n(627968),
    r = n(64700),
    i = n(465657),
    a = n(71804),
    s = n(426398),
    o = n(463376),
    u = n(655857),
    c = n(558620),
    d = n(211159),
    p = n(380619),
    m = n(427858),
    h = n(428262),
    A = n(937008),
    E = n(166532),
    C = n(800471),
    y = n(953761),
    _ = n(788868);
let S = (e) => {
    let {
            openInvoiceId: t,
            effectivePlanGroup: n,
            handlePaymentSourceAdd: i,
            reviewWarningMessage: p,
            referralTrialOfferId: h,
            verifiedTrialId: A,
        } = e,
        E = (0, c.A)(),
        {
            selectedPlanId: C,
            selectedSkuId: _,
            purchaseState: S,
            unifiedCheckoutFlow: P,
            activeSubscription: I,
            isGift: f,
        } = (0, d.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
        })),
        { paymentSources: T } = (0, s.jm)(),
        { discountOffer: N, isEligibleForDiscount: g, isEligibleForTrial: v } = (0, o.i)(),
        { dropdownCurrencies: x, hasFetchedRelatedSubscriptionPlans: R, setCheckoutCurrency: M } = (0, u.Jn)(),
        b = r.useCallback((e) => M(e), [M]);
    if (null == E)
        throw new a.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: P,
                selectedPlanId: C,
                hasFetchedSubscriptionPlans: R,
                selectedSkuId: _,
            },
        });
    let L = r.useMemo(() => {
            let e = N?.discount?.planIds;
            return g && null != N && null != e && null != E && e.includes(E.id);
        }, [g, N, E]),
        O = r.useMemo(() => v || null != A, [v, A]),
        j = { paymentSources: T, handlePaymentSourceAdd: i, planGroup: n },
        w = E.id;
    if (null == I || f) {
        let e = {
            ...j,
            selectedPlanId: w,
            trialId: A,
            reviewWarningMessage: p,
            referralTrialOfferId: h,
            isTrial: O,
            isDiscount: L,
        };
        return (0, l.jsx)(y._, { ...e });
    }
    {
        let e = {
            ...j,
            currencies: x,
            onCurrencyChange: b,
            purchaseState: S,
            premiumSubscription: I,
            planId: w,
            hasOpenInvoice: null != t,
        };
        return (0, l.jsx)(m.A, { ...e });
    }
};
function P(e) {
    let {
            selectedSkuId: t,
            isPremium: n,
            isGift: a,
            startedPaymentFlowWithPaymentSources: s,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isEligibleForTrial: u, isPremiumGroupPurchase: m, userTrialOffer: y } = (0, o.i)(),
        { verifiedTrialId: P } = r.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: r } = e,
                        i = t ?? n ?? null;
                    return { verifiedTrialId: null != i && (!l || _.TP[i].skus.includes(r)) ? i : null };
                })({
                    trialId: e.trialId,
                    referralTrialOfferId: e.referralTrialOfferId,
                    isPremium: n,
                    selectedSkuId: t,
                }),
            [e.trialId, e.referralTrialOfferId, n, t],
        ),
        I = (0, c.A)(),
        f = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != I) {
                if ((0, h.xq)(I.id)) return _.LE;
                if ((0, h.z4)(I.id)) return _.DA;
            }
            return [];
        }, [I, e.planGroup]),
        T = r.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(S, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: f,
                    verifiedTrialId: P,
                    openInvoiceId: e.openInvoiceId,
                    reviewWarningMessage: e.reviewWarningMessage,
                    referralTrialOfferId: e.referralTrialOfferId,
                });
            },
            [f, P, e.openInvoiceId, e.reviewWarningMessage, e.referralTrialOfferId],
        ),
        N = null == e.initialPlanId && null == e.subscriptionTier,
        g = (0, C.vT)({ isTrial: u, isGift: a, selectedSkuId: t, startedPaymentFlowWithPaymentSources: s }),
        v = g ? N && n : n,
        { claimableRewards: x } = (0, A.Pv)(),
        R = (0, p.px)(I, a, x),
        M = e.handleStepChange,
        b = r.useCallback(
            () =>
                g
                    ? void M(E.pn.SKU_SELECT)
                    : m
                      ? void M(E.pn.ADD_PAYMENT_STEPS)
                      : R
                        ? void M(E.pn.SELECT_FREE_SKU)
                        : M(E.pn.PLAN_SELECT),
            [M, g, R, m],
        ),
        L = r.useCallback(
            (e, t) => {
                let { paymentSource: n, invoicePreview: l } = t,
                    r = e.disablePurchase || null == l || (!a && null != n && u && !n.canRedeemTrial());
                return { ...e, disablePurchase: r };
            },
            [u, a],
        ),
        O = null != y ? y.id : void 0,
        j = r.useMemo(() => ({ user_trial_offer_id: O }), [O]),
        w = r.useMemo(() => ({ isTrial: u, trialId: P, planGroup: f }), [P, f, u]);
    return (0, l.jsx)(i.Y, {
        ...e,
        isBackButtonEligible: v,
        onFooterBackClick: b,
        subscriptionMetadata: j,
        customFooterProps: w,
        renderStepBody: T,
        resolveInternalState: L,
    });
}
