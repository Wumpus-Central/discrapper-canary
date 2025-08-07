n.d(t, { qt: () => l });
var r = n(931084),
    i = n(818083);
let o = (0, i.B)({
        kind: "user",
        id: "2025-04_emoji_studio",
        label: "Emoji Studio",
        defaultConfig: {
            enabled: !1,
            showExpressionPickerButton: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Enabled - New Modal",
                config: {
                    enabled: !0,
                    showExpressionPickerButton: !1,
                },
            },
            {
                id: 2,
                label: "Enabled - New Modal with Expression Picker Button",
                config: {
                    enabled: !0,
                    showExpressionPickerButton: !0,
                },
            },
            {
                id: 3,
                label: "Enabled - New Entrypoint Only",
                config: {
                    enabled: !1,
                    showExpressionPickerButton: !0,
                },
            },
        ],
    }),
    a = (0, i.B)({
        kind: "user",
        id: "2025-07_emoji_studio_mobile",
        label: "Emoji Studio (Mobile)",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Enabled",
                config: { enabled: !0 },
            },
        ],
    }),
    s = (0, i.B)({
        kind: "user",
        id: "2025-08_emoji_studio_entrypoint",
        label: "Emoji Studio Entrypoint",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Enabled",
                config: { enabled: !0 },
            },
        ],
    });
function l(e) {
    let { location: t, autoTrackExposure: n, disable: i = !1 } = e,
        l = (0, r.$u)(t),
        { enabled: c, showExpressionPickerButton: u } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: l || i,
            },
        ),
        { enabled: d } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: l || i,
            },
        ),
        { enabled: f } = s.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: l || i,
            },
        );
    return {
        enabled: c,
        isMobileEnabled: d,
        isEntrypointEnabled: f || u,
        isEntrypointExperimentEnabled: f,
    };
}
