n.d(t, { C: () => a });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    id: '2025-06_soundboard_default_reordering',
    kind: 'user',
    label: 'Soundboard Default Reordering',
    defaultConfig: {
        moveDefaultToBottom: !1,
        alwaysStickyUpsell: !1
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Re-orders the default soundboard sounds to the bottom for non-Nitro users.',
            config: {
                moveDefaultToBottom: !0,
                alwaysStickyUpsell: !1
            }
        },
        {
            id: 2,
            label: 'Test the performance of an upsell that is always sticky, even when the locked section is not in view.',
            config: {
                moveDefaultToBottom: !0,
                alwaysStickyUpsell: !0
            }
        }
    ]
});
