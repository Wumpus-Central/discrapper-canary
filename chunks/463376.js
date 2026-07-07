n.d(t, { R: () => p, i: () => d });
var l = n(64700),
    i = n(422936),
    r = n(234419),
    a = n(120700),
    s = n(65258),
    o = n(6938),
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
        p = !!(d && null != u && c.TP[u.trial_id].skus.includes(e)),
        m = (0, i.O)(),
        C =
            null != e &&
            null != m &&
            null != m.discount &&
            null != m.discount.planIds &&
            m.discount.planIds.some((t) => c.hd[t].skuId === e),
        h = !!(d && null != m && C),
        E = (0, i.p)();
    return l.useMemo(
        () => ({
            isPremium: t,
            isPremiumGroupPurchase: n,
            isEligibleForTrial: p,
            isEligibleForDiscount: h,
            userTrialOffer: u,
            discountOffer: m,
            premiumGroupDiscountOffer: n ? E : null,
        }),
        [t, n, p, h, u, m, E],
    );
}
function p(e) {
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
        c = null != n,
        d = l.useMemo(
            () =>
                !!(0, s.u)() &&
                i === a.C.PREMIUM_CHECKOUT &&
                null != n &&
                null != n &&
                n.status === u.Dmq.PAST_DUE &&
                t,
            [n, i, t],
        );
    return (
        l.useEffect(() => {
            c && r(d);
        }, [d, r, c]),
        d
    );
}
