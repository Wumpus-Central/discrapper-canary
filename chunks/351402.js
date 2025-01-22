let i, a, o, s;
var l,
    u = r(442837),
    c = r(570140),
    d = r(542974),
    f = r(981631);
function p(e, n, r) {
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
    _ = !1,
    m = !1,
    g = !1,
    E = !1,
    v = null,
    y = null,
    b = !1,
    I = !1;
function T() {
    (i = void 0), (o = void 0), (a = void 0), (b = !1), (s = null), (y = null), (v = null);
}
function S() {
    h = !0;
}
function A() {
    h = !1;
}
function C() {
    m = !0;
}
function N() {
    m = !1;
}
function R(e) {
    let { error: n } = e;
    (m = !1), (y = n);
}
function O() {
    y = null;
}
function D() {
    _ = !0;
}
function L() {
    _ = !1;
}
function x(e) {
    let { error: n } = e;
    (_ = !1), (v = n);
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
    o = n;
}
function F(e) {
    let { countryCode: n } = e;
    a = n;
}
function V() {
    (a = null), (b = !0);
}
function j(e) {
    let { localizedPricingPromo: n } = e;
    s = d.U.createFromServer(n);
}
function H() {
    (s = null), (I = !0);
}
let Y = (e) => {
    let { countryCode: n } = e;
    null != n && (a = n);
};
class W extends (l = u.ZP.Store) {
    get isBusy() {
        return h || _ || E || m;
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
        return g;
    }
    get isPaymentSourceFetching() {
        return null != i;
    }
    get editSourceError() {
        return v;
    }
    get removeSourceError() {
        return y;
    }
    get ipCountryCodeLoaded() {
        return void 0 !== a;
    }
    get ipCountryCode() {
        return a;
    }
    get ipCountryCodeRequest() {
        return o;
    }
    get ipCountryCodeWithFallback() {
        return null != a ? a : f.OMz;
    }
    get ipCountryCodeHasError() {
        return b;
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
p(W, 'displayName', 'BillingInfoStore'),
    (n.Z = new W(c.Z, {
        BILLING_PAYMENT_SOURCE_CREATE_START: S,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: A,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: A,
        STRIPE_TOKEN_FAILURE: A,
        BILLING_PAYMENT_SOURCE_REMOVE_START: C,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: N,
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
        LOGOUT: T,
        CONNECTION_OPEN: Y
    }));
