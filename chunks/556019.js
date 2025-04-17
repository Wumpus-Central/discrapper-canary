n.d(t, { h: () => i });
let r = (0, n(818083).B)({
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
function i(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i;
}
