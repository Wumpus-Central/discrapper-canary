n.d(t, { R: () => a });
var r = n(818083),
    i = n(846573);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-04_win_electron_notifications',
    label: 'Windows Electron Notifications',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Electron notifications',
            config: { enabled: !0 }
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
