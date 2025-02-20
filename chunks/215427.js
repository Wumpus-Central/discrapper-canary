n.d(t, { Z: () => h });
var r,
    i,
    a,
    o = n(442837),
    l = n(433517),
    s = n(570140),
    c = n(205355);
let d = 'MaintenanceStore',
    u = null,
    p = null,
    m = null;
class f extends (a = o.ZP.Store) {
    initialize() {
        m = l.K.get(d);
    }
    getIncident() {
        return u;
    }
    getScheduledMaintenance() {
        return null != p && p.id !== m ? p : null;
    }
}
(i = 'MaintenanceStore'),
    (r = 'displayName') in f
        ? Object.defineProperty(f, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[r] = i);
let h = new f(s.Z, {
    CONNECTION_OPEN: function () {
        (u = null), c.Z.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        u = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        p = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == p) return !1;
        (m = p.id), l.K.set(d, m);
    }
});
