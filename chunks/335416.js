l.d(t, { HL: () => n, Jh: () => a, Ux: () => s, VM: () => i });
let a = {
        waveformBlockWidth: 2,
        waveformBarWidth: 0.5,
        fineTuningDelay: 500,
        fineTuningScale: 10,
        loudnessThreshold: 0.3,
    },
    n = (e, t) => {
        let l = `${e[0]}-${e[e.length - 1]}-${e.byteLength}`;
        return `${l}-${JSON.stringify(t)}`;
    },
    s = (e) => `${e.name}-${e.size}-${e.lastModified}`,
    i = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"]);
