"use strict";
n.d(t, { A: () => h, C: () => o });
var r = n(311907),
    i = n(73153),
    a = n(136857),
    s = n(142120),
    o = (function (e) {
        return (
            (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.PENDING = 1)] = "PENDING"),
            (e[(e.SUCCESS = 2)] = "SUCCESS"),
            (e[(e.ERROR = 3)] = "ERROR"),
            e
        );
    })({});
let l = 0,
    u = null,
    c = null;
function d(e) {
    let { error: t } = e,
        n = t instanceof a.Ay ? t : new a.Ay(t);
    s.A.isConnected() && n.code === a.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (l = 1);
}
function _(e) {
    (l = 2), (u = e.purchaseTokenHash), (c = e.expiresAt);
}
function f() {
    (l = 0), (u = null), (c = null);
}
class p extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "PurchaseTokenAuthStore";
    get purchaseTokenAuthState() {
        return l;
    }
    get purchaseTokenHash() {
        return u;
    }
    get expiresAt() {
        return c;
    }
}
let h = new p(i.h, {
    SKU_PURCHASE_FAIL: d,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
    USER_PAYMENT_CLIENT_ADD: _,
    BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: f,
    BILLING_SUBSCRIPTION_UPDATE_START: f,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: f,
    PREMIUM_PAYMENT_ERROR_CLEAR: f,
    PREMIUM_PAYMENT_MODAL_CLOSE: f,
    PREMIUM_PAYMENT_MODAL_OPEN: f,
    PREMIUM_PAYMENT_SUBSCRIBE_START: f,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: f,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: f,
    SKU_PURCHASE_MODAL_CLOSE: f,
    SKU_PURCHASE_MODAL_OPEN: f,
    SKU_PURCHASE_START: f,
    SKU_PURCHASE_SUCCESS: f,
});
