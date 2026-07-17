"use strict";
n.d(t, { Gl: () => d, JW: () => s, OW: () => a, ji: () => o });
var i,
    r = n(472636),
    a = (((i = {}).RIOT_GAMES = "1443033465766281327"), (i.BATTLENET = "1356665549089800303"), i);
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
            applicationId: "1356665549089800303",
            getMigrationExperimentEnabled: (e) =>
                r.battlenetSocialSDKMigrationExperiment.getConfig({ location: e }).enabled,
            useMigrationExperimentEnabled: (e) =>
                r.battlenetSocialSDKMigrationExperiment.useConfig({ location: e }).enabled,
        },
    ],
    o = [
        {
            applicationId: "1443033465766281327",
            getMigrationExperimentEnabled: (e) => (0, r.getIsRiotSocialSDKMigrationEnabled)({ location: e }),
            useMigrationExperimentEnabled: (e) => (0, r.useIsRiotSocialSDKMigrationEnabled)({ location: e }),
        },
        {
            applicationId: "1356665549089800303",
            getMigrationExperimentEnabled: (e) =>
                r.battlenetSocialSDKMigrationExperiment.getConfig({ location: e }).enabled,
            useMigrationExperimentEnabled: (e) =>
                r.battlenetSocialSDKMigrationExperiment.useConfig({ location: e }).enabled,
        },
    ];
function d(e) {
    return l.filter((t) => t.getMigrationExperimentEnabled(e)).map((e) => e.applicationId);
}
