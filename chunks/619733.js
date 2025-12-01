n.d(t, {
    AK: () => l,
    EK: () => a,
    IX: () => o,
    SW: () => p,
    SY: () => c,
    Sg: () => d,
    TG: () => s,
    YX: () => u,
    Z4: () => m,
    fj: () => h,
    nd: () => _,
    tq: () => f,
});
var r = n(763600),
    i = n(48541),
    a = (function (e) {
        return (e.SELECT_GAME = "select-game"), (e.SERVER_SETTINGS = "server-settings"), e;
    })({});
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
    l = 680,
    c = 632,
    u = 10,
    d = 32,
    f = 1000,
    p =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144";
r.Z.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, i.C.STAGING;
let _ = { [r.Z.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    m = (e, t) =>
        "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=".concat(e, "&guild_id=").concat(t),
    h = "0";
