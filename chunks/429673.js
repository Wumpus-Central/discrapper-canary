n.d(t, { s: () => l });
let i = (0, n(818083).B)({
    kind: 'guild',
    id: '2025-05_enable_emoji_in_channel_names_guild',
    label: 'Emojis in Channel Name',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show emoji picker in channel name input fields',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { guildId: t, location: n } = e;
    return i.useExperiment(
        {
            guildId: t,
            location: n
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
