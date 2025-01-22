var i,
    a = r(442837),
    o = r(570140),
    s = r(981631);
function l(e, n, r) {
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
let u = 0;
function c(e) {
    let { port: n } = e;
    u = s.V6Z - n;
}
class d extends (i = a.ZP.Store) {
    getId() {
        return u;
    }
}
l(d, 'displayName', 'InstanceIdStore'), (n.Z = new d(o.Z, { RPC_SERVER_READY: c }));
