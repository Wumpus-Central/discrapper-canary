"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(506774),
    a = n(228366),
    s = n(785796);
let l = "MaintenanceStore",
    o = null,
    d = null,
    c = null;
class u extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        c = r.w.get(l);
    }
    getIncident() {
        return o;
    }
    getScheduledMaintenance() {
        let e = d?.scheduled_until ?? d?.scheduled_for;
        return null != d && d.id !== c && (null == e || Date.now() < new Date(e).getTime()) ? d : null;
    }
}
let _ = new u(a.h, {
    CONNECTION_OPEN: function () {
        (o = null), s.A.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        o = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        d = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == d) return !1;
        (c = d.id), r.w.set(l, c);
    },
});
