let a = new Set([
    "audio/mpeg",
    "audio/mp3",
    "audio/wav",
    "audio/x-wav",
    "audio/ogg",
    "application/ogg",
    "audio/opus",
    "audio/x-opus+ogg",
    "video/mp4",
]);
o.d(
    e,
    {},
    {
        HL: function (i, e) {
            let o = `${i[0]}-${i[i.length - 1]}-${i.byteLength}`;
            return `${o}-${JSON.stringify(e)}`;
        },
        Jh: {
            waveformBlockWidth: 2,
            waveformBarWidth: 0.5,
            fineTuningDelay: 500,
            fineTuningScale: 10,
            loudnessThreshold: 0.3,
        },
        Ux: function (i) {
            return `${i.name}-${i.size}-${i.lastModified}`;
        },
        VM: a,
    },
);
