n.d(t, {
    x: () => l,
});
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-06_not_staff_dm_warning_opt_out",
    label: "Not-Staff DM Warning",
    defaultConfig: {
        enabled: !0,
    },
    treatments: [
        {
            id: 0,
            label: 'Show "NOT-STAFF" warning badge in DMs',
            config: {
                enabled: !0,
            },
        },
        {
            id: 1,
            label: 'Opt-out: Hide "NOT-STAFF" warning badge in DMs',
            config: {
                enabled: !1,
            },
        },
    ],
});

function l() {
    return r.useExperiment(
        {
            location: "default",
        },
        {
            autoTrackExposure: !1,
        },
    ).enabled;
}
