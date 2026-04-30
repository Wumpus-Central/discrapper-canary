n.d(t, { A: () => h, C: () => u });
var o,
    r = n(17928),
    a = n(228366),
    i = n(136857),
    l = n(446458),
    u =
        (((o = {})[(o.UNKNOWN = 0)] = "UNKNOWN"),
        (o[(o.PENDING = 1)] = "PENDING"),
        (o[(o.SUCCESS = 2)] = "SUCCESS"),
        (o[(o.ERROR = 3)] = "ERROR"),
        o);
let s = 0,
    _ = null,
    d = null;
function C(e) {
    let { error: t } = e,
        n = t instanceof i.Ay ? t : new i.Ay(t);
    l.A.isConnected() && n.code === i.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (s = 1);
}
function E() {
    (s = 0), (_ = null), (d = null);
}
class p extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A);
    }
    static displayName = "PurchaseTokenAuthStore";
    get purchaseTokenAuthState() {
        return s;
    }
    get purchaseTokenHash() {
        return _;
    }
    get expiresAt() {
        return d;
    }
}
let h = new p(a.h, {
    SKU_PURCHASE_FAIL: C,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: C,
    USER_PAYMENT_CLIENT_ADD: function (e) {
        (s = 2), (_ = e.purchaseTokenHash), (d = e.expiresAt);
    },
    BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: E,
    BILLING_SUBSCRIPTION_UPDATE_START: E,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: E,
    PREMIUM_PAYMENT_ERROR_CLEAR: E,
    PREMIUM_PAYMENT_MODAL_CLOSE: E,
    PREMIUM_PAYMENT_MODAL_OPEN: E,
    PREMIUM_PAYMENT_SUBSCRIBE_START: E,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: E,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: E,
    SKU_PURCHASE_MODAL_CLOSE: E,
    SKU_PURCHASE_MODAL_OPEN: E,
    SKU_PURCHASE_START: E,
    SKU_PURCHASE_SUCCESS: E,
});
