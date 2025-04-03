r.d(t, {
    Z: () => M,
    t: () => Z
});
var a = r(665352),
    n = r(147591),
    s = r(216397),
    o = r(677524),
    i = r(37484);
let c = 216 / 24389,
    l = 24389 / 27,
    u = o.p['0']['0'],
    f = o.p['0']['1'],
    b = o.p['0']['2'],
    d = o.p['1']['0'],
    h = o.p['1']['1'],
    p = o.p['1']['2'],
    m = o.p['2']['0'],
    g = o.p['2']['1'],
    y = o.p['2']['2'];
function v(e, t, r) {
    let a = t / (Math.sin(r) - e * Math.cos(r));
    return a < 0 ? 1 / 0 : a;
}
function Z(e) {
    let t = Math.pow(e + 16, 3) / 1560896,
        r = t > c ? t : e / l,
        a = r * (284517 * u - 94839 * b),
        n = r * (838422 * b + 769860 * f + 731718 * u),
        s = r * (632260 * b - 126452 * f),
        o = r * (284517 * d - 94839 * p),
        i = r * (838422 * p + 769860 * h + 731718 * d),
        v = r * (632260 * p - 126452 * h),
        Z = r * (284517 * m - 94839 * y),
        w = r * (838422 * y + 769860 * g + 731718 * m),
        M = r * (632260 * y - 126452 * g);
    return {
        r0s: a / s,
        r0i: (n * e) / s,
        r1s: a / (s + 126452),
        r1i: ((n - 769860) * e) / (s + 126452),
        g0s: o / v,
        g0i: (i * e) / v,
        g1s: o / (v + 126452),
        g1i: ((i - 769860) * e) / (v + 126452),
        b0s: Z / M,
        b0i: (w * e) / M,
        b1s: Z / (M + 126452),
        b1i: ((w - 769860) * e) / (M + 126452)
    };
}
function w(e, t) {
    let r = (t / 360) * Math.PI * 2,
        a = v(e.r0s, e.r0i, r),
        n = v(e.r1s, e.r1i, r),
        s = v(e.g0s, e.g0i, r),
        o = v(e.g1s, e.g1i, r);
    return Math.min(a, n, s, o, v(e.b0s, e.b0i, r), v(e.b1s, e.b1i, r));
}
let M = new a.Z({
    id: 'hsluv',
    name: 'HSLuv',
    coords: {
        h: {
            refRange: [0, 360],
            type: 'angle',
            name: 'Hue'
        },
        s: {
            range: [0, 100],
            name: 'Saturation'
        },
        l: {
            range: [0, 100],
            name: 'Lightness'
        }
    },
    base: n.Z,
    gamutSpace: s.Z,
    fromBase(e) {
        let t,
            [r, a, n] = [(0, i.sI)(e[0]), (0, i.sI)(e[1]), (0, i.sI)(e[2])];
        return r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (a / w(Z(r), n)) * 100), [n, t, r];
    },
    toBase(e) {
        let t,
            [r, a, n] = [(0, i.sI)(e[0]), (0, i.sI)(e[1]), (0, i.sI)(e[2])];
        return n > 99.9999999 ? ((n = 100), (t = 0)) : n < 1e-8 ? ((n = 0), (t = 0)) : (t = (w(Z(n), r) / 100) * a), [n, t, r];
    },
    formats: {
        color: {
            id: '--hsluv',
            coords: ['<number> | <angle>', '<percentage> | <number>', '<percentage> | <number>']
        }
    }
});
