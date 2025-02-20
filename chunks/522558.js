n.d(t, { w: () => o });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-08_friend_anniversaries',
    label: 'Friend Anniversaries',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: {
        enabled: !1,
        enableEmojiCTA: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Friend anniversaries enabled with text CTA',
            config: {
                enabled: !0,
                enableEmojiCTA: !1
            }
        },
        {
            id: 2,
            label: 'Friend anniversaries enabled with emoji CTA',
            config: {
                enabled: !0,
                enableEmojiCTA: !0
            }
        }
    ]
});
