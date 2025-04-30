n.d(t, { Z: () => o });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'guild',
    id: '2024-12_guild_voice_channel_ringing',
    label: 'Guild Voice Ringing',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: 'Allow users to ring each other in Guild Voice Channels',
            config: { enabled: !0 }
        }
    ]
});
