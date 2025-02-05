n.d(t, { Z: () => p });
var i,
    l,
    a,
    r = n(442837),
    s = n(433517),
    o = n(570140),
    c = n(205355);
let d = 'MaintenanceStore',
    u = null,
    m = null,
    _ = null;
class h extends (a = r.ZP.Store) {
    initialize() {
        _ = s.K.get(d);
    }
    getIncident() {
        return u;
    }
    getScheduledMaintenance() {
        return null != m && m.id !== _ ? m : null;
    }
}
(l = 'MaintenanceStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = l);
let p = new h(o.Z, {
    CONNECTION_OPEN: function () {
        (u = null), c.Z.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        u = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        m = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == m) return !1;
        (_ = m.id), s.K.set(d, _);
    }
});
