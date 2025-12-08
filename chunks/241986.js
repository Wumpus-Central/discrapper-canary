n.d(t, { Z: () => r });
let l = (0, n(427164).le)({
    name: "2025-12-katsudon",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function r(e) {
    let { location: t } = e,
        { enabled: n } = l.useConfig({ location: t });
    return n;
}
