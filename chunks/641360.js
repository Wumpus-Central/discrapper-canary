n.d(t, {
    I3: () => a,
    p1: () => i
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_gdm_bedazzle',
    label: 'GDM Bedazzle',
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
function i(e) {
    let { enabled: t, unifiedEditing: n } = r.useExperiment({ location: e });
    return !t || !n;
}
function a(e) {
    let { enabled: t } = r.useExperiment({ location: e });
    return t;
}
