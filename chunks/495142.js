"use strict";
var i;
let r, s;
function a(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw Error(`positive integer expected, not ${e}`);
}
function o(e, ...t) {
    if (!(e instanceof Uint8Array || (null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)))
        throw Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length))
        throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function l(e) {
    if ("function" != typeof e || "function" != typeof e.create)
        throw Error("Hash should be wrapped by utils.wrapConstructor");
    a(e.outputLen), a(e.blockLen);
}
function u(e, t = !0) {
    if (e.destroyed) throw Error("Hash instance has been destroyed");
    if (t && e.finished) throw Error("Hash#digest() has already been called");
}
n.d(t, { Q: () => U });
let c = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
    d = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
    _ = (e, t) => (e << (32 - t)) | (e >>> t),
    h = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0),
    f = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
    E = (e) => ((e << 24) & 0xff000000) | ((e << 8) & 0xff0000) | ((e >>> 8) & 65280) | ((e >>> 24) & 255);
function p(e) {
    for (let t = 0; t < e.length; t++) e[t] = E(e[t]);
}
let m = async () => {};
async function g(e, t, n) {
    let i = Date.now();
    for (let r = 0; r < e; r++) {
        n(r);
        let e = Date.now() - i;
        (e >= 0 && e < t) || (await m(), (i += e));
    }
}
function A(e) {
    return (
        "string" == typeof e &&
            (e = (function (e) {
                if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
        o(e),
        e
    );
}
class I {
    clone() {
        return this._cloneInto();
    }
}
let T = {}.toString;
function S(e, t) {
    if (void 0 !== t && "[object Object]" !== T.call(t)) throw Error("Options should be object or undefined");
    return Object.assign(e, t);
}
let N = (e, t, n) => (e & t) ^ (~e & n),
    C = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
class y extends I {
    constructor(e, t, n, i) {
        super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = d(this.buffer));
    }
    update(e) {
        u(this);
        let { view: t, buffer: n, blockLen: i } = this,
            r = (e = A(e)).length;
        for (let s = 0; s < r; ) {
            let a = Math.min(i - this.pos, r - s);
            if (a === i) {
                let t = d(e);
                for (; i <= r - s; s += i) this.process(t, s);
                continue;
            }
            n.set(e.subarray(s, s + a), this.pos),
                (this.pos += a),
                (s += a),
                this.pos === i && (this.process(t, 0), (this.pos = 0));
        }
        return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
        u(this);
        o(e);
        let t = this.outputLen;
        if (e.length < t) throw Error(`digestInto() expects output buffer of length at least ${t}`);
        this.finished = !0;
        let { buffer: n, view: i, blockLen: r, isLE: s } = this,
            { pos: a } = this;
        (n[a++] = 128), this.buffer.subarray(a).fill(0), this.padOffset > r - a && (this.process(i, 0), (a = 0));
        for (let e = a; e < r; e++) n[e] = 0;
        !(function (e, t, n, i) {
            if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, i);
            let r = BigInt(32),
                s = BigInt(0xffffffff),
                a = Number((n >> r) & s),
                o = Number(n & s),
                l = 4 * !!i,
                u = 4 * !i;
            e.setUint32(t + l, a, i), e.setUint32(t + u, o, i);
        })(i, r - 8, BigInt(8 * this.length), s),
            this.process(i, 0);
        let l = d(e),
            c = this.outputLen;
        if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let _ = c / 4,
            h = this.get();
        if (_ > h.length) throw Error("_sha2: outputLen bigger than state");
        for (let e = 0; e < _; e++) l.setUint32(4 * e, h[e], s);
    }
    digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let n = e.slice(0, t);
        return this.destroy(), n;
    }
    _cloneInto(e) {
        e || (e = new this.constructor()), e.set(...this.get());
        let { blockLen: t, buffer: n, length: i, finished: r, destroyed: s, pos: a } = this;
        return (e.length = i), (e.pos = a), (e.finished = r), (e.destroyed = s), i % t && e.buffer.set(n), e;
    }
}
let O = new Uint32Array([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
        0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
        0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
        0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
        0xc67178f2,
    ]),
    R = new Uint32Array([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
    ]),
    v = new Uint32Array(64);
