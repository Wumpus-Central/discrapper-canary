n.d(t, {
    _k: () => a,
    jW: () => r
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_invites_refresh',
    label: 'Invites Refresh',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled - Treatment 1 (Invites Refresh)',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { location: t } = e,
        { enabled: n } = i.getCurrentConfig({ location: t });
    return n;
}
function a(e) {
    let { location: t } = e,
        { enabled: n } = i.useExperiment({ location: t });
    return { enabled: n };
}
