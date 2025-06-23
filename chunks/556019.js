n.d(t, { h: () => a });
var r = n(931084);
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_emoji_studio',
    label: 'Emoji Studio',
    defaultConfig: {
        enabled: !1,
        isTester: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enabled - Treatment 1',
            config: {
                enabled: !0,
                isTester: !1
            }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n } = e,
        a = (0, r.$u)(t),
        { enabled: o } = i.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: a
            }
        );
    return o;
}
