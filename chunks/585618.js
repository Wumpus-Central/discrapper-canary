t.d(n, { e: () => r });
let l = (0, t(250105).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    return l.useConfig({ location: e }).enabled;
}
