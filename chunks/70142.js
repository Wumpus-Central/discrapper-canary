let i, l;
n.d(t, { A: () => p });
var r = n(17928),
    a = n(636537),
    s = n(228366),
    u = n(723702),
    o = n(652215);
let c = null,
    d = null,
    E = null;
(0, u.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == i) throw Error("popupBridgeState is unset");
            return (0, a.TP)() + o.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(o.kM_.BRAINTREE, i);
        },
        open: (e) => {
            (l = e), window.open(e), A.emitChange();
        },
    });
class _ extends r.Ay.Store {
    static displayName = "BraintreeStore";
    getClient() {
        return c;
    }
    getPayPalClient() {
        return d;
    }
    getVenmoClient() {
        return E;
    }
    getLastURL() {
        return l;
    }
}
let A = new _(s.h, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: function (e) {
            let { client: t } = e;
            c = t;
        },
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function (e) {
            let { paypalClient: t } = e;
            d = t;
        },
        BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { paymentSourceType: t, state: n, path: l, query: r } = e;
            if (t !== o.hes.PAYPAL || n !== i) return;
            let a = window.popupBridge.onComplete;
            "function" == typeof a && a(null, { path: l, queryItems: r });
        },
        BILLING_POPUP_BRIDGE_STATE_UPDATE: function (e) {
            let { paymentSourceType: t, state: n } = e;
            t === o.hes.PAYPAL && (i = n);
        },
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function () {
            d = null;
        },
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function (e) {
            let { venmoClient: t } = e;
            E = t;
        },
        BRAINTREE_TEARDOWN_VENMO_CLIENT: function () {
            E = null;
        },
    }),
    p = A;
