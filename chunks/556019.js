n.d(t, { qt: () => l });
var r = n(203311),
    i = n(818083);
let a = (0, i.B)({
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
    o = (0, i.B)({
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
    s = (0, i.B)({
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
function l(e) {
    let { location: t, autoTrackExposure: n, disable: i = !1 } = e,
        l = (0, r.$u)(t),
        { enabled: c } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: l || i,
            },
        ),
        { enabled: u } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: l || i,
            },
        ),
        { isEmojiEditingExperimentEnabled: d, isSelectFileBeforeEmojiStudioExperimentEnabled: f } = s.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: l || i,
            },
        );
    return {
        enabled: u || d || f,
        isMobileEnabled: c,
    };
}
