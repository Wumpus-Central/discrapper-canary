n.d(t, { A: () => _ });
var i = n(311907),
    l = n(506774),
    a = n(73153),
    r = n(785796);
let s = "MaintenanceStore",
    o = null,
    c = null,
    d = null;
class u extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        d = l.w.get(s);
    }
    getIncident() {
        return o;
    }
    getScheduledMaintenance() {
        let e = c?.scheduled_until ?? c?.scheduled_for;
        return null != c && c.id !== d && (null == e || Date.now() < new Date(e).getTime()) ? c : null;
    }
}
let _ = new u(a.h, {
    CONNECTION_OPEN: function () {
        (o = null), r.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        o = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        c = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == c) return !1;
        (d = c.id), l.w.set(s, d);
    },
});
