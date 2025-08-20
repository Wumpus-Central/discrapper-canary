n.d(t, {
    b: () => o,
    j: () => a,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    id: "2025-08_custom_theme_share_receive",
    kind: "user",
    label: "Custom Theme Share Receiver",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enables receiving functionality for custom client themes shared by others",
            config: { enabled: !0 },
        },
    ],
});
function o(e) {
    return a.useExperiment({ location: e }).enabled;
}
