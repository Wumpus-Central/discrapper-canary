s.d(e, { Q: () => f });
var i = s(294946),
    r = s(58862),
    n = s(274004),
    o = s(15020);
function a(t, e, s, i, r, n) {
    let a = t[e++] ^ s[i++],
        h = t[e++] ^ s[i++],
        f = t[e++] ^ s[i++],
        c = t[e++] ^ s[i++],
        l = t[e++] ^ s[i++],
        u = t[e++] ^ s[i++],
        d = t[e++] ^ s[i++],
        x = t[e++] ^ s[i++],
        b = t[e++] ^ s[i++],
        p = t[e++] ^ s[i++],
        w = t[e++] ^ s[i++],
        y = t[e++] ^ s[i++],
        g = t[e++] ^ s[i++],
        Z = t[e++] ^ s[i++],
        L = t[e++] ^ s[i++],
        H = t[e++] ^ s[i++],
        O = a,
        A = h,
        U = f,
        E = c,
        I = l,
        k = u,
        v = d,
        m = x,
        _ = b,
        C = p,
        D = w,
        B = y,
        $ = g,
        j = Z,
        F = L,
        S = H;
    for (let t = 0; t < 8; t += 2)
        (I ^= (0, o.aZ)((O + $) | 0, 7)),
            (_ ^= (0, o.aZ)((I + O) | 0, 9)),
            ($ ^= (0, o.aZ)((_ + I) | 0, 13)),
            (O ^= (0, o.aZ)(($ + _) | 0, 18)),
            (C ^= (0, o.aZ)((k + A) | 0, 7)),
            (j ^= (0, o.aZ)((C + k) | 0, 9)),
            (A ^= (0, o.aZ)((j + C) | 0, 13)),
            (k ^= (0, o.aZ)((A + j) | 0, 18)),
            (F ^= (0, o.aZ)((D + v) | 0, 7)),
            (U ^= (0, o.aZ)((F + D) | 0, 9)),
            (v ^= (0, o.aZ)((U + F) | 0, 13)),
            (D ^= (0, o.aZ)((v + U) | 0, 18)),
            (E ^= (0, o.aZ)((S + B) | 0, 7)),
            (m ^= (0, o.aZ)((E + S) | 0, 9)),
            (B ^= (0, o.aZ)((m + E) | 0, 13)),
            (S ^= (0, o.aZ)((B + m) | 0, 18)),
            (A ^= (0, o.aZ)((O + E) | 0, 7)),
            (U ^= (0, o.aZ)((A + O) | 0, 9)),
            (E ^= (0, o.aZ)((U + A) | 0, 13)),
            (O ^= (0, o.aZ)((E + U) | 0, 18)),
            (v ^= (0, o.aZ)((k + I) | 0, 7)),
            (m ^= (0, o.aZ)((v + k) | 0, 9)),
            (I ^= (0, o.aZ)((m + v) | 0, 13)),
            (k ^= (0, o.aZ)((I + m) | 0, 18)),
            (B ^= (0, o.aZ)((D + C) | 0, 7)),
            (_ ^= (0, o.aZ)((B + D) | 0, 9)),
            (C ^= (0, o.aZ)((_ + B) | 0, 13)),
            (D ^= (0, o.aZ)((C + _) | 0, 18)),
            ($ ^= (0, o.aZ)((S + F) | 0, 7)),
            (j ^= (0, o.aZ)(($ + S) | 0, 9)),
            (F ^= (0, o.aZ)((j + $) | 0, 13)),
            (S ^= (0, o.aZ)((F + j) | 0, 18));
    (r[n++] = (a + O) | 0),
        (r[n++] = (h + A) | 0),
        (r[n++] = (f + U) | 0),
        (r[n++] = (c + E) | 0),
        (r[n++] = (l + I) | 0),
        (r[n++] = (u + k) | 0),
        (r[n++] = (d + v) | 0),
        (r[n++] = (x + m) | 0),
        (r[n++] = (b + _) | 0),
        (r[n++] = (p + C) | 0),
        (r[n++] = (w + D) | 0),
        (r[n++] = (y + B) | 0),
        (r[n++] = (g + $) | 0),
        (r[n++] = (Z + j) | 0),
        (r[n++] = (L + F) | 0),
        (r[n++] = (H + S) | 0);
}
function h(t, e, s, i, r) {
    let n = i + 0,
        o = i + 16 * r;
    for (let i = 0; i < 16; i++) s[o + i] = t[e + (2 * r - 1) * 16 + i];
    for (let i = 0; i < r; i++, n += 16, e += 16) a(s, o, t, e, s, n), i > 0 && (o += 16), a(s, n, t, (e += 16), s, o);
}
async function f(t, e, s) {
    let a,
        {
            N: f,
            r: c,
            p: l,
            dkLen: u,
            blockSize32: d,
            V: x,
            B32: b,
            B: p,
            tmp: w,
            blockMixCb: y,
            asyncTick: g,
        } = (function (t, e, s) {
            let {
                N: a,
                r: h,
                p: f,
                dkLen: c,
                asyncTick: l,
                maxmem: u,
                onProgress: d,
            } = (0, o.tY)({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, s);
            if (
                ((0, i.ai)(a),
                (0, i.ai)(h),
                (0, i.ai)(f),
                (0, i.ai)(c),
                (0, i.ai)(l),
                (0, i.ai)(u),
                void 0 !== d && "function" != typeof d)
            )
                throw Error("progressCb should be function");
            let x = 128 * h,
                b = x / 4;
            if (a <= 1 || (a & (a - 1)) != 0 || a > 0x100000000)
                throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
            if (f < 0 || f > ((0x100000000 - 1) * 32) / x)
                throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
            if (c < 0 || c > (0x100000000 - 1) * 32)
                throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
            let p = x * (a + f);
            if (p > u) throw Error(`Scrypt: parameters too large, ${p} (128 * r * (N + p)) > ${u} (maxmem)`);
            let w = (0, n.A)(r.sc, t, e, { c: 1, dkLen: x * f }),
                y = (0, o.DH)(w),
                g = (0, o.DH)(new Uint8Array(x * a)),
                Z = (0, o.DH)(new Uint8Array(x)),
                L = () => {};
            if (d) {
                let t = 2 * a * f,
                    e = Math.max(Math.floor(t / 1e4), 1),
                    s = 0;
                L = () => {
                    s++, d && (!(s % e) || s === t) && d(s / t);
                };
            }
            return {
                N: a,
                r: h,
                p: f,
                dkLen: c,
                blockSize32: b,
                V: g,
                B32: y,
                B: w,
                tmp: Z,
                blockMixCb: L,
                asyncTick: l,
            };
        })(t, e, s);
    o.qv || (0, o.Fc)(b);
    for (let t = 0; t < l; t++) {
        let e = d * t;
        for (let t = 0; t < d; t++) x[t] = b[e + t];
        let s = 0;
        await (0, o.$h)(f - 1, g, () => {
            h(x, s, x, (s += d), c), y();
        }),
            h(x, (f - 1) * d, b, e, c),
            y(),
            await (0, o.$h)(f, g, () => {
                let t = b[e + d - 16] % f;
                for (let s = 0; s < d; s++) w[s] = b[e + s] ^ x[t * d + s];
                h(w, 0, b, e, c), y();
            });
    }
    return o.qv || (0, o.Fc)(b), (a = (0, n.A)(r.sc, t, p, { c: 1, dkLen: u })), p.fill(0), x.fill(0), w.fill(0), a;
}
