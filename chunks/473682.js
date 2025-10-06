n.d(t, {
    BH: () => b,
    IU: () => x,
    M4: () => d,
    Ne: () => u,
    T9: () => o,
    Vb: () => s,
    cF: () => h,
    gM: () => p,
    hK: () => c,
    mg: () => f,
    zI: () => m,
});
var a,
    r,
    i = n(763600),
    l = n(48541),
    s = 12633 == n.j ? (((a = {}).SELECT_GAME = "select-game"), (a.SERVER_SETTINGS = "server-settings"), a) : null;
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
    c = 24,
    d = 680,
    u = 12633 == n.j ? d - 2 * c : null,
    m = 10,
    p = 32,
    h = 1000,
    x = "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "1415044199572832256" : "1415025086791942144";
var f = 12633 == n.j ? (((r = {})[(r.SHOCKBYTE = 0)] = "SHOCKBYTE"), r) : null;
let b = {
    [i.Z.SHOCKBYTE]:
        window.GLOBAL_ENV.RELEASE_CHANNEL === l.C.STAGING
            ? "https://purple-prod.shockbyte.dev/support"
            : "https://discord.shockbyte.com/support",
};
