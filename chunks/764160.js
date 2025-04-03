r.d(t, { Z: () => s });
var a = r(760919),
    n = r(227150);
let s = new a.Z({
    id: 'a98rgb',
    cssId: 'a98-rgb',
    name: 'Adobe\xAE 98 RGB compatible',
    base: n.Z,
    toBase: (e) => e.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
    fromBase: (e) => e.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e))
});
