var n;
let i, o;
function a(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw Error(`positive integer expected, not ${e}`);
}
function s(e, ...t) {
    if (!(e instanceof Uint8Array || (null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)))
        throw Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length))
        throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function u(e) {
    if ("function" != typeof e || "function" != typeof e.create)
        throw Error("Hash should be wrapped by utils.wrapConstructor");
    a(e.outputLen), a(e.blockLen);
}
function c(e, t = !0) {
    if (e.destroyed) throw Error("Hash instance has been destroyed");
    if (t && e.finished) throw Error("Hash#digest() has already been called");
}
r.d(t, { Q: () => L });
let l = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
    f = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
    d = (e, t) => (e << (32 - t)) | (e >>> t),
    h = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0),
    g = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
    p = (e) => ((e << 24) & 0xff000000) | ((e << 8) & 0xff0000) | ((e >>> 8) & 65280) | ((e >>> 24) & 255);
function y(e) {
    for (let t = 0; t < e.length; t++) e[t] = p(e[t]);
}
let v = async () => {};
async function b(e, t, r) {
    let n = Date.now();
    for (let i = 0; i < e; i++) {
        r(i);
        let e = Date.now() - n;
        (e >= 0 && e < t) || (await v(), (n += e));
    }
}
function m(e) {
    return (
        "string" == typeof e &&
            (e = (function (e) {
                if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
        s(e),
        e
    );
}
class w {
    clone() {
        return this._cloneInto();
    }
}
let I = {}.toString;
function k(e, t) {
    if (void 0 !== t && "[object Object]" !== I.call(t)) throw Error("Options should be object or undefined");
    return Object.assign(e, t);
}
let D = (e, t, r) => (e & t) ^ (~e & r),
    S = (e, t, r) => (e & t) ^ (e & r) ^ (t & r);
class O extends w {
    constructor(e, t, r, n) {
        super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = f(this.buffer));
    }
    update(e) {
        c(this);
        let { view: t, buffer: r, blockLen: n } = this,
            i = (e = m(e)).length;
        for (let o = 0; o < i; ) {
            let a = Math.min(n - this.pos, i - o);
            if (a === n) {
                let t = f(e);
                for (; n <= i - o; o += n) this.process(t, o);
                continue;
            }
            r.set(e.subarray(o, o + a), this.pos),
                (this.pos += a),
                (o += a),
                this.pos === n && (this.process(t, 0), (this.pos = 0));
        }
        return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
        c(this);
        s(e);
        let t = this.outputLen;
        if (e.length < t) throw Error(`digestInto() expects output buffer of length at least ${t}`);
        this.finished = !0;
        let { buffer: r, view: n, blockLen: i, isLE: o } = this,
            { pos: a } = this;
        (r[a++] = 128), this.buffer.subarray(a).fill(0), this.padOffset > i - a && (this.process(n, 0), (a = 0));
        for (let e = a; e < i; e++) r[e] = 0;
        !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
            let i = BigInt(32),
                o = BigInt(0xffffffff),
                a = Number((r >> i) & o),
                s = Number(r & o),
                u = 4 * !!n,
                c = 4 * !n;
            e.setUint32(t + u, a, n), e.setUint32(t + c, s, n);
        })(n, i - 8, BigInt(8 * this.length), o),
            this.process(n, 0);
        let u = f(e),
            l = this.outputLen;
        if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let d = l / 4,
            h = this.get();
        if (d > h.length) throw Error("_sha2: outputLen bigger than state");
        for (let e = 0; e < d; e++) u.setUint32(4 * e, h[e], o);
    }
    digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let r = e.slice(0, t);
        return this.destroy(), r;
    }
    _cloneInto(e) {
        e || (e = new this.constructor()), e.set(...this.get());
        let { blockLen: t, buffer: r, length: n, finished: i, destroyed: o, pos: a } = this;
        return (e.length = n), (e.pos = a), (e.finished = i), (e.destroyed = o), n % t && e.buffer.set(r), e;
    }
}
let C = new Uint32Array([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
        0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
        0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
        0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
        0xc67178f2,
    ]),
    x = new Uint32Array([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
    ]),
    T = new Uint32Array(64);
