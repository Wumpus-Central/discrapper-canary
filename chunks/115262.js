t.d(n, {
    Vc: function () {
        return a;
    }
});
let i = (0, t(818083).B)({
    kind: 'user',
    id: '2025-01_underage_appeals_mobile',
    label: 'Luanching underage appeals on mobile',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable the new user remediation tool',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: n } = e;
    return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 }).enabled;
}
