"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    a = n(913122);
let s = null,
    l = null,
    o = null;
function d(e) {
    let { error: t } = e;
    s = t;
}
function c() {
    s = null;
}
class u extends i.Ay.Store {
    static displayName = "PremiumPaymentModalStore";
    get paymentError() {
        return s;
    }
    getGiftCode(e) {
        return e === o ? l : null;
    }
}
let _ = new u(r.h, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
    PREMIUM_PAYMENT_UPDATE_FAIL: d,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function () {
        c();
    },
    PREMIUM_PAYMENT_UPDATE_SUCCESS: c,
    PREMIUM_PAYMENT_ERROR_CLEAR: c,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: function (e) {
        let { message: t } = e;
        s = new a.Ey(t);
    },
    BRAINTREE_TOKENIZE_VENMO_FAIL: function (e) {
        let { message: t } = e;
        s = new a.Ey(t);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        (l = e.giftCode), (o = e.skuId);
    },
    SKU_PURCHASE_FAIL: function (e) {
        s = e.error;
    },
    SKU_PURCHASE_AWAIT_CONFIRMATION: function (e) {
        e.isGift && (o = e.skuId);
    },
    GIFT_CODE_CREATE: function (e) {
        let { giftCode: t } = e;
        if (0 !== t.uses || t.sku_id !== o) return !1;
        l = t.code;
    },
});
