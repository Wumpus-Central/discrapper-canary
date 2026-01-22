n.d(t, { R: () => r });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-10_word_frequency_store_rollout",
    label: "Word Frequency Store",
    defaultConfig: {
        enabled: !1,
        resetDataIfUnused: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enable Word Frequency Store",
            config: {
                enabled: !0,
                resetDataIfUnused: !1,
            },
        },
        {
            id: 2,
            label: "Reset data if unused",
            config: {
                enabled: !1,
                resetDataIfUnused: !0,
            },
        },
    ],
});
