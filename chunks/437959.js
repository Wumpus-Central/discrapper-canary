n.d(t, { A: () => m });
var i = n(311907),
    l = n(506774),
    a = n(73153),
    r = n(785796);
let s = "MaintenanceStore",
    o = null,
    d = null,
    c = null;
class u extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        c = l.w.get(s);
    }
    getIncident() {
        return o;
    }
    getScheduledMaintenance() {
        return null != d && d.id !== c ? d : null;
    }
}
let m = new u(a.h, {
    CONNECTION_OPEN: function () {
        (o = null), r.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        o = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        d = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == d) return !1;
        (c = d.id), l.w.set(s, c);
    },
});
