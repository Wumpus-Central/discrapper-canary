n.d(t, { Z: () => u });
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
                  writable: !0,
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
o(c, "displayName", "ProxyBlockStore");
let u = new c(a.Z, { PROXY_BLOCKED_REQUEST: l });
