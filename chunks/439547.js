n.d(t, { g: () => l });
let i = (0, n(600975).C)({
        kind: "user",
        id: "2025-02_voice_activity_status_mobile",
        label: "Voice Activity Status (Mobile)",
        defaultConfig: { voiceActivityStatusEnabled: !1 },
        treatments: [{ id: 1, label: "Voice Activity Status Enabled", config: { voiceActivityStatusEnabled: !0 } }],
    }),
    l = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: n });
    };
