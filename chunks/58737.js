n.d(t, { U: () => a });
var r = n(818083),
    i = n(504876);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-05_video_keyboard_scrubbing',
    label: 'Video keyboard scrubbing with arrow keys',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Control - No keyboard scrubbing',
            config: { enabled: !1 }
        },
        {
            id: 2,
            label: 'Keyboard scrubbing - 5 second increment',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.Y.getCurrentConfig({ location: t });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0
        }
    );
}
