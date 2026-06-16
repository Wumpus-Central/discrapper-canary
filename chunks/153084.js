"use strict";
n.d(t, { A: () => I });
var i = n(17928),
    r = n(228366),
    s = n(158032),
    a = n(830382),
    o = n(136857),
    l = n(739508),
    u = n(71532),
    c = n(652215),
    d = n(375708);
let _ = !1,
    h = null,
    f = null;
function p() {
    (_ = !1), (f = null), (h = null);
}
function E(e) {
    let { error: t } = e,
        { code: n, paymentId: i } = t;
    if (n !== o.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (_ = !1), !1;
    _ || ((_ = !0), (h = i), n === o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && m(i));
}
async function m(e) {
    if (null == e) return;
    let { error: t } = await (0, u.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, l.pM)(e, { extra: { authenticationError: t } });
    }
}
function g(e) {
    let { payment: t } = e,
        n = [c.__0.COMPLETED, c.__0.FAILED, c.__0.CANCELED];
    if (!_ || t.id !== h || !n.includes(t.status)) return !1;
    if (((_ = !1), (h = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === o.tG.BILLING_INSUFFICIENT_FUNDS && (e = o.tG.BILLING_INSUFFICIENT_FUNDS),
            (f = new o.Ay(d.intl.string(d.t.khEaRI), e));
    } else (f = null), r.h.wait(s.ET), r.h.wait(a.T3);
}
class A extends i.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return _;
    }
    get error() {
        return f;
    }
    get awaitingPaymentId() {
        return h;
    }
}
let I = new A(r.h, {
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
    BILLING_SUBSCRIPTION_UPDATE_FAIL: E,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
    PREMIUM_PAYMENT_UPDATE_FAIL: E,
    SKU_PURCHASE_FAIL: E,
    GIFT_CODE_REDEEM_FAILURE: E,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (f = t), (_ = !1);
    },
    PAYMENT_UPDATE: g,
    BILLING_PAYMENT_FETCH_SUCCESS: g,
});
