n.d(t, { A: () => _ });
var r = n(17928),
    a = n(228366),
    i = n(845584);
let o = null,
    l = null,
    s = null;
function d(e) {
    let { error: t } = e;
    o = t;
}
function u() {
    o = null;
}
class c extends r.Ay.Store {
    static displayName = "PremiumPaymentModalStore";
    get paymentError() {
        return o;
    }
    getGiftCode(e) {
        return e === s ? l : null;
    }
}
let _ = new c(a.h, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
    PREMIUM_PAYMENT_UPDATE_FAIL: d,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function () {
        u();
    },
    PREMIUM_PAYMENT_UPDATE_SUCCESS: u,
    PREMIUM_PAYMENT_ERROR_CLEAR: u,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: function (e) {
        let { message: t } = e;
        o = new i.Ey(t);
    },
    BRAINTREE_TOKENIZE_VENMO_FAIL: function (e) {
        let { message: t } = e;
        o = new i.Ey(t);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        (l = e.giftCode), (s = e.skuId);
    },
    SKU_PURCHASE_FAIL: function (e) {
        o = e.error;
    },
    SKU_PURCHASE_AWAIT_CONFIRMATION: function (e) {
        e.isGift && (s = e.skuId);
    },
    GIFT_CODE_CREATE: function (e) {
        let { giftCode: t } = e;
        if (0 !== t.uses || t.sku_id !== s) return !1;
        l = t.code;
    },
});
