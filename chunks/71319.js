"use strict";
n.d(t, { A: () => p, C: () => l });
var i,
    r = n(17928),
    s = n(228366),
    a = n(136857),
    o = n(587626),
    l =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.PENDING = 1)] = "PENDING"),
        (i[(i.SUCCESS = 2)] = "SUCCESS"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
let u = 0,
    c = null,
    d = null;
function _(e) {
    let { error: t } = e,
        n = t instanceof a.Ay ? t : new a.Ay(t);
    o.A.isConnected() && n.code === a.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (u = 1);
}
function f() {
    (u = 0), (c = null), (d = null);
}
class h extends r.Ay.Store {
    initialize() {
        this.waitFor(o.A);
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
let p = new h(s.h, {
    SKU_PURCHASE_FAIL: _,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: _,
    USER_PAYMENT_CLIENT_ADD: function (e) {
        (u = 2), (c = e.purchaseTokenHash), (d = e.expiresAt);
    },
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
