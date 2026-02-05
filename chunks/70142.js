"use strict";
let r, i;
n.d(t, { A: () => y });
var a = n(311907),
    s = n(562465),
    o = n(73153),
    l = n(723702),
    u = n(652215);
let c = null,
    d = null,
    _ = null;
function f(e) {
    let { client: t } = e;
    c = t;
}
function p(e) {
    let { paypalClient: t } = e;
    d = t;
}
function h(e) {
    let { venmoClient: t } = e;
    _ = t;
}
function m(e) {
    let { paymentSourceType: t, state: n, path: i, query: a } = e;
    if (t !== u.hes.PAYPAL || n !== r) return;
    let s = window.popupBridge.onComplete;
    "function" == typeof s && s(null, { path: i, queryItems: a });
}
function g(e) {
    let { paymentSourceType: t, state: n } = e;
    t === u.hes.PAYPAL && (r = n);
}
function E() {
    d = null;
}
function A() {
    _ = null;
}
(0, l.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == r) throw Error("popupBridgeState is unset");
            return (0, s.TP)() + u.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(u.kM_.BRAINTREE, r);
        },
        open: (e) => {
            (i = e), window.open(e), T.emitChange();
        },
    });
class I extends a.Ay.Store {
    static displayName = "BraintreeStore";
    getClient() {
        return c;
    }
    getPayPalClient() {
        return d;
    }
    getVenmoClient() {
        return _;
    }
    getLastURL() {
        return i;
    }
}
let T = new I(o.h, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: f,
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: p,
        BILLING_POPUP_BRIDGE_CALLBACK: m,
        BILLING_POPUP_BRIDGE_STATE_UPDATE: g,
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: E,
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: h,
        BRAINTREE_TEARDOWN_VENMO_CLIENT: A,
    }),
    y = T;
