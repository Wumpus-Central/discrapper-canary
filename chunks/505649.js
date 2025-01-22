var i,
    a = r(411104);
var o = r(442837),
    s = r(570140),
    l = r(366939),
    u = r(16084),
    c = r(128069),
    d = r(122289),
    f = r(622999),
    p = r(981631),
    h = r(388032);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = !1,
    g = null,
    E = null;
function v() {
    (m = !1), (E = null), (g = null);
}
function y(e) {
    let { error: n } = e,
        { code: r, paymentId: i } = n;
    if (r !== c.ZP.ErrorCodes.CONFIRMATION_REQUIRED && r !== c.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return (m = !1), !1;
    !m && ((m = !0), (g = i), r === c.ZP.ErrorCodes.AUTHENTICATION_REQUIRED && b(i));
}
async function b(e) {
    if (null == e) return;
    let { error: n } = await (0, f.oe)(e);
    if (null != n) {
        let e = Error(n);
        (0, d.q2)(e, { extra: { authenticationError: n } });
    }
}
function I(e) {
    let { error: n } = e;
    (E = n), (m = !1);
}
function T(e) {
    let { payment: n } = e,
        r = [p.PyE.COMPLETED, p.PyE.FAILED, p.PyE.CANCELED];
    if (!m || n.id !== g || !r.includes(n.status)) return !1;
    if (((m = !1), (g = null), n.status === p.PyE.FAILED)) {
        var i;
        let e = null;
        (null === (i = n.metadata) || void 0 === i ? void 0 : i.billing_error_code) === c.SM.BILLING_INSUFFICIENT_FUNDS && (e = c.SM.BILLING_INSUFFICIENT_FUNDS), (E = new c.ZP(h.intl.string(h.t.khEaRE), e));
    } else (E = null), s.Z.wait(l.fw), s.Z.wait(u.pB);
}
class S extends (i = o.ZP.Store) {
    get isAwaitingAuthentication() {
        return m;
    }
    get error() {
        return E;
    }
    get awaitingPaymentId() {
        return g;
    }
}
_(S, 'displayName', 'PaymentAuthenticationStore'),
    (n.Z = new S(s.Z, {
        BILLING_SUBSCRIPTION_UPDATE_START: v,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: v,
        PREMIUM_PAYMENT_ERROR_CLEAR: v,
        PREMIUM_PAYMENT_MODAL_CLOSE: v,
        PREMIUM_PAYMENT_MODAL_OPEN: v,
        PREMIUM_PAYMENT_SUBSCRIBE_START: v,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: v,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: v,
        SKU_PURCHASE_MODAL_CLOSE: v,
        SKU_PURCHASE_MODAL_OPEN: v,
        SKU_PURCHASE_START: v,
        SKU_PURCHASE_SUCCESS: v,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: y,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: y,
        PREMIUM_PAYMENT_UPDATE_FAIL: y,
        SKU_PURCHASE_FAIL: y,
        GIFT_CODE_REDEEM_FAILURE: y,
        PAYMENT_AUTHENTICATION_ERROR: I,
        PAYMENT_UPDATE: T,
        BILLING_PAYMENT_FETCH_SUCCESS: T
    }));
