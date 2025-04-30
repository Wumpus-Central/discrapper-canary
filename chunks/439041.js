n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = null,
    l = null;
function c(e) {
    let { client: t } = e;
    s = t;
}
function u() {
    s = null;
}
function d(e) {
    let { component: t } = e;
    l = t;
}
class f extends (r = i.ZP.Store) {
    get client() {
        return s;
    }
    get cashAppPayComponent() {
        return l;
    }
}
o(f, 'displayName', 'AdyenStore');
let _ = new f(a.Z, {
    ADYEN_CREATE_CLIENT_SUCCESS: c,
    ADYEN_TEARDOWN_CLIENT: u,
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: d
});
