e(653041), e(47120), e(230036);
let n = (t, r, e, n) => {
    var o;
    let i;
    let { fineTuning: a, fineTuningResolution: u, duration: l } = e,
        f = Math.floor(r / n.waveformBlockWidth);
    if (a >= 0) {
        let r = Math.floor((t.length * (a - (u * a) / l)) / l),
            e = Math.floor((t.length * (a + (u * (l - a)) / l)) / l);
        i = t.slice(r, e);
    } else i = t;
    let s = Math.floor(i.length / f),
        c = [];
    for (let t = 0; t < f; t++) {
        let r = s * t,
            e = 0;
        for (let t = 0; t < s; t++) e += Math.abs(i[r + t]);
        c.push(e / s);
    }
    let h = Math.pow(Math.max(...c), -1),
        p = c.map((t) => t * h),
        d = [...c].sort()[Math.floor(0.95 * c.length)];
    return {
        normalizedData: p,
        normalizedVolumeMultipler: Math.min((null !== (o = n.loudnessThreshold) && void 0 !== o ? o : d) / d, 1)
    };
};
self.addEventListener('message', (t) => {
    let {
            data: { rawBufferData: r, width: e, options: o, config: i, id: a }
        } = t,
        { normalizedData: u, normalizedVolumeMultipler: l } = n(r, e, o, i);
    self.postMessage({
        waveform: u,
        id: a,
        normalizedVolumeMultipler: l
    });
});
