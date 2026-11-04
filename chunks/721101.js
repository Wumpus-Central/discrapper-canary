var l = n(855986),
    i = n(73153);
let o = !1,
    r = null,
    a = null;
class s extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
        return o;
    }
    get error() {
        return r;
    }
    get data() {
        return a;
    }
}
let u = new s(i.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
        ((o = !1), (r = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
        ((o = !0), (r = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        ((o = !1), (r = null), (a = t));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
        let { error: t } = e;
        ((o = !1), (r = t), (a = null));
    },
    LOGOUT: function () {
        ((o = !1), (r = null), (a = null));
    },
});
n.d(t, {}, { A: u });
