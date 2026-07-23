t.d(r, { b: () => _, i: () => a });
let n = (0, t(945810).mj)({
    name: "2026-03-croissant",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function _(e) {
    let { enabled: r } = n.useConfig({ location: e });
    return r;
}
function a(e) {
    let { enabled: r } = n.getConfig({ location: e });
    return r;
}
