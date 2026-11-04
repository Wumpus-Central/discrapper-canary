var s;
let i, n;
function o(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw Error(`positive integer expected, not ${t}`);
}
function h(t, ...e) {
    if (!(t instanceof Uint8Array || (null != t && "object" == typeof t && "Uint8Array" === t.constructor.name)))
        throw Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length))
        throw Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function f(t) {
    if ("function" != typeof t || "function" != typeof t.create)
        throw Error("Hash should be wrapped by utils.wrapConstructor");
    (o(t.outputLen), o(t.blockLen));
}
function a(t, e = !0) {
    if (t.destroyed) throw Error("Hash instance has been destroyed");
    if (e && t.finished) throw Error("Hash#digest() has already been called");
}
r.d(e, { Q: () => $ });
let c = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
    l = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
    u = (t, e) => (t << (32 - e)) | (t >>> e),
    d = (t, e) => (t << e) | ((t >>> (32 - e)) >>> 0),
    x = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
    p = (t) => ((t << 24) & 0xff000000) | ((t << 8) & 0xff0000) | ((t >>> 8) & 65280) | ((t >>> 24) & 255);
function b(t) {
    for (let e = 0; e < t.length; e++) t[e] = p(t[e]);
}
let y = async () => {};
async function g(t, e, r) {
    let s = Date.now();
    for (let i = 0; i < t; i++) {
        r(i);
        let t = Date.now() - s;
        (t >= 0 && t < e) || (await y(), (s += t));
    }
}
function w(t) {
    return (
        "string" == typeof t &&
            (t = (function (t) {
                if ("string" != typeof t) throw Error(`utf8ToBytes expected string, got ${typeof t}`);
                return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
        h(t),
        t
    );
}
class L {
    clone() {
        return this._cloneInto();
    }
}
let U = {}.toString;
function A(t, e) {
    if (void 0 !== e && "[object Object]" !== U.call(e)) throw Error("Options should be object or undefined");
    return Object.assign(t, e);
}
let H = (t, e, r) => (t & e) ^ (~t & r),
    E = (t, e, r) => (t & e) ^ (t & r) ^ (e & r);
class I extends L {
    constructor(t, e, r, s) {
        (super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = s),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = l(this.buffer)));
    }
    update(t) {
        a(this);
        let { view: e, buffer: r, blockLen: s } = this,
            i = (t = w(t)).length;
        for (let n = 0; n < i;) {
            let o = Math.min(s - this.pos, i - n);
            if (o === s) {
                let e = l(t);
                for (; s <= i - n; n += s) this.process(e, n);
                continue;
            }
            (r.set(t.subarray(n, n + o), this.pos),
                (this.pos += o),
                (n += o),
                this.pos === s && (this.process(e, 0), (this.pos = 0)));
        }
        return ((this.length += t.length), this.roundClean(), this);
    }
    digestInto(t) {
        a(this);
        h(t);
        let e = this.outputLen;
        if (t.length < e) throw Error(`digestInto() expects output buffer of length at least ${e}`);
        this.finished = !0;
        let { buffer: r, view: s, blockLen: i, isLE: n } = this,
            { pos: o } = this;
        ((r[o++] = 128), this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(s, 0), (o = 0)));
        for (let t = o; t < i; t++) r[t] = 0;
        (!(function (t, e, r, s) {
            if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, r, s);
            let i = BigInt(32),
                n = BigInt(0xffffffff),
                o = Number((r >> i) & n),
                h = Number(r & n),
                f = 4 * !!s,
                a = 4 * !s;
            (t.setUint32(e + f, o, s), t.setUint32(e + a, h, s));
        })(s, i - 8, BigInt(8 * this.length), n),
            this.process(s, 0));
        let f = l(t),
            c = this.outputLen;
        if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let u = c / 4,
            d = this.get();
        if (u > d.length) throw Error("_sha2: outputLen bigger than state");
        for (let t = 0; t < u; t++) f.setUint32(4 * t, d[t], n);
    }
    digest() {
        let { buffer: t, outputLen: e } = this;
        this.digestInto(t);
        let r = t.slice(0, e);
        return (this.destroy(), r);
    }
    _cloneInto(t) {
        (t || (t = new this.constructor()), t.set(...this.get()));
        let { blockLen: e, buffer: r, length: s, finished: i, destroyed: n, pos: o } = this;
        return ((t.length = s), (t.pos = o), (t.finished = i), (t.destroyed = n), s % e && t.buffer.set(r), t);
    }
}
let k = new Uint32Array([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
        0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
        0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
        0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
        0xc67178f2,
    ]),
    m = new Uint32Array([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
    ]),
    v = new Uint32Array(64);
