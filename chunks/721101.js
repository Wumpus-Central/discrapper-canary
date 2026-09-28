n.d(t, { A: () => u });
var r = n(17928),
    l = n(228366);
let o = !1,
    i = null,
    a = null;
class s extends r.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return o;
    }
    get error() {
        return i;
    }
    get data() {
        return a;
    }
}
let u = new s(l.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((o = !1), (i = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((o = !0), (i = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        ((o = !1), (i = null), (a = t));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        ((o = !1), (i = t), (a = null));
    },
    LOGOUT: function () {
        ((o = !1), (i = null), (a = null));
    },
});
