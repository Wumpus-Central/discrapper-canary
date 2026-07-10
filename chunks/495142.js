var a;
let r, i;
function u(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw Error(`positive integer expected, not ${e}`);
}
function s(e, ...n) {
    if (!(e instanceof Uint8Array || (null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)))
        throw Error("Uint8Array expected");
    if (n.length > 0 && !n.includes(e.length))
        throw Error(`Uint8Array expected of length ${n}, not of length=${e.length}`);
}
function o(e) {
    if ("function" != typeof e || "function" != typeof e.create)
        throw Error("Hash should be wrapped by utils.wrapConstructor");
    u(e.outputLen), u(e.blockLen);
}
function l(e, n = !0) {
    if (e.destroyed) throw Error("Hash instance has been destroyed");
    if (n && e.finished) throw Error("Hash#digest() has already been called");
}
t.d(n, { Q: () => P });
let d = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
    c = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
    _ = (e, n) => (e << (32 - n)) | (e >>> n),
    f = (e, n) => (e << n) | ((e >>> (32 - n)) >>> 0),
    y = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
    h = (e) => ((e << 24) & 0xff000000) | ((e << 8) & 0xff0000) | ((e >>> 8) & 65280) | ((e >>> 24) & 255);
function g(e) {
    for (let n = 0; n < e.length; n++) e[n] = h(e[n]);
}
let m = async () => {};
async function p(e, n, t) {
    let a = Date.now();
    for (let r = 0; r < e; r++) {
        t(r);
        let e = Date.now() - a;
        (e >= 0 && e < n) || (await m(), (a += e));
    }
}
function w(e) {
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
class b {
    clone() {
        return this._cloneInto();
    }
}
let v = {}.toString;
function S(e, n) {
    if (void 0 !== n && "[object Object]" !== v.call(n)) throw Error("Options should be object or undefined");
    return Object.assign(e, n);
}
let C = (e, n, t) => (e & n) ^ (~e & t),
    M = (e, n, t) => (e & n) ^ (e & t) ^ (n & t);
class k extends b {
    constructor(e, n, t, a) {
        super(),
            (this.blockLen = e),
            (this.outputLen = n),
            (this.padOffset = t),
            (this.isLE = a),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = c(this.buffer));
    }
    update(e) {
        l(this);
        let { view: n, buffer: t, blockLen: a } = this,
            r = (e = w(e)).length;
        for (let i = 0; i < r; ) {
            let u = Math.min(a - this.pos, r - i);
            if (u === a) {
                let n = c(e);
                for (; a <= r - i; i += a) this.process(n, i);
                continue;
            }
            t.set(e.subarray(i, i + u), this.pos),
                (this.pos += u),
                (i += u),
                this.pos === a && (this.process(n, 0), (this.pos = 0));
        }
        return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
        l(this);
        s(e);
        let n = this.outputLen;
        if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`);
        this.finished = !0;
        let { buffer: t, view: a, blockLen: r, isLE: i } = this,
            { pos: u } = this;
        (t[u++] = 128), this.buffer.subarray(u).fill(0), this.padOffset > r - u && (this.process(a, 0), (u = 0));
        for (let e = u; e < r; e++) t[e] = 0;
        !(function (e, n, t, a) {
            if ("function" == typeof e.setBigUint64) return e.setBigUint64(n, t, a);
            let r = BigInt(32),
                i = BigInt(0xffffffff),
                u = Number((t >> r) & i),
                s = Number(t & i),
                o = 4 * !!a,
                l = 4 * !a;
            e.setUint32(n + o, u, a), e.setUint32(n + l, s, a);
        })(a, r - 8, BigInt(8 * this.length), i),
            this.process(a, 0);
        let o = c(e),
            d = this.outputLen;
        if (d % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let _ = d / 4,
            f = this.get();
        if (_ > f.length) throw Error("_sha2: outputLen bigger than state");
        for (let e = 0; e < _; e++) o.setUint32(4 * e, f[e], i);
    }
    digest() {
        let { buffer: e, outputLen: n } = this;
        this.digestInto(e);
        let t = e.slice(0, n);
        return this.destroy(), t;
    }
    _cloneInto(e) {
        e || (e = new this.constructor()), e.set(...this.get());
        let { blockLen: n, buffer: t, length: a, finished: r, destroyed: i, pos: u } = this;
        return (e.length = a), (e.pos = u), (e.finished = r), (e.destroyed = i), a % n && e.buffer.set(t), e;
    }
}
let A = new Uint32Array([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
        0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
        0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
        0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
        0xc67178f2,
    ]),
    I = new Uint32Array([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
    ]),
    T = new Uint32Array(64);
class L extends k {
    constructor() {
        super(64, 32, 8, !1),
            (this.A = 0 | I[0]),
            (this.B = 0 | I[1]),
            (this.C = 0 | I[2]),
            (this.D = 0 | I[3]),
            (this.E = 0 | I[4]),
            (this.F = 0 | I[5]),
            (this.G = 0 | I[6]),
            (this.H = 0 | I[7]);
    }
    get() {
        let { A: e, B: n, C: t, D: a, E: r, F: i, G: u, H: s } = this;
        return [e, n, t, a, r, i, u, s];
    }
    set(e, n, t, a, r, i, u, s) {
        (this.A = 0 | e),
            (this.B = 0 | n),
            (this.C = 0 | t),
            (this.D = 0 | a),
            (this.E = 0 | r),
            (this.F = 0 | i),
            (this.G = 0 | u),
            (this.H = 0 | s);
    }
    process(e, n) {
        for (let t = 0; t < 16; t++, n += 4) T[t] = e.getUint32(n, !1);
        for (let e = 16; e < 64; e++) {
            let n = T[e - 15],
                t = T[e - 2],
                a = _(n, 7) ^ _(n, 18) ^ (n >>> 3),
                r = _(t, 17) ^ _(t, 19) ^ (t >>> 10);
            T[e] = (r + T[e - 7] + a + T[e - 16]) | 0;
        }
        let { A: t, B: a, C: r, D: i, E: u, F: s, G: o, H: l } = this;
        for (let e = 0; e < 64; e++) {
            let n = (l + (_(u, 6) ^ _(u, 11) ^ _(u, 25)) + C(u, s, o) + A[e] + T[e]) | 0,
                d = ((_(t, 2) ^ _(t, 13) ^ _(t, 22)) + M(t, a, r)) | 0;
            (l = o), (o = s), (s = u), (u = (i + n) | 0), (i = r), (r = a), (a = t), (t = (n + d) | 0);
        }
        (t = (t + this.A) | 0),
            (a = (a + this.B) | 0),
            (r = (r + this.C) | 0),
            (i = (i + this.D) | 0),
            (u = (u + this.E) | 0),
            (s = (s + this.F) | 0),
            (o = (o + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(t, a, r, i, u, s, o, l);
    }
    roundClean() {
        T.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}
let D =
    ((a = () => new L()),
    ((r = (e) => a().update(w(e)).digest()).outputLen = (i = a()).outputLen),
    (r.blockLen = i.blockLen),
    (r.create = () => a()),
    r);
class E extends b {
    constructor(e, n) {
        super(), (this.finished = !1), (this.destroyed = !1), o(e);
        const t = w(n);
        if (((this.iHash = e.create()), "function" != typeof this.iHash.update))
            throw Error("Expected instance of class which extends utils.Hash");
        (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
        const a = this.blockLen,
            r = new Uint8Array(a);
        r.set(t.length > a ? e.create().update(t).digest() : t);
        for (let e = 0; e < r.length; e++) r[e] ^= 54;
        this.iHash.update(r), (this.oHash = e.create());
        for (let e = 0; e < r.length; e++) r[e] ^= 106;
        this.oHash.update(r), r.fill(0);
    }
    update(e) {
        return l(this), this.iHash.update(e), this;
    }
    digestInto(e) {
        l(this),
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
        let { oHash: n, iHash: t, finished: a, destroyed: r, blockLen: i, outputLen: u } = this;
        return (
            (e.finished = a),
            (e.destroyed = r),
            (e.blockLen = i),
            (e.outputLen = u),
            (e.oHash = n._cloneInto(e.oHash)),
            (e.iHash = t._cloneInto(e.iHash)),
            e
        );
    }
    destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
}
let O = (e, n, t) => new E(e, n).update(t).digest();
function G(e, n, t, a) {
    var r;
    let i,
        {
            c: s,
            dkLen: l,
            DK: d,
            PRF: _,
            PRFSalt: f,
        } = (function (e, n, t, a) {
            o(e);
            let { c: r, dkLen: i, asyncTick: s } = S({ dkLen: 32, asyncTick: 10 }, a);
            if ((u(r), u(i), u(s), r < 1)) throw Error("PBKDF2: iterations (c) should be >= 1");
            let l = w(n),
                d = w(t),
                c = new Uint8Array(i),
                _ = O.create(e, l),
                f = _._cloneInto().update(d);
            return { c: r, dkLen: i, asyncTick: s, DK: c, PRF: _, PRFSalt: f };
        })(e, n, t, a),
        y = new Uint8Array(4),
        h = c(y),
        g = new Uint8Array(_.outputLen);
    for (let e = 1, n = 0; n < l; e++, n += _.outputLen) {
        let t = d.subarray(n, n + _.outputLen);
        h.setInt32(0, e, !1), (i = f._cloneInto(i)).update(y).digestInto(g), t.set(g.subarray(0, t.length));
        for (let e = 1; e < s; e++) {
            _._cloneInto(i).update(g).digestInto(g);
            for (let e = 0; e < t.length; e++) t[e] ^= g[e];
        }
    }
    return (r = i), _.destroy(), f.destroy(), r && r.destroy(), g.fill(0), d;
}
function x(e, n, t, a, r, i) {
    let u = e[n++] ^ t[a++],
        s = e[n++] ^ t[a++],
        o = e[n++] ^ t[a++],
        l = e[n++] ^ t[a++],
        d = e[n++] ^ t[a++],
        c = e[n++] ^ t[a++],
        _ = e[n++] ^ t[a++],
        y = e[n++] ^ t[a++],
        h = e[n++] ^ t[a++],
        g = e[n++] ^ t[a++],
        m = e[n++] ^ t[a++],
        p = e[n++] ^ t[a++],
        w = e[n++] ^ t[a++],
        b = e[n++] ^ t[a++],
        v = e[n++] ^ t[a++],
        S = e[n++] ^ t[a++],
        C = u,
        M = s,
        k = o,
        A = l,
        I = d,
        T = c,
        L = _,
        D = y,
        E = h,
        O = g,
        G = m,
        x = p,
        B = w,
        P = b,
        N = v,
        H = S;
    for (let e = 0; e < 8; e += 2)
        (I ^= f((C + B) | 0, 7)),
            (E ^= f((I + C) | 0, 9)),
            (B ^= f((E + I) | 0, 13)),
            (C ^= f((B + E) | 0, 18)),
            (O ^= f((T + M) | 0, 7)),
            (P ^= f((O + T) | 0, 9)),
            (M ^= f((P + O) | 0, 13)),
            (T ^= f((M + P) | 0, 18)),
            (N ^= f((G + L) | 0, 7)),
            (k ^= f((N + G) | 0, 9)),
            (L ^= f((k + N) | 0, 13)),
            (G ^= f((L + k) | 0, 18)),
            (A ^= f((H + x) | 0, 7)),
            (D ^= f((A + H) | 0, 9)),
            (x ^= f((D + A) | 0, 13)),
            (H ^= f((x + D) | 0, 18)),
            (M ^= f((C + A) | 0, 7)),
            (k ^= f((M + C) | 0, 9)),
            (A ^= f((k + M) | 0, 13)),
            (C ^= f((A + k) | 0, 18)),
            (L ^= f((T + I) | 0, 7)),
            (D ^= f((L + T) | 0, 9)),
            (I ^= f((D + L) | 0, 13)),
            (T ^= f((I + D) | 0, 18)),
            (x ^= f((G + O) | 0, 7)),
            (E ^= f((x + G) | 0, 9)),
            (O ^= f((E + x) | 0, 13)),
            (G ^= f((O + E) | 0, 18)),
            (B ^= f((H + N) | 0, 7)),
            (P ^= f((B + H) | 0, 9)),
            (N ^= f((P + B) | 0, 13)),
            (H ^= f((N + P) | 0, 18));
    (r[i++] = (u + C) | 0),
        (r[i++] = (s + M) | 0),
        (r[i++] = (o + k) | 0),
        (r[i++] = (l + A) | 0),
        (r[i++] = (d + I) | 0),
        (r[i++] = (c + T) | 0),
        (r[i++] = (_ + L) | 0),
        (r[i++] = (y + D) | 0),
        (r[i++] = (h + E) | 0),
        (r[i++] = (g + O) | 0),
        (r[i++] = (m + G) | 0),
        (r[i++] = (p + x) | 0),
        (r[i++] = (w + B) | 0),
        (r[i++] = (b + P) | 0),
        (r[i++] = (v + N) | 0),
        (r[i++] = (S + H) | 0);
}
function B(e, n, t, a, r) {
    let i = a + 0,
        u = a + 16 * r;
    for (let a = 0; a < 16; a++) t[u + a] = e[n + (2 * r - 1) * 16 + a];
    for (let a = 0; a < r; a++, i += 16, n += 16) x(t, u, e, n, t, i), a > 0 && (u += 16), x(t, i, e, (n += 16), t, u);
}
async function P(e, n, t) {
    let a,
        {
            N: r,
            r: i,
            p: s,
            dkLen: o,
            blockSize32: l,
            V: c,
            B32: _,
            B: f,
            tmp: h,
            blockMixCb: m,
            asyncTick: w,
        } = (function (e, n, t) {
            let {
                N: a,
                r,
                p: i,
                dkLen: s,
                asyncTick: o,
                maxmem: l,
                onProgress: c,
            } = S({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, t);
            if ((u(a), u(r), u(i), u(s), u(o), u(l), void 0 !== c && "function" != typeof c))
                throw Error("progressCb should be function");
            let _ = 128 * r,
                f = _ / 4;
            if (a <= 1 || (a & (a - 1)) != 0 || a > 0x100000000)
                throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
            if (i < 0 || i > ((0x100000000 - 1) * 32) / _)
                throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
            if (s < 0 || s > (0x100000000 - 1) * 32)
                throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
            let y = _ * (a + i);
            if (y > l) throw Error(`Scrypt: parameters too large, ${y} (128 * r * (N + p)) > ${l} (maxmem)`);
            let h = G(D, e, n, { c: 1, dkLen: _ * i }),
                g = d(h),
                m = d(new Uint8Array(_ * a)),
                p = d(new Uint8Array(_)),
                w = () => {};
            if (c) {
                let e = 2 * a * i,
                    n = Math.max(Math.floor(e / 1e4), 1),
                    t = 0;
                w = () => {
                    t++, c && (!(t % n) || t === e) && c(t / e);
                };
            }
            return { N: a, r, p: i, dkLen: s, blockSize32: f, V: m, B32: g, B: h, tmp: p, blockMixCb: w, asyncTick: o };
        })(e, n, t);
    y || g(_);
    for (let e = 0; e < s; e++) {
        let n = l * e;
        for (let e = 0; e < l; e++) c[e] = _[n + e];
        let t = 0;
        await p(r - 1, w, () => {
            B(c, t, c, (t += l), i), m();
        }),
            B(c, (r - 1) * l, _, n, i),
            m(),
            await p(r, w, () => {
                let e = _[n + l - 16] % r;
                for (let t = 0; t < l; t++) h[t] = _[n + t] ^ c[e * l + t];
                B(h, 0, _, n, i), m();
            });
    }
    return y || g(_), (a = G(D, e, f, { c: 1, dkLen: o })), f.fill(0), c.fill(0), h.fill(0), a;
}
O.create = (e, n) => new E(e, n);
