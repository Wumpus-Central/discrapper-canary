n(388685);
var r,
    i,
    l = n(442837),
    a = n(570140);
let s = new Set();
function o(e) {
    let { userActivities: t } = e;
    null != t && (s = new Set(t.map((e) => e.application_id)));
}
class c extends (r = l.ZP.Store) {
    get currentUserApplicationIds() {
        return s;
    }
}
(i = "displayName") in c
    ? Object.defineProperty(c, i, {
          value: "RecentUserActivityStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[i] = "RecentUserActivityStore"),
    new c(a.Z, {
        CONNECTION_OPEN_SUPPLEMENTAL: o,
        CONNECTION_OPEN_STATE_UPDATE: o,
    });
