n.d(t, { w: () => a });
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2024-08_friend_anniversaries',
    label: 'Friend Anniversaries',
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
