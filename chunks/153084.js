n.d(t, { A: () => S });
var l = n(17928),
    r = n(228366),
    i = n(158032),
    a = n(830382),
    s = n(136857),
    o = n(739508),
    u = n(71532),
    c = n(652215),
    d = n(375708);
let p = !1,
    m = null,
    h = null;
function A() {
    (p = !1), (h = null), (m = null);
}
function E(e) {
    let { error: t } = e,
        { code: n, paymentId: l } = t;
    if (n !== s.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== s.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (p = !1), !1;
    p || ((p = !0), (m = l), n === s.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && C(l));
}
async function C(e) {
    if (null == e) return;
    let { error: t } = await (0, u.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, o.pM)(e, { extra: { authenticationError: t } });
    }
}
function y(e) {
    let { payment: t } = e,
        n = [c.__0.COMPLETED, c.__0.FAILED, c.__0.CANCELED];
    if (!p || t.id !== m || !n.includes(t.status)) return !1;
    if (((p = !1), (m = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === s.tG.BILLING_INSUFFICIENT_FUNDS && (e = s.tG.BILLING_INSUFFICIENT_FUNDS),
            (h = new s.Ay(d.intl.string(d.t.khEaRI), e));
    } else (h = null), r.h.wait(i.ET), r.h.wait(a.T3);
}
class _ extends l.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return p;
    }
    get error() {
        return h;
    }
    get awaitingPaymentId() {
        return m;
    }
}
let S = new _(r.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: A,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: A,
    PREMIUM_PAYMENT_ERROR_CLEAR: A,
    PREMIUM_PAYMENT_MODAL_CLOSE: A,
    PREMIUM_PAYMENT_MODAL_OPEN: A,
    PREMIUM_PAYMENT_SUBSCRIBE_START: A,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: A,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: A,
    SKU_PURCHASE_MODAL_CLOSE: A,
    SKU_PURCHASE_MODAL_OPEN: A,
    SKU_PURCHASE_START: A,
    SKU_PURCHASE_SUCCESS: A,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: E,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
    PREMIUM_PAYMENT_UPDATE_FAIL: E,
    SKU_PURCHASE_FAIL: E,
    GIFT_CODE_REDEEM_FAILURE: E,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (h = t), (p = !1);
    },
    PAYMENT_UPDATE: y,
    BILLING_PAYMENT_FETCH_SUCCESS: y,
});
