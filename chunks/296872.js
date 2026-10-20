n.d(t, { XF: () => r, ac: () => a });
let i = (0, n(945810).mj)({
    name: "2026-10-embedded-app-frame-policy",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function r(e) {
    return i.useConfig({ location: e }).enabled;
}
function a(e) {
    return i.getConfig({ location: e }).enabled;
}
