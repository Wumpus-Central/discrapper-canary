n.d(t, { G: () => o });
var r = n(818083),
    i = n(480218);
let a = (0, r.B)({
    kind: "user",
    id: "2025-08_detected_file_size",
    label: "Detected File Size",
    defaultConfig: { useDetectedFileSize: !1 },
    treatments: [
        {
            id: 1,
            label: "Control - Use File.size directly",
            config: { useDetectedFileSize: !1 },
        },
        {
            id: 2,
            label: "Treatment - Use detected file size with fallback",
            config: { useDetectedFileSize: !0 },
        },
    ],
});
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = i._.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0,
        },
    );
}
