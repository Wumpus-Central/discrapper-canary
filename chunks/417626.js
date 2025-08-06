n.d(t, { Z: () => u });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = !1;
function l(e) {
    s = !0;
}
class c extends (r = i.ZP.Store) {
    get blockedByProxy() {
        return s;
    }
}
a(c, 'displayName', 'ProxyBlockStore');
let u = new c(o.Z, { PROXY_BLOCKED_REQUEST: l });
