n.d(t, { A: () => f });
var r,
    l,
    i = n(311907),
    a = n(73153),
    s = n(857071);
let o = null,
    c = null;
function u() {
    let e = s.A.mostRecentLurkedGuildId();
    null != e ? ((o = e), (c = null)) : ((c = null != o ? o : null), (o = null));
}
class d extends (l = i.Ay.Store) {
    initialize() {
        this.syncWith([s.A], u);
    }
    shouldShowPopout(e) {
        return c === e;
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "LurkerModePopoutStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "LurkerModePopoutStore");
let f = new d(a.h);
