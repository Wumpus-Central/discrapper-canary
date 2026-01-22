n.d(t, {
    A: () => p,
    p: () => o,
});
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
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
var o = (function (e) {
    return (
        (e[(e.NOT_STARTED = 0)] = "NOT_STARTED"),
        (e[(e.IN_PROGRESS = 1)] = "IN_PROGRESS"),
        (e[(e.FAILED = 2)] = "FAILED"),
        (e[(e.SKIPPED = 3)] = "SKIPPED"),
        e
    );
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
class f extends (r = i.Ay.Store) {
    getMigrationStatus() {
        return l;
    }
}
s(f, "displayName", "DomainMigrationStore");
let p = new f(a.h, {
    DOMAIN_MIGRATION_START: c,
    DOMAIN_MIGRATION_FAILURE: u,
    DOMAIN_MIGRATION_SKIP: d,
});
