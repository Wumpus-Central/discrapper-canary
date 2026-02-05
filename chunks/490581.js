"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153);
let a = null,
    s = null;
function o(e) {
    let { client: t } = e;
    a = t;
}
function l() {
    a = null;
}
function u(e) {
    let { component: t } = e;
    s = t;
}
class c extends r.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return a;
    }
    get cashAppPayComponent() {
        return s;
    }
}
let d = new c(i.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: o,
    ADYEN_TEARDOWN_CLIENT: l,
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: u,
});
