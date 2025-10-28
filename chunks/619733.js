n.d(t, {
    AK: () => c,
    EK: () => i,
    IX: () => o,
    SW: () => h,
    SY: () => d,
    Sg: () => m,
    TG: () => s,
    YX: () => u,
    Z4: () => b,
    nd: () => f,
    tq: () => p,
    uz: () => x,
});
var a,
    r = n(763600),
    l = n(48541),
    i = 12633 == n.j ? (((a = {}).SELECT_GAME = "select-game"), (a.SERVER_SETTINGS = "server-settings"), a) : null;
let o = {
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
    d = 12633 == n.j ? c - 2 * s : null,
    u = 10,
    m = 32,
    p = 1000,
    h =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144",
    x = {
        [r.Z.SHOCKBYTE]:
            window.GLOBAL_ENV.RELEASE_CHANNEL === l.C.STAGING
                ? "https://purple-prod.shockbyte.dev/support"
                : "https://discord.shockbyte.com/support",
    },
    f = { [r.Z.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    b = (e, t) =>
        "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=".concat(e, "&guild_id=").concat(t);
