n.d(t, {
    ZP: () => l,
    _k: () => s,
    jW: () => o
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-03_invites_refresh',
    label: 'Invites Refresh',
    defaultConfig: {
        enabled: !1,
        entrypoints: !1,
        modal: !1
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
function o(e) {
    let { location: t } = e,
        { enabled: n, entrypoints: r, modal: i } = a.getCurrentConfig({ location: t });
    return {
        enabled: n,
        entrypoints: r,
        modal: i
    };
}
function s(e) {
    let { location: t } = e,
        { enabled: n, entrypoints: r, modal: i } = a.useExperiment({ location: t });
    return {
        enabled: n,
        entrypoints: r,
        modal: i
    };
}
let l = a;
