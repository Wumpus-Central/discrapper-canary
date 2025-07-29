n.d(t, { U: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-07_mana_desktop_text_inputs',
    label: 'Mana Desktop Text Inputs',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'New text input styles',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }).enabled;
}
