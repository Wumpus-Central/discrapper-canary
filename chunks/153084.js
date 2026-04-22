"use strict";
n.d(t, { A: () => I });
var r = n(311907),
    i = n(73153),
    s = n(158032),
    a = n(830382),
    o = n(136857),
    l = n(739508),
    u = n(71532),
    d = n(652215),
    c = n(985018);
let _ = !1,
    f = null,
    E = null;
function h() {
    (_ = !1), (E = null), (f = null);
}
function p(e) {
    let { error: t } = e,
        { code: n, paymentId: r } = t;
    if (n !== o.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (_ = !1), !1;
    _ || ((_ = !0), (f = r), n === o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && m(r));
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
        n = [d.__0.COMPLETED, d.__0.FAILED, d.__0.CANCELED];
    if (!_ || t.id !== f || !n.includes(t.status)) return !1;
    if (((_ = !1), (f = null), t.status === d.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === o.tG.BILLING_INSUFFICIENT_FUNDS && (e = o.tG.BILLING_INSUFFICIENT_FUNDS),
            (E = new o.Ay(c.intl.string(c.t.khEaRI), e));
    } else (E = null), i.h.wait(s.ET), i.h.wait(a.T3);
}
class A extends r.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return _;
    }
    get error() {
        return E;
    }
    get awaitingPaymentId() {
        return f;
    }
}
let I = new A(i.h, {
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
    BILLING_SUBSCRIPTION_UPDATE_FAIL: p,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: p,
    PREMIUM_PAYMENT_UPDATE_FAIL: p,
    SKU_PURCHASE_FAIL: p,
    GIFT_CODE_REDEEM_FAILURE: p,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (E = t), (_ = !1);
    },
    PAYMENT_UPDATE: g,
    BILLING_PAYMENT_FETCH_SUCCESS: g,
});
