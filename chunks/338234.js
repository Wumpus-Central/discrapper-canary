n.d(t, {
    Uw: () => a,
    fC: () => i,
});
let r = (0, n(600975).C)({
    kind: "guild",
    id: "2025-01_voice_user_activities",
    label: "Voice User Activities on Hover",
    defaultConfig: {
        enableUserHoverActivities: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enable activities on user hover",
            config: {
                enableUserHoverActivities: !0,
            },
        },
    ],
});

function i(e) {
    let { guildId: t, location: n } = e;
    return r.useExperiment(
        {
            guildId: t,
            location: n,
        },
        {
            autoTrackExposure: !0,
        },
    );
}

function a(e) {
    let { guildId: t, location: n } = e;
    return r.getCurrentConfig(
        {
            guildId: t,
            location: n,
        },
        {
            autoTrackExposure: !0,
        },
    );
}
