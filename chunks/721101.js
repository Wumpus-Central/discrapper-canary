n.d(t, { A: () => u });
var l = n(17928),
    a = n(228366);
let i = !1,
    r = null,
    s = null;
class o extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return i;
    }
    get error() {
        return r;
    }
    get data() {
        return s;
    }
}
let u = new o(a.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        (i = !1), (r = null), (s = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        (i = !0), (r = null), (s = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        (i = !1), (r = null), (s = t);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        (i = !1), (r = t), (s = null);
    },
    LOGOUT: function () {
        (i = !1), (r = null), (s = null);
    },
});
