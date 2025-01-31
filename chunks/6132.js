n.d(t, { Z: () => d });
var i,
    r = n(442837),
    a = n(570140),
    s = n(981631);
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
let l = 0;
function u(e) {
    let { port: t } = e;
    l = s.V6Z - t;
}
class c extends (i = r.ZP.Store) {
    getId() {
        return l;
    }
}
o(c, 'displayName', 'InstanceIdStore');
let d = new c(a.Z, { RPC_SERVER_READY: u });
