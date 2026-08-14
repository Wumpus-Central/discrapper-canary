r.d(e, { QW: () => n, rV: () => s });
let i = (0, r(945810).mj)({
    name: "2026-04-profile-frame-gifting",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function n(t) {
    return i.getConfig({ location: t }).enabled;
}
function s(t) {
    return i.useConfig({ location: t }).enabled;
}
