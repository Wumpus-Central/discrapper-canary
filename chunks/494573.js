n.d(t, { J: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-07_search_mobile_xdm_channel_filters',
    label: 'Search Mobile XDM Channel Filters',
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
    let { location: t } = e,
        { enabled: n } = r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 });
    return n;
}
