n.d(t, { Z: () => d }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(890022);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = new Set();
function c(e) {
    let { userActivities: t } = e;
    (0, o.uw)("RecentUserActivityStore") && null != t && (l = new Set(t.map((e) => e.application_id)));
}
class u extends (r = i.ZP.Store) {
    get currentUserApplicationIds() {
        return l;
    }
}
s(u, "displayName", "RecentUserActivityStore");
let d = new u(a.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: c,
    CONNECTION_OPEN_STATE_UPDATE: c,
});
