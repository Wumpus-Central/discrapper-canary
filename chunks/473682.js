n.d(t, {
    IU: () => m,
    M4: () => s,
    Ne: () => o,
    T9: () => i,
    Vb: () => r,
    cF: () => u,
    gM: () => d,
    hK: () => l,
    zI: () => c,
});
var a,
    r = 12633 == n.j ? (((a = {}).SELECT_GAME = "select-game"), (a.SERVER_SETTINGS = "server-settings"), a) : null;
let i = {
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
    l = 24,
    s = 680,
    o = 12633 == n.j ? s - 2 * l : null,
    c = 10,
    d = 32,
    u = 1000,
    m = "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "1415044199572832256" : "1415025086791942144";
