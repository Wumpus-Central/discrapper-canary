n.d(t, { A: () => u });
var i = n(439372),
    r = n(30793),
    a = n(67480),
    s = n(828596),
    l = n(918467),
    o = n(652215),
    d = n(202541);
class c extends i.A {
    actions = {
        SKU_PURCHASE_SUCCESS: this.onPurchaseSuccess.bind(this),
        GIFT_CODE_REDEEM_SUCCESS: this.onGiftCodeRedeemSuccess.bind(this),
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: this.onSubscriptionChange.bind(this),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: this.onSubscriptionChange.bind(this),
    };
    onPurchaseSuccess(e) {
        let { skuId: t } = e;
        this.onCollectiblesAcquired(t);
    }
    onGiftCodeRedeemSuccess(e) {
        let { code: t } = e;
        this.onCollectiblesAcquired(r.A.get(t)?.skuId);
    }
    onCollectiblesAcquired(e) {
        if (null == e || a.A.get(e)?.productLine !== o.EZt.COLLECTIBLES) return;
        let t = l.A.getPromotionsForApplication(o.FYj);
        null != t && 0 !== t.length && (0, s.rd)([o.FYj]);
    }
    onSubscriptionChange() {
        (0, s.rd)([o.FYj, d.tv]);
    }
}
let u = new c();
