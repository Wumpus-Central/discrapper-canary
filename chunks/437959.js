"use strict";
n.d(t, { A: () => _ });
var i = n(311907),
    r = n(506774),
    l = n(73153),
    s = n(785796);
let a = "MaintenanceStore",
    o = null,
    c = null,
    u = null;
class d extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        u = r.w.get(a);
    }
    getIncident() {
        return o;
    }
    getScheduledMaintenance() {
        let e = c?.scheduled_until ?? c?.scheduled_for;
        return null != c && c.id !== u && (null == e || Date.now() < new Date(e).getTime()) ? c : null;
    }
}
let _ = new d(l.h, {
    CONNECTION_OPEN: function () {
        (o = null), s.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        o = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        c = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == c) return !1;
        (u = c.id), r.w.set(a, u);
    },
});
