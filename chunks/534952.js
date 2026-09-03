n.r(t),
    n.d(t, {
        APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS: () => l,
        APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS: () => o,
        APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS: () => d,
        ApplicationIdentityAppIds: () => a,
        getMigratedApplicationIdentityConnectionsScreenApplications: () => c,
    });
var i,
    r = n(472636),
    a =
        (((i = {}).RIOT_GAMES = "1443033465766281327"),
        (i.LEAGUE_OF_LEGENDS = "1443349464290168976"),
        (i.VALORANT = "1443350165678198935"),
        (i.BATTLENET = "1356665549089800303"),
        (i.WORLD_OF_WARCRAFT = "1384671873593512078"),
        i);
let s = {
        "1443033465766281327": {
            applicationId: "1443033465766281327",
            getMigrationExperimentEnabled: () => !0,
            connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
        },
        "1443349464290168976": {
            applicationId: "1443349464290168976",
            getMigrationExperimentEnabled: () => !0,
            connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
        },
        "1443350165678198935": {
            applicationId: "1443350165678198935",
            getMigrationExperimentEnabled: () => !0,
            connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
        },
        "1356665549089800303": {
            applicationId: "1356665549089800303",
            getMigrationExperimentEnabled: (e) => r.M.getConfig({ location: e }).enabled,
        },
        "1384671873593512078": {
            applicationId: "1384671873593512078",
            getMigrationExperimentEnabled: (e) => r.M.getConfig({ location: e }).enabled,
            connectionEntrypointUrlOverride: "https://account.battle.net/connections/discord",
        },
    },
    l = [s["1443033465766281327"], s["1356665549089800303"]],
    o = [s["1443033465766281327"], s["1356665549089800303"]],
    d = {
        "1384671873593512078": s["1384671873593512078"],
        "1443033465766281327": s["1443033465766281327"],
        "1443349464290168976": s["1443349464290168976"],
        "1443350165678198935": s["1443350165678198935"],
    };
function c(e) {
    return l.filter((t) => t.getMigrationExperimentEnabled(e)).map((e) => e.applicationId);
}
