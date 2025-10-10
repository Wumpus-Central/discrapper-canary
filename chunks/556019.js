n.d(t, { qt: () => c });
var r = n(203311),
    i = n(818083);
let a = (0, i.B)({
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
    o = (0, i.B)({
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
    }),
    l = (0, i.B)({
        kind: "user",
        id: "2025-08_emoji_studio_speedrun",
        label: "Emoji Studio V2 Speedrun",
        defaultConfig: {
            isEmojiEditingExperimentEnabled: !1,
            isSelectFileBeforeEmojiStudioExperimentEnabled: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Emoji Editing",
                config: {
                    isEmojiEditingExperimentEnabled: !0,
                    isSelectFileBeforeEmojiStudioExperimentEnabled: !1,
                },
            },
            {
                id: 2,
                label: '"Speedrun": Select Image File Before Emoji Studio',
                config: {
                    isEmojiEditingExperimentEnabled: !1,
                    isSelectFileBeforeEmojiStudioExperimentEnabled: !0,
                },
            },
        ],
    });
function c(e) {
    let { location: t, autoTrackExposure: n, disable: i = !1 } = e,
        c = (0, r.$u)(t),
        { enabled: u, showExpressionPickerButton: d } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: c || i,
            },
        ),
        { enabled: f } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: c || i,
            },
        ),
        { enabled: _ } = s.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: c || i,
            },
        ),
        { isEmojiEditingExperimentEnabled: p, isSelectFileBeforeEmojiStudioExperimentEnabled: h } = l.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: c || i,
            },
        );
    return {
        enabled: u,
        isMobileEnabled: f,
        isEntrypointEnabled: d || _ || p || h,
        isEntrypointEnabledInDMs: d || p || h,
        isEntrypointOnlyExperimentEnabled: _,
        isEmojiEditingExperimentEnabled: p,
        isSelectFileBeforeEmojiStudioExperimentEnabled: h,
    };
}