class P extends O {
    constructor() {
        super(64, 32, 8, !1),
            (this.A = 0 | x[0]),
            (this.B = 0 | x[1]),
            (this.C = 0 | x[2]),
            (this.D = 0 | x[3]),
            (this.E = 0 | x[4]),
            (this.F = 0 | x[5]),
            (this.G = 0 | x[6]),
            (this.H = 0 | x[7]);
    }
    get() {
        let { A: e, B: t, C: r, D: n, E: i, F: o, G: a, H: s } = this;
        return [e, t, r, n, i, o, a, s];
    }
    set(e, t, r, n, i, o, a, s) {
        (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | a),
            (this.H = 0 | s);
    }
    process(e, t) {
        for (let r = 0; r < 16; r++, t += 4) T[r] = e.getUint32(t, !1);
        for (let e = 16; e < 64; e++) {
            let t = T[e - 15],
                r = T[e - 2],
                n = d(t, 7) ^ d(t, 18) ^ (t >>> 3),
                i = d(r, 17) ^ d(r, 19) ^ (r >>> 10);
            T[e] = (i + T[e - 7] + n + T[e - 16]) | 0;
        }
        let { A: r, B: n, C: i, D: o, E: a, F: s, G: u, H: c } = this;
        for (let e = 0; e < 64; e++) {
            let t = (c + (d(a, 6) ^ d(a, 11) ^ d(a, 25)) + D(a, s, u) + C[e] + T[e]) | 0,
                l = ((d(r, 2) ^ d(r, 13) ^ d(r, 22)) + S(r, n, i)) | 0;
            (c = u), (u = s), (s = a), (a = (o + t) | 0), (o = i), (i = n), (n = r), (r = (t + l) | 0);
        }
        (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (o = (o + this.D) | 0),
            (a = (a + this.E) | 0),
            (s = (s + this.F) | 0),
            (u = (u + this.G) | 0),
            (c = (c + this.H) | 0),
            this.set(r, n, i, o, a, s, u, c);
    }
    roundClean() {
        T.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}
let A =
    ((n = () => new P()),
    ((i = (e) => n().update(m(e)).digest()).outputLen = (o = n()).outputLen),
    (i.blockLen = o.blockLen),
    (i.create = () => n()),
    i);
class M extends w {
    constructor(e, t) {
        super(), (this.finished = !1), (this.destroyed = !1), u(e);
        const r = m(t);
        if (((this.iHash = e.create()), "function" != typeof this.iHash.update))
            throw Error("Expected instance of class which extends utils.Hash");
        (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
        const n = this.blockLen,
            i = new Uint8Array(n);
        i.set(r.length > n ? e.create().update(r).digest() : r);
        for (let e = 0; e < i.length; e++) i[e] ^= 54;
        this.iHash.update(i), (this.oHash = e.create());
        for (let e = 0; e < i.length; e++) i[e] ^= 106;
        this.oHash.update(i), i.fill(0);
    }
    update(e) {
        return c(this), this.iHash.update(e), this;
    }
    digestInto(e) {
        c(this),
            s(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
    }
    digest() {
        let e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e), e;
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash: t, iHash: r, finished: n, destroyed: i, blockLen: o, outputLen: a } = this;
        return (
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
        );
    }
    destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
}
let H = (e, t, r) => new M(e, t).update(r).digest();
function E(e, t, r, n) {
    var i;
    let o,
        {
            c: s,
            dkLen: c,
            DK: l,
            PRF: d,
            PRFSalt: h,
        } = (function (e, t, r, n) {
            u(e);
            let { c: i, dkLen: o, asyncTick: s } = k({ dkLen: 32, asyncTick: 10 }, n);
            if ((a(i), a(o), a(s), i < 1)) throw Error("PBKDF2: iterations (c) should be >= 1");
            let c = m(t),
                l = m(r),
                f = new Uint8Array(o),
                d = H.create(e, c),
                h = d._cloneInto().update(l);
            return { c: i, dkLen: o, asyncTick: s, DK: f, PRF: d, PRFSalt: h };
        })(e, t, r, n),
        g = new Uint8Array(4),
        p = f(g),
        y = new Uint8Array(d.outputLen);
    for (let e = 1, t = 0; t < c; e++, t += d.outputLen) {
        let r = l.subarray(t, t + d.outputLen);
        p.setInt32(0, e, !1), (o = h._cloneInto(o)).update(g).digestInto(y), r.set(y.subarray(0, r.length));
        for (let e = 1; e < s; e++) {
            d._cloneInto(o).update(y).digestInto(y);
            for (let e = 0; e < r.length; e++) r[e] ^= y[e];
        }
    }
    return (i = o), d.destroy(), h.destroy(), i && i.destroy(), y.fill(0), l;
}
function j(e, t, r, n, i, o) {
    let a = e[t++] ^ r[n++],
        s = e[t++] ^ r[n++],
        u = e[t++] ^ r[n++],
        c = e[t++] ^ r[n++],
        l = e[t++] ^ r[n++],
        f = e[t++] ^ r[n++],
        d = e[t++] ^ r[n++],
        g = e[t++] ^ r[n++],
        p = e[t++] ^ r[n++],
        y = e[t++] ^ r[n++],
        v = e[t++] ^ r[n++],
        b = e[t++] ^ r[n++],
        m = e[t++] ^ r[n++],
        w = e[t++] ^ r[n++],
        I = e[t++] ^ r[n++],
        k = e[t++] ^ r[n++],
        D = a,
        S = s,
        O = u,
        C = c,
        x = l,
        T = f,
        P = d,
        A = g,
        M = p,
        H = y,
        E = v,
        j = b,
        U = m,
        L = w,
        R = I,
        N = k;
    for (let e = 0; e < 8; e += 2)
        (x ^= h((D + U) | 0, 7)),
            (M ^= h((x + D) | 0, 9)),
            (U ^= h((M + x) | 0, 13)),
            (D ^= h((U + M) | 0, 18)),
            (H ^= h((T + S) | 0, 7)),
            (L ^= h((H + T) | 0, 9)),
            (S ^= h((L + H) | 0, 13)),
            (T ^= h((S + L) | 0, 18)),
            (R ^= h((E + P) | 0, 7)),
            (O ^= h((R + E) | 0, 9)),
            (P ^= h((O + R) | 0, 13)),
            (E ^= h((P + O) | 0, 18)),
            (C ^= h((N + j) | 0, 7)),
            (A ^= h((C + N) | 0, 9)),
            (j ^= h((A + C) | 0, 13)),
            (N ^= h((j + A) | 0, 18)),
            (S ^= h((D + C) | 0, 7)),
            (O ^= h((S + D) | 0, 9)),
            (C ^= h((O + S) | 0, 13)),
            (D ^= h((C + O) | 0, 18)),
            (P ^= h((T + x) | 0, 7)),
            (A ^= h((P + T) | 0, 9)),
            (x ^= h((A + P) | 0, 13)),
            (T ^= h((x + A) | 0, 18)),
            (j ^= h((E + H) | 0, 7)),
            (M ^= h((j + E) | 0, 9)),
            (H ^= h((M + j) | 0, 13)),
            (E ^= h((H + M) | 0, 18)),
            (U ^= h((N + R) | 0, 7)),
            (L ^= h((U + N) | 0, 9)),
            (R ^= h((L + U) | 0, 13)),
            (N ^= h((R + L) | 0, 18));
    (i[o++] = (a + D) | 0),
        (i[o++] = (s + S) | 0),
        (i[o++] = (u + O) | 0),
        (i[o++] = (c + C) | 0),
        (i[o++] = (l + x) | 0),
        (i[o++] = (f + T) | 0),
        (i[o++] = (d + P) | 0),
        (i[o++] = (g + A) | 0),
        (i[o++] = (p + M) | 0),
        (i[o++] = (y + H) | 0),
        (i[o++] = (v + E) | 0),
        (i[o++] = (b + j) | 0),
        (i[o++] = (m + U) | 0),
        (i[o++] = (w + L) | 0),
        (i[o++] = (I + R) | 0),
        (i[o++] = (k + N) | 0);
}
function U(e, t, r, n, i) {
    let o = n + 0,
        a = n + 16 * i;
    for (let n = 0; n < 16; n++) r[a + n] = e[t + (2 * i - 1) * 16 + n];
    for (let n = 0; n < i; n++, o += 16, t += 16) j(r, a, e, t, r, o), n > 0 && (a += 16), j(r, o, e, (t += 16), r, a);
}
async function L(e, t, r) {
    let n,
        {
            N: i,
            r: o,
            p: s,
            dkLen: u,
            blockSize32: c,
            V: f,
            B32: d,
            B: h,
            tmp: p,
            blockMixCb: v,
            asyncTick: m,
        } = (function (e, t, r) {
            let {
                N: n,
                r: i,
                p: o,
                dkLen: s,
                asyncTick: u,
                maxmem: c,
                onProgress: f,
            } = k({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, r);
            if ((a(n), a(i), a(o), a(s), a(u), a(c), void 0 !== f && "function" != typeof f))
                throw Error("progressCb should be function");
            let d = 128 * i,
                h = d / 4;
            if (n <= 1 || (n & (n - 1)) != 0 || n > 0x100000000)
                throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
            if (o < 0 || o > ((0x100000000 - 1) * 32) / d)
                throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
            if (s < 0 || s > (0x100000000 - 1) * 32)
                throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
            let g = d * (n + o);
            if (g > c) throw Error(`Scrypt: parameters too large, ${g} (128 * r * (N + p)) > ${c} (maxmem)`);
            let p = E(A, e, t, { c: 1, dkLen: d * o }),
                y = l(p),
                v = l(new Uint8Array(d * n)),
                b = l(new Uint8Array(d)),
                m = () => {};
            if (f) {
                let e = 2 * n * o,
                    t = Math.max(Math.floor(e / 1e4), 1),
                    r = 0;
                m = () => {
                    r++, f && (!(r % t) || r === e) && f(r / e);
                };
            }
            return {
                N: n,
                r: i,
                p: o,
                dkLen: s,
                blockSize32: h,
                V: v,
                B32: y,
                B: p,
                tmp: b,
                blockMixCb: m,
                asyncTick: u,
            };
        })(e, t, r);
    g || y(d);
    for (let e = 0; e < s; e++) {
        let t = c * e;
        for (let e = 0; e < c; e++) f[e] = d[t + e];
        let r = 0;
        await b(i - 1, m, () => {
            U(f, r, f, (r += c), o), v();
        }),
            U(f, (i - 1) * c, d, t, o),
            v(),
            await b(i, m, () => {
                let e = d[t + c - 16] % i;
                for (let r = 0; r < c; r++) p[r] = d[t + r] ^ f[e * c + r];
                U(p, 0, d, t, o), v();
            });
    }
    return g || y(d), (n = E(A, e, h, { c: 1, dkLen: u })), h.fill(0), f.fill(0), p.fill(0), n;
}
H.create = (e, t) => new M(e, t);
