n.d(t, { Q: () => o });
var r = n(818083),
    i = n(984134);
let a = (0, r.B)({
    kind: "user",
    id: "2025-06_jump_to_voice_settings",
    label: "Jump to Voice Settings",
    defaultConfig: { jumpToVoice: !1 },
    treatments: [
        {
            id: 1,
            label: "Jump to voice settings while in call",
            config: { jumpToVoice: !0 },
        },
    ],
});
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = i.Y.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return a.getCurrentConfig(
        { location: e },
        {
            disable: n,
            autoTrackExposure: t,
        },
    );
}
