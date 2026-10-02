n.d(t, { R: () => d, i: () => c });
var l = n(582128),
    i = n(724651),
    r = n(732280),
    a = n(120700),
    s = n(661899),
    o = n(652215),
    u = n(202541);
function c() {
    let {
            selectedSkuId: e,
            isPremium: t,
            isPremiumGroupPurchase: n,
            referralTrialOfferId: a,
            isGift: o,
        } = (0, s.t4)((e) => {
            let t = e.get("selectedPlanAttributes");
            return {
                selectedSkuId: e.selectedSkuId,
                referralTrialOfferId: e.referralTrialOfferId,
                isGift: e.isGift,
                isPremium: t.isPremiumPurchase,
                isPremiumGroupPurchase: t.isPremiumGroupPurchase,
            };
        }),
        c = (0, r.V)(a ?? void 0),
        d = !n && !o && null != e,
        p = !!(d && null != c && u.kb[c.trialId].skus.includes(e) && !n),
        m = (0, i.O)(),
        h =
            null != e &&
            null != m &&
            null != m.discount &&
            null != m.discount.planIds &&
            m.discount.planIds.some((t) => u.hd[t].skuId === e),
        C = !!(d && null != m && h),
        f = (0, i.p)();
    return l.useMemo(
        () => ({
            isPremium: t,
            isPremiumGroupPurchase: n,
            isEligibleForTrial: p,
            isEligibleForDiscount: C,
            userTrialOffer: c,
            discountOffer: m,
            premiumGroupDiscountOffer: n ? f : null,
        }),
        [t, n, p, C, c, m, f],
    );
}
function d(e) {
    let { hasOpenInvoice: t } = e,
        {
            activeSubscription: n,
            unifiedCheckoutFlow: i,
            setStartingIsInPastDueCheckout: r,
        } = (0, s.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            setStartingIsInPastDueCheckout: e.setStartingIsInPastDueCheckout,
        })),
        u = i === a.C.PREMIUM_CHECKOUT && null != n && n.status === o.Dmq.PAST_DUE && t;
    return (
        l.useEffect(() => {
            u && r(!0);
        }, [u, r]),
        u
    );
}
