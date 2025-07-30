n.d(t, { t: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-07_search_desktop_pagination_limits',
    label: 'Search Desktop Pagination Limits',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
