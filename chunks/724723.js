n.d(t, { q: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-06_mana_desktop_modals',
    label: 'Mana Desktop Modals',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'New modal components',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }).enabled;
}
