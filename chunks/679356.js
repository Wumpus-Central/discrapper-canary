t(927092),
    t(212978),
    t(648691),
    t(393431),
    t(752391),
    t(532706),
    t(42231),
    t(232424),
    t(757074),
    t(949626),
    t(767709),
    t(65162),
    t(896048),
    t(321073),
    t(65821),
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
                        for (let o = 0; o < r; o++) {
                            let r = 0;
                            for (let t of e) r += t[o];
                            t[o] = r / e.length;
                        }
                        return t;
                    })(t),
                );
            let o = (function (e) {
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
                n = (function (e, r) {
                    let t = Math.floor(r / 2),
                        o = Math.floor(e.length / t),
                        n = [];
                    for (let r = 0; r < t; r++) {
                        let t = o * r,
                            a = 0;
                        for (let r = 0; r < o; r++) {
                            let o = t + r;
                            o < e.length && (a += Math.abs(e[o]));
                        }
                        n.push(a / o);
                    }
                    let a = Math.max(...n, 0.001);
                    return n.map((e) => e / a);
                })(o, t);
            self.postMessage({
                waveform: n,
            });
        } catch (r) {
            let e = {
                waveform: [],
                error: r instanceof Error ? r.message : "Unknown error",
            };
            self.postMessage(e);
        }
    });
