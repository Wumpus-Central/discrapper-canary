n.d(t, {
    Tq: () => i,
    i3: () => r
});
var o = n(818083);
let a = (0, o.B)({
    kind: 'user',
    id: '2025-01_recent_avatars',
    label: 'Recent Avatars',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Allow users to select from recently uploaded avatars',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: o } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return o;
}
let r = (0, o.B)({
    kind: 'user',
    id: '2025-02_improved_image_upload_flow',
    label: 'Improved Image Upload Flow',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'QOL improvements to the image upload and edit flow used for profile assets, server banners & icons, etc.',
            config: { enabled: !0 }
        }
    ]
});
