n.d(t, { A: () => r, d: () => l });
let a = (0, n(945810).mj)({
    name: "2026-08-badge-management",
    kind: "user",
    defaultConfig: { enabled: !1, tenureBadgeHideable: !1 },
    variations: { 1: { enabled: !0, tenureBadgeHideable: !0 }, 2: { enabled: !0, tenureBadgeHideable: !1 } },
});
function l(e) {
    let { location: t } = e;
    return a.useConfig({ location: t }).enabled;
}
let r = a;
