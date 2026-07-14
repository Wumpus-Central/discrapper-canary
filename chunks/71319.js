n.d(t, { A: () => C, C: () => o });
var l,
    i = n(17928),
    r = n(228366),
    a = n(136857),
    s = n(617710),
    o =
        (((l = {})[(l.UNKNOWN = 0)] = "UNKNOWN"),
        (l[(l.PENDING = 1)] = "PENDING"),
        (l[(l.SUCCESS = 2)] = "SUCCESS"),
        (l[(l.ERROR = 3)] = "ERROR"),
        l);
let u = 0,
    c = null,
    d = null;
function p(e) {
    let { error: t } = e,
        n = t instanceof a.Ay ? t : new a.Ay(t);
    s.A.isConnected() && n.code === a.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (u = 1);
}
function m() {
    (u = 0), (c = null), (d = null);
}
class h extends i.Ay.Store {
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
let C = new h(r.h, {
    SKU_PURCHASE_FAIL: p,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: p,
    USER_PAYMENT_CLIENT_ADD: function (e) {
        (u = 2), (c = e.purchaseTokenHash), (d = e.expiresAt);
    },
    BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: m,
    BILLING_SUBSCRIPTION_UPDATE_START: m,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: m,
    PREMIUM_PAYMENT_ERROR_CLEAR: m,
    PREMIUM_PAYMENT_MODAL_CLOSE: m,
    PREMIUM_PAYMENT_MODAL_OPEN: m,
    CHECKOUT_MODAL_CLOSE: m,
    PREMIUM_PAYMENT_SUBSCRIBE_START: m,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: m,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: m,
    SKU_PURCHASE_MODAL_CLOSE: m,
    SKU_PURCHASE_MODAL_OPEN: m,
    SKU_PURCHASE_START: m,
    SKU_PURCHASE_SUCCESS: m,
});
