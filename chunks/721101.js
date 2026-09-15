t.d(n, { A: () => u });
var r = t(17928),
    l = t(228366);
let i = !1,
    s = null,
    o = null;
class a extends r.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return i;
    }
    get error() {
        return s;
    }
    get data() {
        return o;
    }
}
let u = new a(l.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((i = !1), (s = null), (o = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((i = !0), (s = null), (o = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: n } = e;
        ((i = !1), (s = null), (o = n));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: n } = e;
        ((i = !1), (s = n), (o = null));
    },
    LOGOUT: function () {
        ((i = !1), (s = null), (o = null));
    },
});
