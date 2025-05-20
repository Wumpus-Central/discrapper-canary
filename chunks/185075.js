n.d(t, { W: () => a });
var r = n(818083),
    i = n(846573);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-04_desktop_multiple_background_updates_2',
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
function a(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.X.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0
        }
    );
}
