let r, i, a, o, s, l;
n.d(t, { Z: () => J });
var c,
    u = n(442837),
    d = n(570140),
    _ = n(542974),
    f = n(981631);
function p(e, t, n) {
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
let h = !1,
    m = !1,
    g = !1,
    E = !1,
    b = !1,
    y = null,
    O = null,
    v = !1,
    I = !1,
    T = !1;
function S() {
    ((r = void 0), (a = void 0), (i = void 0), (v = !1), (o = void 0), (I = !1), (s = void 0), (l = null), (O = null), (y = null));
}
function A() {
    h = !0;
}
function N() {
    h = !1;
}
function C() {
    g = !0;
}
function R() {
    g = !1;
}
function P(e) {
    let { error: t } = e;
    ((g = !1), (O = t));
}
function w() {
    O = null;
}
function D() {
    m = !0;
}
function L() {
    m = !1;
}
function x(e) {
    let { error: t } = e;
    ((m = !1), (y = t));
}
function M() {
    y = null;
}
function k(e) {
    let { request: t } = e;
    r = t;
}
function j() {
    r = void 0;
}
function U() {
    E = !0;
}
function G() {
    E = !1;
}
function B() {
    b = !0;
}
function V() {
    b = !1;
}
function F(e) {
    let { request: t } = e;
    a = t;
}
function Z(e) {
    let { countryCode: t } = e;
    i = t;
}
function H() {
    ((i = null), (v = !0));
}
function Y(e) {
    let { request: t } = e;
    s = t;
}
function W(e) {
    let { location: t } = e;
    o = t;
}
function K() {
    ((o = null), (I = !0));
}
function z(e) {
    let { localizedPricingPromo: t } = e;
    l = _.U.createFromServer(t);
}
function q() {
    ((l = null), (T = !0));
}
let X = (e) => {
    let { countryCode: t } = e;
    null != t && (i = t);
};
class Q extends (c = u.ZP.Store) {
    get isBusy() {
        return h || m || b || g;
    }
    get isUpdatingPaymentSource() {
        return m;
    }
    get isRemovingPaymentSource() {
        return g;
    }
    get isSyncing() {
        return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
    get isSubscriptionFetching() {
        return E;
    }
    get isPaymentSourceFetching() {
        return null != r;
    }
    get editSourceError() {
        return y;
    }
    get removeSourceError() {
        return O;
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
        return I;
    }
    get ipCountryCodeWithFallback() {
        return null != i ? i : f.OMz;
    }
    get ipCountryCodeHasError() {
        return v;
    }
    get paymentSourcesFetchRequest() {
        return r;
    }
    get localizedPricingPromo() {
        return l;
    }
    get localizedPricingPromoHasError() {
        return T;
    }
    get isLocalizedPromoEnabled() {
        return null != l;
    }
}
p(Q, 'displayName', 'BillingInfoStore');
let J = new Q(d.Z, {
    BILLING_PAYMENT_SOURCE_CREATE_START: A,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: N,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: N,
    STRIPE_TOKEN_FAILURE: N,
    BILLING_PAYMENT_SOURCE_REMOVE_START: C,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_REMOVE_FAIL: P,
    BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: w,
    BILLING_PAYMENT_SOURCE_UPDATE_START: D,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: L,
    BILLING_PAYMENT_SOURCE_UPDATE_FAIL: x,
    BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: M,
    BILLING_PAYMENT_SOURCES_FETCH_START: k,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: j,
    BILLING_PAYMENT_SOURCES_FETCH_FAIL: j,
    BILLING_SUBSCRIPTION_FETCH_START: U,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: G,
    BILLING_SUBSCRIPTION_FETCH_FAIL: G,
    BILLING_SUBSCRIPTION_UPDATE_START: B,
    BILLING_SUBSCRIPTION_CANCEL_START: B,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: V,
    BILLING_SUBSCRIPTION_UPDATE_FAIL: V,
    BILLING_SUBSCRIPTION_CANCEL_FAIL: V,
    BILLING_SUBSCRIPTION_CANCEL_SUCCESS: V,
    BILLING_IP_COUNTRY_CODE_FETCH_START: F,
    BILLING_SET_IP_COUNTRY_CODE: Z,
    BILLING_IP_COUNTRY_CODE_FAILURE: H,
    BILLING_IP_LOCATION_FETCH_START: Y,
    BILLING_SET_IP_LOCATION: W,
    BILLING_IP_LOCATION_FAILURE: K,
    BILLING_SET_LOCALIZED_PRICING_PROMO: z,
    BILLING_LOCALIZED_PRICING_PROMO_FAILURE: q,
    LOGOUT: S,
    CONNECTION_OPEN: X
});
