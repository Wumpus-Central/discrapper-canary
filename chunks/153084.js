n.d(t, { A: () => g });
var l = n(17928),
    r = n(228366),
    i = n(158032),
    o = n(830382),
    u = n(136857),
    s = n(739508),
    a = n(71532),
    c = n(652215),
    d = n(375708);
let C = !1,
    E = null,
    h = null,
    _ = !1;
function A() {
    (C = !1), (h = null), (E = null), (_ = !1);
}
function p(e) {
    let { error: t } = e,
        { code: n, paymentId: l } = t;
    if (n !== u.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== u.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (C = !1), !1;
    C || ((C = !0), (E = l), (_ = !1), n === u.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && f(l));
}
async function f(e) {
    if (null == e) return;
    let { error: t } = await (0, a.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, s.pM)(e, { extra: { authenticationError: t } });
    }
}
function S(e) {
    let { payment: t } = e,
        n = [c.__0.COMPLETED, c.__0.FAILED, c.__0.CANCELED];
    if (!C || t.id !== E || !n.includes(t.status)) return !1;
    if (((C = !1), (E = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === u.tG.BILLING_INSUFFICIENT_FUNDS && (e = u.tG.BILLING_INSUFFICIENT_FUNDS),
            (h = new u.Ay(d.intl.string(d.t.khEaRI), e));
    } else (h = null), r.h.wait(i.ET), r.h.wait(o.T3);
}
class I extends l.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return C;
    }
    get error() {
        return h;
    }
    get awaitingPaymentId() {
        return E;
    }
    get wasCancelled() {
        return _;
    }
}
let g = new I(r.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: A,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: A,
    PAYMENT_AUTHENTICATION_CANCEL: function () {
        (C = !1), (E = null), (h = null), (_ = !0);
    },
    PREMIUM_PAYMENT_ERROR_CLEAR: A,
    PREMIUM_PAYMENT_MODAL_CLOSE: A,
    PREMIUM_PAYMENT_MODAL_OPEN: A,
    CHECKOUT_MODAL_CLOSE: A,
    PREMIUM_PAYMENT_SUBSCRIBE_START: A,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: A,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: A,
    SKU_PURCHASE_MODAL_CLOSE: A,
    SKU_PURCHASE_MODAL_OPEN: A,
    SKU_PURCHASE_START: A,
    SKU_PURCHASE_SUCCESS: A,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: p,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: p,
    PREMIUM_PAYMENT_UPDATE_FAIL: p,
    SKU_PURCHASE_FAIL: p,
    GIFT_CODE_REDEEM_FAILURE: p,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (h = t), (C = !1);
    },
    PAYMENT_UPDATE: S,
    BILLING_PAYMENT_FETCH_SUCCESS: S,
});
