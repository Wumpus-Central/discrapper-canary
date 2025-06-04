n.d(t, {
    Cq: () => o,
    Ht: () => a,
    XU: () => s
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-03_friends_popout',
    label: 'Friends Popout',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: {
        enableTopNavButton: !1,
        enableOverlayWidget: !1
    },
    treatments: [
        {
            id: 1,
            label: 'All Enabled',
            config: {
                enableTopNavButton: !0,
                enableOverlayWidget: !0
            }
        },
        {
            id: 2,
            label: 'Top Nav Only',
            config: {
                enableTopNavButton: !0,
                enableOverlayWidget: !1
            }
        }
    ]
});
function o(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !0 });
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
