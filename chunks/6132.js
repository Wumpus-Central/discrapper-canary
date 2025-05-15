n.d(t, { Z: () => d });
var r,
    i = n(442837),
    a = n(570140),
    o = n(981631);
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
let l = 0;
function c(e) {
    let { port: t } = e;
    l = o.V6Z - t;
}
class u extends (r = i.ZP.Store) {
    getId() {
        return l;
    }
}
s(u, 'displayName', 'InstanceIdStore');
let d = new u(a.Z, { RPC_SERVER_READY: c });
