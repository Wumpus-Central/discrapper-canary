n.d(t, {
    d: () => o,
    t: () => s,
});
var r = n(818083),
    i = n(751823);
let a = (0, r.B)({
    kind: "user",
    id: "2025-08_enable_rtc_panel_voice_states_by_default",
    label: "Enable RTC panel voice states by default experiment",
    defaultConfig: { enableRTCPanelVoiceStatesByDefault: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable RTC panel voice states by default",
            config: { enableRTCPanelVoiceStatesByDefault: !0 },
        },
    ],
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.L.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.L.useExperiment({ location: t }, { autoTrackExposure: n });
    return a.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
