"use strict";
n.d(t, { Gl: () => o, JW: () => s, OW: () => a });
var i,
    r = n(472636),
    a = (((i = {}).RIOT_GAMES = "1443033465766281327"), (i.BATTLENET = "1412940519742636124"), i);
let s = [
        {
            applicationId: "1443033465766281327",
            getMigrationExperimentEnabled: (e) => (0, r.getIsRiotSocialSDKMigrationEnabled)({ location: e }),
            useMigrationExperimentEnabled: (e) => (0, r.useIsRiotSocialSDKMigrationEnabled)({ location: e }),
        },
    ],
    l = [
        {
            applicationId: "1443033465766281327",
            getMigrationExperimentEnabled: (e) => (0, r.getIsRiotSocialSDKMigrationEnabled)({ location: e }),
            useMigrationExperimentEnabled: (e) => (0, r.useIsRiotSocialSDKMigrationEnabled)({ location: e }),
        },
        {
            applicationId: "1412940519742636124",
            getMigrationExperimentEnabled: (e) =>
                r.battlenetSocialSDKMigrationExperiment.getConfig({ location: e }).enabled,
            useMigrationExperimentEnabled: (e) =>
                r.battlenetSocialSDKMigrationExperiment.useConfig({ location: e }).enabled,
        },
    ];
function o(e) {
    return l.filter((t) => t.getMigrationExperimentEnabled(e)).map((e) => e.applicationId);
}
