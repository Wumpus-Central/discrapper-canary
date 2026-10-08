t.d(a, { A: () => o });
var l = t(17928),
    n = t(73153);
let r = !1,
    i = null,
    s = null;
class u extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return r;
    }
    get error() {
        return i;
    }
    get data() {
        return s;
    }
}
let o = new u(n.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((r = !1), (i = null), (s = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((r = !0), (i = null), (s = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: a } = e;
        ((r = !1), (i = null), (s = a));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: a } = e;
        ((r = !1), (i = a), (s = null));
    },
    LOGOUT: function () {
        ((r = !1), (i = null), (s = null));
    },
});
