let r, i, a, s, o;
n.d(t, { A: () => z });
var l,
    c = n(311907),
    u = n(73153),
    d = n(652215);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let p = !1,
    _ = !1,
    h = !1,
    m = !1,
    g = !1,
    E = null,
    b = null,
    y = !1,
    O = !1;
function A() {
    (r = void 0), (a = void 0), (i = void 0), (y = !1), (s = void 0), (O = !1), (o = void 0), (b = null), (E = null);
}
function v() {
    p = !0;
}
function S() {
    p = !1;
}
function I() {
    h = !0;
}
function T() {
    h = !1;
}
function C(e) {
    let { error: t } = e;
    (h = !1), (b = t);
}
function N() {
    b = null;
}
function R() {
    _ = !0;
}
function w() {
    _ = !1;
}
function P(e) {
    let { error: t } = e;
    (_ = !1), (E = t);
}
function D() {
    E = null;
}
function x(e) {
    let { request: t } = e;
    r = t;
}
function L() {
    r = void 0;
}
function j() {
    m = !0;
}
function M() {
    m = !1;
}
function k() {
    g = !0;
}
function U() {
    g = !1;
}
function G(e) {
    let { request: t } = e;
    a = t;
}
function V(e) {
    let { countryCode: t } = e;
    i = t;
}
function F() {
    (i = null), (y = !0);
}
function B(e) {
    let { request: t } = e;
    o = t;
}
function H(e) {
    let { location: t } = e;
    s = t;
}
function Y() {
    (s = null), (O = !0);
}
let W = (e) => {
    let { countryCode: t } = e;
    null != t && (i = t);
};
class K extends (l = c.Ay.Store) {
    get isBusy() {
        return p || _ || g || h;
    }
    get isUpdatingPaymentSource() {
        return _;
    }
    get isRemovingPaymentSource() {
        return h;
    }
    get isSyncing() {
        return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
    get isSubscriptionFetching() {
        return m;
    }
    get isPaymentSourceFetching() {
        return null != r;
    }
    get editSourceError() {
        return E;
    }
    get removeSourceError() {
        return b;
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
        return O;
    }
    get ipCountryCodeWithFallback() {
        return null != i ? i : d.Wzo;
    }
    get ipCountryCodeHasError() {
        return y;
    }
    get paymentSourcesFetchRequest() {
        return r;
    }
}
f(K, "displayName", "BillingInfoStore");
let z = new K(u.h, {
    BILLING_PAYMENT_SOURCE_CREATE_START: v,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: S,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: S,
    STRIPE_TOKEN_FAILURE: S,
    BILLING_PAYMENT_SOURCE_REMOVE_START: I,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: T,
    BILLING_PAYMENT_SOURCE_REMOVE_FAIL: C,
    BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: N,
    BILLING_PAYMENT_SOURCE_UPDATE_START: R,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: w,
    BILLING_PAYMENT_SOURCE_UPDATE_FAIL: P,
    BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: D,
    BILLING_PAYMENT_SOURCES_FETCH_START: x,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: L,
    BILLING_PAYMENT_SOURCES_FETCH_FAIL: L,
    BILLING_SUBSCRIPTION_FETCH_START: j,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: M,
    BILLING_SUBSCRIPTION_FETCH_FAIL: M,
    BILLING_SUBSCRIPTION_UPDATE_START: k,
    BILLING_SUBSCRIPTION_CANCEL_START: k,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: U,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: U,
    BILLING_SUBSCRIPTION_CANCEL_FAIL: U,
    BILLING_SUBSCRIPTION_CANCEL_SUCCESS: U,
    BILLING_IP_COUNTRY_CODE_FETCH_START: G,
    BILLING_SET_IP_COUNTRY_CODE: V,
    BILLING_IP_COUNTRY_CODE_FAILURE: F,
    BILLING_IP_LOCATION_FETCH_START: B,
    BILLING_SET_IP_LOCATION: H,
    BILLING_IP_LOCATION_FAILURE: Y,
    LOGOUT: A,
    CONNECTION_OPEN: W,
});
