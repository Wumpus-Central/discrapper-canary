n.d(t, { I: () => s });
var r = n(600975),
    i = n(182828);
let a = (0, r.C)({
    kind: "user",
    id: "2025-06_audio_bitrate_adaptation",
    label: "Audio Bitrate Adaptation",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable audio bitrate adaptation",
            config: { enabled: !0 },
        },
    ],
});
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = i.o.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return a.getCurrentConfig(
        { location: e },
        {
            disable: n,
            autoTrackExposure: t,
        },
    );
}
