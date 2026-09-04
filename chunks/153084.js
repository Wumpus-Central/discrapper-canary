n.d(t, { A: () => I });
var r = n(17928),
    l = n(228366),
    i = n(158032),
    o = n(830382),
    a = n(136857),
    s = n(739508),
    u = n(71532),
    c = n(652215),
    d = n(375708);
let C = !1,
    h = null,
    E = null,
    m = !1;
function p() {
    (C = !1), (E = null), (h = null), (m = !1);
}
function _(e) {
    let { error: t } = e,
        { code: n, paymentId: r } = t;
    if (n !== a.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== a.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (C = !1), !1;
    C || ((C = !0), (h = r), (m = !1), n === a.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && f(r));
}
async function f(e) {
    if (null == e) return;
    let { error: t } = await (0, u.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, s.pM)(e, { extra: { authenticationError: t } });
    }
}
function S(e) {
    let { payment: t } = e,
        n = [c.__0.COMPLETED, c.__0.FAILED, c.__0.CANCELED];
    if (!C || t.id !== h || !n.includes(t.status)) return !1;
    if (((C = !1), (h = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === a.tG.BILLING_INSUFFICIENT_FUNDS && (e = a.tG.BILLING_INSUFFICIENT_FUNDS),
            (E = new a.Ay(d.intl.string(d.t.khEaRI), e));
    } else (E = null), l.h.wait(i.ET), l.h.wait(o.T3);
}
class A extends r.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return C;
    }
    get error() {
        return E;
    }
    get awaitingPaymentId() {
        return h;
    }
    get wasCancelled() {
        return m;
    }
}
let I = new A(l.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: p,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: p,
    PAYMENT_AUTHENTICATION_CANCEL: function () {
        (C = !1), (h = null), (E = null), (m = !0);
    },
    PREMIUM_PAYMENT_ERROR_CLEAR: p,
    PREMIUM_PAYMENT_MODAL_CLOSE: p,
    PREMIUM_PAYMENT_MODAL_OPEN: p,
    CHECKOUT_MODAL_CLOSE: p,
    PREMIUM_PAYMENT_SUBSCRIBE_START: p,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: p,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: p,
    SKU_PURCHASE_MODAL_CLOSE: p,
    SKU_PURCHASE_MODAL_OPEN: p,
    SKU_PURCHASE_START: p,
    SKU_PURCHASE_SUCCESS: p,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: _,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: _,
    PREMIUM_PAYMENT_UPDATE_FAIL: _,
    SKU_PURCHASE_FAIL: _,
    GIFT_CODE_REDEEM_FAILURE: _,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (E = t), (C = !1);
    },
    PAYMENT_UPDATE: S,
    BILLING_PAYMENT_FETCH_SUCCESS: S,
});
