n.d(t, { qt: () => s });
var r = n(931084),
    i = n(818083);
let a = (0, i.B)({
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
    }),
    o = (0, i.B)({
        kind: 'user',
        id: '2025-07_emoji_studio_mobile',
        label: 'Emoji Studio (Mobile)',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function s(e) {
    let { location: t, autoTrackExposure: n, disable: i = !1 } = e,
        s = (0, r.$u)(t),
        { enabled: l, showExpressionPickerButton: c } = a.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: s || i
            }
        ),
        { enabled: u } = o.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: s || i
            }
        );
    return {
        enabled: l,
        isMobileEnabled: u,
        showExpressionPickerButton: c
    };
}
