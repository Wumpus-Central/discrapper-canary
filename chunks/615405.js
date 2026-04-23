"use strict";
let r, i, s, a, o;
n.d(t, { A: () => C });
var l = n(311907),
    u = n(73153),
    c = n(652215);
let d = !1,
    _ = !1,
    f = !1,
    p = !1,
    h = !1,
    E = null,
    m = null,
    g = !1,
    A = !1;
function I() {
    d = !1;
}
function T() {
    r = void 0;
}
function S() {
    p = !1;
}
function y() {
    h = !0;
}
function N() {
    h = !1;
}
class v extends l.Ay.Store {
    static displayName = "BillingInfoStore";
    get isBusy() {
        return d || _ || h || f;
    }
    get isUpdatingPaymentSource() {
        return _;
    }
    get isRemovingPaymentSource() {
        return f;
    }
    get isSyncing() {
        return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
    get isSubscriptionFetching() {
        return p;
    }
    get isPaymentSourceFetching() {
        return null != r;
    }
    get editSourceError() {
        return E;
    }
    get removeSourceError() {
        return m;
    }
    get ipCountryCodeLoaded() {
        return void 0 !== i;
    }
    get ipCountryCode() {
        return i;
    }
    get ipCountryCodeRequest() {
        return s;
    }
    get ipLocationLoaded() {
        return void 0 !== a;
    }
    get ipLocation() {
        return a;
    }
    get ipLocationRequest() {
        return o;
    }
    get ipLocationHasError() {
        return A;
    }
    get ipCountryCodeWithFallback() {
        return i ?? c.Wzo;
    }
    get ipCountryCodeHasError() {
        return g;
    }
    get paymentSourcesFetchRequest() {
        return r;
    }
}
let C = new v(u.h, {
    BILLING_PAYMENT_SOURCE_CREATE_START: function () {
        d = !0;
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: I,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: I,
    STRIPE_TOKEN_FAILURE: I,
    BILLING_PAYMENT_SOURCE_REMOVE_START: function () {
        f = !0;
    },
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function () {
        f = !1;
    },
    BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function (e) {
        let { error: t } = e;
        (f = !1), (m = t);
    },
    BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function () {
        m = null;
    },
    BILLING_PAYMENT_SOURCE_UPDATE_START: function () {
        _ = !0;
    },
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function () {
        _ = !1;
    },
    BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function (e) {
        let { error: t } = e;
        (_ = !1), (E = t);
    },
    BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function () {
        E = null;
    },
    BILLING_PAYMENT_SOURCES_FETCH_START: function (e) {
        let { request: t } = e;
        r = t;
    },
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: T,
    BILLING_PAYMENT_SOURCES_FETCH_FAIL: T,
    BILLING_SUBSCRIPTION_FETCH_START: function () {
        p = !0;
    },
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: S,
    BILLING_SUBSCRIPTION_FETCH_FAIL: S,
    BILLING_SUBSCRIPTION_UPDATE_START: y,
    BILLING_SUBSCRIPTION_CANCEL_START: y,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: N,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: N,
    BILLING_SUBSCRIPTION_CANCEL_FAIL: N,
    BILLING_SUBSCRIPTION_CANCEL_SUCCESS: N,
    BILLING_IP_COUNTRY_CODE_FETCH_START: function (e) {
        let { request: t } = e;
        s = t;
    },
    BILLING_SET_IP_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        i = t;
    },
    BILLING_IP_COUNTRY_CODE_FAILURE: function () {
        (i = null), (g = !0);
    },
    BILLING_IP_LOCATION_FETCH_START: function (e) {
        let { request: t } = e;
        o = t;
    },
    BILLING_SET_IP_LOCATION: function (e) {
        let { location: t } = e;
        a = t;
    },
    BILLING_IP_LOCATION_FAILURE: function () {
        (a = null), (A = !0);
    },
    LOGOUT: function () {
        (r = void 0),
            (s = void 0),
            (i = void 0),
            (g = !1),
            (a = void 0),
            (A = !1),
            (o = void 0),
            (m = null),
            (E = null);
    },
    CONNECTION_OPEN: (e) => {
        let { countryCode: t } = e;
        null != t && (i = t);
    },
});
