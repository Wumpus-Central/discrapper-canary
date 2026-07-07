n.d(t, { A: () => I });
var l = n(17928),
    r = n(228366),
    i = n(158032),
    a = n(830382),
    o = n(136857),
    s = n(739508),
    u = n(71532),
    c = n(652215),
    d = n(375708);
let m = !1,
    E = null,
    p = null,
    C = !1;
function _() {
    (m = !1), (p = null), (E = null), (C = !1);
}
function h(e) {
    let { error: t } = e,
        { code: n, paymentId: l } = t;
    if (n !== o.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (m = !1), !1;
    m || ((m = !0), (E = l), (C = !1), n === o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && A(l));
}
async function A(e) {
    if (null == e) return;
    let { error: t } = await (0, u.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, s.pM)(e, { extra: { authenticationError: t } });
    }
}
function N(e) {
    let { payment: t } = e,
        n = [c.__0.COMPLETED, c.__0.FAILED, c.__0.CANCELED];
    if (!m || t.id !== E || !n.includes(t.status)) return !1;
    if (((m = !1), (E = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === o.tG.BILLING_INSUFFICIENT_FUNDS && (e = o.tG.BILLING_INSUFFICIENT_FUNDS),
            (p = new o.Ay(d.intl.string(d.t.khEaRI), e));
    } else (p = null), r.h.wait(i.ET), r.h.wait(a.T3);
}
class T extends l.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return m;
    }
    get error() {
        return p;
    }
    get awaitingPaymentId() {
        return E;
    }
    get wasCancelled() {
        return C;
    }
}
let I = new T(r.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: _,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: _,
    PAYMENT_AUTHENTICATION_CANCEL: function () {
        (m = !1), (E = null), (p = null), (C = !0);
    },
    PREMIUM_PAYMENT_ERROR_CLEAR: _,
    PREMIUM_PAYMENT_MODAL_CLOSE: _,
    PREMIUM_PAYMENT_MODAL_OPEN: _,
    PREMIUM_PAYMENT_SUBSCRIBE_START: _,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: _,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: _,
    SKU_PURCHASE_MODAL_CLOSE: _,
    SKU_PURCHASE_MODAL_OPEN: _,
    SKU_PURCHASE_START: _,
    SKU_PURCHASE_SUCCESS: _,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: h,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: h,
    PREMIUM_PAYMENT_UPDATE_FAIL: h,
    SKU_PURCHASE_FAIL: h,
    GIFT_CODE_REDEEM_FAILURE: h,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (p = t), (m = !1);
    },
    PAYMENT_UPDATE: N,
    BILLING_PAYMENT_FETCH_SUCCESS: N,
});
