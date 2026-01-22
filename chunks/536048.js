n.d(t, {
    I: () => i,
});
let r = (0, n(600975).C)({
    id: "2025-04_native_markdown",
    kind: "user",
    label: "Native Markdown",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 0,
            label: "Disabled",
            config: {
                enabled: !1,
            },
        },
        {
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0,
            },
        },
    ],
});

function i(e) {
    let { location: t } = e;
    return r.useExperiment({
        location: t,
    });
}
