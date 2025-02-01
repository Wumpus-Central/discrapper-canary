n.d(t, { Z: () => _ }), n(653041), n(47120);
var i,
    r = n(348327),
    a = n.n(r),
    s = n(442837),
    o = n(570140);
function l(e, t, n) {
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
let u = [n(742738).Z],
    c = [];
function d() {
    let e = [];
    for (let t of u) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !a()(e, c) && ((c = e), !0);
}
class f extends (i = s.ZP.Store) {
    initialize() {
        this.syncWith(u, d);
    }
    getActivities() {
        return c;
    }
}
l(f, 'displayName', 'FirstPartyRichPresenceStore');
let _ = new f(o.Z);
