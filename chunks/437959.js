l.d(t, { A: () => E });
var n = l(17928),
    i = l(506774),
    r = l(228366),
    s = l(785796);
let a = "MaintenanceStore",
    u = null,
    o = null,
    c = null;
class d extends n.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        c = i.w.get(a);
    }
    getIncident() {
        return u;
    }
    getScheduledMaintenance() {
        let e = o?.scheduled_until ?? o?.scheduled_for;
        return null != o && o.id !== c && (null == e || Date.now() < new Date(e).getTime()) ? o : null;
    }
}
let E = new d(r.h, {
    CONNECTION_OPEN: function () {
        (u = null), s.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        u = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        o = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == o) return !1;
        (c = o.id), i.w.set(a, c);
    },
});
