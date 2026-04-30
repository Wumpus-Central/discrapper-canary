"use strict";
let i, r;
n.d(t, { A: () => p });
var s = n(17928),
    a = n(636537),
    o = n(228366),
    l = n(723702),
    u = n(652215);
let c = null,
    d = null,
    _ = null;
(0, l.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == i) throw Error("popupBridgeState is unset");
            return (0, a.TP)() + u.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(u.kM_.BRAINTREE, i);
        },
        open: (e) => {
            (r = e), window.open(e), h.emitChange();
        },
    });
class f extends s.Ay.Store {
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
        return r;
    }
}
let h = new f(o.h, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: function (e) {
            let { client: t } = e;
            c = t;
        },
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function (e) {
            let { paypalClient: t } = e;
            d = t;
        },
        BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { paymentSourceType: t, state: n, path: r, query: s } = e;
            if (t !== u.hes.PAYPAL || n !== i) return;
            let a = window.popupBridge.onComplete;
            "function" == typeof a && a(null, { path: r, queryItems: s });
        },
        BILLING_POPUP_BRIDGE_STATE_UPDATE: function (e) {
            let { paymentSourceType: t, state: n } = e;
            t === u.hes.PAYPAL && (i = n);
        },
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function () {
            d = null;
        },
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function (e) {
            let { venmoClient: t } = e;
            _ = t;
        },
        BRAINTREE_TEARDOWN_VENMO_CLIENT: function () {
            _ = null;
        },
    }),
    p = h;
