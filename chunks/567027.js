var a = r(665352),
    n = r(566162);
t.Z = new a.Z({
    id: 'hwb',
    name: 'HWB',
    coords: {
        h: {
            refRange: [0, 360],
            type: 'angle',
            name: 'Hue'
        },
        w: {
            range: [0, 100],
            name: 'Whiteness'
        },
        b: {
            range: [0, 100],
            name: 'Blackness'
        }
    },
    base: n.Z,
    fromBase(e) {
        let [t, r, a] = e;
        return [t, (a * (100 - r)) / 100, 100 - a];
    },
    toBase(e) {
        let [t, r, a] = e,
            n = (r /= 100) + (a /= 100);
        if (n >= 1) return [t, 0, (r / n) * 100];
        let o = 1 - a;
        return [t, 100 * (0 === o ? 0 : 1 - r / o), 100 * o];
    },
    formats: {
        hwb: {
            coords: ['<number> | <angle>', '<percentage> | <number>', '<percentage> | <number>']
        }
    }
});
