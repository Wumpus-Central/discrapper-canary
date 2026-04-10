"use strict";
n.d(t, { A: () => _ });
var i = n(311907),
    r = n(506774),
    s = n(73153),
    l = n(785796);
let a = "MaintenanceStore",
    c = null,
    o = null,
    u = null;
class d extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        u = r.w.get(a);
    }
    getIncident() {
        return c;
    }
    getScheduledMaintenance() {
        let e = o?.scheduled_until ?? o?.scheduled_for;
        return null != o && o.id !== u && (null == e || Date.now() < new Date(e).getTime()) ? o : null;
    }
}
let _ = new d(s.h, {
    CONNECTION_OPEN: function () {
        (c = null), l.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        c = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        o = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == o) return !1;
        (u = o.id), r.w.set(a, u);
    },
});
