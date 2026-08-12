"use strict";
n.r(t),
    n.d(t, {
        ApplicationIdentityAppIds: () => u,
        APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS: () => A,
        APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS: () => h,
        getMigratedApplicationIdentityConnectionsScreenApplications: () => I,
        APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS: () => E,
    });
var i,
    r = n(472636),
    a = n(945810);
let s = { 0: { enabled: !1 }, 1: { enabled: !0 } },
    l = { enabled: !1 },
    o = (0, a.mj)({ name: "2026-04-valorant-social-sdk", kind: "user", defaultConfig: l, variations: s }),
    d = (0, a.mj)({ name: "2026-05-valorant-social-sdk-us--canada", kind: "user", defaultConfig: l, variations: s }),
    c = (0, a.mj)({ name: "2026-05-valorant-social-sdk-all-regions", kind: "user", defaultConfig: l, variations: s });
var u =
    (((i = {}).RIOT_GAMES = "1443033465766281327"),
    (i.LEAGUE_OF_LEGENDS = "1443349464290168976"),
    (i.VALORANT = "1443350165678198935"),
    (i.BATTLENET = "1356665549089800303"),
    (i.WORLD_OF_WARCRAFT = "1384671873593512078"),
    i);
let _ = {
        "1443033465766281327": {
            applicationId: "1443033465766281327",
            getMigrationExperimentEnabled: (e) => (0, r.NX)({ location: e }),
            useMigrationExperimentEnabled: (e) => (0, r.Cl)({ location: e }),
            connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
        },
        "1443349464290168976": {
            applicationId: "1443349464290168976",
            getMigrationExperimentEnabled: (e) => (0, r.NX)({ location: e }),
            useMigrationExperimentEnabled: (e) => (0, r.Cl)({ location: e }),
            connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
        },
        "1443350165678198935": {
            applicationId: "1443350165678198935",
            getMigrationExperimentEnabled: (e) => {
                var t;
                let n, i, r;
                return (
                    (t = { location: e }),
                    (n = o.getConfig(t)),
                    (i = d.getConfig(t)),
                    (r = c.getConfig(t)),
                    n.enabled || i.enabled || r.enabled
                );
            },
            useMigrationExperimentEnabled: (e) => {
                var t;
                let n, i, r;
                return (
                    (t = { location: e }),
                    (n = o.useConfig(t)),
                    (i = d.useConfig(t)),
                    (r = c.useConfig(t)),
                    n.enabled || i.enabled || r.enabled
                );
            },
            connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
        },
        "1356665549089800303": {
            applicationId: "1356665549089800303",
            getMigrationExperimentEnabled: (e) => r.MQ.getConfig({ location: e }).enabled,
            useMigrationExperimentEnabled: (e) => r.MQ.useConfig({ location: e }).enabled,
        },
        "1384671873593512078": {
            applicationId: "1384671873593512078",
            getMigrationExperimentEnabled: (e) => r.MQ.getConfig({ location: e }).enabled,
            useMigrationExperimentEnabled: (e) => r.MQ.useConfig({ location: e }).enabled,
            connectionEntrypointUrlOverride: "https://account.battle.net/connections/discord",
        },
    },
    E = [_["1443033465766281327"], _["1356665549089800303"]],
    A = [_["1443033465766281327"], _["1356665549089800303"]],
    h = {
        "1384671873593512078": _["1384671873593512078"],
        "1443033465766281327": _["1443033465766281327"],
        "1443349464290168976": _["1443349464290168976"],
        "1443350165678198935": _["1443350165678198935"],
    };
function I(e) {
    return E.filter((t) => t.getMigrationExperimentEnabled(e)).map((e) => e.applicationId);
}
