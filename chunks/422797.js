n.d(t, { $: () => o });
var r = n(427164),
    i = n(751823);
let a = (0, r.le)({
    kind: "user",
    name: "2025-10-krisp-at-end",
    defaultConfig: {
        noiseCancellationAfterProcessing: !1,
        vadAfterWebrtc: !1,
    },
    variations: {
        1: {
            noiseCancellationAfterProcessing: !0,
            vadAfterWebrtc: !1,
        },
        2: {
            noiseCancellationAfterProcessing: !1,
            vadAfterWebrtc: !0,
        },
        3: {
            noiseCancellationAfterProcessing: !0,
            vadAfterWebrtc: !0,
        },
    },
});
function o(e) {
    let { location: t, disable: n = !1 } = e,
        { isInHoldout: r } = i.L.getCurrentConfig(
            { location: t },
            {
                disable: n,
                autoTrackExposure: !0,
            },
        );
    return r || n ? a.definition.defaultConfig : a.getConfig({ location: t });
}
