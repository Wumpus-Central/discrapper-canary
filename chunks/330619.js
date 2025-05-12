e.d(i, { R: () => l });
var n = e(818083),
    o = e(846573);
let a = (0, n.B)({
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
function l(t) {
    let { location: i } = t,
        { isInHoldout: e } = o.X.getCurrentConfig({ location: i }, { autoTrackExposure: !0 });
    return a.getCurrentConfig(
        { location: i },
        {
            disable: e,
            autoTrackExposure: !0
        }
    );
}
