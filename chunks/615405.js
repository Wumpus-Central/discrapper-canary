"use strict";
let r, i, a, s, o;
n.d(t, { A: () => W });
var l = n(311907),
    u = n(73153),
    c = n(652215);
let d = !1,
    _ = !1,
    f = !1,
    p = !1,
    h = !1,
    m = null,
    g = null,
    E = !1,
    A = !1;
function I() {
    (r = void 0), (a = void 0), (i = void 0), (E = !1), (s = void 0), (A = !1), (o = void 0), (g = null), (m = null);
}
function T() {
    d = !0;
}
function y() {
    d = !1;
}
function S() {
    f = !0;
}
function v() {
    f = !1;
}
function C(e) {
    let { error: t } = e;
    (f = !1), (g = t);
}
function b() {
    g = null;
}
function N() {
    _ = !0;
}
function R() {
    _ = !1;
}
function O(e) {
    let { error: t } = e;
    (_ = !1), (m = t);
}
function D() {
    m = null;
}
function L(e) {
    let { request: t } = e;
    r = t;
}
function w() {
    r = void 0;
}
function x() {
    p = !0;
}
function P() {
    p = !1;
}
function M() {
    h = !0;
}
function k() {
    h = !1;
}
function U(e) {
    let { request: t } = e;
    a = t;
}
function G(e) {
    let { countryCode: t } = e;
    i = t;
}
function V() {
    (i = null), (E = !0);
}
function F(e) {
    let { request: t } = e;
    o = t;
}
function B(e) {
    let { location: t } = e;
    s = t;
}
function j() {
    (s = null), (A = !0);
}
let H = (e) => {
    let { countryCode: t } = e;
    null != t && (i = t);
};
class Y extends l.Ay.Store {
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
        return m;
    }
    get removeSourceError() {
        return g;
    }
    get ipCountryCodeLoaded() {
        return void 0 !== i;
    }
    get ipCountryCode() {
        return i;
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
        return o;
    }
    get ipLocationHasError() {
        return A;
    }
    get ipCountryCodeWithFallback() {
        return i ?? c.Wzo;
    }
    get ipCountryCodeHasError() {
        return E;
    }
    get paymentSourcesFetchRequest() {
        return r;
    }
}
let W = new Y(u.h, {
    BILLING_PAYMENT_SOURCE_CREATE_START: T,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: y,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: y,
    STRIPE_TOKEN_FAILURE: y,
    BILLING_PAYMENT_SOURCE_REMOVE_START: S,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: v,
    BILLING_PAYMENT_SOURCE_REMOVE_FAIL: C,
    BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: b,
    BILLING_PAYMENT_SOURCE_UPDATE_START: N,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_UPDATE_FAIL: O,
    BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: D,
    BILLING_PAYMENT_SOURCES_FETCH_START: L,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: w,
    BILLING_PAYMENT_SOURCES_FETCH_FAIL: w,
    BILLING_SUBSCRIPTION_FETCH_START: x,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: P,
    BILLING_SUBSCRIPTION_FETCH_FAIL: P,
    BILLING_SUBSCRIPTION_UPDATE_START: M,
    BILLING_SUBSCRIPTION_CANCEL_START: M,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: k,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: k,
    BILLING_SUBSCRIPTION_CANCEL_FAIL: k,
    BILLING_SUBSCRIPTION_CANCEL_SUCCESS: k,
    BILLING_IP_COUNTRY_CODE_FETCH_START: U,
    BILLING_SET_IP_COUNTRY_CODE: G,
    BILLING_IP_COUNTRY_CODE_FAILURE: V,
    BILLING_IP_LOCATION_FETCH_START: F,
    BILLING_SET_IP_LOCATION: B,
    BILLING_IP_LOCATION_FAILURE: j,
    LOGOUT: I,
    CONNECTION_OPEN: H,
});
