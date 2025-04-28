n.d(t, {
    S: () => o,
    h: () => s
});
var r = n(668757),
    i = n(818083),
    a = n(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2025-04_libdiscore_critical_flow',
    label: 'Require libdiscore to use the app',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Require libdiscore to use the app',
            config: { enabled: !0 }
        }
    ]
});
function s() {
    return o.useExperiment({ location: 'default' }).enabled && (0, r.oC)();
}
