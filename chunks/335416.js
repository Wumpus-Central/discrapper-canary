o.d(e, { HL: () => n, Jh: () => a, Ux: () => t, VM: () => u });
let a = {
    waveformBlockWidth: 2,
    waveformBarWidth: 0.5,
    fineTuningDelay: 500,
    fineTuningScale: 10,
    loudnessThreshold: 0.3,
};
function n(i, e) {
    let o = `${i[0]}-${i[i.length - 1]}-${i.byteLength}`;
    return `${o}-${JSON.stringify(e)}`;
}
function t(i) {
    return `${i.name}-${i.size}-${i.lastModified}`;
}
let u = new Set([
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
