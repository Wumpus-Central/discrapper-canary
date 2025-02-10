let i, r, a, s;
n.d(t, { Z: () => W });
var o,
    l = n(442837),
    u = n(570140),
    c = n(542974),
    d = n(981631);
function f(e, t, n) {
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
let _ = !1,
    p = !1,
    h = !1,
    m = !1,
    g = !1,
    E = null,
    v = null,
    y = !1,
    I = !1;
function T() {
    (i = void 0), (a = void 0), (r = void 0), (y = !1), (s = null), (v = null), (E = null);
}
function b() {
    _ = !0;
}
function S() {
    _ = !1;
}
function A() {
    h = !0;
}
function N() {
    h = !1;
}
function C(e) {
    let { error: t } = e;
    (h = !1), (v = t);
}
function R() {
    v = null;
}
function O() {
    p = !0;
}
function D() {
    p = !1;
}
function L(e) {
    let { error: t } = e;
    (p = !1), (E = t);
}
function x() {
    E = null;
}
function P(e) {
    let { request: t } = e;
    i = t;
}
function w() {
    i = void 0;
}
function M() {
    m = !0;
}
function k() {
    m = !1;
}
function U() {
    g = !0;
}
function G() {
    g = !1;
}
function B(e) {
    let { request: t } = e;
    a = t;
}
function Z(e) {
    let { countryCode: t } = e;
    r = t;
}
function F() {
    (r = null), (y = !0);
}
function V(e) {
    let { localizedPricingPromo: t } = e;
    s = c.U.createFromServer(t);
}
function j() {
    (s = null), (I = !0);
}
let H = (e) => {
    let { countryCode: t } = e;
    null != t && (r = t);
};
class Y extends (o = l.ZP.Store) {
    get isBusy() {
        return _ || p || g || h;
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
        return null != i;
    }
    get editSourceError() {
        return E;
    }
    get removeSourceError() {
        return v;
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
    get ipCountryCodeWithFallback() {
        return null != r ? r : d.OMz;
    }
    get ipCountryCodeHasError() {
        return y;
    }
    get paymentSourcesFetchRequest() {
        return i;
    }
    get localizedPricingPromo() {
        return s;
    }
    get localizedPricingPromoHasError() {
        return I;
    }
    get isLocalizedPromoEnabled() {
        return null != s;
    }
}
f(Y, 'displayName', 'BillingInfoStore');
let W = new Y(u.Z, {
    BILLING_PAYMENT_SOURCE_CREATE_START: b,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: S,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: S,
    STRIPE_TOKEN_FAILURE: S,
    BILLING_PAYMENT_SOURCE_REMOVE_START: A,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: N,
    BILLING_PAYMENT_SOURCE_REMOVE_FAIL: C,
    BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: R,
    BILLING_PAYMENT_SOURCE_UPDATE_START: O,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: D,
    BILLING_PAYMENT_SOURCE_UPDATE_FAIL: L,
    BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: x,
    BILLING_PAYMENT_SOURCES_FETCH_START: P,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: w,
    BILLING_PAYMENT_SOURCES_FETCH_FAIL: w,
    BILLING_SUBSCRIPTION_FETCH_START: M,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: k,
    BILLING_SUBSCRIPTION_FETCH_FAIL: k,
    BILLING_SUBSCRIPTION_UPDATE_START: U,
    BILLING_SUBSCRIPTION_CANCEL_START: U,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: G,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: G,
    BILLING_SUBSCRIPTION_CANCEL_FAIL: G,
    BILLING_SUBSCRIPTION_CANCEL_SUCCESS: G,
    BILLING_IP_COUNTRY_CODE_FETCH_START: B,
    BILLING_SET_IP_COUNTRY_CODE: Z,
    BILLING_IP_COUNTRY_CODE_FAILURE: F,
    BILLING_SET_LOCALIZED_PRICING_PROMO: V,
    BILLING_LOCALIZED_PRICING_PROMO_FAILURE: j,
    LOGOUT: T,
    CONNECTION_OPEN: H
});
