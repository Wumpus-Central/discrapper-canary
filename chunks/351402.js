let r, i, a, o, s;
n.d(t, { Z: () => K });
var l,
    c = n(442837),
    u = n(570140),
    d = n(981631);
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
    m = !1,
    h = !1,
    g = !1,
    E = null,
    b = null,
    y = !1,
    O = !1;
function v() {
    (r = void 0), (a = void 0), (i = void 0), (y = !1), (o = void 0), (O = !1), (s = void 0), (b = null), (E = null);
}
function S() {
    p = !0;
}
function I() {
    p = !1;
}
function T() {
    m = !0;
}
function C() {
    m = !1;
}
function A(e) {
    let { error: t } = e;
    (m = !1), (b = t);
}
function N() {
    b = null;
}
function P() {
    _ = !0;
}
function R() {
    _ = !1;
}
function D(e) {
    let { error: t } = e;
    (_ = !1), (E = t);
}
function w() {
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
    h = !0;
}
function M() {
    h = !1;
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
function Z(e) {
    let { countryCode: t } = e;
    i = t;
}
function B() {
    (i = null), (y = !0);
}
function F(e) {
    let { request: t } = e;
    s = t;
}
function V(e) {
    let { location: t } = e;
    o = t;
}
function H() {
    (o = null), (O = !0);
}
let Y = (e) => {
    let { countryCode: t } = e;
    null != t && (i = t);
};
class W extends (l = c.ZP.Store) {
    get isBusy() {
        return p || _ || g || m;
    }
    get isUpdatingPaymentSource() {
        return _;
    }
    get isRemovingPaymentSource() {
        return m;
    }
    get isSyncing() {
        return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
    get isSubscriptionFetching() {
        return h;
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
        return void 0 !== o;
    }
    get ipLocation() {
        return o;
    }
    get ipLocationRequest() {
        return s;
    }
    get ipLocationHasError() {
        return O;
    }
    get ipCountryCodeWithFallback() {
        return null != i ? i : d.OMz;
    }
    get ipCountryCodeHasError() {
        return y;
    }
    get paymentSourcesFetchRequest() {
        return r;
    }
}
f(W, "displayName", "BillingInfoStore");
let K = new W(u.Z, {
    BILLING_PAYMENT_SOURCE_CREATE_START: S,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: I,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: I,
    STRIPE_TOKEN_FAILURE: I,
    BILLING_PAYMENT_SOURCE_REMOVE_START: T,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: C,
    BILLING_PAYMENT_SOURCE_REMOVE_FAIL: A,
    BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: N,
    BILLING_PAYMENT_SOURCE_UPDATE_START: P,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_UPDATE_FAIL: D,
    BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: w,
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
    BILLING_SET_IP_COUNTRY_CODE: Z,
    BILLING_IP_COUNTRY_CODE_FAILURE: B,
    BILLING_IP_LOCATION_FETCH_START: F,
    BILLING_SET_IP_LOCATION: V,
    BILLING_IP_LOCATION_FAILURE: H,
    LOGOUT: v,
    CONNECTION_OPEN: Y,
});
