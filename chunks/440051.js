n.d(t, { Y: () => a });
let a = (0, n(818083).B)({
    kind: "user",
    id: "2025-01_expiring_status_v2",
    label: "Expiring status Experiment V2",
    defaultConfig: {
        showTempStatusOptions: !1,
        expiringStatusProfileFeedback: !1,
        hasNewStrings: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Allow expiring status with profile feedback",
            config: {
                showTempStatusOptions: !0,
                expiringStatusProfileFeedback: !0,
                hasNewStrings: !0,
            },
        },
        {
            id: 2,
            label: "Identical to T1",
            config: {
                showTempStatusOptions: !0,
                expiringStatusProfileFeedback: !0,
                hasNewStrings: !0,
            },
        },
    ],
});
