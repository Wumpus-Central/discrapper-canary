n.d(t, { A: () => p });
var r = n(17928),
    l = n(228366),
    i = n(158032),
    s = n(830382),
    u = n(136857),
    o = n(739508),
    a = n(71532),
    c = n(652215),
    d = n(375708);
let E = !1,
    h = null,
    A = null,
    f = !1;
function g() {
    (E = !1), (A = null), (h = null), (f = !1);
}
function _(e) {
    let { error: t } = e,
        { code: n, paymentId: r } = t;
    if (n !== u.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== u.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (E = !1), !1;
    E || ((E = !0), (h = r), (f = !1), n === u.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && C(r));
}
async function C(e) {
    if (null == e) return;
    let { error: t } = await (0, a.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, o.pM)(e, { extra: { authenticationError: t } });
    }
}
function S(e) {
    let { payment: t } = e,
        n = [c.__0.COMPLETED, c.__0.FAILED, c.__0.CANCELED];
    if (!E || t.id !== h || !n.includes(t.status)) return !1;
    if (((E = !1), (h = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === u.tG.BILLING_INSUFFICIENT_FUNDS && (e = u.tG.BILLING_INSUFFICIENT_FUNDS),
            (A = new u.Ay(d.intl.string(d.t.khEaRI), e));
    } else (A = null), l.h.wait(i.ET), l.h.wait(s.T3);
}
class N extends r.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return E;
    }
    get error() {
        return A;
    }
    get awaitingPaymentId() {
        return h;
    }
    get wasCancelled() {
        return f;
    }
}
let p = new N(l.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: g,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: g,
    PAYMENT_AUTHENTICATION_CANCEL: function () {
        (E = !1), (h = null), (A = null), (f = !0);
    },
    PREMIUM_PAYMENT_ERROR_CLEAR: g,
    PREMIUM_PAYMENT_MODAL_CLOSE: g,
    PREMIUM_PAYMENT_MODAL_OPEN: g,
    CHECKOUT_MODAL_CLOSE: g,
    PREMIUM_PAYMENT_SUBSCRIBE_START: g,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: g,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: g,
    SKU_PURCHASE_MODAL_CLOSE: g,
    SKU_PURCHASE_MODAL_OPEN: g,
    SKU_PURCHASE_START: g,
    SKU_PURCHASE_SUCCESS: g,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: _,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: _,
    PREMIUM_PAYMENT_UPDATE_FAIL: _,
    SKU_PURCHASE_FAIL: _,
    GIFT_CODE_REDEEM_FAILURE: _,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (A = t), (E = !1);
    },
    PAYMENT_UPDATE: S,
    BILLING_PAYMENT_FETCH_SUCCESS: S,
});
