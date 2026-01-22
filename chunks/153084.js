n.d(t, { A: () => v }), n(65821);
var r,
    i = n(311907),
    a = n(73153),
    s = n(158032),
    o = n(830382),
    l = n(136857),
    c = n(739508),
    u = n(71532),
    d = n(652215),
    f = n(985018);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = !1,
    h = null,
    m = null;
function g() {
    (_ = !1), (m = null), (h = null);
}
function E(e) {
    let { error: t } = e,
        { code: n, paymentId: r } = t;
    if (n !== l.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== l.Ay.ErrorCodes.AUTHENTICATION_REQUIRED)
        return (_ = !1), !1;
    _ || ((_ = !0), (h = r), n === l.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && b(r));
}
async function b(e) {
    if (null == e) return;
    let { error: t } = await (0, u.ap)(e);
    if (null != t) {
        let e = Error(t);
        (0, c.pM)(e, { extra: { authenticationError: t } });
    }
}
function y(e) {
    let { error: t } = e;
    (m = t), (_ = !1);
}
function O(e) {
    let { payment: t } = e,
        n = [d.__0.COMPLETED, d.__0.FAILED, d.__0.CANCELED];
    if (!_ || t.id !== h || !n.includes(t.status)) return !1;
    if (((_ = !1), (h = null), t.status === d.__0.FAILED)) {
        var r;
        let e = null;
        (null == (r = t.metadata) ? void 0 : r.billing_error_code) === l.tG.BILLING_INSUFFICIENT_FUNDS &&
            (e = l.tG.BILLING_INSUFFICIENT_FUNDS),
            (m = new l.Ay(f.intl.string(f.t.khEaRI), e));
    } else (m = null), a.h.wait(s.ET), a.h.wait(o.T3);
}
class A extends (r = i.Ay.Store) {
    get isAwaitingAuthentication() {
        return _;
    }
    get error() {
        return m;
    }
    get awaitingPaymentId() {
        return h;
    }
}
p(A, "displayName", "PaymentAuthenticationStore");
let v = new A(a.h, {
    BILLING_SUBSCRIPTION_UPDATE_START: g,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: g,
    PREMIUM_PAYMENT_ERROR_CLEAR: g,
    PREMIUM_PAYMENT_MODAL_CLOSE: g,
    PREMIUM_PAYMENT_MODAL_OPEN: g,
    PREMIUM_PAYMENT_SUBSCRIBE_START: g,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: g,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: g,
    SKU_PURCHASE_MODAL_CLOSE: g,
    SKU_PURCHASE_MODAL_OPEN: g,
    SKU_PURCHASE_START: g,
    SKU_PURCHASE_SUCCESS: g,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: E,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
    PREMIUM_PAYMENT_UPDATE_FAIL: E,
    SKU_PURCHASE_FAIL: E,
    GIFT_CODE_REDEEM_FAILURE: E,
    PAYMENT_AUTHENTICATION_ERROR: y,
    PAYMENT_UPDATE: O,
    BILLING_PAYMENT_FETCH_SUCCESS: O,
});
