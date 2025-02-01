n.d(t, { Z: () => _ });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = null,
    l = null;
function u(e) {
    let { client: t } = e;
    o = t;
}
function c() {
    o = null;
}
function d(e) {
    let { component: t } = e;
    l = t;
}
class f extends (i = r.ZP.Store) {
    get client() {
        return o;
    }
    get cashAppPayComponent() {
        return l;
    }
}
s(f, 'displayName', 'AdyenStore');
let _ = new f(a.Z, {
    ADYEN_CREATE_CLIENT_SUCCESS: u,
    ADYEN_TEARDOWN_CLIENT: c,
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: d
});
