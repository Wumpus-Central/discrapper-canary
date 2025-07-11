n.d(t, { q: () => a });
var r = n(931084);
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_emoji_studio',
    label: 'Emoji Studio',
    defaultConfig: {
        enabled: !1,
        showExpressionPickerButton: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enabled - New Modal',
            config: {
                enabled: !0,
                showExpressionPickerButton: !1
            }
        },
        {
            id: 2,
            label: 'Enabled - New Modal with Expression Picker Button',
            config: {
                enabled: !0,
                showExpressionPickerButton: !0
            }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n, disable: a = !1 } = e,
        o = (0, r.$u)(t),
        { enabled: s, showExpressionPickerButton: l } = i.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: o || a
            }
        );
    return {
        enabled: s,
        showExpressionPickerButton: l
    };
}
