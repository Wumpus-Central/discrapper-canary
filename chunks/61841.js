e(653041), e(47120), e(312677);
let n = (r, t, e, n) => {
    var o;
    let i;
    let { fineTuning: f, fineTuningResolution: u, duration: a } = e,
        l = Math.floor(t / n.waveformBlockWidth);
    if (f >= 0) {
        let t = Math.floor((r.length * (f - (u * f) / a)) / a),
            e = Math.floor((r.length * (f + (u * (a - f)) / a)) / a);
        i = r.slice(t, e);
    } else i = r;
    let c = Math.floor(i.length / l),
        s = [];
    for (let r = 0; r < l; r++) {
        let t = c * r,
            e = 0;
        for (let r = 0; r < c; r++) e += Math.abs(i[t + r]);
        s.push(e / c);
    }
    let h = Math.pow(Math.max(...s), -1),
        p = s.map((r) => r * h),
        d = [...s].sort()[Math.floor(0.95 * s.length)];
    return {
        normalizedData: p,
        normalizedVolumeMultipler: Math.min((null !== (o = n.loudnessThreshold) && void 0 !== o ? o : d) / d, 1)
    };
};
self.addEventListener('message', (r) => {
    let {
            data: { rawBufferData: t, width: e, options: o, config: i, id: f }
        } = r,
        { normalizedData: u, normalizedVolumeMultipler: a } = n(t, e, o, i);
    self.postMessage({
        waveform: u,
        id: f,
        normalizedVolumeMultipler: a
    });
});
