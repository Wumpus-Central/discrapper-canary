n.d(t, { A: () => T });
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
    p = null;
function C() {
    (m = !1), (p = null), (E = null);
}
function _(e) {
    let { error: t } = e,
        { code: n, paymentId: l } = t;
    if (n !== o.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (m = !1), !1;
    m || ((m = !0), (E = l), n === o.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && h(l));
}
async function h(e) {
    if (null == e) return;
    let { error: t } = await (0, u.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, s.pM)(e, { extra: { authenticationError: t } });
    }
}
function A(e) {
    let { payment: t } = e,
        n = [c.__0.COMPLETED, c.__0.FAILED, c.__0.CANCELED];
    if (!m || t.id !== E || !n.includes(t.status)) return !1;
    if (((m = !1), (E = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === o.tG.BILLING_INSUFFICIENT_FUNDS && (e = o.tG.BILLING_INSUFFICIENT_FUNDS),
            (p = new o.Ay(d.intl.string(d.t.khEaRI), e));
    } else (p = null), r.h.wait(i.ET), r.h.wait(a.T3);
}
class N extends l.Ay.Store {
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
}
let T = new N(r.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: C,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: C,
    PREMIUM_PAYMENT_ERROR_CLEAR: C,
    PREMIUM_PAYMENT_MODAL_CLOSE: C,
    PREMIUM_PAYMENT_MODAL_OPEN: C,
    PREMIUM_PAYMENT_SUBSCRIBE_START: C,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: C,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: C,
    SKU_PURCHASE_MODAL_CLOSE: C,
    SKU_PURCHASE_MODAL_OPEN: C,
    SKU_PURCHASE_START: C,
    SKU_PURCHASE_SUCCESS: C,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: _,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: _,
    PREMIUM_PAYMENT_UPDATE_FAIL: _,
    SKU_PURCHASE_FAIL: _,
    GIFT_CODE_REDEEM_FAILURE: _,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (p = t), (m = !1);
    },
    PAYMENT_UPDATE: A,
    BILLING_PAYMENT_FETCH_SUCCESS: A,
});
