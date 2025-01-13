var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(433517),
    c = n(570140),
    d = n(205355);
let u = 'MaintenanceStore',
    m = null,
    h = null,
    f = null;
class p extends (a = o.ZP.Store) {
    initialize() {
        f = s.K.get(u);
    }
    getIncident() {
        return m;
    }
    getScheduledMaintenance() {
        return null != h && h.id !== f ? h : null;
    }
}
(l = 'MaintenanceStore'),
    (r = 'displayName') in (i = p)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new p(c.Z, {
        CONNECTION_OPEN: function () {
            m = null;
            d.Z.checkScheduledMaintenances();
        },
        STATUS_PAGE_INCIDENT: function (e) {
            m = e.incident;
        },
        STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
            h = e.maintenance;
        },
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
            if (null == h) return !1;
            (f = h.id), s.K.set(u, f);
        }
    }));
