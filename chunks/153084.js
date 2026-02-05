"use strict";
n.d(t, { A: () => T });
var r = n(311907),
    i = n(73153),
    a = n(158032),
    s = n(830382),
    o = n(136857),
    l = n(739508),
    u = n(71532),
    c = n(652215),
    d = n(985018);
let _ = !1,
    f = null,
    p = null;
function h() {
    (_ = !1), (p = null), (f = null);
}
function m(e) {
    let { error: t } = e,
        { code: n, paymentId: r } = t;
    if (n !== o.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (_ = !1), !1;
    _ || ((_ = !0), (f = r), n === o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && g(r));
}
async function g(e) {
    if (null == e) return;
    let { error: t } = await (0, u.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, l.pM)(e, { extra: { authenticationError: t } });
    }
}
function E(e) {
    let { error: t } = e;
    (p = t), (_ = !1);
}
function A(e) {
    let { payment: t } = e,
        n = [c.__0.COMPLETED, c.__0.FAILED, c.__0.CANCELED];
    if (!_ || t.id !== f || !n.includes(t.status)) return !1;
    if (((_ = !1), (f = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === o.tG.BILLING_INSUFFICIENT_FUNDS && (e = o.tG.BILLING_INSUFFICIENT_FUNDS),
            (p = new o.Ay(d.intl.string(d.t.khEaRI), e));
    } else (p = null), i.h.wait(a.ET), i.h.wait(s.T3);
}
class I extends r.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return _;
    }
    get error() {
        return p;
    }
    get awaitingPaymentId() {
        return f;
    }
}
let T = new I(i.h, {
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
    BILLING_SUBSCRIPTION_UPDATE_FAIL: m,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: m,
    PREMIUM_PAYMENT_UPDATE_FAIL: m,
    SKU_PURCHASE_FAIL: m,
    GIFT_CODE_REDEEM_FAILURE: m,
    PAYMENT_AUTHENTICATION_ERROR: E,
    PAYMENT_UPDATE: A,
    BILLING_PAYMENT_FETCH_SUCCESS: A,
});
