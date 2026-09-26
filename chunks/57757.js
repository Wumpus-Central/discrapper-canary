n.d(t, { a: () => a, v: () => r });
let i = (0, n(945810).mj)({
    name: "2026-08-game-mode",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t });
}
function a(e) {
    let { location: t } = e;
    return i.useConfig({ location: t });
}
