n.d(t, { h: () => o }), n(442837);
var r = n(722733);
n(633289);
var i = n(751823);
let a = (0, r.Z)({
    kind: "user",
    name: "2025-12-proportional-vad-indicator",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.L.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? a.definition.defaultConfig : a.getConfig({ location: t });
}
