n.d(t, {
    T: () => l,
    c: () => s
});
var i = n(818083),
    r = n(355820);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-01_recent_avatars',
    label: 'Recent Avatars',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Allow users to select from recently uploaded avatars',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        i = (0, r.A)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: l } = s.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: i
            }
        );
    return l;
}
