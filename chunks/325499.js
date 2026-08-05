t.d(n, { b: () => a, i: () => i });
let r = (0, t(945810).mj)({
    name: "2026-03-croissant",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function a(e) {
    let { enabled: n } = r.useConfig({ location: e });
    return n;
}
function i(e) {
    let { enabled: n } = r.getConfig({ location: e });
    return n;
}
