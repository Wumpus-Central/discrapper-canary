r.d(t, { Z: () => i });
var a = r(760919),
    n = r(806578);
let s = 1 / 512,
    o = 16 / 512,
    i = new a.Z({
        id: 'prophoto',
        cssId: 'prophoto-rgb',
        name: 'ProPhoto',
        base: n.Z,
        toBase: (e) => e.map((e) => (e < o ? e / 16 : e ** 1.8)),
        fromBase: (e) => e.map((e) => (e >= s ? e ** (1 / 1.8) : 16 * e))
    });
