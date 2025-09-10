n.d(t, {
    IU: () => d,
    M4: () => s,
    Ne: () => o,
    T9: () => l,
    Vb: () => r,
    hK: () => i,
    zI: () => c,
});
var a,
    r = 12633 == n.j ? (((a = {}).SELECT_GAME = "select-game"), (a.SERVER_SETTINGS = "server-settings"), a) : null;
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
    i = 24,
    s = 680,
    o = 12633 == n.j ? s - 2 * i : null,
    c = 10,
    d = "1415025086791942144";
