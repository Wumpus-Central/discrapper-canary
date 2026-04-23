"use strict";
n.d(t, { A: () => u, p: () => a });
var r,
    i = n(311907),
    s = n(73153),
    a =
        (((r = {})[(r.NOT_STARTED = 0)] = "NOT_STARTED"),
        (r[(r.IN_PROGRESS = 1)] = "IN_PROGRESS"),
        (r[(r.FAILED = 2)] = "FAILED"),
        (r[(r.SKIPPED = 3)] = "SKIPPED"),
        r);
let o = 0;
class l extends i.Ay.Store {
    static displayName = "DomainMigrationStore";
    getMigrationStatus() {
        return o;
    }
}
let u = new l(s.h, {
    DOMAIN_MIGRATION_START: function () {
        o = 1;
    },
    DOMAIN_MIGRATION_FAILURE: function () {
        o = 2;
    },
    DOMAIN_MIGRATION_SKIP: function () {
        o = 3;
    },
});
