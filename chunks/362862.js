l.d(t, { H: () => a });
let n = (0, l(945810).mj)({
    name: "2026-07-orbchievements",
    kind: "user",
    defaultConfig: { enabled: !1, forceEligible: !1 },
    variations: { 1: { enabled: !0, forceEligible: !1 }, 2: { enabled: !0, forceEligible: !0 } },
});
function a(e) {
    let { location: t } = e;
    return n.useConfig({ location: t }).enabled;
}
