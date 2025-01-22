var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = null,
    u = null;
function c(e) {
    let { client: n } = e;
    l = n;
}
function d() {
    l = null;
}
function f(e) {
    let { component: n } = e;
    u = n;
}
class p extends (i = a.ZP.Store) {
    get client() {
        return l;
    }
    get cashAppPayComponent() {
        return u;
    }
}
s(p, 'displayName', 'AdyenStore');
let h = new p(o.Z, {
    ADYEN_CREATE_CLIENT_SUCCESS: c,
    ADYEN_TEARDOWN_CLIENT: d,
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: f
});
n.Z = h;
