n.d(t, {
    AK: () => c,
    EK: () => o,
    IX: () => a,
    SW: () => b,
    SY: () => u,
    Sg: () => p,
    TG: () => s,
    YX: () => d,
    nd: () => O,
    tq: () => f,
    uz: () => y,
    xn: () => m,
});
var r,
    i = n(763600),
    l = n(48541),
    o = 12633 == n.j ? (((r = {}).SELECT_GAME = "select-game"), (r.SERVER_SETTINGS = "server-settings"), r) : null;
let a = {
        steps: {
            "select-game": {
                onBack: { type: "close" },
                onNext: {
                    type: "go-to-step",
                    step: "server-settings",
                },
            },
            "server-settings": {
                onBack: {
                    type: "go-to-step",
                    step: "select-game",
                },
                onNext: { type: "save" },
            },
        },
    },
    s = 24,
    c = 680,
    u = 12633 == n.j ? c - 2 * s : null,
    d = 10,
    p = 32,
    f = 1000,
    m = 3,
    b =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144",
    y = {
        [i.Z.SHOCKBYTE]:
            window.GLOBAL_ENV.RELEASE_CHANNEL === l.C.STAGING
                ? "https://purple-prod.shockbyte.dev/support"
                : "https://discord.shockbyte.com/support",
    },
    O = { [i.Z.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" };
