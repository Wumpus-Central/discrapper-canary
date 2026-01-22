n.d(t, {
    A: () => i,
    a: () => l,
});
let r = (0, n(600975).C)({
        kind: "user",
        id: "2022-08_back_to_school",
        label: "Back to School Event",
        defaultConfig: {
            enabled: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Back to School experience enabled",
                config: {
                    enabled: !0,
                },
            },
        ],
    }),
    i = r;

function l() {
    return r.getCurrentConfig(
        {
            location: "68acbb_1",
        },
        {
            autoTrackExposure: !1,
        },
    ).enabled;
}
