n.d(t, { Z: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'guild',
    id: '2025-04_report_to_mod',
    label: 'Report to moderator',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'report to moderator triggering',
            config: { enabled: !0 }
        }
    ]
});
