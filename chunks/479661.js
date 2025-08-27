n.d(t, {
    e: () => a,
    n: () => o,
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    id: "2025-08_custom_theme_share_send",
    kind: "user",
    label: "Custom Theme Share Send",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enables sharing functionality for custom client themes",
            config: { enabled: !0 },
        },
    ],
});
function a(e) {
    return o.useExperiment({ location: e }).enabled;
}
