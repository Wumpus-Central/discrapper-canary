let i, r;
n.d(t, { Z: () => S }), n(411104);
var a,
    s = n(442837),
    o = n(544891),
    l = n(570140),
    u = n(358085),
    c = n(981631);
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
    let { paymentSourceType: t, state: n, path: r, query: a } = e;
    if (t !== c.HeQ.PAYPAL || n !== i) return;
    let s = window.popupBridge.onComplete;
    'function' == typeof s &&
        s(null, {
            path: r,
            queryItems: a
        });
}
function v(e) {
    let { paymentSourceType: t, state: n } = e;
    t === c.HeQ.PAYPAL && (i = n);
}
function y() {
    _ = null;
}
function I() {
    p = null;
}
(0, u.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == i) throw Error('popupBridgeState is unset');
            return (0, o.K0)() + c.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(c.gg$.BRAINTREE, i);
        },
        open: (e) => {
            (r = e), window.open(e), b.emitChange();
        }
    });
class T extends (a = s.ZP.Store) {
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
        return r;
    }
}
d(T, 'displayName', 'BraintreeStore');
let b = new T(l.Z, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: h,
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: m,
        BILLING_POPUP_BRIDGE_CALLBACK: E,
        BILLING_POPUP_BRIDGE_STATE_UPDATE: v,
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: y,
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: g,
        BRAINTREE_TEARDOWN_VENMO_CLIENT: I
    }),
    S = b;
