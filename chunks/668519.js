t.d(n, { a: () => s });
var l = t(818083),
    i = t(984134);
let r = (0, l.B)({
    kind: 'user',
    id: '2025-01_go_live_modal_refresh',
    label: 'Go Live Modal Refresh',
    defaultConfig: { showRefreshedGoLiveModal: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show refreshed go live modal',
            config: { showRefreshedGoLiveModal: !0 }
        }
    ]
});
function s(e) {
    let { location: n, autoTrackExposure: t = !0 } = e,
        { isInHoldout: l } = i.h.useExperiment({ location: n }, { autoTrackExposure: t });
    return r.useExperiment(
        { location: n },
        {
            disable: l,
            autoTrackExposure: t
        }
    );
}
