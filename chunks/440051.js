n.d(t, { Y: () => r });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-01_expiring_status_v2',
    label: 'Expiring status Experiment V2',
    defaultConfig: {
        showTempStatusOptions: !1,
        expiringStatusProfileFeedback: !1,
        hasNewStrings: !1,
        hasDefaultClickOption: !1,
        showNewHelpTooltip: !1,
        hasButtonStyling: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Allow expiring status with profile feedback',
            config: {
                showTempStatusOptions: !0,
                expiringStatusProfileFeedback: !0,
                hasNewStrings: !0,
                hasDefaultClickOption: !1,
                showNewHelpTooltip: !1,
                hasButtonStyling: !1
            }
        },
        {
            id: 2,
            label: 'Default click expiry and tooltip',
            config: {
                showTempStatusOptions: !0,
                expiringStatusProfileFeedback: !0,
                hasNewStrings: !0,
                hasDefaultClickOption: !0,
                showNewHelpTooltip: !0,
                hasButtonStyling: !1
            }
        },
        {
            id: 3,
            label: 'New button inline option styling',
            config: {
                showTempStatusOptions: !0,
                expiringStatusProfileFeedback: !0,
                hasNewStrings: !0,
                hasDefaultClickOption: !0,
                showNewHelpTooltip: !1,
                hasButtonStyling: !0
            }
        }
    ]
});
