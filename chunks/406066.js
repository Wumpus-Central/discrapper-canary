n.d(t, { Z: () => _ }), n(539854), n(388685);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(442837),
    s = n(570140);
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
let c = [n(742738).Z],
    u = [];
function d() {
    let e = [];
    for (let t of c) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !a()(e, u) && ((u = e), !0);
}
class f extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith(c, d);
    }
    getActivities() {
        return u;
    }
}
l(f, 'displayName', 'FirstPartyRichPresenceStore');
let _ = new f(s.Z);
