var a = r(760919),
    n = r(806578);
let o = 1 / 512,
    s = 16 / 512;
t.Z = new a.Z({
    id: 'prophoto',
    cssId: 'prophoto-rgb',
    name: 'ProPhoto',
    base: n.Z,
    toBase: (e) => e.map((e) => (e < s ? e / 16 : e ** 1.8)),
    fromBase: (e) => e.map((e) => (e >= o ? e ** (1 / 1.8) : 16 * e))
});
