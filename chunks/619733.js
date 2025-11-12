n.d(t, {
    AK: () => c,
    EK: () => l,
    IX: () => s,
    SW: () => h,
    SY: () => d,
    Sg: () => m,
    TG: () => o,
    YX: () => u,
    Z4: () => g,
    nd: () => x,
    tq: () => p,
});
var a,
    i = n(763600),
    r = n(48541),
    l = 12633 == n.j ? (((a = {}).SELECT_GAME = "select-game"), (a.SERVER_SETTINGS = "server-settings"), a) : null;
let s = {
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
    o = 24,
    c = 680,
    d = 12633 == n.j ? c - 2 * o : null,
    u = 10,
    m = 32,
    p = 1000,
    h =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144";
i.Z.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, r.C.STAGING;
let x = { [i.Z.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    g = (e, t) =>
        "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=".concat(e, "&guild_id=").concat(t);
