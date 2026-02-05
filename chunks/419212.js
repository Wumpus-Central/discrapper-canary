"use strict";
n.d(t, { A: () => A });
var r = n(311907),
    i = n(73153),
    a = n(198982);
let s = null,
    o = null,
    l = null;
function u(e) {
    let { error: t } = e;
    s = t;
}
function c() {
    f();
}
function d(e) {
    let { message: t } = e;
    s = new a.Ey(t);
}
function _(e) {
    let { message: t } = e;
    s = new a.Ey(t);
}
function f() {
    s = null;
}
function p(e) {
    (o = e.giftCode), (l = e.skuId);
}
function h(e) {
    let { giftCode: t } = e;
    if (0 !== t.uses || t.sku_id !== l) return !1;
    o = t.code;
}
function m(e) {
    s = e.error;
}
function g(e) {
    e.isGift && (l = e.skuId);
}
class E extends r.Ay.Store {
    static displayName = "PremiumPaymentModalStore";
    get paymentError() {
        return s;
    }
    getGiftCode(e) {
        return e === l ? o : null;
    }
}
let A = new E(i.h, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: u,
    PREMIUM_PAYMENT_UPDATE_FAIL: u,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: c,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: f,
    PREMIUM_PAYMENT_ERROR_CLEAR: f,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: d,
    BRAINTREE_TOKENIZE_VENMO_FAIL: _,
    SKU_PURCHASE_SUCCESS: p,
    SKU_PURCHASE_FAIL: m,
    SKU_PURCHASE_AWAIT_CONFIRMATION: g,
    GIFT_CODE_CREATE: h,
});
