n.d(t, { Z: () => E });
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
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
function p() {
    (u = null), s.Z.checkScheduledMaintenances();
}
function _(e) {
    u = e.incident;
}
function m(e) {
    d = e.maintenance;
}
function h() {
    if (null == d) return !1;
    (f = d.id), a.K.set(c, f);
}
class g extends (r = i.ZP.Store) {
    initialize() {
        f = a.K.get(c);
    }
    getIncident() {
        return u;
    }
    getScheduledMaintenance() {
        return null != d && d.id !== f ? d : null;
    }
}
l(g, "displayName", "MaintenanceStore");
let E = new g(o.Z, {
    CONNECTION_OPEN: p,
    STATUS_PAGE_INCIDENT: _,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: m,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: h,
});
