n.d(t, {
    IU: () => m,
    M4: () => o,
    Ne: () => c,
    T9: () => l,
    Vb: () => i,
    gM: () => u,
    hK: () => s,
    zI: () => d,
});
var a,
    r = n(48541),
    i = 12633 == n.j ? (((a = {}).SELECT_GAME = "select-game"), (a.SERVER_SETTINGS = "server-settings"), a) : null;
let l = {
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
    o = 680,
    c = 12633 == n.j ? o - 2 * s : null,
    d = 10,
    u = 32,
    m = window.GLOBAL_ENV.RELEASE_CHANNEL === r.C.STAGING ? "1415044199572832256" : "1415025086791942144";
