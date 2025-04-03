r.d(t, { Z: () => s });
var a = r(665352),
    n = r(856308);
let s = new a.Z({
    id: 'xyz-abs-d65',
    cssId: '--xyz-abs-d65',
    name: 'Absolute XYZ D65',
    coords: {
        x: {
            refRange: [0, 9504.7],
            name: 'Xa'
        },
        y: {
            refRange: [0, 10000],
            name: 'Ya'
        },
        z: {
            refRange: [0, 10888.3],
            name: 'Za'
        }
    },
    base: n.Z,
    fromBase: (e) => e.map((e) => Math.max(203 * e, 0)),
    toBase: (e) => e.map((e) => Math.max(e / 203, 0))
});
