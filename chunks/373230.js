n.d(t, {
    T: () => i,
    c: () => r,
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2025-01_recent_avatars",
    label: "Recent Avatars",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Allow users to select from recently uploaded avatars",
            config: { enabled: !0 },
        },
        {
            id: 2,
            label: "Allow users to select from recently uploaded avatars. These users have always had access to the higher limit regardless of subscription status.",
            config: { enabled: !0 },
        },
    ],
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
