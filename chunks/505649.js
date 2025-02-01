n.d(t, { Z: () => b }), n(411104);
var i,
    r = n(442837),
    a = n(570140),
    s = n(366939),
    o = n(16084),
    l = n(128069),
    u = n(122289),
    c = n(622999),
    d = n(981631),
    f = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = !1,
    h = null,
    m = null;
function g() {
    (p = !1), (m = null), (h = null);
}
function E(e) {
    let { error: t } = e,
        { code: n, paymentId: i } = t;
    if (n !== l.ZP.ErrorCodes.CONFIRMATION_REQUIRED && n !== l.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return (p = !1), !1;
    p || ((p = !0), (h = i), n === l.ZP.ErrorCodes.AUTHENTICATION_REQUIRED && v(i));
}
async function v(e) {
    if (null == e) return;
    let { error: t } = await (0, c.oe)(e);
    if (null != t) {
        let e = Error(t);
        (0, u.q2)(e, { extra: { authenticationError: t } });
    }
}
function y(e) {
    let { error: t } = e;
    (m = t), (p = !1);
}
function I(e) {
    let { payment: t } = e,
        n = [d.PyE.COMPLETED, d.PyE.FAILED, d.PyE.CANCELED];
    if (!p || t.id !== h || !n.includes(t.status)) return !1;
    if (((p = !1), (h = null), t.status === d.PyE.FAILED)) {
        var i;
        let e = null;
        (null === (i = t.metadata) || void 0 === i ? void 0 : i.billing_error_code) === l.SM.BILLING_INSUFFICIENT_FUNDS && (e = l.SM.BILLING_INSUFFICIENT_FUNDS), (m = new l.ZP(f.intl.string(f.t.khEaRE), e));
    } else (m = null), a.Z.wait(s.fw), a.Z.wait(o.pB);
}
class T extends (i = r.ZP.Store) {
    get isAwaitingAuthentication() {
        return p;
    }
    get error() {
        return m;
    }
    get awaitingPaymentId() {
        return h;
    }
}
_(T, 'displayName', 'PaymentAuthenticationStore');
let b = new T(a.Z, {
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
    PAYMENT_UPDATE: I,
    BILLING_PAYMENT_FETCH_SUCCESS: I
});
