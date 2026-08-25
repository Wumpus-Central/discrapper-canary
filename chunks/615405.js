"use strict";
let i, r, a, s, l;
n.d(t, { A: () => O });
var o = n(17928),
    d = n(228366),
    c = n(652215);
let u = !1,
    _ = !1,
    E = !1,
    A = !1,
    h = !1,
    I = null,
    f = null,
    p = !1,
    T = !1;
function m() {
    u = !1;
}
function g() {
    i = void 0;
}
function S() {
    A = !1;
}
function N() {
    h = !0;
}
function C() {
    h = !1;
}
class R extends o.Ay.Store {
    static displayName = "BillingInfoStore";
    get isBusy() {
        return u || _ || h || E;
    }
    get isUpdatingPaymentSource() {
        return _;
    }
    get isRemovingPaymentSource() {
        return E;
    }
    get isSyncing() {
        return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
    get isSubscriptionFetching() {
        return A;
    }
    get isPaymentSourceFetching() {
        return null != i;
    }
    get editSourceError() {
        return I;
    }
    get removeSourceError() {
        return f;
    }
    get ipCountryCodeLoaded() {
        return void 0 !== r;
    }
    get ipCountryCode() {
        return r;
    }
    get ipCountryCodeRequest() {
        return a;
    }
    get ipLocationLoaded() {
        return void 0 !== s;
    }
    get ipLocation() {
        return s;
    }
    get ipLocationRequest() {
        return l;
    }
    get ipLocationHasError() {
        return T;
    }
    get ipCountryCodeWithFallback() {
        return r ?? c.Wzo;
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
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: m,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: m,
    STRIPE_TOKEN_FAILURE: m,
    BILLING_PAYMENT_SOURCE_REMOVE_START: function () {
        E = !0;
    },
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function () {
        E = !1;
    },
    BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function (e) {
        let { error: t } = e;
        (E = !1), (f = t);
    },
    BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function () {
        f = null;
    },
    BILLING_PAYMENT_SOURCE_UPDATE_START: function () {
        _ = !0;
    },
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function () {
        _ = !1;
    },
    BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function (e) {
        let { error: t } = e;
        (_ = !1), (I = t);
    },
    BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function () {
        I = null;
    },
    BILLING_PAYMENT_SOURCES_FETCH_START: function (e) {
        let { request: t } = e;
        i = t;
    },
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: g,
    BILLING_PAYMENT_SOURCES_FETCH_FAIL: g,
    BILLING_SUBSCRIPTION_FETCH_START: function () {
        A = !0;
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
        a = t;
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
        l = t;
    },
    BILLING_SET_IP_LOCATION: function (e) {
        let { location: t } = e;
        s = t;
    },
    BILLING_IP_LOCATION_FAILURE: function () {
        (s = null), (T = !0);
    },
    LOGOUT: function () {
        (i = void 0),
            (a = void 0),
            (r = void 0),
            (p = !1),
            (s = void 0),
            (T = !1),
            (l = void 0),
            (f = null),
            (I = null);
    },
    CONNECTION_OPEN: function (e) {
        let { countryCode: t } = e;
        null != t && (r = t);
    },
});
