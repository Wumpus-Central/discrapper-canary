let i, a, s, o;
var l,
    u = r(442837),
    c = r(570140),
    d = r(542974),
    f = r(981631);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = !1,
    p = !1,
    m = !1,
    g = !1,
    E = !1,
    v = null,
    I = null,
    T = !1,
    b = !1;
function y() {
    (i = void 0), (s = void 0), (a = void 0), (T = !1), (o = null), (I = null), (v = null);
}
function S() {
    h = !0;
}
function A() {
    h = !1;
}
function N() {
    m = !0;
}
function C() {
    m = !1;
}
function R(e) {
    let { error: n } = e;
    (m = !1), (I = n);
}
function O() {
    I = null;
}
function D() {
    p = !0;
}
function L() {
    p = !1;
}
function x(e) {
    let { error: n } = e;
    (p = !1), (v = n);
}
function w() {
    v = null;
}
function P(e) {
    let { request: n } = e;
    i = n;
}
function M() {
    i = void 0;
}
function k() {
    g = !0;
}
function U() {
    g = !1;
}
function B() {
    E = !0;
}
function G() {
    E = !1;
}
function Z(e) {
    let { request: n } = e;
    s = n;
}
function F(e) {
    let { countryCode: n } = e;
    a = n;
}
function V() {
    (a = null), (T = !0);
}
function j(e) {
    let { localizedPricingPromo: n } = e;
    o = d.U.createFromServer(n);
}
function H() {
    (o = null), (b = !0);
}
let Y = (e) => {
    let { countryCode: n } = e;
    null != n && (a = n);
};
class W extends (l = u.ZP.Store) {
    get isBusy() {
        return h || p || E || m;
    }
    get isUpdatingPaymentSource() {
        return p;
    }
    get isRemovingPaymentSource() {
        return m;
    }
    get isSyncing() {
        return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
    get isSubscriptionFetching() {
        return g;
    }
    get isPaymentSourceFetching() {
        return null != i;
    }
    get editSourceError() {
        return v;
    }
    get removeSourceError() {
        return I;
    }
    get ipCountryCodeLoaded() {
        return void 0 !== a;
    }
    get ipCountryCode() {
        return a;
    }
    get ipCountryCodeRequest() {
        return s;
    }
    get ipCountryCodeWithFallback() {
        return null != a ? a : f.OMz;
    }
    get ipCountryCodeHasError() {
        return T;
    }
    get paymentSourcesFetchRequest() {
        return i;
    }
    get localizedPricingPromo() {
        return o;
    }
    get localizedPricingPromoHasError() {
        return b;
    }
    get isLocalizedPromoEnabled() {
        return null != o;
    }
}
_(W, 'displayName', 'BillingInfoStore'),
    (n.Z = new W(c.Z, {
        BILLING_PAYMENT_SOURCE_CREATE_START: S,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: A,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: A,
        STRIPE_TOKEN_FAILURE: A,
        BILLING_PAYMENT_SOURCE_REMOVE_START: N,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: C,
        BILLING_PAYMENT_SOURCE_REMOVE_FAIL: R,
        BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: O,
        BILLING_PAYMENT_SOURCE_UPDATE_START: D,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: L,
        BILLING_PAYMENT_SOURCE_UPDATE_FAIL: x,
        BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: w,
        BILLING_PAYMENT_SOURCES_FETCH_START: P,
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: M,
        BILLING_PAYMENT_SOURCES_FETCH_FAIL: M,
        BILLING_SUBSCRIPTION_FETCH_START: k,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: U,
        BILLING_SUBSCRIPTION_FETCH_FAIL: U,
        BILLING_SUBSCRIPTION_UPDATE_START: B,
        BILLING_SUBSCRIPTION_CANCEL_START: B,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: G,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: G,
        BILLING_SUBSCRIPTION_CANCEL_FAIL: G,
        BILLING_SUBSCRIPTION_CANCEL_SUCCESS: G,
        BILLING_IP_COUNTRY_CODE_FETCH_START: Z,
        BILLING_SET_IP_COUNTRY_CODE: F,
        BILLING_IP_COUNTRY_CODE_FAILURE: V,
        BILLING_SET_LOCALIZED_PRICING_PROMO: j,
        BILLING_LOCALIZED_PRICING_PROMO_FAILURE: H,
        LOGOUT: y,
        CONNECTION_OPEN: Y
    }));
