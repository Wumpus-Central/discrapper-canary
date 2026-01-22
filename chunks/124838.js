n.d(t, { r: () => s }), n(311907);
var r = n(250105);
n(217222);
var i = n(128319);
let a = (0, r.Ay)({
    kind: "user",
    name: "2025-12-proportional-vad-indicator",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.p.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? a.definition.defaultConfig : a.getConfig({ location: t });
}
