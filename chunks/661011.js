n.d(t, { i: () => s });
var r = n(945810),
    i = n(332628);
let a = (0, r.mj)({
    name: "2025-09-image-attachment-mezzanine-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: {
            enabled: !0,
            maxFileSizeBytes: 524288,
        },
        2: {
            enabled: !0,
            maxFileSizeBytes: 262144,
        },
    },
});
function s(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? { enabled: !1 } : a.getConfig({ location: t });
}
