let n, l;
i.d(t, { A: () => E });
var r = i(17928),
    s = i(636537),
    a = i(228366),
    u = i(723702),
    o = i(652215);
let d = null,
    c = null,
    p = null;
(0, u.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == n) throw Error("popupBridgeState is unset");
            return (0, s.TP)() + o.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(o.kM_.BRAINTREE, n);
        },
        open: (e) => {
            (l = e), window.open(e), h.emitChange();
        },
    });
class A extends r.Ay.Store {
    static displayName = "BraintreeStore";
    getClient() {
        return d;
    }
    getPayPalClient() {
        return c;
    }
    getVenmoClient() {
        return p;
    }
    getLastURL() {
        return l;
    }
}
let h = new A(a.h, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: function (e) {
            let { client: t } = e;
            d = t;
        },
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function (e) {
            let { paypalClient: t } = e;
            c = t;
        },
        BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { paymentSourceType: t, state: i, path: l, query: r } = e;
            if (t !== o.hes.PAYPAL || i !== n) return;
            let s = window.popupBridge.onComplete;
            "function" == typeof s && s(null, { path: l, queryItems: r });
        },
        BILLING_POPUP_BRIDGE_STATE_UPDATE: function (e) {
            let { paymentSourceType: t, state: i } = e;
            t === o.hes.PAYPAL && (n = i);
        },
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function () {
            c = null;
        },
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function (e) {
            let { venmoClient: t } = e;
            p = t;
        },
        BRAINTREE_TEARDOWN_VENMO_CLIENT: function () {
            p = null;
        },
    }),
    E = h;
