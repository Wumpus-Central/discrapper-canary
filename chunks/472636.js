"use strict";
n.r(t),
    n.d(t, {
        battlenetSocialSDKMigrationExperiment: () => u,
        getIsRiotSocialSDKMigrationEnabled: () => c,
        useIsRiotSocialSDKMigrationEnabled: () => d,
    });
var i = n(945810);
let r = { 0: { enabled: !1 }, 1: { enabled: !0 } },
    a = { enabled: !1 },
    s = (0, i.mj)({ name: "2026-04-riot-social-sdk-migration", kind: "user", defaultConfig: a, variations: r }),
    l = (0, i.mj)({
        name: "2026-05-riot-social-sdk-migration-us--canada",
        kind: "user",
        defaultConfig: a,
        variations: r,
    }),
    o = (0, i.mj)({
        name: "2026-05-riot-social-sdk-migration-all-regions",
        kind: "user",
        defaultConfig: a,
        variations: r,
    });
function d(e) {
    let t = s.useConfig(e),
        n = l.useConfig(e),
        i = o.useConfig(e);
    return t.enabled || n.enabled || i.enabled;
}
function c(e) {
    let t = s.getConfig(e),
        n = l.getConfig(e),
        i = o.getConfig(e);
    return t.enabled || n.enabled || i.enabled;
}
let u = (0, i.mj)({ name: "2026-06-battlenet-social-sdk-migration", kind: "user", defaultConfig: a, variations: r });
