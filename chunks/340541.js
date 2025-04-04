n.d(i, {
    _k: () => r,
    jW: () => o
});
let t = (0, n(818083).B)({
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
function o(e) {
    let { location: i } = e,
        { enabled: n } = t.getCurrentConfig({ location: i });
    return n;
}
function r(e) {
    let { location: i } = e,
        { enabled: n } = t.useExperiment({ location: i });
    return { enabled: n };
}
