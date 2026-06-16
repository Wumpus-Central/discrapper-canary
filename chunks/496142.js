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
            verifiedTrialId: h,
        } = e,
        A = (0, c.A)(),
        {
            selectedPlanId: E,
            selectedSkuId: C,
            purchaseState: _,
            unifiedCheckoutFlow: S,
            activeSubscription: P,
            isGift: I,
        } = (0, d.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
        })),
        { paymentSources: f } = (0, s.jm)(),
        { discountOffer: T, isEligibleForDiscount: N, isEligibleForTrial: v } = (0, o.i)(),
        { dropdownCurrencies: g, hasFetchedRelatedSubscriptionPlans: x, setCheckoutCurrency: R } = (0, u.Jn)(),
        M = r.useCallback((e) => R(e), [R]);
    if (null == A)
        throw new a.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: S,
                selectedPlanId: E,
                hasFetchedSubscriptionPlans: x,
                selectedSkuId: C,
            },
        });
    let b = r.useMemo(() => {
            let e = T?.discount?.planIds;
            return N && null != T && null != e && null != A && e.includes(A.id);
        }, [N, T, A]),
        L = r.useMemo(() => v || null != h, [v, h]),
        O = { paymentSources: f, handlePaymentSourceAdd: i, planGroup: n },
        j = A.id;
    if (null == P || I) {
        let e = { ...O, selectedPlanId: j, trialId: h, reviewWarningMessage: p, isTrial: L, isDiscount: b };
        return (0, l.jsx)(y._, { ...e });
    }
    {
        let e = {
            ...O,
            currencies: g,
            onCurrencyChange: M,
            purchaseState: _,
            premiumSubscription: P,
            planId: j,
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
            referralTrialOfferId: u,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { isEligibleForTrial: m, isPremiumGroupPurchase: y, userTrialOffer: P } = (0, o.i)(),
        { verifiedTrialId: I } = r.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: r } = e,
                        i = t ?? n ?? null;
                    return { verifiedTrialId: null != i && (!l || _.TP[i].skus.includes(r)) ? i : null };
                })({ trialId: e.trialId, referralTrialOfferId: u, isPremium: n, selectedSkuId: t }),
            [e.trialId, u, n, t],
        ),
        f = (0, c.A)(),
        T = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != f) {
                if ((0, h.xq)(f.id)) return _.LE;
                if ((0, h.z4)(f.id)) return _.DA;
            }
            return [];
        }, [f, e.planGroup]),
        N = r.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(S, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: T,
                    verifiedTrialId: I,
                    openInvoiceId: e.openInvoiceId,
                    reviewWarningMessage: e.reviewWarningMessage,
                });
            },
            [T, I, e.openInvoiceId, e.reviewWarningMessage],
        ),
        v = null == e.initialPlanId && null == e.subscriptionTier,
        g = (0, C.vT)({ isTrial: m, isGift: a, selectedSkuId: t, startedPaymentFlowWithPaymentSources: s }),
        x = g ? v && n : n,
        { claimableRewards: R } = (0, A.Pv)(),
        M = (0, p.px)(f, a, R),
        b = e.handleStepChange,
        L = r.useCallback(
            () =>
                g
                    ? void b(E.pn.SKU_SELECT)
                    : y
                      ? void b(E.pn.ADD_PAYMENT_STEPS)
                      : M
                        ? void b(E.pn.SELECT_FREE_SKU)
                        : b(E.pn.PLAN_SELECT),
            [b, g, M, y],
        ),
        O = r.useCallback(
            (e, t) => {
                let { paymentSource: n, invoicePreview: l } = t,
                    r = e.disablePurchase || null == l || (!a && null != n && m && !n.canRedeemTrial());
                return { ...e, disablePurchase: r };
            },
            [m, a],
        ),
        j = null != P ? P.id : void 0,
        w = r.useMemo(() => ({ user_trial_offer_id: j }), [j]),
        D = r.useMemo(() => ({ isTrial: m, trialId: I, planGroup: T }), [I, T, m]);
    return (0, l.jsx)(i.Y, {
        ...e,
        isBackButtonEligible: x,
        onFooterBackClick: L,
        subscriptionMetadata: w,
        customFooterProps: D,
        renderStepBody: N,
        resolveInternalState: O,
    });
}
