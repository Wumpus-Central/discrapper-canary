n.r(t), n.d(t, { HeicUploadConversionExperiment: () => i });
let i = (0, n(945810).mj)({
    name: "2026-08-heic-upload-conversion",
    kind: "user",
    defaultConfig: { enabled: !1, quality: 60 },
    variations: {
        0: { enabled: !1, quality: 60 },
        1: { enabled: !0, quality: 60, maxFileSizeBytes: 0x1400000 },
        2: { enabled: !0, quality: 80, maxFileSizeBytes: 0x1400000 },
    },
});
