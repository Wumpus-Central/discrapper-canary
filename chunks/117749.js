"use strict";
n.d(t, { A: () => d });
var i = n(439372),
    r = n(67480),
    a = n(758445),
    s = n(918467),
    l = n(652215);
class o extends i.A {
    actions = {
        SKU_PURCHASE_SUCCESS: this.onPurchaseSuccess.bind(this),
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: this.onSubscriptionChange.bind(this),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: this.onSubscriptionChange.bind(this),
    };
    onPurchaseSuccess(e) {
        let { skuId: t } = e;
        if (r.A.get(t)?.productLine !== l.EZt.COLLECTIBLES) return;
        let n = s.A.getPromotionsForApplication(l.FYj);
        null != n && 0 !== n.length && (0, a.rd)([l.FYj]);
    }
    onSubscriptionChange() {
        (0, a.rd)([l.FYj]);
    }
}
let d = new o();
