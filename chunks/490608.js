n.d(t, { W: () => a });
var i = n(143770),
    r = n(688151);
let a = (0, i.A)({
    kind: "user",
    id: "2025-03_test_tile_new_users",
    label: "Test Tile New Users Experiment",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$G.CONNECTION_OPEN,
    treatments: [
        { id: 1, label: "Variation with first treatment enabled", config: { enabled: !0 } },
        { id: 2, label: "Variation with second treatment enabled", config: { enabled: !0 } },
    ],
});
