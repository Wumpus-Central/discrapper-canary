n.d(t, { A: () => h, C: () => s });
var r,
    a = n(17928),
    i = n(228366),
    o = n(136857),
    l = n(366853),
    s =
        (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.PENDING = 1)] = "PENDING"),
        (r[(r.SUCCESS = 2)] = "SUCCESS"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
let d = 0,
    u = null,
    c = null;
function _(e) {
    let { error: t } = e,
        n = t instanceof o.Ay ? t : new o.Ay(t);
    l.A.isConnected() && n.code === o.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (d = 1);
}
function p() {
    (d = 0), (u = null), (c = null);
}
class C extends a.Ay.Store {
    initialize() {
        this.waitFor(l.A);
    }
    static displayName = "PurchaseTokenAuthStore";
    get purchaseTokenAuthState() {
        return d;
    }
    get purchaseTokenHash() {
        return u;
    }
    get expiresAt() {
        return c;
    }
}
let h = new C(i.h, {
    SKU_PURCHASE_FAIL: _,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: _,
    USER_PAYMENT_CLIENT_ADD: function (e) {
        (d = 2), (u = e.purchaseTokenHash), (c = e.expiresAt);
    },
    BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: p,
    BILLING_SUBSCRIPTION_UPDATE_START: p,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: p,
    PREMIUM_PAYMENT_ERROR_CLEAR: p,
    PREMIUM_PAYMENT_MODAL_CLOSE: p,
    PREMIUM_PAYMENT_MODAL_OPEN: p,
    PREMIUM_PAYMENT_SUBSCRIBE_START: p,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: p,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: p,
    SKU_PURCHASE_MODAL_CLOSE: p,
    SKU_PURCHASE_MODAL_OPEN: p,
    SKU_PURCHASE_START: p,
    SKU_PURCHASE_SUCCESS: p,
});
