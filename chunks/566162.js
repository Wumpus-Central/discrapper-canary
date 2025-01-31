r.d(t, { Z: () => s });
var a = r(665352),
    n = r(855930);
let s = new a.Z({
    id: 'hsv',
    name: 'HSV',
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
        v: {
            range: [0, 100],
            name: 'Value'
        }
    },
    base: n.Z,
    fromBase(e) {
        let [t, r, a] = e,
            n = (a /= 100) + (r /= 100) * Math.min(a, 1 - a);
        return [t, 0 === n ? 0 : 200 * (1 - a / n), 100 * n];
    },
    toBase(e) {
        let [t, r, a] = e,
            n = (a /= 100) * (1 - (r /= 100) / 2);
        return [t, 0 === n || 1 === n ? 0 : ((a - n) / Math.min(n, 1 - n)) * 100, 100 * n];
    },
    formats: {
        color: {
            id: '--hsv',
            coords: ['<number> | <angle>', '<percentage> | <number>', '<percentage> | <number>']
        }
    }
});
