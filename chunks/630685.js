n.d(t, { P: () => l, i: () => r });
let i = (0, n(945810).mj)({
    name: "2026-10-add-server-join-first",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function l(e) {
    return i.useConfig({ location: e }).enabled;
}
function r(e) {
    return i.getConfig({ location: e }).enabled;
}
