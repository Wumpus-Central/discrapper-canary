s.d(e, { sc: () => f });
var i = s(574905),
    r = s(15020);
let n = new Uint32Array([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
        0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
        0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
        0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
        0xc67178f2,
    ]),
    o = new Uint32Array([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
    ]),
    a = new Uint32Array(64);
class h extends i.ol {
    constructor() {
        super(64, 32, 8, !1),
            (this.A = 0 | o[0]),
            (this.B = 0 | o[1]),
            (this.C = 0 | o[2]),
            (this.D = 0 | o[3]),
            (this.E = 0 | o[4]),
            (this.F = 0 | o[5]),
            (this.G = 0 | o[6]),
            (this.H = 0 | o[7]);
    }
    get() {
        let { A: t, B: e, C: s, D: i, E: r, F: n, G: o, H: a } = this;
        return [t, e, s, i, r, n, o, a];
    }
    set(t, e, s, i, r, n, o, a) {
        (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | s),
            (this.D = 0 | i),
            (this.E = 0 | r),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | a);
    }
    process(t, e) {
        for (let s = 0; s < 16; s++, e += 4) a[s] = t.getUint32(e, !1);
        for (let t = 16; t < 64; t++) {
            let e = a[t - 15],
                s = a[t - 2],
                i = (0, r.Ow)(e, 7) ^ (0, r.Ow)(e, 18) ^ (e >>> 3),
                n = (0, r.Ow)(s, 17) ^ (0, r.Ow)(s, 19) ^ (s >>> 10);
            a[t] = (n + a[t - 7] + i + a[t - 16]) | 0;
        }
        let { A: s, B: o, C: h, D: f, E: c, F: l, G: u, H: d } = this;
        for (let t = 0; t < 64; t++) {
            let e =
                    (d + ((0, r.Ow)(c, 6) ^ (0, r.Ow)(c, 11) ^ (0, r.Ow)(c, 25)) + (0, i.r9)(c, l, u) + n[t] + a[t]) |
                    0,
                x = (((0, r.Ow)(s, 2) ^ (0, r.Ow)(s, 13) ^ (0, r.Ow)(s, 22)) + (0, i.TQ)(s, o, h)) | 0;
            (d = u), (u = l), (l = c), (c = (f + e) | 0), (f = h), (h = o), (o = s), (s = (e + x) | 0);
        }
        (s = (s + this.A) | 0),
            (o = (o + this.B) | 0),
            (h = (h + this.C) | 0),
            (f = (f + this.D) | 0),
            (c = (c + this.E) | 0),
            (l = (l + this.F) | 0),
            (u = (u + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(s, o, h, f, c, l, u, d);
    }
    roundClean() {
        a.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}
let f = (0, r.ld)(() => new h());
