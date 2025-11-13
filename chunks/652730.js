n.d(t, { Z: () => p });
var i,
    r,
    l = n(442837),
    a = n(570140),
    o = n(41776);
let s = null,
    c = null;
function u() {
    let e = o.Z.mostRecentLurkedGuildId();
    null != e ? ((s = e), (c = null)) : ((c = null != s ? s : null), (s = null));
}
class d extends (r = l.ZP.Store) {
    initialize() {
        this.syncWith([o.Z], u);
    }
    shouldShowPopout(e) {
        return c === e;
    }
}
(i = "displayName") in d
    ? Object.defineProperty(d, i, {
          value: "LurkerModePopoutStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[i] = "LurkerModePopoutStore");
let p = new d(a.Z);
