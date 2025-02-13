n.d(t, {
    Tq: () => r,
    i3: () => a
});
var i = n(818083);
let o = (0, i.B)({
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
function r(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = o.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
let a = (0, i.B)({
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
