n.d(i, { Z: () => f }), n(388685);
var e,
    o,
    a,
    l = n(442837),
    r = n(570140),
    s = n(890022);
let c = new Set();
function u(t) {
    let { userActivities: i } = t;
    (0, s.uw)('RecentUserActivityStore') && null != i && (c = new Set(i.map((t) => t.application_id)));
}
class d extends (e = l.ZP.Store) {
    get currentUserApplicationIds() {
        return c;
    }
}
(a = 'RecentUserActivityStore'),
    (o = 'displayName') in d
        ? Object.defineProperty(d, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[o] = a);
let f = new d(r.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: u,
    CONNECTION_OPEN_STATE_UPDATE: u
});
