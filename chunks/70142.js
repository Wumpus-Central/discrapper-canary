let r, i;
n.d(t, { A: () => S }), n(65821);
var a,
    s = n(311907),
    o = n(562465),
    l = n(73153),
    c = n(723702),
    u = n(652215);
function d(e, t, n) {
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
let f = null,
    p = null,
    _ = null;
function h(e) {
    let { client: t } = e;
    f = t;
}
function m(e) {
    let { paypalClient: t } = e;
    p = t;
}
function g(e) {
    let { venmoClient: t } = e;
    _ = t;
}
function E(e) {
    let { paymentSourceType: t, state: n, path: i, query: a } = e;
    if (t !== u.hes.PAYPAL || n !== r) return;
    let s = window.popupBridge.onComplete;
    "function" == typeof s &&
        s(null, {
            path: i,
            queryItems: a,
        });
}
function b(e) {
    let { paymentSourceType: t, state: n } = e;
    t === u.hes.PAYPAL && (r = n);
}
function y() {
    p = null;
}
function O() {
    _ = null;
}
(0, c.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == r) throw Error("popupBridgeState is unset");
            return (0, o.TP)() + u.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(u.kM_.BRAINTREE, r);
        },
        open: (e) => {
            (i = e), window.open(e), v.emitChange();
        },
    });
class A extends (a = s.Ay.Store) {
    getClient() {
        return f;
    }
    getPayPalClient() {
        return p;
    }
    getVenmoClient() {
        return _;
    }
    getLastURL() {
        return i;
    }
}
d(A, "displayName", "BraintreeStore");
let v = new A(l.h, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: h,
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: m,
        BILLING_POPUP_BRIDGE_CALLBACK: E,
        BILLING_POPUP_BRIDGE_STATE_UPDATE: b,
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: y,
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: g,
        BRAINTREE_TEARDOWN_VENMO_CLIENT: O,
    }),
    S = v;
