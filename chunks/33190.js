t.d(s, { H: () => l });
let i = (0, t(945810).mj)({
    name: "2026-03-wishlisting-everywhere",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function l(e) {
    return i.useConfig({ location: e }).enabled;
}
