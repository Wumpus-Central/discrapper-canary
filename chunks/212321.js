n.d(t, {
    R: () => a,
    j: () => s
});
var r = n(818083),
    i = n(812740);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-04_user_profile_mutual_friends_count_performance',
    label: 'User Profile Mutual Friends Count Performance Experiment',
    defaultConfig: { withMutualFriendsCount: !1 },
    treatments: [
        {
            id: 1,
            label: 'Fetch mutual friends counts',
            config: { withMutualFriendsCount: !0 }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.A)({
            location: t,
            autoTrackExposure: n
        });
    return o.getCurrentConfig(
        { location: t },
        {
            autoTrackExposure: n,
            disable: r
        }
    );
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.A)({
            location: t,
            autoTrackExposure: n
        });
    return o.useExperiment(
        { location: t },
        {
            autoTrackExposure: n,
            disable: r
        }
    );
}
