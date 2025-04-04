let r, i;
n.d(t, { Z: () => S }), n(411104);
var o,
    a = n(442837),
    s = n(544891),
    l = n(570140),
    c = n(358085),
    u = n(981631);
function d(e, t, n) {
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
let f = null,
    _ = null,
    p = null;
function h(e) {
    let { client: t } = e;
    f = t;
}
function m(e) {
    let { paypalClient: t } = e;
    _ = t;
}
function g(e) {
    let { venmoClient: t } = e;
    p = t;
}
function E(e) {
    let { paymentSourceType: t, state: n, path: i, query: o } = e;
    if (t !== u.HeQ.PAYPAL || n !== r) return;
    let a = window.popupBridge.onComplete;
    'function' == typeof a &&
        a(null, {
            path: i,
            queryItems: o
        });
}
function b(e) {
    let { paymentSourceType: t, state: n } = e;
    t === u.HeQ.PAYPAL && (r = n);
}
function y() {
    _ = null;
}
function v() {
    p = null;
}
(0, c.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == r) throw Error('popupBridgeState is unset');
            return (0, s.K0)() + u.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(u.gg$.BRAINTREE, r);
        },
        open: (e) => {
            (i = e), window.open(e), I.emitChange();
        }
    });
class O extends (o = a.ZP.Store) {
    getClient() {
        return f;
    }
    getPayPalClient() {
        return _;
    }
    getVenmoClient() {
        return p;
    }
    getLastURL() {
        return i;
    }
}
d(O, 'displayName', 'BraintreeStore');
let I = new O(l.Z, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: h,
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: m,
        BILLING_POPUP_BRIDGE_CALLBACK: E,
        BILLING_POPUP_BRIDGE_STATE_UPDATE: b,
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: y,
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: g,
        BRAINTREE_TEARDOWN_VENMO_CLIENT: v
    }),
    S = I;
