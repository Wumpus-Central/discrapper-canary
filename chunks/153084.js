n.d(t, { A: () => A });
var l = n(17928),
    r = n(228366),
    i = n(158032),
    o = n(830382),
    s = n(136857),
    a = n(739508),
    u = n(71532),
    c = n(652215),
    d = n(375708);
let E = !1,
    C = null,
    h = null,
    _ = !1;
function m() {
    (E = !1), (h = null), (C = null), (_ = !1);
}
function S(e) {
    let { error: t } = e,
        { code: n, paymentId: l } = t;
    if (n !== s.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== s.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (E = !1), !1;
    E || ((E = !0), (C = l), (_ = !1), n === s.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && I(l));
}
async function I(e) {
    if (null == e) return;
    let { error: t } = await (0, u.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, a.pM)(e, { extra: { authenticationError: t } });
    }
}
function p(e) {
    let { payment: t } = e,
        n = [c.__0.COMPLETED, c.__0.FAILED, c.__0.CANCELED];
    if (!E || t.id !== C || !n.includes(t.status)) return !1;
    if (((E = !1), (C = null), t.status === c.__0.FAILED)) {
        let e = null;
        t.metadata?.billing_error_code === s.tG.BILLING_INSUFFICIENT_FUNDS && (e = s.tG.BILLING_INSUFFICIENT_FUNDS),
            (h = new s.Ay(d.intl.string(d.t.khEaRI), e));
    } else (h = null), r.h.wait(i.ET), r.h.wait(o.T3);
}
class f extends l.Ay.Store {
    static displayName = "PaymentAuthenticationStore";
    get isAwaitingAuthentication() {
        return E;
    }
    get error() {
        return h;
    }
    get awaitingPaymentId() {
        return C;
    }
    get wasCancelled() {
        return _;
    }
}
let A = new f(r.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: m,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: m,
    PAYMENT_AUTHENTICATION_CANCEL: function () {
        (E = !1), (C = null), (h = null), (_ = !0);
    },
    PREMIUM_PAYMENT_ERROR_CLEAR: m,
    PREMIUM_PAYMENT_MODAL_CLOSE: m,
    PREMIUM_PAYMENT_MODAL_OPEN: m,
    CHECKOUT_MODAL_CLOSE: m,
    PREMIUM_PAYMENT_SUBSCRIBE_START: m,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: m,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: m,
    SKU_PURCHASE_MODAL_CLOSE: m,
    SKU_PURCHASE_MODAL_OPEN: m,
    SKU_PURCHASE_START: m,
    SKU_PURCHASE_SUCCESS: m,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: S,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: S,
    PREMIUM_PAYMENT_UPDATE_FAIL: S,
    SKU_PURCHASE_FAIL: S,
    GIFT_CODE_REDEEM_FAILURE: S,
    PAYMENT_AUTHENTICATION_ERROR: function (e) {
        let { error: t } = e;
        (h = t), (E = !1);
    },
    PAYMENT_UPDATE: p,
    BILLING_PAYMENT_FETCH_SUCCESS: p,
});
