n.d(t, { Z: () => h });
var r,
    i,
    a,
    l = n(442837),
    o = n(433517),
    s = n(570140),
    c = n(205355);
let u = 'MaintenanceStore',
    d = null,
    p = null,
    m = null;
class f extends (a = l.ZP.Store) {
    initialize() {
        m = o.K.get(u);
    }
    getIncident() {
        return d;
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
        (d = null), c.Z.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        d = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        p = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == p) return !1;
        (m = p.id), o.K.set(u, m);
    }
});
