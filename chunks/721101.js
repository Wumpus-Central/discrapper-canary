"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let s = !1,
    a = null,
    o = null;
class l extends i.Ay.Store {
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
let d = new l(r.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        (s = !1), (a = null), (o = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        (s = !0), (a = null), (o = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        (s = !1), (a = null), (o = t);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        (s = !1), (a = t), (o = null);
    },
    LOGOUT: function () {
        (s = !1), (a = null), (o = null);
    },
});
