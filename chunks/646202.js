n.d(t, { fN: () => r });
let i = (0, n(250105).Ay)({
    name: "2026-02-soundboard-xp-5",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: { 0: { treatment: "control" }, 1: { treatment: "treatment_a" } },
});
function r(e) {
    return "control" !== (i.getConfig({ location: e }).treatment ?? "control");
}
