l.d(n, { a: () => a });
var t = l(818083),
    i = l(984134);
let s = (0, t.B)({
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
function a(e) {
    let { location: n, autoTrackExposure: l = !0 } = e,
        { isInHoldout: t } = i.h.useExperiment({ location: n }, { autoTrackExposure: l });
    return s.useExperiment(
        { location: n },
        {
            disable: t,
            autoTrackExposure: l
        }
    );
}
