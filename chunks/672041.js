n.d(t, { t: () => a });
var r = n(818083),
    i = n(154579);
let l = (0, r.B)({
    kind: "user",
    id: "2025-07_search_desktop_pagination_limits",
    label: "Search Desktop Pagination Limits",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enabled",
            config: { enabled: !0 },
        },
    ],
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.ro)({
            location: t,
            autoTrackExposure: n,
        }),
        { enabled: a } = l.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return a;
}
