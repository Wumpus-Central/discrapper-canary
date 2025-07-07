n.d(t, { Q: () => l });
var i = n(818083),
    r = n(984134);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-06_jump_to_voice_settings',
    label: 'Jump to Voice Settings',
    defaultConfig: { jumpToVoice: !1 },
    treatments: [
        {
            id: 1,
            label: 'Jump to voice settings while in call',
            config: { jumpToVoice: !0 }
        }
    ]
});
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = r.Y.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return s.getCurrentConfig(
        { location: e },
        {
            disable: n,
            autoTrackExposure: t
        }
    );
}
