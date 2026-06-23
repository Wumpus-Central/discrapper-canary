n.d(i, { HL: () => a, Jh: () => t, Ux: () => d, VM: () => o });
let t = {
    waveformBlockWidth: 2,
    waveformBarWidth: 0.5,
    fineTuningDelay: 500,
    fineTuningScale: 10,
    loudnessThreshold: 0.3,
};
function a(e, i) {
    let n = `${e[0]}-${e[e.length - 1]}-${e.byteLength}`;
    return `${n}-${JSON.stringify(i)}`;
}
function d(e) {
    return `${e.name}-${e.size}-${e.lastModified}`;
}
let o = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"]);
