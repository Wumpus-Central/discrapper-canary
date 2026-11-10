var l = n(855986),
    o = n(73153);
let i = !1,
    r = null,
    u = null;
class a extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return i;
    }
    get error() {
        return r;
    }
    get data() {
        return u;
    }
}
let s = new a(o.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((i = !1), (r = null), (u = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((i = !0), (r = null), (u = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        ((i = !1), (r = null), (u = t));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        ((i = !1), (r = t), (u = null));
    },
    LOGOUT: function () {
        ((i = !1), (r = null), (u = null));
    },
});
n.d(t, {}, { A: s });
