n.d(t, {
    BH: () => x,
    IU: () => h,
    M4: () => c,
    Ne: () => d,
    Q_: () => f,
    T9: () => s,
    Vb: () => l,
    cF: () => p,
    gM: () => m,
    hK: () => o,
    zI: () => u,
});
var a,
    r = n(763600),
    i = n(48541),
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
              : "1415025086791942144",
    x = {
        [r.Z.SHOCKBYTE]:
            window.GLOBAL_ENV.RELEASE_CHANNEL === i.C.STAGING
                ? "https://purple-prod.shockbyte.dev/support"
                : "https://discord.shockbyte.com/support",
    },
    f = { [r.Z.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" };
