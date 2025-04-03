r.d(t, { Z: () => u });
var a = r(665352),
    n = r(147591),
    s = r(677524),
    o = r(37484),
    i = r(385787);
function c(e, t) {
    return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1);
}
function l(e) {
    return Math.min(c(e.r0s, e.r0i), c(e.r1s, e.r1i), c(e.g0s, e.g0i), c(e.g1s, e.g1i), c(e.b0s, e.b0i), c(e.b1s, e.b1i));
}
s.p['0']['0'], s.p['0']['1'], s.p['0']['2'], s.p['1']['0'], s.p['1']['1'], s.p['1']['2'], s.p['2']['0'], s.p['2']['1'], s.p['2']['2'];
let u = new a.Z({
    id: 'hpluv',
    name: 'HPLuv',
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
    gamutSpace: 'self',
    fromBase(e) {
        let t,
            [r, a, n] = [(0, o.sI)(e[0]), (0, o.sI)(e[1]), (0, o.sI)(e[2])];
        return r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (a / l((0, i.t)(r))) * 100), [n, t, r];
    },
    toBase(e) {
        let t,
            [r, a, n] = [(0, o.sI)(e[0]), (0, o.sI)(e[1]), (0, o.sI)(e[2])];
        return n > 99.9999999 ? ((n = 100), (t = 0)) : n < 1e-8 ? ((n = 0), (t = 0)) : (t = (l((0, i.t)(n), r) / 100) * a), [n, t, r];
    },
    formats: {
        color: {
            id: '--hpluv',
            coords: ['<number> | <angle>', '<percentage> | <number>', '<percentage> | <number>']
        }
    }
});
