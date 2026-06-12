a.d(i, { HL: () => n, Jh: () => d, Ux: () => o, VM: () => t });
let d = {
        waveformBlockWidth: 2,
        waveformBarWidth: 0.5,
        fineTuningDelay: 500,
        fineTuningScale: 10,
        loudnessThreshold: 0.3,
    },
    n = (e, i) => {
        let a = `${e[0]}-${e[e.length - 1]}-${e.byteLength}`;
        return `${a}-${JSON.stringify(i)}`;
    },
    o = (e) => `${e.name}-${e.size}-${e.lastModified}`,
    t = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"]);
