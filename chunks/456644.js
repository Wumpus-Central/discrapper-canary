r.d(n, {
    G: function () {
        return a;
    },
    i: function () {
        return o;
    }
});
let i = (0, r(818083).B)({
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
    a = (e) => {
        let { location: n, autoTrackExposure: r = !0 } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: r });
    },
    o = (e) => {
        let { location: n, autoTrackExposure: r = !0 } = e;
        return i.useExperiment({ location: n }, { autoTrackExposure: r });
    };
