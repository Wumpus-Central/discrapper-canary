n.d(t, { W: () => o });
var r = n(427164),
    i = n(480218);
let a = (0, r.le)({
    kind: "user",
    name: "2025-10-force-sdr-emojis-stickers",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = i._.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? { enabled: !1 } : a.getConfig({ location: t });
}
