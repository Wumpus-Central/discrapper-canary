n.d(t, { o: () => l });
var r = n(987170),
    i = n(987338);
let l = (0, r.Z)({
    id: "2025-07_apex_cluster_randomization_aa",
    kind: "user",
    label: "Apex Cluster Randomization AA",
    defaultConfig: { isEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: "AA test enabled. Noop on UI effect.",
            config: { isEnabled: !0 },
        },
    ],
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
});
