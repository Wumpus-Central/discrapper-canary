l.d(t, {
    HL: () => a,
    Jh: () => n,
    Ux: () => r,
    VM: () => i,
}),
    l(457529),
    l(896048);
let n = {
        waveformBlockWidth: 2,
        waveformBarWidth: 0.5,
        fineTuningDelay: 500,
        fineTuningScale: 10,
        loudnessThreshold: 0.3,
    },
    a = (e, t) => {
        let l = ""
            .concat(e[0], "-")
            .concat(e[e.length - 1], "-")
            .concat(e.byteLength);
        return "".concat(l, "-").concat(JSON.stringify(t));
    },
    r = (e) => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
    i = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"]);
