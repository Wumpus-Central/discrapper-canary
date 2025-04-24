n.d(t, { R: () => o });
var i = n(818083),
    r = n(846573);
let l = (0, i.B)({
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
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = r.X.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return l.getCurrentConfig(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0
        }
    );
}
