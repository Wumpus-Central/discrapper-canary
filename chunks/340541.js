n.d(t, {
    _k: () => l,
    jW: () => i
});
let r = (0, n(818083).B)({
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
function i(e) {
    let { location: t } = e,
        { enabled: n } = r.getCurrentConfig({ location: t });
    return n;
}
function l(e) {
    let { location: t } = e,
        { enabled: n } = r.useExperiment({ location: t });
    return { enabled: n };
}
