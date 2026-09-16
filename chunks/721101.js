n.d(t, { A: () => u });
var r = n(17928),
    l = n(228366);
let i = !1,
    o = null,
    a = null;
class s extends r.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return i;
    }
    get error() {
        return o;
    }
    get data() {
        return a;
    }
}
let u = new s(l.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((i = !1), (o = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((i = !0), (o = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        ((i = !1), (o = null), (a = t));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        ((i = !1), (o = t), (a = null));
    },
    LOGOUT: function () {
        ((i = !1), (o = null), (a = null));
    },
});