class b extends y {
    constructor() {
        super(64, 32, 8, !1),
            (this.A = 0 | R[0]),
            (this.B = 0 | R[1]),
            (this.C = 0 | R[2]),
            (this.D = 0 | R[3]),
            (this.E = 0 | R[4]),
            (this.F = 0 | R[5]),
            (this.G = 0 | R[6]),
            (this.H = 0 | R[7]);
    }
    get() {
        let { A: e, B: t, C: n, D: i, E: r, F: s, G: a, H: o } = this;
        return [e, t, n, i, r, s, a, o];
    }
    set(e, t, n, i, r, s, a, o) {
        (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | i),
            (this.E = 0 | r),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
    }
    process(e, t) {
        for (let n = 0; n < 16; n++, t += 4) v[n] = e.getUint32(t, !1);
        for (let e = 16; e < 64; e++) {
            let t = v[e - 15],
                n = v[e - 2],
                i = _(t, 7) ^ _(t, 18) ^ (t >>> 3),
                r = _(n, 17) ^ _(n, 19) ^ (n >>> 10);
            v[e] = (r + v[e - 7] + i + v[e - 16]) | 0;
        }
        let { A: n, B: i, C: r, D: s, E: a, F: o, G: l, H: u } = this;
        for (let e = 0; e < 64; e++) {
            let t = (u + (_(a, 6) ^ _(a, 11) ^ _(a, 25)) + N(a, o, l) + O[e] + v[e]) | 0,
                c = ((_(n, 2) ^ _(n, 13) ^ _(n, 22)) + C(n, i, r)) | 0;
            (u = l), (l = o), (o = a), (a = (s + t) | 0), (s = r), (r = i), (i = n), (n = (t + c) | 0);
        }
        (n = (n + this.A) | 0),
            (i = (i + this.B) | 0),
            (r = (r + this.C) | 0),
            (s = (s + this.D) | 0),
            (a = (a + this.E) | 0),
            (o = (o + this.F) | 0),
            (l = (l + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, i, r, s, a, o, l, u);
    }
    roundClean() {
        v.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}
let L =
    ((i = () => new b()),
    ((r = (e) => i().update(A(e)).digest()).outputLen = (s = i()).outputLen),
    (r.blockLen = s.blockLen),
    (r.create = () => i()),
    r);
class D extends I {
    constructor(e, t) {
        super(), (this.finished = !1), (this.destroyed = !1), l(e);
        const n = A(t);
        if (((this.iHash = e.create()), "function" != typeof this.iHash.update))
            throw Error("Expected instance of class which extends utils.Hash");
        (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
        const i = this.blockLen,
            r = new Uint8Array(i);
        r.set(n.length > i ? e.create().update(n).digest() : n);
        for (let e = 0; e < r.length; e++) r[e] ^= 54;
        this.iHash.update(r), (this.oHash = e.create());
        for (let e = 0; e < r.length; e++) r[e] ^= 106;
        this.oHash.update(r), r.fill(0);
    }
    update(e) {
        return u(this), this.iHash.update(e), this;
    }
    digestInto(e) {
        u(this),
            o(e, this.outputLen),
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
        let { oHash: t, iHash: n, finished: i, destroyed: r, blockLen: s, outputLen: a } = this;
        return (
            (e.finished = i),
            (e.destroyed = r),
            (e.blockLen = s),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = n._cloneInto(e.iHash)),
            e
        );
    }
    destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
}
let w = (e, t, n) => new D(e, t).update(n).digest();
function P(e, t, n, i) {
    var r;
    let s,
        {
            c: o,
            dkLen: u,
            DK: c,
            PRF: _,
            PRFSalt: h,
        } = (function (e, t, n, i) {
            l(e);
            let { c: r, dkLen: s, asyncTick: o } = S({ dkLen: 32, asyncTick: 10 }, i);
            if ((a(r), a(s), a(o), r < 1)) throw Error("PBKDF2: iterations (c) should be >= 1");
            let u = A(t),
                c = A(n),
                d = new Uint8Array(s),
                _ = w.create(e, u),
                h = _._cloneInto().update(c);
            return { c: r, dkLen: s, asyncTick: o, DK: d, PRF: _, PRFSalt: h };
        })(e, t, n, i),
        f = new Uint8Array(4),
        E = d(f),
        p = new Uint8Array(_.outputLen);
    for (let e = 1, t = 0; t < u; e++, t += _.outputLen) {
        let n = c.subarray(t, t + _.outputLen);
        E.setInt32(0, e, !1), (s = h._cloneInto(s)).update(f).digestInto(p), n.set(p.subarray(0, n.length));
        for (let e = 1; e < o; e++) {
            _._cloneInto(s).update(p).digestInto(p);
            for (let e = 0; e < n.length; e++) n[e] ^= p[e];
        }
    }
    return (r = s), _.destroy(), h.destroy(), r && r.destroy(), p.fill(0), c;
}
function M(e, t, n, i, r, s) {
    let a = e[t++] ^ n[i++],
        o = e[t++] ^ n[i++],
        l = e[t++] ^ n[i++],
        u = e[t++] ^ n[i++],
        c = e[t++] ^ n[i++],
        d = e[t++] ^ n[i++],
        _ = e[t++] ^ n[i++],
        f = e[t++] ^ n[i++],
        E = e[t++] ^ n[i++],
        p = e[t++] ^ n[i++],
        m = e[t++] ^ n[i++],
        g = e[t++] ^ n[i++],
        A = e[t++] ^ n[i++],
        I = e[t++] ^ n[i++],
        T = e[t++] ^ n[i++],
        S = e[t++] ^ n[i++],
        N = a,
        C = o,
        y = l,
        O = u,
        R = c,
        v = d,
        b = _,
        L = f,
        D = E,
        w = p,
        P = m,
        M = g,
        x = A,
        U = I,
        k = T,
        G = S;
    for (let e = 0; e < 8; e += 2)
        (R ^= h((N + x) | 0, 7)),
            (D ^= h((R + N) | 0, 9)),
            (x ^= h((D + R) | 0, 13)),
            (N ^= h((x + D) | 0, 18)),
            (w ^= h((v + C) | 0, 7)),
            (U ^= h((w + v) | 0, 9)),
            (C ^= h((U + w) | 0, 13)),
            (v ^= h((C + U) | 0, 18)),
            (k ^= h((P + b) | 0, 7)),
            (y ^= h((k + P) | 0, 9)),
            (b ^= h((y + k) | 0, 13)),
            (P ^= h((b + y) | 0, 18)),
            (O ^= h((G + M) | 0, 7)),
            (L ^= h((O + G) | 0, 9)),
            (M ^= h((L + O) | 0, 13)),
            (G ^= h((M + L) | 0, 18)),
            (C ^= h((N + O) | 0, 7)),
            (y ^= h((C + N) | 0, 9)),
            (O ^= h((y + C) | 0, 13)),
            (N ^= h((O + y) | 0, 18)),
            (b ^= h((v + R) | 0, 7)),
            (L ^= h((b + v) | 0, 9)),
            (R ^= h((L + b) | 0, 13)),
            (v ^= h((R + L) | 0, 18)),
            (M ^= h((P + w) | 0, 7)),
            (D ^= h((M + P) | 0, 9)),
            (w ^= h((D + M) | 0, 13)),
            (P ^= h((w + D) | 0, 18)),
            (x ^= h((G + k) | 0, 7)),
            (U ^= h((x + G) | 0, 9)),
            (k ^= h((U + x) | 0, 13)),
            (G ^= h((k + U) | 0, 18));
    (r[s++] = (a + N) | 0),
        (r[s++] = (o + C) | 0),
        (r[s++] = (l + y) | 0),
        (r[s++] = (u + O) | 0),
        (r[s++] = (c + R) | 0),
        (r[s++] = (d + v) | 0),
        (r[s++] = (_ + b) | 0),
        (r[s++] = (f + L) | 0),
        (r[s++] = (E + D) | 0),
        (r[s++] = (p + w) | 0),
        (r[s++] = (m + P) | 0),
        (r[s++] = (g + M) | 0),
        (r[s++] = (A + x) | 0),
        (r[s++] = (I + U) | 0),
        (r[s++] = (T + k) | 0),
        (r[s++] = (S + G) | 0);
}
function x(e, t, n, i, r) {
    let s = i + 0,
        a = i + 16 * r;
    for (let i = 0; i < 16; i++) n[a + i] = e[t + (2 * r - 1) * 16 + i];
    for (let i = 0; i < r; i++, s += 16, t += 16) M(n, a, e, t, n, s), i > 0 && (a += 16), M(n, s, e, (t += 16), n, a);
}
async function U(e, t, n) {
    let i,
        {
            N: r,
            r: s,
            p: o,
            dkLen: l,
            blockSize32: u,
            V: d,
            B32: _,
            B: h,
            tmp: E,
            blockMixCb: m,
            asyncTick: A,
        } = (function (e, t, n) {
            let {
                N: i,
                r,
                p: s,
                dkLen: o,
                asyncTick: l,
                maxmem: u,
                onProgress: d,
            } = S({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, n);
            if ((a(i), a(r), a(s), a(o), a(l), a(u), void 0 !== d && "function" != typeof d))
                throw Error("progressCb should be function");
            let _ = 128 * r,
                h = _ / 4;
            if (i <= 1 || (i & (i - 1)) != 0 || i > 0x100000000)
                throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
            if (s < 0 || s > ((0x100000000 - 1) * 32) / _)
                throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
            if (o < 0 || o > (0x100000000 - 1) * 32)
                throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
            let f = _ * (i + s);
            if (f > u) throw Error(`Scrypt: parameters too large, ${f} (128 * r * (N + p)) > ${u} (maxmem)`);
            let E = P(L, e, t, { c: 1, dkLen: _ * s }),
                p = c(E),
                m = c(new Uint8Array(_ * i)),
                g = c(new Uint8Array(_)),
                A = () => {};
            if (d) {
                let e = 2 * i * s,
                    t = Math.max(Math.floor(e / 1e4), 1),
                    n = 0;
                A = () => {
                    n++, d && (!(n % t) || n === e) && d(n / e);
                };
            }
            return { N: i, r, p: s, dkLen: o, blockSize32: h, V: m, B32: p, B: E, tmp: g, blockMixCb: A, asyncTick: l };
        })(e, t, n);
    f || p(_);
    for (let e = 0; e < o; e++) {
        let t = u * e;
        for (let e = 0; e < u; e++) d[e] = _[t + e];
        let n = 0;
        await g(r - 1, A, () => {
            x(d, n, d, (n += u), s), m();
        }),
            x(d, (r - 1) * u, _, t, s),
            m(),
            await g(r, A, () => {
                let e = _[t + u - 16] % r;
                for (let n = 0; n < u; n++) E[n] = _[t + n] ^ d[e * u + n];
                x(E, 0, _, t, s), m();
            });
    }
    return f || p(_), (i = P(L, e, h, { c: 1, dkLen: l })), h.fill(0), d.fill(0), E.fill(0), i;
}
w.create = (e, t) => new D(e, t);
