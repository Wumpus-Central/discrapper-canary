n.d(t, {
    I3: () => a,
    p1: () => l
});
let r = (0, n(818083).B)({
    kind: 'guild',
    id: '2025-04_gdm_bedazzling',
    label: 'GDM Bedazzling',
    defaultConfig: {
        enabled: !1,
        unifiedEditing: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enabled - T1 - Unified editing',
            config: {
                enabled: !0,
                unifiedEditing: !0
            }
        },
        {
            id: 2,
            label: 'Enabled - T2 - Retain Change Icon',
            config: {
                enabled: !0,
                unifiedEditing: !1
            }
        }
    ]
});
function i(e, t, n) {
    return r.useExperiment(
        {
            location: e,
            guildId: t
        },
        n
    );
}
function a(e, t, n) {
    return i(e, t, n).enabled;
}
function l(e, t) {
    let { enabled: n, unifiedEditing: r } = i(e, t);
    return !n || !r;
}
