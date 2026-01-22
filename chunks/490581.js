n.d(t, { A: () => p });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = null,
    l = null;
function c(e) {
    let { client: t } = e;
    o = t;
}
function u() {
    o = null;
}
function d(e) {
    let { component: t } = e;
    l = t;
}
class f extends (r = i.Ay.Store) {
    get client() {
        return o;
    }
    get cashAppPayComponent() {
        return l;
    }
}
s(f, "displayName", "AdyenStore");
let p = new f(a.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: c,
    ADYEN_TEARDOWN_CLIENT: u,
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: d,
});
