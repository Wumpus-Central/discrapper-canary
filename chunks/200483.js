n.d(t, { j: () => s });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2023-07_mfa_email_verification',
    label: 'Safety Experience Mfa Email Verification',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function s() {
    let { enabled: e } = i.getCurrentConfig({ location: '41ef90_2' }, { autoTrackExposure: !0 });
    return e;
}
