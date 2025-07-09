(a.d(t, { Z: () => m }), a(388685));
var n,
    r,
    l,
    i = a(442837),
    s = a(570140),
    o = a(890022);
let c = new Set();
function d(e) {
    let { userActivities: t } = e;
    (0, o.uw)('RecentUserActivityStore') && null != t && (c = new Set(t.map((e) => e.application_id)));
}
class u extends (n = i.ZP.Store) {
    get currentUserApplicationIds() {
        return c;
    }
}
((l = 'RecentUserActivityStore'),
    (r = 'displayName') in u
        ? Object.defineProperty(u, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[r] = l));
let m = new u(s.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: d,
    CONNECTION_OPEN_STATE_UPDATE: d
});
