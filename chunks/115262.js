t.d(i, { Vc: () => a });
let n = (0, t(818083).B)({
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
    let { location: i } = e;
    return n.getCurrentConfig({ location: i }, { autoTrackExposure: !0 }).enabled;
}
