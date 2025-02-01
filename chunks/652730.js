n.d(t, { Z: () => p });
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(41776);
let c = null,
    d = null;
function u() {
    let e = o.Z.mostRecentLurkedGuildId();
    null != e ? ((c = e), (d = null)) : ((d = null != c ? c : null), (c = null));
}
class h extends (a = r.ZP.Store) {
    initialize() {
        this.syncWith([o.Z], u);
    }
    shouldShowPopout(e) {
        return d === e;
    }
}
(l = 'LurkerModePopoutStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = l);
let p = new h(s.Z);
