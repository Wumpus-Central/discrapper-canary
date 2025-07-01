(n.d(t, { Z: () => m }), n(388685));
var a,
    r,
    l,
    i = n(442837),
    s = n(570140),
    o = n(890022);
let c = new Set();
function d(e) {
    let { userActivities: t } = e;
    (0, o.uw)('RecentUserActivityStore') && null != t && (c = new Set(t.map((e) => e.application_id)));
}
class u extends (a = i.ZP.Store) {
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
