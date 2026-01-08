n.d(t, { qt: () => s });
var r = n(818083);
let i = (0, r.B)({
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
    a = (0, r.B)({
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
    o = (0, r.B)({
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
function s(e) {
    let { location: t, autoTrackExposure: n, disable: r = !1 } = e,
        { enabled: s } = i.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        ),
        { enabled: l } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        ),
        { isEmojiEditingExperimentEnabled: c, isSelectFileBeforeEmojiStudioExperimentEnabled: u } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return {
        enabled: l || c || u,
        isMobileEnabled: s,
    };
}
