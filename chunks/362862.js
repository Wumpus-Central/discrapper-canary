a.d(t, { H: () => n });
let l = (0, a(945810).mj)({
    name: "2026-07-orbchievements",
    kind: "user",
    defaultConfig: { enabled: !1, forceEligible: !1 },
    variations: { 1: { enabled: !0, forceEligible: !1 }, 2: { enabled: !0, forceEligible: !0 } },
});
function n(e) {
    let { location: t } = e;
    return l.useConfig({ location: t }).enabled;
}
