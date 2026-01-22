n.d(t, {
    s: () => l,
});
var r = n(143770),
    i = n(688151);
let l = (0, r.A)({
    id: "2025-07_apex_cluster_randomization_aa",
    kind: "user",
    label: "Apex Cluster Randomization AA",
    defaultConfig: {
        isEnabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "AA test enabled. Noop on UI effect.",
            config: {
                isEnabled: !0,
            },
        },
    ],
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
});
