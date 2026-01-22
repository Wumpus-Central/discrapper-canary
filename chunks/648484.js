n.d(t, { A: () => d });
var r,
    i = n(311907),
    a = n(73153),
    s = n(652215);
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
let l = 0;
function c(e) {
    let { port: t } = e;
    l = s.xEi - t;
}
class u extends (r = i.Ay.Store) {
    getId() {
        return l;
    }
}
o(u, "displayName", "InstanceIdStore");
let d = new u(a.h, { RPC_SERVER_READY: c });
