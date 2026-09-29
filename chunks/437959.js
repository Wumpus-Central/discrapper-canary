n.d(t, { A: () => d });
var i = n(17928),
    l = n(506774),
    r = n(228366),
    s = n(785796);
let a = "MaintenanceStore",
    o = null,
    c = null,
    E = null;
class u extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        E = l.w.get(a);
    }
    getIncident() {
        return o;
    }
    getScheduledMaintenance() {
        let e = c?.scheduled_until ?? c?.scheduled_for;
        return null != c && c.id !== E && (null == e || Date.now() < new Date(e).getTime()) ? c : null;
    }
}
let d = new u(r.h, {
    CONNECTION_OPEN: function () {
        ((o = null), s.A.checkScheduledMaintenances());
    },
    STATUS_PAGE_INCIDENT: function (e) {
        o = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        c = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == c) return !1;
        ((E = c.id), l.w.set(a, E));
    },
});
