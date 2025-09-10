n.d(t, {
    P6: () => i,
    Tf: () => r,
});
let r = (0, n(427164).le)({
        name: "2025-08-game-detection-v2",
        kind: "user",
        defaultConfig: {
            useDetectionV2: !1,
            hasIssueReporting: !1,
        },
        variations: {
            0: {
                useDetectionV2: !1,
                hasIssueReporting: !1,
            },
            1: {
                useDetectionV2: !1,
                hasIssueReporting: !0,
            },
            2: {
                useDetectionV2: !0,
                hasIssueReporting: !0,
            },
        },
    }),
    i = (e) => r.useConfig({ location: e }).hasIssueReporting;
