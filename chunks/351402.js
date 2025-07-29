let r, i, a, o, s;
n.d(t, { Z: () => K });
var l,
    c = n(442837),
    u = n(570140),
    d = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = !1,
    p = !1,
    h = !1,
    m = !1,
    g = !1,
    E = null,
    b = null,
    y = !1,
    O = !1;
function v() {
    ((r = void 0), (a = void 0), (i = void 0), (y = !1), (o = void 0), (O = !1), (s = void 0), (b = null), (E = null));
}
function I() {
    f = !0;
}
function T() {
    f = !1;
}
function S() {
    h = !0;
}
function A() {
    h = !1;
}
function N(e) {
    let { error: t } = e;
    ((h = !1), (b = t));
}
function C() {
    b = null;
}
function R() {
    p = !0;
}
function P() {
    p = !1;
}
function w(e) {
    let { error: t } = e;
    ((p = !1), (E = t));
}
function D() {
    E = null;
}
function L(e) {
    let { request: t } = e;
    r = t;
}
function x() {
    r = void 0;
}
function M() {
    m = !0;
}
function k() {
    m = !1;
}
function j() {
    g = !0;
}
function U() {
    g = !1;
}
function G(e) {
    let { request: t } = e;
    a = t;
}
function B(e) {
    let { countryCode: t } = e;
    i = t;
}
function V() {
    ((i = null), (y = !0));
}
function F(e) {
    let { request: t } = e;
    s = t;
}
function Z(e) {
    let { location: t } = e;
    o = t;
}
function H() {
    ((o = null), (O = !0));
}
let Y = (e) => {
    let { countryCode: t } = e;
    null != t && (i = t);
};
class W extends (l = c.ZP.Store) {
    get isBusy() {
        return f || p || g || h;
    }
    get isUpdatingPaymentSource() {
        return p;
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
_(W, 'displayName', 'BillingInfoStore');
let K = new W(u.Z, {
    BILLING_PAYMENT_SOURCE_CREATE_START: I,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: T,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: T,
    STRIPE_TOKEN_FAILURE: T,
    BILLING_PAYMENT_SOURCE_REMOVE_START: S,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: A,
    BILLING_PAYMENT_SOURCE_REMOVE_FAIL: N,
    BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: C,
    BILLING_PAYMENT_SOURCE_UPDATE_START: R,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: P,
    BILLING_PAYMENT_SOURCE_UPDATE_FAIL: w,
    BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: D,
    BILLING_PAYMENT_SOURCES_FETCH_START: L,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: x,
    BILLING_PAYMENT_SOURCES_FETCH_FAIL: x,
    BILLING_SUBSCRIPTION_FETCH_START: M,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: k,
    BILLING_SUBSCRIPTION_FETCH_FAIL: k,
    BILLING_SUBSCRIPTION_UPDATE_START: j,
    BILLING_SUBSCRIPTION_CANCEL_START: j,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: U,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: U,
    BILLING_SUBSCRIPTION_CANCEL_FAIL: U,
    BILLING_SUBSCRIPTION_CANCEL_SUCCESS: U,
    BILLING_IP_COUNTRY_CODE_FETCH_START: G,
    BILLING_SET_IP_COUNTRY_CODE: B,
    BILLING_IP_COUNTRY_CODE_FAILURE: V,
    BILLING_IP_LOCATION_FETCH_START: F,
    BILLING_SET_IP_LOCATION: Z,
    BILLING_IP_LOCATION_FAILURE: H,
    LOGOUT: v,
    CONNECTION_OPEN: Y
});
