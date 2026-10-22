n.d(t, { A: () => s });
var l = n(17928),
    o = n(73153);
let r = !1,
    i = null,
    a = null;
class u extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return r;
    }
    get error() {
        return i;
    }
    get data() {
        return a;
    }
}
let s = new u(o.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((r = !1), (i = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((r = !0), (i = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        ((r = !1), (i = null), (a = t));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        ((r = !1), (i = t), (a = null));
    },
    LOGOUT: function () {
        ((r = !1), (i = null), (a = null));
    },
});
