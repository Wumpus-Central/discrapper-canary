n.d(t, { A: () => E });
var r,
    i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(785796);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = "MaintenanceStore",
    u = null,
    d = null,
    f = null;
function p() {
    (u = null), o.A.checkScheduledMaintenances();
}
function _(e) {
    u = e.incident;
}
function h(e) {
    d = e.maintenance;
}
function m() {
    if (null == d) return !1;
    (f = d.id), a.w.set(c, f);
}
class g extends (r = i.Ay.Store) {
    initialize() {
        f = a.w.get(c);
    }
    getIncident() {
        return u;
    }
    getScheduledMaintenance() {
        return null != d && d.id !== f ? d : null;
    }
}
l(g, "displayName", "MaintenanceStore");
let E = new g(s.h, {
    CONNECTION_OPEN: p,
    STATUS_PAGE_INCIDENT: _,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: h,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: m,
});
