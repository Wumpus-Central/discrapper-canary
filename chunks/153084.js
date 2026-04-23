"use strict";
n.d(t, { A: () => I });
var i = n(17928),
    r = n(228366),
    s = n(158032),
    a = n(830382),
    o = n(136857),
    l = n(739508),
    d = n(71532),
    _ = n(652215),
    u = n(985018);
let c = !1,
    E = null,
    h = null;
function m() {
    (c = !1), (h = null), (E = null);
}
function f(e) {
    let { error: t } = e,
        { code: n, paymentId: i } = t;
    if (n !== o.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (c = !1), !1;
    c || ((c = !0), (E = i), n === o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && g(i));
}
async function g(e) {
    if (null == e) return;
    let { error: t } = await (0, d.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, l.pM)(e, { extra: { authenticationError: t } });
    }
}
function p(e) {
    let { payment: t } = e,
        n = [_.__0.COMPLETED, _.__0.FAILED, _.__0.CANCELED];
    if (!c || t.id !== E || !n.includes(t.status)) return !1;
    if (((c = !1), (E = null), t.status === _.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === o.tG.BILLING_INSUFFICIENT_FUNDS && (e = o.tG.BILLING_INSUFFICIENT_FUNDS),
            (h = new o.Ay(u.intl.string(u.t.khEaRI), e));
    } else (h = null), r.h.wait(s.ET), r.h.wait(a.T3);
}
class A extends i.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return c;
    }
    get error() {
        return h;
    }
    get awaitingPaymentId() {
        return E;
    }
}
let I = new A(r.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: m,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: m,
    PREMIUM_PAYMENT_ERROR_CLEAR: m,
    PREMIUM_PAYMENT_MODAL_CLOSE: m,
    PREMIUM_PAYMENT_MODAL_OPEN: m,
    PREMIUM_PAYMENT_SUBSCRIBE_START: m,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: m,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: m,
    SKU_PURCHASE_MODAL_CLOSE: m,
    SKU_PURCHASE_MODAL_OPEN: m,
    SKU_PURCHASE_START: m,
    SKU_PURCHASE_SUCCESS: m,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: f,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: f,
    PREMIUM_PAYMENT_UPDATE_FAIL: f,
    SKU_PURCHASE_FAIL: f,
    GIFT_CODE_REDEEM_FAILURE: f,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (h = t), (c = !1);
    },
    PAYMENT_UPDATE: p,
    BILLING_PAYMENT_FETCH_SUCCESS: p,
});
