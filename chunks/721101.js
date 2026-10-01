l.d(n, { A: () => o });
var t = l(17928),
    r = l(73153);
let i = !1,
    u = null,
    s = null;
class a extends t.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return i;
    }
    get error() {
        return u;
    }
    get data() {
        return s;
    }
}
let o = new a(r.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((i = !1), (u = null), (s = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((i = !0), (u = null), (s = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: n } = e;
        ((i = !1), (u = null), (s = n));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: n } = e;
        ((i = !1), (u = n), (s = null));
    },
    LOGOUT: function () {
        ((i = !1), (u = null), (s = null));
    },
});
