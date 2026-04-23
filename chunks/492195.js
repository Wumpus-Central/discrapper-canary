s.d(t, { dF: () => r });
let i = (0, s(945810).mj)({
    name: "2026-02-mobile-referral-program-xp-2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
}
