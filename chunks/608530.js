n.d(t, { L: () => a });
var r = n(818083),
    i = n(740492);
let l = (0, r.B)({
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
function a(e) {
    let { enabled: t, showSetting: n } = l.getCurrentConfig({ location: e });
    return (!n || !!i.ZP.uploadRefactorEnabled) && t;
}
