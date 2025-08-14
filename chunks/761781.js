a.d(t, { Z: () => u }), a(388685);
var n,
    r,
    l = a(442837),
    i = a(570140),
    s = a(890022);
let o = new Set();
function c(e) {
    let { userActivities: t } = e;
    (0, s.uw)("RecentUserActivityStore") && null != t && (o = new Set(t.map((e) => e.application_id)));
}
class d extends (n = l.ZP.Store) {
    get currentUserApplicationIds() {
        return o;
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "RecentUserActivityStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "RecentUserActivityStore");
let u = new d(i.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: c,
    CONNECTION_OPEN_STATE_UPDATE: c,
});
