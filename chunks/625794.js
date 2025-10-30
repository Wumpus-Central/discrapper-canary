t(17294),
    t(227481),
    t(730884),
    t(20464),
    t(341884),
    t(364341),
    t(629680),
    t(505025),
    t(918970),
    t(121784),
    t(644351),
    t(146733),
    t(388685),
    t(539854),
    t(415506),
    self.addEventListener("message", (e) => {
        let {
            data: { trackChannels: r, width: t },
        } = e;
        try {
            if (0 === r.length)
                return void self.postMessage({
                    waveform: [],
                    error: "No track channels provided",
                });
            let e = [];
            for (let t of r)
                e.push(
                    (function (e) {
                        if (0 === e.length) return new Float32Array(0);
                        if (1 === e.length) return e[0];
                        let r = e[0].length,
                            t = new Float32Array(r);
                        for (let n = 0; n < r; n++) {
                            let r = 0;
                            for (let t of e) r += t[n];
                            t[n] = r / e.length;
                        }
                        return t;
                    })(t),
                );
            let n = (function (e) {
                    if (0 === e.length) return new Float32Array(0);
                    let r = new Float32Array(Math.max(...e.map((e) => e.length)));
                    for (let t of e) for (let e = 0; e < t.length; e++) r[e] += t[e];
                    let t = 0;
                    for (let e = 0; e < r.length; e++) t = Math.max(t, Math.abs(r[e]));
                    if (t > 1) {
                        let e = 1 / t;
                        for (let t = 0; t < r.length; t++) r[t] *= e;
                    }
                    return r;
                })(e),
                o = (function (e, r) {
                    let t = Math.floor(r / 2),
                        n = Math.floor(e.length / t),
                        o = [];
                    for (let r = 0; r < t; r++) {
                        let t = n * r,
                            a = 0;
                        for (let r = 0; r < n; r++) {
                            let n = t + r;
                            n < e.length && (a += Math.abs(e[n]));
                        }
                        o.push(a / n);
                    }
                    let a = Math.max(...o, 0.001);
                    return o.map((e) => e / a);
                })(n, t);
            self.postMessage({ waveform: o });
        } catch (r) {
            let e = {
                waveform: [],
                error: r instanceof Error ? r.message : "Unknown error",
            };
            self.postMessage(e);
        }
    });
