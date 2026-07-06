n.d(t, { A: () => _ });
var i = n(17928),
    l = n(506774),
    r = n(228366),
    s = n(785796);
let a = "MaintenanceStore",
    o = null,
    E = null,
    c = null;
class u extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        c = l.w.get(a);
    }
    getIncident() {
        return o;
    }
    getScheduledMaintenance() {
        let e = E?.scheduled_until ?? E?.scheduled_for;
        return null != E && E.id !== c && (null == e || Date.now() < new Date(e).getTime()) ? E : null;
    }
}
let _ = new u(r.h, {
    CONNECTION_OPEN: function () {
        (o = null), s.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        o = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        E = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == E) return !1;
        (c = E.id), l.w.set(a, c);
    },
});
