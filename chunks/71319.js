n.d(t, { A: () => h, C: () => o });
var l,
    i = n(17928),
    r = n(228366),
    a = n(136857),
    s = n(597643),
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
        n = t instanceof a.Ay ? t : new a.Ay(t);
    s.A.isConnected() && n.code === a.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (u = 1);
}
function p() {
    (u = 0), (c = null), (d = null);
}
class C extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
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
let h = new C(r.h, {
    SKU_PURCHASE_FAIL: m,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: m,
    USER_PAYMENT_CLIENT_ADD: function (e) {
        (u = 2), (c = e.purchaseTokenHash), (d = e.expiresAt);
    },
    BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: p,
    BILLING_SUBSCRIPTION_UPDATE_START: p,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: p,
    PREMIUM_PAYMENT_ERROR_CLEAR: p,
    PREMIUM_PAYMENT_MODAL_CLOSE: p,
    PREMIUM_PAYMENT_MODAL_OPEN: p,
    CHECKOUT_MODAL_CLOSE: p,
    PREMIUM_PAYMENT_SUBSCRIBE_START: p,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: p,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: p,
    SKU_PURCHASE_MODAL_CLOSE: p,
    SKU_PURCHASE_MODAL_OPEN: p,
    SKU_PURCHASE_START: p,
    SKU_PURCHASE_SUCCESS: p,
});
