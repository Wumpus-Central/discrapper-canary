"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(73153);
let s = !1,
    a = null,
    o = null;
function l(e) {
    (s = !1), (a = null), (o = null);
}
function u(e) {
    (s = !0), (a = null), (o = null);
}
function c(e) {
    let { data: t } = e;
    (s = !1), (a = null), (o = t);
}
function d(e) {
    let { error: t } = e;
    (s = !1), (a = t), (o = null);
}
function _() {
    (s = !1), (a = null), (o = null);
}
class f extends r.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return s;
    }
    get error() {
        return a;
    }
    get data() {
        return o;
    }
}
let p = new f(i.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: l,
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: u,
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: c,
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: d,
    LOGOUT: _,
});
