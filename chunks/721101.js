n.d(t, { A: () => u });
var l = n(17928),
    r = n(228366);
let i = !1,
    a = null,
    s = null;
class o extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return i;
    }
    get error() {
        return a;
    }
    get data() {
        return s;
    }
}
let u = new o(r.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        (i = !1), (a = null), (s = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        (i = !0), (a = null), (s = null);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        (i = !1), (a = null), (s = t);
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        (i = !1), (a = t), (s = null);
    },
    LOGOUT: function () {
        (i = !1), (a = null), (s = null);
    },
});
