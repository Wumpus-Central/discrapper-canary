n.d(t, {
    Tq: () => a,
    cy: () => r,
    i3: () => l
});
var i = n(818083),
    o = n(355820);
let r = (0, i.B)({
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
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        i = (0, o.A)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: a } = r.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: i
            }
        );
    return a;
}
let l = (0, i.B)({
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
