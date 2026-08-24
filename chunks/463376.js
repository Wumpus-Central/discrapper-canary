n.d(t, { R: () => m, i: () => d });
var l = n(582128),
    i = n(724651),
    r = n(732280),
    a = n(120700),
    s = n(65258),
    o = n(87725),
    u = n(652215),
    c = n(202541);
function d() {
    let {
            selectedSkuId: e,
            isPremium: t,
            isPremiumGroupPurchase: n,
            referralTrialOfferId: a,
            isGift: s,
        } = (0, o.t4)((e) => {
            let t = e.get("selectedPlanAttributes");
            return {
                selectedSkuId: e.selectedSkuId,
                referralTrialOfferId: e.referralTrialOfferId,
                isGift: e.isGift,
                isPremium: t.isPremiumPurchase,
                isPremiumGroupPurchase: t.isPremiumGroupPurchase,
            };
        }),
        u = (0, r.V)(a ?? void 0),
        d = !n && !s && null != e,
        m = !!(d && null != u && c.TP[u.trialId].skus.includes(e) && !n),
        p = (0, i.O)(),
        C =
            null != e &&
            null != p &&
            null != p.discount &&
            null != p.discount.planIds &&
            p.discount.planIds.some((t) => c.hd[t].skuId === e),
        h = !!(d && null != p && C),
        f = (0, i.p)();
    return l.useMemo(
        () => ({
            isPremium: t,
            isPremiumGroupPurchase: n,
            isEligibleForTrial: m,
            isEligibleForDiscount: h,
            userTrialOffer: u,
            discountOffer: p,
            premiumGroupDiscountOffer: n ? f : null,
        }),
        [t, n, m, h, u, p, f],
    );
}
function m(e) {
    let { hasOpenInvoice: t } = e,
        {
            activeSubscription: n,
            unifiedCheckoutFlow: i,
            setStartingIsInPastDueCheckout: r,
        } = (0, o.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            setStartingIsInPastDueCheckout: e.setStartingIsInPastDueCheckout,
        })),
        c = i === a.C.PREMIUM_CHECKOUT && null != n && n.status === u.Dmq.PAST_DUE && t,
        d = (0, s.X)(c),
        m = c && d;
    return (
        l.useEffect(() => {
            m && r(!0);
        }, [m, r]),
        m
    );
}
