n.d(t, {
    c3: () => r,
    eA: () => s
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-05_desktop_user_settings_search',
    label: 'Desktop User Settings Search',
    defaultConfig: {
        enabled: !1,
        showSearchCount: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable User Settings Search on Desktop',
            config: {
                enabled: !0,
                showSearchCount: !1
            }
        },
        {
            id: 2,
            label: 'Enable User Settings Search on Desktop with Search Count',
            config: {
                enabled: !0,
                showSearchCount: !0
            }
        }
    ]
});
function s(e) {
    let { location: t } = e;
    return i.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
function r(e) {
    let { location: t } = e,
        { enabled: n, showSearchCount: s } = i.useExperiment({ location: t }, { autoTrackExposure: !0 });
    return n && s;
}