class _ extends I {
    constructor() {
        (super(64, 32, 8, !1),
            (this.A = 0 | m[0]),
            (this.B = 0 | m[1]),
            (this.C = 0 | m[2]),
            (this.D = 0 | m[3]),
            (this.E = 0 | m[4]),
            (this.F = 0 | m[5]),
            (this.G = 0 | m[6]),
            (this.H = 0 | m[7]));
    }
    get() {
        let { A: t, B: e, C: r, D: s, E: i, F: n, G: o, H: h } = this;
        return [t, e, r, s, i, n, o, h];
    }
    set(t, e, r, s, i, n, o, h) {
        ((this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | s),
            (this.E = 0 | i),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | h));
    }
    process(t, e) {
        for (let r = 0; r < 16; r++, e += 4) v[r] = t.getUint32(e, !1);
        for (let t = 16; t < 64; t++) {
            let e = v[t - 15],
                r = v[t - 2],
                s = u(e, 7) ^ u(e, 18) ^ (e >>> 3),
                i = u(r, 17) ^ u(r, 19) ^ (r >>> 10);
            v[t] = (i + v[t - 7] + s + v[t - 16]) | 0;
        }
        let { A: r, B: s, C: i, D: n, E: o, F: h, G: f, H: a } = this;
        for (let t = 0; t < 64; t++) {
            let e = (a + (u(o, 6) ^ u(o, 11) ^ u(o, 25)) + H(o, h, f) + k[t] + v[t]) | 0,
                c = ((u(r, 2) ^ u(r, 13) ^ u(r, 22)) + E(r, s, i)) | 0;
            ((a = f), (f = h), (h = o), (o = (n + e) | 0), (n = i), (i = s), (s = r), (r = (e + c) | 0));
        }
        ((r = (r + this.A) | 0),
            (s = (s + this.B) | 0),
            (i = (i + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (h = (h + this.F) | 0),
            (f = (f + this.G) | 0),
            (a = (a + this.H) | 0),
            this.set(r, s, i, n, o, h, f, a));
    }
    roundClean() {
        v.fill(0);
    }
    destroy() {
        (this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0));
    }
}
let B =
    ((s = () => new _()),
    ((i = (t) => s().update(w(t)).digest()).outputLen = (n = s()).outputLen),
    (i.blockLen = n.blockLen),
    (i.create = () => s()),
    i);
