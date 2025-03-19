n.d(t, { _k: () => i });
let l = (0, n(818083).B)({
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
function i() {
    let { enabled: e } = l.useExperiment({ location: 'instant_invite_modal' });
    return { enabled: e };
}
