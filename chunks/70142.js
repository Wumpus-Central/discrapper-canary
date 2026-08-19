"use strict";
let i, r;
n.d(t, { A: () => h });
var a = n(17928),
    s = n(636537),
    l = n(228366),
    o = n(723702),
    d = n(652215);
let c = null,
    u = null,
    _ = null;
(0, o.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == i) throw Error("popupBridgeState is unset");
            return (0, s.TP)() + d.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(d.kM_.BRAINTREE, i);
        },
        open: (e) => {
            (r = e), window.open(e), A.emitChange();
        },
    });
class E extends a.Ay.Store {
    static displayName = "BraintreeStore";
    getClient() {
        return c;
    }
    getPayPalClient() {
        return u;
    }
    getVenmoClient() {
        return _;
    }
    getLastURL() {
        return r;
    }
}
let A = new E(l.h, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: function (e) {
            let { client: t } = e;
            c = t;
        },
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function (e) {
            let { paypalClient: t } = e;
            u = t;
        },
        BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { paymentSourceType: t, state: n, path: r, query: a } = e;
            if (t !== d.hes.PAYPAL || n !== i) return;
            let s = window.popupBridge.onComplete;
            "function" == typeof s && s(null, { path: r, queryItems: a });
        },
        BILLING_POPUP_BRIDGE_STATE_UPDATE: function (e) {
            let { paymentSourceType: t, state: n } = e;
            t === d.hes.PAYPAL && (i = n);
        },
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function () {
            u = null;
        },
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function (e) {
            let { venmoClient: t } = e;
            _ = t;
        },
        BRAINTREE_TEARDOWN_VENMO_CLIENT: function () {
            _ = null;
        },
    }),
    h = A;
