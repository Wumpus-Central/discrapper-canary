n.d(t, { Z: () => r });
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-10_mobile_video_disable',
        label: 'Backgrounding Mobile App Disables Incoming Video',
        defaultConfig: { stopVideoWhenHidden: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { stopVideoWhenHidden: !0 }
            }
        ]
    }),
    r = { stopVideoWhenHidden: () => i.getCurrentConfig({ location: 'stopVideoWhenHidden' }, { autoTrackExposure: !0 }).stopVideoWhenHidden };
