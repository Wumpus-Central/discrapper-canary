n.d(t, {
    i: () => o,
    p: () => a,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
        kind: "user",
        id: "2025-08_collectibles_categories_v2_endpoint",
        label: "Collectibles V2 Endpoint",
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        defaultConfig: { useV2Endpoint: !1 },
        treatments: [
            {
                id: 1,
                label: "Use V2 Endpoint",
                config: { useV2Endpoint: !0 },
            },
        ],
    }),
    o = (e) => a.getCurrentConfig({ location: e }).useV2Endpoint;
