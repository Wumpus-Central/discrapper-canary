n.d(t, { i: () => o });
var l = n(64700),
    r = n(422936),
    i = n(234419),
    a = n(722847),
    s = n(788868);
function o() {
    let {
            selectedSkuId: e,
            isPremium: t,
            isPremiumGroupPurchase: n,
            referralTrialOfferId: o,
            isGift: u,
        } = (0, a.t4)((e) => {
            let t = e.get("selectedPlanAttributes");
            return {
                selectedSkuId: e.selectedSkuId,
                referralTrialOfferId: e.checkoutInitParameters.referralTrialOfferId,
                isGift: e.checkoutInitParameters.isGift,
                isPremium: t.isPremiumPurchase,
                isPremiumGroupPurchase: t.isPremiumGroupPurchase,
            };
        }),
        c = (0, i.V)(o ?? void 0),
        d = !n && !u && null != e,
        p = !!(d && null != c && s.TP[c.trial_id].skus.includes(e)),
        m = (0, r.O)(),
        h =
            null != e &&
            null != m &&
            null != m.discount &&
            null != m.discount.planIds &&
            m.discount.planIds.some((t) => s.hd[t].skuId === e),
        C = !!(d && null != m && h);
    return l.useMemo(
        () => ({
            isPremium: t,
            isPremiumGroupPurchase: n,
            isEligibleForTrial: p,
            isEligibleForDiscount: C,
            userTrialOffer: c,
            discountOffer: m,
        }),
        [t, n, p, C, c, m],
    );
}
