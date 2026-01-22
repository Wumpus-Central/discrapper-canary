n.d(t, {
    sc: () => c,
});
var r = n(574905),
    i = n(15020);
let a = new Uint32Array([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
        0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
        0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
        0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
        0xc67178f2,
    ]),
    s = new Uint32Array([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
    ]),
    o = new Uint32Array(64);
class l extends r.ol {
    constructor() {
        super(64, 32, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
    }
    get() {
        let { A: e, B: t, C: n, D: r, E: i, F: a, G: s, H: o } = this;
        return [e, t, n, r, i, a, s, o];
    }
    set(e, t, n, r, i, a, s, o) {
        (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | a),
            (this.G = 0 | s),
            (this.H = 0 | o);
    }
    process(e, t) {
        for (let n = 0; n < 16; n++, t += 4) o[n] = e.getUint32(t, !1);
        for (let e = 16; e < 64; e++) {
            let t = o[e - 15],
                n = o[e - 2],
                r = (0, i.Ow)(t, 7) ^ (0, i.Ow)(t, 18) ^ (t >>> 3),
                a = (0, i.Ow)(n, 17) ^ (0, i.Ow)(n, 19) ^ (n >>> 10);
            o[e] = (a + o[e - 7] + r + o[e - 16]) | 0;
        }
        let { A: n, B: s, C: l, D: c, E: u, F: d, G: f, H: p } = this;
        for (let e = 0; e < 64; e++) {
            let t =
                    (p + ((0, i.Ow)(u, 6) ^ (0, i.Ow)(u, 11) ^ (0, i.Ow)(u, 25)) + (0, r.r9)(u, d, f) + a[e] + o[e]) |
                    0,
                _ = (((0, i.Ow)(n, 2) ^ (0, i.Ow)(n, 13) ^ (0, i.Ow)(n, 22)) + (0, r.TQ)(n, s, l)) | 0;
            (p = f), (f = d), (d = u), (u = (c + t) | 0), (c = l), (l = s), (s = n), (n = (t + _) | 0);
        }
        (n = (n + this.A) | 0),
            (s = (s + this.B) | 0),
            (l = (l + this.C) | 0),
            (c = (c + this.D) | 0),
            (u = (u + this.E) | 0),
            (d = (d + this.F) | 0),
            (f = (f + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(n, s, l, c, u, d, f, p);
    }
    roundClean() {
        o.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}
let c = (0, i.ld)(() => new l());
