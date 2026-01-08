n.d(t, {
    M: () => l,
    V: () => c,
});
var r = n(442837),
    i = n(722733),
    a = n(633289),
    o = n(751823);
let s = (0, i.ZP)({
    name: "2025-08-device-selection-improvements",
    kind: "user",
    defaultConfig: { showDeviceSelectionImprovements: !1 },
    variations: { 1: { showDeviceSelectionImprovements: !0 } },
});
function l(e) {
    let { location: t } = e,
        { isInHoldout: n } = o.L.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? s.definition.defaultConfig : s.getConfig({ location: t });
}
function c(e) {
    let { location: t } = e;
    return (0, r.e7)([a.Z], () => l({ location: t }));
}
