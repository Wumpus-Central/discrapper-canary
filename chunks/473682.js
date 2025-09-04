n.d(t, {
    M4: () => o,
    Ne: () => c,
    T9: () => s,
    Vb: () => a,
    hK: () => i,
    zI: () => l,
});
var r,
    a = (((r = {}).SELECT_GAME = "select-game"), (r.SERVER_SETTINGS = "server-settings"), r);
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
                onNext: { type: "purchase" },
            },
        },
    },
    i = 24,
    o = 680,
    c = 632,
    l = 10;
