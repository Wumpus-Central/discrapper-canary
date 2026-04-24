s.d(t, { Q: () => r, l: () => a });
let n = (0, s(945810).mj)({
    name: "2026-03-croissant",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function a(e) {
    let { enabled: t } = n.useConfig({ location: e });
    return t;
}
function r(e) {
    let { enabled: t } = n.getConfig({ location: e });
    return t;
}
