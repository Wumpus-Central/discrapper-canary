n.d(e, { A: () => P });
var r = n(17928),
    E = n(228366),
    l = n(158032),
    _ = n(830382),
    i = n(136857),
    A = n(739508),
    s = n(71532),
    a = n(652215),
    I = n(375708);
let T = !1,
    u = null,
    S = null;
function C() {
    (T = !1), (S = null), (u = null);
}
function U(t) {
    let { error: e } = t,
        { code: n, paymentId: r } = e;
    if (n !== i.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== i.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (T = !1), !1;
    T || ((T = !0), (u = r), n === i.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && o(r));
}
async function o(t) {
    if (null == t) return;
    let { error: e } = await (0, s.ap)(t);
    if (null != e) {
        let t = Error(e);
        (0, A.pM)(t, { extra: { authenticationError: e } });
    }
}
function R(t) {
    let { payment: e } = t,
        n = [a.__0.COMPLETED, a.__0.FAILED, a.__0.CANCELED];
    if (!T || e.id !== u || !n.includes(e.status)) return !1;
    if (((T = !1), (u = null), e.status === a.__0.FAILED)) {
        let t = null;
        e.metadata?.billing_error_code === i.tG.BILLING_INSUFFICIENT_FUNDS && (t = i.tG.BILLING_INSUFFICIENT_FUNDS),
            (S = new i.Ay(I.intl.string(I.t.khEaRI), t));
    } else (S = null), E.h.wait(l.ET), E.h.wait(_.T3);
}
class N extends r.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return T;
    }
    get error() {
        return S;
    }
    get awaitingPaymentId() {
        return u;
    }
}
let P = new N(E.h, {
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
    BILLING_SUBSCRIPTION_UPDATE_FAIL: U,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: U,
    PREMIUM_PAYMENT_UPDATE_FAIL: U,
    SKU_PURCHASE_FAIL: U,
    GIFT_CODE_REDEEM_FAILURE: U,
    PAYMENT_AUTHENTICATION_ERROR: function (t) {
        let { error: e } = t;
        (S = e), (T = !1);
    },
    PAYMENT_UPDATE: R,
    BILLING_PAYMENT_FETCH_SUCCESS: R,
});
