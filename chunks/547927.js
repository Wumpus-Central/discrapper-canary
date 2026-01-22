n.d(t, {
    N: () => s,
});
var r = n(600975),
    i = n(332628);
let a = (0, r.C)({
    kind: "user",
    id: "2025-08_detected_file_size",
    label: "Detected File Size",
    defaultConfig: {
        useDetectedFileSize: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Control - Use File.size directly",
            config: {
                useDetectedFileSize: !1,
            },
        },
        {
            id: 2,
            label: "Treatment - Use detected file size with fallback",
            config: {
                useDetectedFileSize: !0,
            },
        },
    ],
});

function s(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.i.getCurrentConfig(
            {
                location: t,
            },
            {
                autoTrackExposure: !0,
            },
        );
    return a.getCurrentConfig(
        {
            location: t,
        },
        {
            disable: n,
            autoTrackExposure: !0,
        },
    );
}
