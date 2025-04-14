n.d(t, { U: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_sidebar_pinned_section',
    label: 'Updated sidebar scrolling behavior',
    defaultConfig: { pinnedSectionEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable pinned section at the top of the sidebar',
            config: { pinnedSectionEnabled: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
