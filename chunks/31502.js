s.d(t, { Q: () => a, l: () => l });
let r = (0, s(945810).mj)({
    name: "2026-03-croissant",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function l(e) {
    let { enabled: t } = r.useConfig({ location: e });
    return t;
}
function a(e) {
    let { enabled: t } = r.getConfig({ location: e });
    return t;
}