class C extends L {
    constructor(t, e) {
        (super(), (this.finished = !1), (this.destroyed = !1), f(t));
        let r = w(e);
        if (((this.iHash = t.create()), "function" != typeof this.iHash.update))
            throw Error("Expected instance of class which extends utils.Hash");
        ((this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen));
        let s = this.blockLen,
            i = new Uint8Array(s);
        i.set(r.length > s ? t.create().update(r).digest() : r);
        for (let t = 0; t < i.length; t++) i[t] ^= 54;
        (this.iHash.update(i), (this.oHash = t.create()));
        for (let t = 0; t < i.length; t++) i[t] ^= 106;
        (this.oHash.update(i), i.fill(0));
    }
    update(t) {
        return (a(this), this.iHash.update(t), this);
    }
    digestInto(t) {
        (a(this),
            h(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy());
    }
    digest() {
        let t = new Uint8Array(this.oHash.outputLen);
        return (this.digestInto(t), t);
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash: e, iHash: r, finished: s, destroyed: i, blockLen: n, outputLen: o } = this;
        return (
            (t.finished = s),
            (t.destroyed = i),
            (t.blockLen = n),
            (t.outputLen = o),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
        );
    }
    destroy() {
        ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
    }
}
let O = (t, e, r) => new C(t, e).update(r).digest();
function j(t, e, r, s) {
    var i;
    let n,
        {
            c: h,
            dkLen: a,
            DK: c,
            PRF: u,
            PRFSalt: d,
        } = (function (t, e, r, s) {
            f(t);
            let { c: i, dkLen: n, asyncTick: h } = A({ dkLen: 32, asyncTick: 10 }, s);
            if ((o(i), o(n), o(h), i < 1)) throw Error("PBKDF2: iterations (c) should be >= 1");
            let a = w(e),
                c = w(r),
                l = new Uint8Array(n),
                u = O.create(t, a),
                d = u._cloneInto().update(c);
            return { c: i, dkLen: n, asyncTick: h, DK: l, PRF: u, PRFSalt: d };
        })(t, e, r, s),
        x = new Uint8Array(4),
        p = l(x),
        b = new Uint8Array(u.outputLen);
    for (let t = 1, e = 0; e < a; t++, e += u.outputLen) {
        let r = c.subarray(e, e + u.outputLen);
        (p.setInt32(0, t, !1), (n = d._cloneInto(n)).update(x).digestInto(b), r.set(b.subarray(0, r.length)));
        for (let t = 1; t < h; t++) {
            u._cloneInto(n).update(b).digestInto(b);
            for (let t = 0; t < r.length; t++) r[t] ^= b[t];
        }
    }
    return ((i = n), u.destroy(), d.destroy(), i && i.destroy(), b.fill(0), c);
}
function D(t, e, r, s, i, n) {
    let o = t[e++] ^ r[s++],
        h = t[e++] ^ r[s++],
        f = t[e++] ^ r[s++],
        a = t[e++] ^ r[s++],
        c = t[e++] ^ r[s++],
        l = t[e++] ^ r[s++],
        u = t[e++] ^ r[s++],
        x = t[e++] ^ r[s++],
        p = t[e++] ^ r[s++],
        b = t[e++] ^ r[s++],
        y = t[e++] ^ r[s++],
        g = t[e++] ^ r[s++],
        w = t[e++] ^ r[s++],
        L = t[e++] ^ r[s++],
        U = t[e++] ^ r[s++],
        A = t[e++] ^ r[s++],
        H = o,
        E = h,
        I = f,
        k = a,
        m = c,
        v = l,
        _ = u,
        B = x,
        C = p,
        O = b,
        j = y,
        D = g,
        S = w,
        $ = L,
        N = U,
        F = A;
    for (let t = 0; t < 8; t += 2)
        ((m ^= d((H + S) | 0, 7)),
            (C ^= d((m + H) | 0, 9)),
            (S ^= d((C + m) | 0, 13)),
            (H ^= d((S + C) | 0, 18)),
            (O ^= d((v + E) | 0, 7)),
            ($ ^= d((O + v) | 0, 9)),
            (E ^= d(($ + O) | 0, 13)),
            (v ^= d((E + $) | 0, 18)),
            (N ^= d((j + _) | 0, 7)),
            (I ^= d((N + j) | 0, 9)),
            (_ ^= d((I + N) | 0, 13)),
            (j ^= d((_ + I) | 0, 18)),
            (k ^= d((F + D) | 0, 7)),
            (B ^= d((k + F) | 0, 9)),
            (D ^= d((B + k) | 0, 13)),
            (F ^= d((D + B) | 0, 18)),
            (E ^= d((H + k) | 0, 7)),
            (I ^= d((E + H) | 0, 9)),
            (k ^= d((I + E) | 0, 13)),
            (H ^= d((k + I) | 0, 18)),
            (_ ^= d((v + m) | 0, 7)),
            (B ^= d((_ + v) | 0, 9)),
            (m ^= d((B + _) | 0, 13)),
            (v ^= d((m + B) | 0, 18)),
            (D ^= d((j + O) | 0, 7)),
            (C ^= d((D + j) | 0, 9)),
            (O ^= d((C + D) | 0, 13)),
            (j ^= d((O + C) | 0, 18)),
            (S ^= d((F + N) | 0, 7)),
            ($ ^= d((S + F) | 0, 9)),
            (N ^= d(($ + S) | 0, 13)),
            (F ^= d((N + $) | 0, 18)));
    ((i[n++] = (o + H) | 0),
        (i[n++] = (h + E) | 0),
        (i[n++] = (f + I) | 0),
        (i[n++] = (a + k) | 0),
        (i[n++] = (c + m) | 0),
        (i[n++] = (l + v) | 0),
        (i[n++] = (u + _) | 0),
        (i[n++] = (x + B) | 0),
        (i[n++] = (p + C) | 0),
        (i[n++] = (b + O) | 0),
        (i[n++] = (y + j) | 0),
        (i[n++] = (g + D) | 0),
        (i[n++] = (w + S) | 0),
        (i[n++] = (L + $) | 0),
        (i[n++] = (U + N) | 0),
        (i[n++] = (A + F) | 0));
}
function S(t, e, r, s, i) {
    let n = s + 0,
        o = s + 16 * i;
    for (let s = 0; s < 16; s++) r[o + s] = t[e + (2 * i - 1) * 16 + s];
    for (let s = 0; s < i; s++, n += 16, e += 16)
        (D(r, o, t, e, r, n), s > 0 && (o += 16), D(r, n, t, (e += 16), r, o));
}
async function $(t, e, r) {
    let s,
        {
            N: i,
            r: n,
            p: h,
            dkLen: f,
            blockSize32: a,
            V: l,
            B32: u,
            B: d,
            tmp: p,
            blockMixCb: y,
            asyncTick: w,
        } = (function (t, e, r) {
            let {
                N: s,
                r: i,
                p: n,
                dkLen: h,
                asyncTick: f,
                maxmem: a,
                onProgress: l,
            } = A({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, r);
            if ((o(s), o(i), o(n), o(h), o(f), o(a), void 0 !== l && "function" != typeof l))
                throw Error("progressCb should be function");
            let u = 128 * i,
                d = u / 4;
            if (s <= 1 || (s & (s - 1)) != 0 || s > 0x100000000)
                throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
            if (n < 0 || n > 0x1fffffffe0 / u)
                throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
            if (h < 0 || h > 0x1fffffffe0)
                throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
            let x = u * (s + n);
            if (x > a) throw Error(`Scrypt: parameters too large, ${x} (128 * r * (N + p)) > ${a} (maxmem)`);
            let p = j(B, t, e, { c: 1, dkLen: u * n }),
                b = c(p),
                y = c(new Uint8Array(u * s)),
                g = c(new Uint8Array(u)),
                w = () => {};
            if (l) {
                let t = 2 * s * n,
                    e = Math.max(Math.floor(t / 1e4), 1),
                    r = 0;
                w = () => {
                    (r++, l && (!(r % e) || r === t) && l(r / t));
                };
            }
            return {
                N: s,
                r: i,
                p: n,
                dkLen: h,
                blockSize32: d,
                V: y,
                B32: b,
                B: p,
                tmp: g,
                blockMixCb: w,
                asyncTick: f,
            };
        })(t, e, r);
    x || b(u);
    for (let t = 0; t < h; t++) {
        let e = a * t;
        for (let t = 0; t < a; t++) l[t] = u[e + t];
        let r = 0;
        (await g(i - 1, w, () => {
            (S(l, r, l, (r += a), n), y());
        }),
            S(l, (i - 1) * a, u, e, n),
            y(),
            await g(i, w, () => {
                let t = u[e + a - 16] % i;
                for (let r = 0; r < a; r++) p[r] = u[e + r] ^ l[t * a + r];
                (S(p, 0, u, e, n), y());
            }));
    }
    return (x || b(u), (s = j(B, t, d, { c: 1, dkLen: f })), d.fill(0), l.fill(0), p.fill(0), s);
}
O.create = (t, e) => new C(t, e);
