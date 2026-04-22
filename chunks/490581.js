n.d(t, { A: () => o });
var l = n(311907),
    i = n(73153);
let a = null,
    r = null;
class s extends l.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return a;
    }
    get cashAppPayComponent() {
        return r;
    }
}
let o = new s(i.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        a = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        a = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        r = t;
    },
});
