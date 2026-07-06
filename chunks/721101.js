n.d(t, { A: () => u });
var l = n(17928),
    i = n(228366);
let r = !1,
    a = null,
    s = null;
class o extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return r;
    }
    get error() {
        return a;
    }
    get data() {
        return s;
    }
}
let u = new o(i.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        (r = !1), (a = null), (s = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        (r = !0), (a = null), (s = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        (r = !1), (a = null), (s = t);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        (r = !1), (a = t), (s = null);
    },
    LOGOUT: function () {
        (r = !1), (a = null), (s = null);
    },
});
