n.d(t, { P3: () => s });
var i = n(600975),
    l = n(250105);
let r = (0, i.C)({
        id: "2025-05_safety_flows",
        label: "Safety Flows",
        kind: "user",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
    }),
    a = (0, l.Ay)({
        name: "2026-04-safety-flows",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function s(e) {
    let { location: t } = e,
        n = r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled,
        i = a.getConfig({ location: t }).enabled;
    return n || i;
}
