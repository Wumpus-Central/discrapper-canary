e(539854), e(388685), e(642613);
let n = (t, r, e, n) => {
    var o;
    let i,
        { fineTuning: a, fineTuningResolution: s, duration: u } = e,
        c = Math.floor(r / n.waveformBlockWidth);
    if (a >= 0) {
        let r = Math.floor((t.length * (a - (s * a) / u)) / u),
            e = Math.floor((t.length * (a + (s * (u - a)) / u)) / u);
        i = t.slice(r, e);
    } else i = t;
    let f = Math.floor(i.length / c),
        l = [];
    for (let t = 0; t < c; t++) {
        let r = f * t,
            e = 0;
        for (let t = 0; t < f; t++) e += Math.abs(i[r + t]);
        l.push(e / f);
    }
    let p = Math.pow(Math.max(...l), -1),
        v = l.map((t) => t * p),
        h = [...l].sort()[Math.floor(0.95 * l.length)];
    return {
        normalizedData: v,
        normalizedVolumeMultipler: Math.min((null != (o = n.loudnessThreshold) ? o : h) / h, 1)
    };
};
self.addEventListener('message', (t) => {
    let {
            data: { rawBufferData: r, width: e, options: o, config: i, id: a }
        } = t,
        { normalizedData: s, normalizedVolumeMultipler: u } = n(r, e, o, i);
    self.postMessage({
        waveform: s,
        id: a,
        normalizedVolumeMultipler: u
    });
});
