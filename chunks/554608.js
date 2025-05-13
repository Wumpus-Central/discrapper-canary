n.d(t, {
    P: () => s,
    Z: () => _
});
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
var s = (function (e) {
    return (e[(e.NOT_STARTED = 0)] = 'NOT_STARTED'), (e[(e.IN_PROGRESS = 1)] = 'IN_PROGRESS'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.SKIPPED = 3)] = 'SKIPPED'), e;
})({});
let l = 0;
function c() {
    l = 1;
}
function u() {
    l = 2;
}
function d() {
    l = 3;
}
class f extends (r = i.ZP.Store) {
    getMigrationStatus() {
        return l;
    }
}
o(f, 'displayName', 'DomainMigrationStore');
let _ = new f(a.Z, {
    DOMAIN_MIGRATION_START: c,
    DOMAIN_MIGRATION_FAILURE: u,
    DOMAIN_MIGRATION_SKIP: d
});
