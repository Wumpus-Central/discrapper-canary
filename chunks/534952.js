(n.r(t),
    n.d(t, {
        APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS: () => s,
        APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS: () => l,
        APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS: () => o,
        ApplicationIdentityAppIds: () => r,
        getMigratedApplicationIdentityConnectionsScreenApplications: () => d,
    }));
var i,
    r =
        (((i = {}).RIOT_GAMES = "1443033465766281327"),
        (i.LEAGUE_OF_LEGENDS = "1443349464290168976"),
        (i.VALORANT = "1443350165678198935"),
        (i.BATTLENET = "1356665549089800303"),
        (i.WORLD_OF_WARCRAFT = "1384671873593512078"),
        i);
let a = {
        "1443033465766281327": {
            applicationId: "1443033465766281327",
            connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
        },
        "1443349464290168976": {
            applicationId: "1443349464290168976",
            connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
        },
        "1443350165678198935": {
            applicationId: "1443350165678198935",
            connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
        },
        "1356665549089800303": { applicationId: "1356665549089800303" },
        "1384671873593512078": {
            applicationId: "1384671873593512078",
            connectionEntrypointUrlOverride: "https://account.battle.net/connections/discord",
        },
    },
    s = [a["1443033465766281327"], a["1356665549089800303"]],
    l = [a["1443033465766281327"], a["1356665549089800303"]],
    o = {
        "1384671873593512078": a["1384671873593512078"],
        "1443033465766281327": a["1443033465766281327"],
        "1443349464290168976": a["1443349464290168976"],
        "1443350165678198935": a["1443350165678198935"],
    };
function d() {
    return s.map((e) => e.applicationId);
}
