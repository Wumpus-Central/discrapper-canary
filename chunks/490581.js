"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let s = null,
    a = null;
class o extends r.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return s;
    }
    get cashAppPayComponent() {
        return a;
    }
}
let l = new o(i.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        s = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        s = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        a = t;
    },
});
