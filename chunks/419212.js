n.d(t, { A: () => C });
var o = n(17928),
    r = n(228366),
    a = n(845584);
let i = null,
    l = null,
    u = null;
function s(e) {
    let { error: t } = e;
    i = t;
}
function _() {
    i = null;
}
class d extends o.Ay.Store {
    static displayName = "PremiumPaymentModalStore";
    get paymentError() {
        return i;
    }
    getGiftCode(e) {
        return e === u ? l : null;
    }
}
let C = new d(r.h, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: s,
    PREMIUM_PAYMENT_UPDATE_FAIL: s,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function () {
        _();
    },
    PREMIUM_PAYMENT_UPDATE_SUCCESS: _,
    PREMIUM_PAYMENT_ERROR_CLEAR: _,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: function (e) {
        let { message: t } = e;
        i = new a.Ey(t);
    },
    BRAINTREE_TOKENIZE_VENMO_FAIL: function (e) {
        let { message: t } = e;
        i = new a.Ey(t);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        (l = e.giftCode), (u = e.skuId);
    },
    SKU_PURCHASE_FAIL: function (e) {
        i = e.error;
    },
    SKU_PURCHASE_AWAIT_CONFIRMATION: function (e) {
        e.isGift && (u = e.skuId);
    },
    GIFT_CODE_CREATE: function (e) {
        let { giftCode: t } = e;
        if (0 !== t.uses || t.sku_id !== u) return !1;
        l = t.code;
    },
});
