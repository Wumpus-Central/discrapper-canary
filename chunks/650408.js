"use strict";
n.d(t, { A: () => c });
var i = n(439372),
    r = n(561573),
    a = n(67480),
    s = n(733391),
    l = n(832163);
function o(e) {
    let t = l.A.getStorefrontDataForApplicationId(e)?.storefront;
    return null != t ? Object.values(t.promotions) : [];
}
class d extends i.A {
    actions = {
        SKU_PURCHASE_SUCCESS: this.onPurchase.bind(this),
        VIRTUAL_CURRENCY_REDEEM_SUCCESS: this.onPurchase.bind(this),
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: this.onSubscriptionChange.bind(this),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: this.onSubscriptionChange.bind(this),
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: this.onSubscriptionChange.bind(this),
    };
    onPurchase(e) {
        let t,
            { skuId: n } = e,
            i = a.A.get(n)?.applicationId;
        null != i &&
            (null != (t = r.A.getRewardsForSkuId(n)) ? t.length > 0 : o(i).length > 0) &&
            (0, s.ap)(i, { forceFetch: !0 });
    }
    onSubscriptionChange() {
        for (let e of l.A.getLoadedStorefrontApplicationIds())
            o(e).some((e) => "nitro" === e.flavor) && (0, s.ap)(e, { forceFetch: !0 });
    }
}
let c = new d();
