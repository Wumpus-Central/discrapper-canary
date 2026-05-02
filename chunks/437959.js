n.d(t, { A: () => u });
var i = n(17928),
    l = n(506774),
    r = n(228366),
    s = n(785796);
let a = "MaintenanceStore",
    E = null,
    o = null,
    c = null;
class _ extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        c = l.w.get(a);
    }
    getIncident() {
        return E;
    }
    getScheduledMaintenance() {
        let e = o?.scheduled_until ?? o?.scheduled_for;
        return null != o && o.id !== c && (null == e || Date.now() < new Date(e).getTime()) ? o : null;
    }
}
let u = new _(r.h, {
    CONNECTION_OPEN: function () {
        (E = null), s.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        E = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        o = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == o) return !1;
        (c = o.id), l.w.set(a, c);
    },
});
