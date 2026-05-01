n.d(t, { A: () => h, C: () => s });
var o,
    r = n(17928),
    i = n(228366),
    a = n(136857),
    l = n(446458),
    s =
        (((o = {})[(o.UNKNOWN = 0)] = "UNKNOWN"),
        (o[(o.PENDING = 1)] = "PENDING"),
        (o[(o.SUCCESS = 2)] = "SUCCESS"),
        (o[(o.ERROR = 3)] = "ERROR"),
        o);
let u = 0,
    _ = null,
    d = null;
function C(e) {
    let { error: t } = e,
        n = t instanceof a.Ay ? t : new a.Ay(t);
    l.A.isConnected() && n.code === a.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (u = 1);
}
function E() {
    (u = 0), (_ = null), (d = null);
}
class p extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A);
    }
    static displayName = "PurchaseTokenAuthStore";
    get purchaseTokenAuthState() {
        return u;
    }
    get purchaseTokenHash() {
        return _;
    }
    get expiresAt() {
        return d;
    }
}
let h = new p(i.h, {
    SKU_PURCHASE_FAIL: C,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: C,
    USER_PAYMENT_CLIENT_ADD: function (e) {
        (u = 2), (_ = e.purchaseTokenHash), (d = e.expiresAt);
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
