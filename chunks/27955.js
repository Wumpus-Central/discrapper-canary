n.d(t, { T: () => o });
var r = n(722733),
    i = n(751823);
let a = (0, r.Z)({
    kind: "user",
    name: "2025-11-global-frame-pool-lock",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
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
