n.d(t, { W: () => l });
var r = n(818083),
    i = n(846573);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-01_desktop_multiple_background_updates',
    label: 'Support multiple native background updates',
    defaultConfig: { nativeUpdateCount: 1 },
    treatments: [
        {
            id: 1,
            label: 'Allow multiple native background updates',
            config: { nativeUpdateCount: 3 }
        }
    ]
});
function l(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.X.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0
        }
    );
}
