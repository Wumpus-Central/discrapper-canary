n.d(t, { H: () => u });
var r = n(442837),
    l = n(722733),
    i = n(633289),
    a = n(751823);
let o = (0, l.ZP)({
        kind: "user",
        name: "2025-10-go-live-zoom-pan",
        defaultConfig: { allowGoLiveZoomPan: !1 },
        variations: { 1: { allowGoLiveZoomPan: !0 } },
    }),
    c = (0, l.ZP)({
        kind: "user",
        name: "2025-12-go-live-zoom-pan--mirror",
        defaultConfig: { allowGoLiveZoomPan: !1 },
        variations: { 1: { allowGoLiveZoomPan: !0 } },
    }),
    s = (0, l.ZP)({
        kind: "user",
        name: "2025-12-go-live-zoom-pan--shadow",
        defaultConfig: { allowGoLiveZoomPan: !1 },
        variations: { 1: { allowGoLiveZoomPan: !0 } },
    });
function u(e) {
    let { location: t } = e;
    return (0, r.e7)([i.Z], () =>
        (function (e) {
            let { location: t } = e;
            !(function (e) {
                let { location: t } = e,
                    { isInHoldout: n } = a.C.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
                s.getConfig({ location: t }), n || c.getConfig({ location: t });
            })({ location: t });
            let { isInHoldout: n } = a.L.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
            return n ? o.definition.defaultConfig : o.getConfig({ location: t });
        })({ location: t }),
    );
}
