n.d(t, { C: () => o });
var r = n(427164),
    i = n(751823);
let a = (0, r.le)({
    name: "2025-11-async-clips-source-deinit",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = i.L.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n ? { enabled: !1 } : a.getConfig({ location: e });
}
