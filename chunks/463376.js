"use strict";
n.d(t, { i: () => l });
var i = n(64700),
    r = n(422936),
    s = n(234419),
    a = n(211159),
    o = n(788868);
function l() {
    let {
            selectedSkuId: e,
            isPremium: t,
            isPremiumGroupPurchase: n,
            referralTrialOfferId: l,
            isGift: u,
        } = (0, a.t4)((e) => {
            let t = e.get("selectedPlanAttributes");
            return {
                selectedSkuId: e.selectedSkuId,
                referralTrialOfferId: e.referralTrialOfferId,
                isGift: e.isGift,
                isPremium: t.isPremiumPurchase,
                isPremiumGroupPurchase: t.isPremiumGroupPurchase,
            };
        }),
        c = (0, s.V)(l ?? void 0),
        d = !n && !u && null != e,
        _ = !!(d && null != c && o.TP[c.trial_id].skus.includes(e)),
        h = (0, r.O)(),
        f =
            null != e &&
            null != h &&
            null != h.discount &&
            null != h.discount.planIds &&
            h.discount.planIds.some((t) => o.hd[t].skuId === e),
        p = !!(d && null != h && f),
        E = (0, r.p)();
    return i.useMemo(
        () => ({
            isPremium: t,
            isPremiumGroupPurchase: n,
            isEligibleForTrial: _,
            isEligibleForDiscount: p,
            userTrialOffer: c,
            discountOffer: h,
            premiumGroupDiscountOffer: n ? E : null,
        }),
        [t, n, _, p, c, h, E],
    );
}
