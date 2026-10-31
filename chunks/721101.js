n.d(t, { A: () => u });
var l = n(17928),
    o = n(73153);
let i = !1,
    r = null,
    a = null;
class s extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return i;
    }
    get error() {
        return r;
    }
    get data() {
        return a;
    }
}
let u = new s(o.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((i = !1), (r = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((i = !0), (r = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        ((i = !1), (r = null), (a = t));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        ((i = !1), (r = t), (a = null));
    },
    LOGOUT: function () {
        ((i = !1), (r = null), (a = null));
    },
});
