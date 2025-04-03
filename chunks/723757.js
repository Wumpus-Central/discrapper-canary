r.d(t, { Z: () => s });
var a = r(760919),
    n = r(365938);
let s = new a.Z({
    id: 'rec2020',
    name: 'REC.2020',
    base: n.Z,
    toBase: (e) =>
        e.map(function (e) {
            return e < 0.08124285829863151 ? e / 4.5 : Math.pow((e + 1.09929682680944 - 1) / 1.09929682680944, 1 / 0.45);
        }),
    fromBase: (e) =>
        e.map(function (e) {
            return e >= 0.018053968510807 ? 1.09929682680944 * Math.pow(e, 0.45) - (1.09929682680944 - 1) : 4.5 * e;
        })
});
