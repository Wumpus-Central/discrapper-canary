n.d(t, {
    B: () => i,
    Z: () => o
});
var r = n(818083),
    i = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.WITH_TOP_LIST = 1)] = 'WITH_TOP_LIST'), (e[(e.WITHOUT_TOP_LIST = 2)] = 'WITHOUT_TOP_LIST'), e;
    })({});
let o = (0, r.B)({
    kind: 'user',
    id: '2024-02_emoji_picker_upload_desktop',
    label: 'Desktop: Consistently show the Emoji Picker Upload button at the start of emoji lists',
    defaultConfig: {
        enabled: !1,
        treatment: 0
    },
    treatments: [
        {
            id: 1,
            label: 'With Top Emojis showing the Upload button',
            config: {
                enabled: !0,
                treatment: 1
            }
        },
        {
            id: 2,
            label: 'Without Top Emojis showing the Upload button',
            config: {
                enabled: !0,
                treatment: 2
            }
        }
    ]
});
