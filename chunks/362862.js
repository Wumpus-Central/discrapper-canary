n.d(t, { H: () => l });
let a = (0, n(945810).mj)({
    name: "2026-07-orbchievements",
    kind: "user",
    defaultConfig: { enabled: !1, forceEligible: !1 },
    variations: { 1: { enabled: !0, forceEligible: !1 }, 2: { enabled: !0, forceEligible: !0 } },
});
function l(e) {
    let { location: t } = e;
    return a.useConfig({ location: t }).enabled;
}
