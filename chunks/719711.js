var i, a;
r.d(n, {
    SV: function () {
        return o;
    }
}),
    !(function (e) {
        (e[(e.SKIP_MIGRATION = 0)] = 'SKIP_MIGRATION'), (e[(e.SEND_DATA = 1)] = 'SEND_DATA'), (e[(e.DATA_MIGRATED = 2)] = 'DATA_MIGRATED'), (e[(e.DATA_MIGRATED_CONFIRMED = 3)] = 'DATA_MIGRATED_CONFIRMED');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.MIGRATION_SOURCE_DOMAIN = 0)] = 'MIGRATION_SOURCE_DOMAIN'), (e[(e.MIGRATION_DESTINATION_DOMAIN = 1)] = 'MIGRATION_DESTINATION_DOMAIN');
    })(a || (a = {}));
let o = 'domainMigrationSuccess';
function s(e, n) {
    let r = 0 === n ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
    return e.origin === r && null != e.data.domainMigrationEvent && !0;
}
