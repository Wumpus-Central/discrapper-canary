"use strict";
n.d(t, { A: () => d, p: () => a });
var r = n(311907),
    i = n(73153),
    a = (function (e) {
        return (
            (e[(e.NOT_STARTED = 0)] = "NOT_STARTED"),
            (e[(e.IN_PROGRESS = 1)] = "IN_PROGRESS"),
            (e[(e.FAILED = 2)] = "FAILED"),
            (e[(e.SKIPPED = 3)] = "SKIPPED"),
            e
        );
    })({});
let s = 0;
function o() {
    s = 1;
}
function l() {
    s = 2;
}
function u() {
    s = 3;
}
class c extends r.Ay.Store {
    static displayName = "DomainMigrationStore";
    getMigrationStatus() {
        return s;
    }
}
let d = new c(i.h, { DOMAIN_MIGRATION_START: o, DOMAIN_MIGRATION_FAILURE: l, DOMAIN_MIGRATION_SKIP: u });
