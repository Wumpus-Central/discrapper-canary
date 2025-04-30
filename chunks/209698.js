n.d(t, { b: () => o });
var r = n(818083),
    i = n(772209);
let a = (0, r.B)({
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
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.q)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: o } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return o;
}
