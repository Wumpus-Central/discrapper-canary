s.d(t, { dF: () => a });
let i = (0, s(945810).mj)({
    name: "2026-02-mobile-referral-program-xp-2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function a(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
}
