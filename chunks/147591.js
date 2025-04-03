r.d(t, { Z: () => o });
var a = r(665352),
    n = r(81011),
    s = r(656653);
let o = new a.Z({
    id: 'lchuv',
    name: 'LChuv',
    coords: {
        l: {
            refRange: [0, 100],
            name: 'Lightness'
        },
        c: {
            refRange: [0, 220],
            name: 'Chroma'
        },
        h: {
            refRange: [0, 360],
            type: 'angle',
            name: 'Hue'
        }
    },
    base: n.Z,
    fromBase(e) {
        let t,
            [r, a, n] = e;
        return (t = 0.02 > Math.abs(a) && 0.02 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI), [r, Math.sqrt(a ** 2 + n ** 2), (0, s.j)(t)];
    },
    toBase(e) {
        let [t, r, a] = e;
        return r < 0 && (r = 0), isNaN(a) && (a = 0), [t, r * Math.cos((a * Math.PI) / 180), r * Math.sin((a * Math.PI) / 180)];
    },
    formats: {
        color: {
            id: '--lchuv',
            coords: ['<number> | <percentage>', '<number> | <percentage>', '<number> | <angle>']
        }
    }
});
