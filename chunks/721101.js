n.d(t, { A: () => u });
var l = n(311907),
    i = n(73153);
let a = !1,
    r = null,
    s = null;
class o extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return a;
    }
    get error() {
        return r;
    }
    get data() {
        return s;
    }
}
let u = new o(i.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        (a = !1), (r = null), (s = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        (a = !0), (r = null), (s = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        (a = !1), (r = null), (s = t);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        (a = !1), (r = t), (s = null);
    },
    LOGOUT: function () {
        (a = !1), (r = null), (s = null);
    },
});
