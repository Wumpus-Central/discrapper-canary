n.d(t, { i: () => s, x: () => l });
let i = (0, n(945810).mj)({
    name: "2026-06-jellybean",
    kind: "user",
    defaultConfig: { enabled: !1, largeGiftButton: !1 },
    variations: {
        0: { enabled: !1, largeGiftButton: !1 },
        1: { enabled: !0, largeGiftButton: !1 },
        2: { enabled: !0, largeGiftButton: !0 },
    },
});
function l(e) {
    return i.useConfig({ location: e }).enabled;
}
function s(e) {
    return i.useConfig({ location: e });
}
