n.d(t, { A: () => E });
var i = n(17928),
    l = n(506774),
    r = n(228366),
    a = n(785796);
let o = "MaintenanceStore",
    s = null,
    u = null,
    d = null;
class c extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        d = l.w.get(o);
    }
    getIncident() {
        return s;
    }
    getScheduledMaintenance() {
        let e = u?.scheduled_until ?? u?.scheduled_for;
        return null != u && u.id !== d && (null == e || Date.now() < new Date(e).getTime()) ? u : null;
    }
}
let E = new c(r.h, {
    CONNECTION_OPEN: function () {
        (s = null), a.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        s = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        u = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == u) return !1;
        (d = u.id), l.w.set(o, d);
    },
});
