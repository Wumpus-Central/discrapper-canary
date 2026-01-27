n.d(t, {
    A: () => f,
});
var r,
    i,
    l = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(785796);
let c = "MaintenanceStore",
    u = null,
    d = null,
    p = null;
class m extends (i = l.Ay.Store) {
    initialize() {
        p = a.w.get(c);
    }
    getIncident() {
        return u;
    }
    getScheduledMaintenance() {
        return null != d && d.id !== p ? d : null;
    }
}
(r = "displayName") in m
    ? Object.defineProperty(m, r, {
          value: "MaintenanceStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (m[r] = "MaintenanceStore");
let f = new m(s.h, {
    CONNECTION_OPEN: function () {
        (u = null), o.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        u = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        d = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == d) return !1;
        (p = d.id), a.w.set(c, p);
    },
});
