n.d(t, {
    c6: () => o,
    q: () => a,
    tR: () => s,
});
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    kind: "user",
    id: "2025-03_friends_popout",
    label: "Friends Popout",
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    defaultConfig: {
        enableTopNavButton: !1,
        enableOverlayWidget: !1,
    },
    treatments: [
        {
            id: 1,
            label: "All Enabled",
            config: {
                enableTopNavButton: !0,
                enableOverlayWidget: !0,
            },
        },
        {
            id: 2,
            label: "Top Nav Only",
            config: {
                enableTopNavButton: !0,
                enableOverlayWidget: !1,
            },
        },
    ],
});
function s(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !0 });
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
