n.d(t, { Z: () => h }), n(388685);
var r,
    i,
    l,
    o = n(442837),
    a = n(570140),
    s = n(890022);
let c = new Set();
function u(e) {
    let { userActivities: t } = e;
    (0, s.uw)('RecentUserActivityStore') && null != t && (c = new Set(t.map((e) => e.application_id)));
}
class d extends (r = o.ZP.Store) {
    get currentUserApplicationIds() {
        return c;
    }
}
(l = 'RecentUserActivityStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = l);
let h = new d(a.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: u,
    CONNECTION_OPEN_STATE_UPDATE: u
});
