l.d(n, { A: () => c });
var t = l(17928),
    r = l(73153);
let i = !1,
    a = null,
    s = null;
class u extends t.Ay.Store {
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
let c = new u(r.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((i = !1), (a = null), (s = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((i = !0), (a = null), (s = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: n } = e;
        ((i = !1), (a = null), (s = n));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: n } = e;
        ((i = !1), (a = n), (s = null));
    },
    LOGOUT: function () {
        ((i = !1), (a = null), (s = null));
    },
});
