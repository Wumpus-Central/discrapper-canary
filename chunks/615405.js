"use strict";
let i, r, s, a, o;
n.d(t, { A: () => O });
var l = n(17928),
    d = n(228366),
    _ = n(652215);
let u = !1,
    c = !1,
    E = !1,
    h = !1,
    m = !1,
    f = null,
    g = null,
    p = !1,
    A = !1;
function I() {
    u = !1;
}
function T() {
    i = void 0;
}
function S() {
    h = !1;
}
function N() {
    m = !0;
}
function C() {
    m = !1;
}
class R extends l.Ay.Store {
    static displayName = "BillingInfoStore";
    get isBusy() {
        return u || c || m || E;
    }
    get isUpdatingPaymentSource() {
        return c;
    }
    get isRemovingPaymentSource() {
        return E;
    }
    get isSyncing() {
        return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
    get isSubscriptionFetching() {
        return h;
    }
    get isPaymentSourceFetching() {
        return null != i;
    }
    get editSourceError() {
        return f;
    }
    get removeSourceError() {
        return g;
    }
    get ipCountryCodeLoaded() {
        return void 0 !== r;
    }
    get ipCountryCode() {
        return r;
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
        return r ?? _.Wzo;
    }
    get ipCountryCodeHasError() {
        return p;
    }
    get paymentSourcesFetchRequest() {
        return i;
    }
}
let O = new R(d.h, {
    BILLING_PAYMENT_SOURCE_CREATE_START: function () {
        u = !0;
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: I,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: I,
    STRIPE_TOKEN_FAILURE: I,
    BILLING_PAYMENT_SOURCE_REMOVE_START: function () {
        E = !0;
    },
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function () {
        E = !1;
    },
    BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function (e) {
        let { error: t } = e;
        (E = !1), (g = t);
    },
    BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function () {
        g = null;
    },
    BILLING_PAYMENT_SOURCE_UPDATE_START: function () {
        c = !0;
    },
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function () {
        c = !1;
    },
    BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function (e) {
        let { error: t } = e;
        (c = !1), (f = t);
    },
    BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function () {
        f = null;
    },
    BILLING_PAYMENT_SOURCES_FETCH_START: function (e) {
        let { request: t } = e;
        i = t;
    },
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: T,
    BILLING_PAYMENT_SOURCES_FETCH_FAIL: T,
    BILLING_SUBSCRIPTION_FETCH_START: function () {
        h = !0;
    },
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: S,
    BILLING_SUBSCRIPTION_FETCH_FAIL: S,
    BILLING_SUBSCRIPTION_UPDATE_START: N,
    BILLING_SUBSCRIPTION_CANCEL_START: N,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: C,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: C,
    BILLING_SUBSCRIPTION_CANCEL_FAIL: C,
    BILLING_SUBSCRIPTION_CANCEL_SUCCESS: C,
    BILLING_IP_COUNTRY_CODE_FETCH_START: function (e) {
        let { request: t } = e;
        s = t;
    },
    BILLING_SET_IP_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        r = t;
    },
    BILLING_IP_COUNTRY_CODE_FAILURE: function () {
        (r = null), (p = !0);
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
        (i = void 0),
            (s = void 0),
            (r = void 0),
            (p = !1),
            (a = void 0),
            (A = !1),
            (o = void 0),
            (g = null),
            (f = null);
    },
    CONNECTION_OPEN: (e) => {
        let { countryCode: t } = e;
        null != t && (r = t);
    },
});
