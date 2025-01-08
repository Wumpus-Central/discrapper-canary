r.d(t, {
    t: function () {
        return Z;
    }
});
var a = r(665352),
    n = r(147591),
    o = r(216397),
    s = r(677524),
    i = r(37484);
let c = 216 / 24389,
    u = 24389 / 27,
    l = s.p['0']['0'],
    f = s.p['0']['1'],
    b = s.p['0']['2'],
    h = s.p['1']['0'],
    d = s.p['1']['1'],
    p = s.p['1']['2'],
    m = s.p['2']['0'],
    g = s.p['2']['1'],
    y = s.p['2']['2'];
function v(e, t, r) {
    let a = t / (Math.sin(r) - e * Math.cos(r));
    return a < 0 ? 1 / 0 : a;
}
function Z(e) {
    let t = Math.pow(e + 16, 3) / 1560896,
        r = t > c ? t : e / u,
        a = r * (284517 * l - 94839 * b),
        n = r * (838422 * b + 769860 * f + 731718 * l),
        o = r * (632260 * b - 126452 * f),
        s = r * (284517 * h - 94839 * p),
        i = r * (838422 * p + 769860 * d + 731718 * h),
        v = r * (632260 * p - 126452 * d),
        Z = r * (284517 * m - 94839 * y),
        w = r * (838422 * y + 769860 * g + 731718 * m),
        M = r * (632260 * y - 126452 * g);
    return {
        r0s: a / o,
        r0i: (n * e) / o,
        r1s: a / (o + 126452),
        r1i: ((n - 769860) * e) / (o + 126452),
        g0s: s / v,
        g0i: (i * e) / v,
        g1s: s / (v + 126452),
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
        o = v(e.g0s, e.g0i, r),
        s = v(e.g1s, e.g1i, r),
        i = v(e.b0s, e.b0i, r);
    return Math.min(a, n, o, s, i, v(e.b1s, e.b1i, r));
}
t.Z = new a.Z({
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
    gamutSpace: o.Z,
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
