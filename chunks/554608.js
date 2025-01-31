n.d(t, {
    P: () => o,
    Z: () => _
});
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var o = (function (e) {
    return (e[(e.NOT_STARTED = 0)] = 'NOT_STARTED'), (e[(e.IN_PROGRESS = 1)] = 'IN_PROGRESS'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.SKIPPED = 3)] = 'SKIPPED'), e;
})({});
let l = 0;
function u() {
    l = 1;
}
function c() {
    l = 2;
}
function d() {
    l = 3;
}
class f extends (i = r.ZP.Store) {
    getMigrationStatus() {
        return l;
    }
}
s(f, 'displayName', 'DomainMigrationStore');
let _ = new f(a.Z, {
    DOMAIN_MIGRATION_START: u,
    DOMAIN_MIGRATION_FAILURE: c,
    DOMAIN_MIGRATION_SKIP: d
});
