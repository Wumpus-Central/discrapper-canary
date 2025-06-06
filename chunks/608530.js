n.d(t, { L: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-05_upload_refactor',
    label: 'Aligns attachment and non-attachment message sending',
    defaultConfig: {
        enabled: !1,
        showSetting: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: {
                enabled: !0,
                showSetting: !1
            }
        },
        {
            id: 2,
            label: 'Enabled with Debug Setting',
            config: {
                enabled: !0,
                showSetting: !0
            }
        }
    ]
});
function i(e) {
    return r.getCurrentConfig({ location: e }).enabled;
}
