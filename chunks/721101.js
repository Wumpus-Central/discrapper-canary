var l = t(855986),
    n = t(73153);
let r = !1,
    s = null,
    i = null;
class u extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return r;
    }
    get error() {
        return s;
    }
    get data() {
        return i;
    }
}
let o = new u(n.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((r = !1), (s = null), (i = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((r = !0), (s = null), (i = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: a } = e;
        ((r = !1), (s = null), (i = a));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: a } = e;
        ((r = !1), (s = a), (i = null));
    },
    LOGOUT: function () {
        ((r = !1), (s = null), (i = null));
    },
});
t.d(a, {}, { A: o });
