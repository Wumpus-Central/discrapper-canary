n.d(t, { D: () => a });
var r = n(818083),
    i = n(984134);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-01_audio_nack',
    label: 'Audio NACK',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable NACK for audio',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = i.h.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return o.getCurrentConfig(
        { location: e },
        {
            disable: n,
            autoTrackExposure: t
        }
    );
}
