"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(198982);
let a = null,
    o = null,
    l = null;
function u(e) {
    let { error: t } = e;
    a = t;
}
function d() {
    a = null;
}
class c extends r.Ay.Store {
    static displayName = "PremiumPaymentModalStore";
    get paymentError() {
        return a;
    }
    getGiftCode(e) {
        return e === l ? o : null;
    }
}
let _ = new c(i.h, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: u,
    PREMIUM_PAYMENT_UPDATE_FAIL: u,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function () {
        d();
    },
    PREMIUM_PAYMENT_UPDATE_SUCCESS: d,
    PREMIUM_PAYMENT_ERROR_CLEAR: d,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: function (e) {
        let { message: t } = e;
        a = new s.Ey(t);
    },
    BRAINTREE_TOKENIZE_VENMO_FAIL: function (e) {
        let { message: t } = e;
        a = new s.Ey(t);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        (o = e.giftCode), (l = e.skuId);
    },
    SKU_PURCHASE_FAIL: function (e) {
        a = e.error;
    },
    SKU_PURCHASE_AWAIT_CONFIRMATION: function (e) {
        e.isGift && (l = e.skuId);
    },
    GIFT_CODE_CREATE: function (e) {
        let { giftCode: t } = e;
        if (0 !== t.uses || t.sku_id !== l) return !1;
        o = t.code;
    },
});
