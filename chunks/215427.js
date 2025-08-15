n.d(t, { Z: () => f });
var r,
    i,
    l = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(205355);
let c = "MaintenanceStore",
    u = null,
    d = null,
    p = null;
class m extends (i = l.ZP.Store) {
    initialize() {
        p = a.K.get(c);
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
let f = new m(o.Z, {
    CONNECTION_OPEN: function () {
        (u = null), s.Z.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        u = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        d = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == d) return !1;
        (p = d.id), a.K.set(c, p);
    },
});
