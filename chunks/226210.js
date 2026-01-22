n.d(t, { N: () => i });
let r = (0, n(945810).mj)({
    name: "2026-01-nvenc-new-presets",
    kind: "user",
    defaultConfig: { vbvBufferSize: 0 },
    variations: {
        1: { vbvBufferSize: 250 },
        2: { vbvBufferSize: 125 },
        3: { vbvBufferSize: 75 },
    },
});
function i(e) {
    return r.getConfig({ location: e });
}
