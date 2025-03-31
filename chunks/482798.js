n.d(t, {
    C: () => i,
    X: () => o
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_friends_popout',
    label: 'Friends Popout',
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
    let { location: t } = e;
    return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return r.getCurrentConfig({ location: e }, { autoTrackExposure: t }).enabled;
}
