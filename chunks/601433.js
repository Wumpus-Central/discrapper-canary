n.d(t, { D: () => s });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2023-03_text_playground_settings_pane',
    label: 'Text Playground',
    defaultConfig: { showSetting: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable settings pane',
            config: { showSetting: !0 }
        }
    ]
});
function s() {
    return i.getCurrentConfig({ location: '26c832_1' }, { autoTrackExposure: !0 }).showSetting;
}
