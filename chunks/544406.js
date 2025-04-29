n.d(t, { x: () => a });
var r = n(818083),
    i = n(504876);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-03_video_capabilities_detection',
    label: 'Video capabilities detection and reporting',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Control - Capabilities detection disabled',
            config: { enabled: !1 }
        },
        {
            id: 2,
            label: 'Capabilities detection enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.Y.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0
        }
    );
}
