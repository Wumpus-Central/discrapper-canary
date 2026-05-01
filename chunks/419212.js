n.d(t, { A: () => C });
var o = n(17928),
    r = n(228366),
    i = n(845584);
let a = null,
    l = null,
    s = null;
function u(e) {
    let { error: t } = e;
    a = t;
}
function _() {
    a = null;
}
class d extends o.Ay.Store {
    static displayName = "PremiumPaymentModalStore";
    get paymentError() {
        return a;
    }
    getGiftCode(e) {
        return e === s ? l : null;
    }
}
let C = new d(r.h, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: u,
    PREMIUM_PAYMENT_UPDATE_FAIL: u,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function () {
        _();
    },
    PREMIUM_PAYMENT_UPDATE_SUCCESS: _,
    PREMIUM_PAYMENT_ERROR_CLEAR: _,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: function (e) {
        let { message: t } = e;
        a = new i.Ey(t);
    },
    BRAINTREE_TOKENIZE_VENMO_FAIL: function (e) {
        let { message: t } = e;
        a = new i.Ey(t);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        (l = e.giftCode), (s = e.skuId);
    },
    SKU_PURCHASE_FAIL: function (e) {
        a = e.error;
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
