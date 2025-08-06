n.d(t, { Z: () => E });
var r,
    i = n(442837),
    o = n(433517),
    a = n(570140),
    s = n(205355);
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
function _() {
    (u = null), s.Z.checkScheduledMaintenances();
}
function p(e) {
    u = e.incident;
}
function h(e) {
    d = e.maintenance;
}
function m() {
    if (null == d) return !1;
    (f = d.id), o.K.set(c, f);
}
class g extends (r = i.ZP.Store) {
    initialize() {
        f = o.K.get(c);
    }
    getIncident() {
        return u;
    }
    getScheduledMaintenance() {
        return null != d && d.id !== f ? d : null;
    }
}
l(g, "displayName", "MaintenanceStore");
let E = new g(a.Z, {
    CONNECTION_OPEN: _,
    STATUS_PAGE_INCIDENT: p,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: h,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: m,
});
