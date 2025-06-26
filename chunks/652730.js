n.d(t, { Z: () => h });
var r,
    i,
    l,
    o = n(442837),
    a = n(570140),
    s = n(41776);
let c = null,
    u = null;
function d() {
    let e = s.Z.mostRecentLurkedGuildId();
    null != e ? ((c = e), (u = null)) : ((u = null != c ? c : null), (c = null));
}
class p extends (l = o.ZP.Store) {
    initialize() {
        this.syncWith([s.Z], d);
    }
    shouldShowPopout(e) {
        return u === e;
    }
}
(i = 'LurkerModePopoutStore'),
    (r = 'displayName') in p
        ? Object.defineProperty(p, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[r] = i);
let h = new p(a.Z);
