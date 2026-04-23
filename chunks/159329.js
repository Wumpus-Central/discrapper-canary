n.d(t, { P3: () => r });
let i = (0, n(250105).Ay)({
    name: "2026-04-safety-flows",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t }).enabled;
}
