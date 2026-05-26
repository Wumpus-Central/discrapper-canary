n.d(t, { A: () => E });
var i = n(17928),
    l = n(506774),
    r = n(228366),
    s = n(785796);
let a = "MaintenanceStore",
    c = null,
    o = null,
    d = null;
class u extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        d = l.w.get(a);
    }
    getIncident() {
        return c;
    }
    getScheduledMaintenance() {
        let e = o?.scheduled_until ?? o?.scheduled_for;
        return null != o && o.id !== d && (null == e || Date.now() < new Date(e).getTime()) ? o : null;
    }
}
let E = new u(r.h, {
    CONNECTION_OPEN: function () {
        (c = null), s.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        c = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        o = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == o) return !1;
        (d = o.id), l.w.set(a, d);
    },
});
