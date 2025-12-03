n.d(t, { Z: () => l });
let r = (0, n(427164).le)({
    name: "2025-12-katsudon",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function l(e) {
    let { location: t } = e,
        { enabled: n } = r.useConfig({ location: t });
    return n;
}
