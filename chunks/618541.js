let i, a;
var o,
    s = r(411104);
var l = r(442837),
    u = r(544891),
    c = r(570140),
    d = r(358085),
    f = r(981631);
function p(e, n, r) {
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
let h = null,
    _ = null,
    m = null;
function g(e) {
    let { client: n } = e;
    h = n;
}
function E(e) {
    let { paypalClient: n } = e;
    _ = n;
}
function v(e) {
    let { venmoClient: n } = e;
    m = n;
}
function y(e) {
    let { paymentSourceType: n, state: r, path: a, query: o } = e;
    if (n !== f.HeQ.PAYPAL || r !== i) return;
    let s = window.popupBridge.onComplete;
    'function' == typeof s &&
        s(null, {
            path: a,
            queryItems: o
        });
}
function b(e) {
    let { paymentSourceType: n, state: r } = e;
    n === f.HeQ.PAYPAL && (i = r);
}
function I() {
    _ = null;
}
function T() {
    m = null;
}
(0, d.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == i) throw Error('popupBridgeState is unset');
            return (0, u.K0)() + f.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(f.gg$.BRAINTREE, i);
        },
        open: (e) => {
            (a = e), window.open(e), A.emitChange();
        }
    });
class S extends (o = l.ZP.Store) {
    getClient() {
        return h;
    }
    getPayPalClient() {
        return _;
    }
    getVenmoClient() {
        return m;
    }
    getLastURL() {
        return a;
    }
}
p(S, 'displayName', 'BraintreeStore');
let A = new S(c.Z, {
    BRAINTREE_CREATE_CLIENT_SUCCESS: g,
    BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: E,
    BILLING_POPUP_BRIDGE_CALLBACK: y,
    BILLING_POPUP_BRIDGE_STATE_UPDATE: b,
    BRAINTREE_TEARDOWN_PAYPAL_CLIENT: I,
    BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: v,
    BRAINTREE_TEARDOWN_VENMO_CLIENT: T
});
n.Z = A;
