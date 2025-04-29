n.d(t, { b: () => a });
var r = n(818083),
    i = n(772209);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-04_stacked_activity_cards',
    label: 'User Profile Stacked Activity Cards',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable stacked activity cards on user profile',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.q)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: a } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return a;
}
