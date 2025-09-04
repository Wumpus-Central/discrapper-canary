n(388685);
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = new Set();
function s(e) {
    let { userActivities: t } = e;
    null != t && (o = new Set(t.map((e) => e.application_id)));
}
class c extends (r = l.ZP.Store) {
    get currentUserApplicationIds() {
        return o;
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
        CONNECTION_OPEN_SUPPLEMENTAL: s,
        CONNECTION_OPEN_STATE_UPDATE: s,
    });
