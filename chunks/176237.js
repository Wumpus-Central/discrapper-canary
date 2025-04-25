n.d(t, {
    w: () => s,
    x: () => l
});
var a = n(818083);
let r = (0, n(427164).le)({
        id: '2025-04_apex_app_sdk_aa',
        kind: 'user',
        defaultConfig: { value: 'default' }
    }),
    i = (0, a.B)({
        id: '2025-04_apex_start_session',
        kind: 'user',
        label: 'Apex App SDK Rollout',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function l(e) {
    let { location: t } = e;
    return r.useCurrentConfig({ location: t });
}
function s(e) {
    let { location: t } = e;
    return i.useExperiment({ location: t }, { autoTrackExposure: !1 });
}
