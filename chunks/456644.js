n.d(t, {
    G: () => i,
    i: () => o
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-11_user_profile_recent_activity',
        label: 'User Profile Recent Activity',
        defaultConfig: {
            recentActivityEnabled: !1,
            allProfileReactReplyEnabled: !1
        },
        treatments: [
            {
                id: 1,
                label: 'User Profile Recent Activity Enabled',
                config: {
                    recentActivityEnabled: !0,
                    allProfileReactReplyEnabled: !1
                }
            },
            {
                id: 2,
                label: 'User Profile Recent Activity and React/Reply Enabled',
                config: {
                    recentActivityEnabled: !0,
                    allProfileReactReplyEnabled: !0
                }
            }
        ]
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    },
    o = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: n });
    };
