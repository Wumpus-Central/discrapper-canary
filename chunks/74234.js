r.d(e, {
    Q: () => f,
});
var s = r(294946),
    i = r(58862),
    n = r(274004),
    o = r(15020);

function a(t, e, r, s, i, n) {
    let a = t[e++] ^ r[s++],
        h = t[e++] ^ r[s++],
        f = t[e++] ^ r[s++],
        c = t[e++] ^ r[s++],
        l = t[e++] ^ r[s++],
        u = t[e++] ^ r[s++],
        d = t[e++] ^ r[s++],
        x = t[e++] ^ r[s++],
        b = t[e++] ^ r[s++],
        p = t[e++] ^ r[s++],
        w = t[e++] ^ r[s++],
        y = t[e++] ^ r[s++],
        g = t[e++] ^ r[s++],
        Z = t[e++] ^ r[s++],
        L = t[e++] ^ r[s++],
        H = t[e++] ^ r[s++],
        A = a,
        O = h,
        U = f,
        E = c,
        I = l,
        k = u,
        v = d,
        m = x,
        C = b,
        _ = p,
        D = w,
        B = y,
        $ = g,
        T = Z,
        j = L,
        F = H;
    for (let t = 0; t < 8; t += 2)
        (I ^= (0, o.aZ)((A + $) | 0, 7)),
            (C ^= (0, o.aZ)((I + A) | 0, 9)),
            ($ ^= (0, o.aZ)((C + I) | 0, 13)),
            (A ^= (0, o.aZ)(($ + C) | 0, 18)),
            (_ ^= (0, o.aZ)((k + O) | 0, 7)),
            (T ^= (0, o.aZ)((_ + k) | 0, 9)),
            (O ^= (0, o.aZ)((T + _) | 0, 13)),
            (k ^= (0, o.aZ)((O + T) | 0, 18)),
            (j ^= (0, o.aZ)((D + v) | 0, 7)),
            (U ^= (0, o.aZ)((j + D) | 0, 9)),
            (v ^= (0, o.aZ)((U + j) | 0, 13)),
            (D ^= (0, o.aZ)((v + U) | 0, 18)),
            (E ^= (0, o.aZ)((F + B) | 0, 7)),
            (m ^= (0, o.aZ)((E + F) | 0, 9)),
            (B ^= (0, o.aZ)((m + E) | 0, 13)),
            (F ^= (0, o.aZ)((B + m) | 0, 18)),
            (O ^= (0, o.aZ)((A + E) | 0, 7)),
            (U ^= (0, o.aZ)((O + A) | 0, 9)),
            (E ^= (0, o.aZ)((U + O) | 0, 13)),
            (A ^= (0, o.aZ)((E + U) | 0, 18)),
            (v ^= (0, o.aZ)((k + I) | 0, 7)),
            (m ^= (0, o.aZ)((v + k) | 0, 9)),
            (I ^= (0, o.aZ)((m + v) | 0, 13)),
            (k ^= (0, o.aZ)((I + m) | 0, 18)),
            (B ^= (0, o.aZ)((D + _) | 0, 7)),
            (C ^= (0, o.aZ)((B + D) | 0, 9)),
            (_ ^= (0, o.aZ)((C + B) | 0, 13)),
            (D ^= (0, o.aZ)((_ + C) | 0, 18)),
            ($ ^= (0, o.aZ)((F + j) | 0, 7)),
            (T ^= (0, o.aZ)(($ + F) | 0, 9)),
            (j ^= (0, o.aZ)((T + $) | 0, 13)),
            (F ^= (0, o.aZ)((j + T) | 0, 18));
    (i[n++] = (a + A) | 0),
        (i[n++] = (h + O) | 0),
        (i[n++] = (f + U) | 0),
        (i[n++] = (c + E) | 0),
        (i[n++] = (l + I) | 0),
        (i[n++] = (u + k) | 0),
        (i[n++] = (d + v) | 0),
        (i[n++] = (x + m) | 0),
        (i[n++] = (b + C) | 0),
        (i[n++] = (p + _) | 0),
        (i[n++] = (w + D) | 0),
        (i[n++] = (y + B) | 0),
        (i[n++] = (g + $) | 0),
        (i[n++] = (Z + T) | 0),
        (i[n++] = (L + j) | 0),
        (i[n++] = (H + F) | 0);
}

function h(t, e, r, s, i) {
    let n = s + 0,
        o = s + 16 * i;
    for (let s = 0; s < 16; s++) r[o + s] = t[e + (2 * i - 1) * 16 + s];
    for (let s = 0; s < i; s++, n += 16, e += 16) a(r, o, t, e, r, n), s > 0 && (o += 16), a(r, n, t, (e += 16), r, o);
}
async function f(t, e, r) {
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
        } = (function (t, e, r) {
            let {
                N: a,
                r: h,
                p: f,
                dkLen: c,
                asyncTick: l,
                maxmem: u,
                onProgress: d,
            } = (0, o.tY)(
                {
                    dkLen: 32,
                    asyncTick: 10,
                    maxmem: 0x40000400,
                },
                r,
            );
            if (
                ((0, s.ai)(a),
                (0, s.ai)(h),
                (0, s.ai)(f),
                (0, s.ai)(c),
                (0, s.ai)(l),
                (0, s.ai)(u),
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
            let w = (0, n.A)(i.sc, t, e, {
                    c: 1,
                    dkLen: x * f,
                }),
                y = (0, o.DH)(w),
                g = (0, o.DH)(new Uint8Array(x * a)),
                Z = (0, o.DH)(new Uint8Array(x)),
                L = () => {};
            if (d) {
                let t = 2 * a * f,
                    e = Math.max(Math.floor(t / 1e4), 1),
                    r = 0;
                L = () => {
                    r++, d && (!(r % e) || r === t) && d(r / t);
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
        })(t, e, r);
    o.qv || (0, o.Fc)(b);
    for (let t = 0; t < l; t++) {
        let e = d * t;
        for (let t = 0; t < d; t++) x[t] = b[e + t];
        let r = 0;
        await (0, o.$h)(f - 1, g, () => {
            h(x, r, x, (r += d), c), y();
        }),
            h(x, (f - 1) * d, b, e, c),
            y(),
            await (0, o.$h)(f, g, () => {
                let t = b[e + d - 16] % f;
                for (let r = 0; r < d; r++) w[r] = b[e + r] ^ x[t * d + r];
                h(w, 0, b, e, c), y();
            });
    }
    return (
        o.qv || (0, o.Fc)(b),
        (a = (0, n.A)(i.sc, t, p, {
            c: 1,
            dkLen: u,
        })),
        p.fill(0),
        x.fill(0),
        w.fill(0),
        a
    );
}
