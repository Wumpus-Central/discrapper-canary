"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(73153),
    a = n(202613);
let s = {},
    o = null,
    l = !1;
function u(e) {
    let { paymentSources: t } = e;
    for (let e of ((s = {}), (o = null), t)) (s[e.id] = a.Ay.createFromServer(e)), e.default && (o = e.id);
    null == o && t.length > 0 && (o = t[0].id), (l = !0);
}
function c(e) {
    let { paymentSource: t } = e;
    (s = { ...s, [t.id]: t }), (t.isDefault || 1 === Object.keys(s).length) && (o = t.id);
}
function d(e) {
    let { id: t } = e;
    if (((s = { ...s }), delete s[t], o === t)) {
        let e = Object.keys(s);
        o = 0 === e.length ? null : e[0];
    }
}
function _() {
    (s = {}), (o = null), (l = !1);
}
class f extends r.Ay.Store {
    static displayName = "PaymentSourceStore";
    get paymentSources() {
        return s;
    }
    get paymentSourceIds() {
        return Object.keys(s);
    }
    get defaultPaymentSourceId() {
        return o;
    }
    get defaultPaymentSource() {
        return null != o ? s[o] : null;
    }
    get hasFetchedPaymentSources() {
        return l;
    }
    getDefaultBillingCountryCode() {
        let e = this.defaultPaymentSource;
        return null == e ? null : e.paymentMethodCountry;
    }
    getPaymentSource(e) {
        return s[e];
    }
}
let p = new f(i.h, {
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: c,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: c,
    BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: c,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: u,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: d,
    LOGOUT: _,
});
