n.d(t, {
    _k: () => o,
    jW: () => i
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_invites_refresh',
    label: 'Invites Refresh',
    defaultConfig: {
        enabled: !1,
        entrypoints: !1,
        modal: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enabled - Treatment 1 (Full Invites Refresh)',
            config: {
                enabled: !0,
                entrypoints: !0,
                modal: !0
            }
        },
        {
            id: 2,
            label: 'Enabled - Treatment 2 (New Entrypoints, Old Modal)',
            config: {
                enabled: !0,
                entrypoints: !0,
                modal: !1
            }
        },
        {
            id: 3,
            label: 'Enabled - Treatment 3 (Old Entrypoints, New Modal)',
            config: {
                enabled: !0,
                entrypoints: !1,
                modal: !0
            }
        }
    ]
});
function i(e) {
    let { location: t } = e,
        { enabled: n, entrypoints: i, modal: o } = r.getCurrentConfig({ location: t });
    return {
        enabled: n,
        entrypoints: i,
        modal: o
    };
}
function o(e) {
    let { location: t } = e,
        { enabled: n, entrypoints: i, modal: o } = r.useExperiment({ location: t });
    return {
        enabled: n,
        entrypoints: i,
        modal: o
    };
}
