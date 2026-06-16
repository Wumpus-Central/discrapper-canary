"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(506774),
    s = n(228366),
    a = n(785796);
let o = "MaintenanceStore",
    l = null,
    u = null,
    c = null;
class d extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        c = r.w.get(o);
    }
    getIncident() {
        return l;
    }
    getScheduledMaintenance() {
        let e = u?.scheduled_until ?? u?.scheduled_for;
        return null != u && u.id !== c && (null == e || Date.now() < new Date(e).getTime()) ? u : null;
    }
}
let _ = new d(s.h, {
    CONNECTION_OPEN: function () {
        (l = null), a.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        l = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        u = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == u) return !1;
        (c = u.id), r.w.set(o, c);
    },
});
