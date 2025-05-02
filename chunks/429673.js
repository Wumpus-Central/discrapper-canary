n.d(t, { r: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'guild',
    id: '2025-05_enable_emoji_in_channel_names_guild',
    label: 'Emojis in Channel Name',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Show emoji picker in channel name input fields',
            config: { enabled: !0 }
        }
    ]
});
