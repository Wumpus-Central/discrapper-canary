n.d(t, { A: () => N });
var r = n(17928),
    l = n(228366),
    i = n(158032),
    o = n(830382),
    u = n(136857),
    s = n(739508),
    a = n(71532),
    c = n(652215),
    d = n(375708);
let E = !1,
    C = null,
    _ = null,
    h = !1;
function A() {
    (E = !1), (_ = null), (C = null), (h = !1);
}
function p(e) {
    let { error: t } = e,
        { code: n, paymentId: r } = t;
    if (n !== u.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== u.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (E = !1), !1;
    E || ((E = !0), (C = r), (h = !1), n === u.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && I(r));
}
async function I(e) {
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
    if (!E || t.id !== C || !n.includes(t.status)) return !1;
    if (((E = !1), (C = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === u.tG.BILLING_INSUFFICIENT_FUNDS && (e = u.tG.BILLING_INSUFFICIENT_FUNDS),
            (_ = new u.Ay(d.intl.string(d.t.khEaRI), e));
    } else (_ = null), l.h.wait(i.ET), l.h.wait(o.T3);
}
class f extends r.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return E;
    }
    get error() {
        return _;
    }
    get awaitingPaymentId() {
        return C;
    }
    get wasCancelled() {
        return h;
    }
}
let N = new f(l.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: A,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: A,
    PAYMENT_AUTHENTICATION_CANCEL: function () {
        (E = !1), (C = null), (_ = null), (h = !0);
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
        (_ = t), (E = !1);
    },
    PAYMENT_UPDATE: S,
    BILLING_PAYMENT_FETCH_SUCCESS: S,
});
