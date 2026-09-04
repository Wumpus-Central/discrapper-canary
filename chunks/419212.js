n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(913122);
let s = null,
    l = null,
    o = null,
    d = null,
    c = !1;
function u(e) {
    let { error: t } = e;
    s = t;
}
function _() {
    s = null;
}
class E extends i.Ay.Store {
    static displayName = "PremiumPaymentModalStore";
    get paymentError() {
        return s;
    }
    getGiftCode(e) {
        return e === o ? l : null;
    }
    isGiftCodeDeliveryReady(e) {
        return null != e && e === d && c;
    }
}
let A = new E(r.h, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: u,
    PREMIUM_PAYMENT_UPDATE_FAIL: u,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function () {
        _();
    },
    PREMIUM_PAYMENT_UPDATE_SUCCESS: _,
    PREMIUM_PAYMENT_ERROR_CLEAR: _,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: function (e) {
        let { message: t } = e;
        s = new a.Ey(t);
    },
    BRAINTREE_TOKENIZE_VENMO_FAIL: function (e) {
        let { message: t } = e;
        s = new a.Ey(t);
    },
    SKU_PURCHASE_START: function (e) {
        (d = !0 === e.isGift ? (e.loadId ?? null) : null), (c = !1);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        (l = e.giftCode), (o = e.skuId), null != e.loadId && e.loadId === d && (c = !0);
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
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        if (e.loadId !== d) return !1;
        c = !0;
    },
});
