n.d(t, { A: () => c });
var i = n(439372),
    r = n(67480),
    a = n(828596),
    s = n(918467),
    l = n(652215),
    o = n(202541);
class d extends i.A {
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
        (0, a.rd)([l.FYj, o.tv]);
    }
}
let c = new d();
