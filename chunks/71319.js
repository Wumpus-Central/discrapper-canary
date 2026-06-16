"use strict";
n.d(t, { A: () => f, C: () => o });
var l,
    i = n(17928),
    r = n(228366),
    s = n(136857),
    a = n(617710),
    o =
        (((l = {})[(l.UNKNOWN = 0)] = "UNKNOWN"),
        (l[(l.PENDING = 1)] = "PENDING"),
        (l[(l.SUCCESS = 2)] = "SUCCESS"),
        (l[(l.ERROR = 3)] = "ERROR"),
        l);
let u = 0,
    c = null,
    d = null;
function m(e) {
    let { error: t } = e,
        n = t instanceof s.Ay ? t : new s.Ay(t);
    a.A.isConnected() && n.code === s.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (u = 1);
}
function h() {
    (u = 0), (c = null), (d = null);
}
class p extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "PurchaseTokenAuthStore";
    get purchaseTokenAuthState() {
        return u;
    }
    get purchaseTokenHash() {
        return c;
    }
    get expiresAt() {
        return d;
    }
}
let f = new p(r.h, {
    SKU_PURCHASE_FAIL: m,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: m,
    USER_PAYMENT_CLIENT_ADD: function (e) {
        (u = 2), (c = e.purchaseTokenHash), (d = e.expiresAt);
    },
    BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: h,
    BILLING_SUBSCRIPTION_UPDATE_START: h,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: h,
    PREMIUM_PAYMENT_ERROR_CLEAR: h,
    PREMIUM_PAYMENT_MODAL_CLOSE: h,
    PREMIUM_PAYMENT_MODAL_OPEN: h,
    PREMIUM_PAYMENT_SUBSCRIBE_START: h,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: h,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
    SKU_PURCHASE_MODAL_CLOSE: h,
    SKU_PURCHASE_MODAL_OPEN: h,
    SKU_PURCHASE_START: h,
    SKU_PURCHASE_SUCCESS: h,
});
