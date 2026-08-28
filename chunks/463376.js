n.d(t, { R: () => d, i: () => c });
var l = n(582128),
    i = n(724651),
    r = n(732280),
    a = n(120700),
    s = n(206441),
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
        m = !!(d && null != c && u.TP[c.trialId].skus.includes(e) && !n),
        p = (0, i.O)(),
        C =
            null != e &&
            null != p &&
            null != p.discount &&
            null != p.discount.planIds &&
            p.discount.planIds.some((t) => u.hd[t].skuId === e),
        h = !!(d && null != p && C),
        f = (0, i.p)();
    return l.useMemo(
        () => ({
            isPremium: t,
            isPremiumGroupPurchase: n,
            isEligibleForTrial: m,
            isEligibleForDiscount: h,
            userTrialOffer: c,
            discountOffer: p,
            premiumGroupDiscountOffer: n ? f : null,
        }),
        [t, n, m, h, c, p, f],
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
