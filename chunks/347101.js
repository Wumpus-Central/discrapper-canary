n.d(t, { w: () => o });
var r = n(427164),
    i = n(751823);
let a = (0, r.le)({
    name: "2025-12-mobile-golive-tile-resolution",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = i.L.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n ? a.definition.defaultConfig : a.getConfig({ location: e });
}
