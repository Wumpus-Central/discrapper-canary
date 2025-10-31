e(539854),
    e(388685),
    e(642613),
    self.addEventListener("message", (t) => {
        let {
                data: { rawBufferData: r, width: e, options: n, config: o, id: i },
            } = t,
            { normalizedData: a, normalizedVolumeMultipler: s } = ((t, r, e, n) => {
                var o;
                let i,
                    { fineTuning: a, fineTuningResolution: s, duration: u } = e,
                    f = Math.floor(r / n.waveformBlockWidth);
                if (a >= 0) {
                    let r = Math.floor((t.length * (a - (s * a) / u)) / u),
                        e = Math.floor((t.length * (a + (s * (u - a)) / u)) / u);
                    i = t.slice(r, e);
                } else i = t;
                let c = Math.floor(i.length / f),
                    l = [];
                for (let t = 0; t < f; t++) {
                    let r = c * t,
                        e = 0;
                    for (let t = 0; t < c; t++) e += Math.abs(i[r + t]);
                    l.push(e / c);
                }
                let p = Math.pow(Math.max(...l), -1),
                    v = l.map((t) => t * p),
                    h = [...l].sort()[Math.floor(0.95 * l.length)];
                return {
                    normalizedData: v,
                    normalizedVolumeMultipler: Math.min((null != (o = n.loudnessThreshold) ? o : h) / h, 1),
                };
            })(r, e, n, o);
        self.postMessage({
            waveform: a,
            id: i,
            normalizedVolumeMultipler: s,
        });
    });
