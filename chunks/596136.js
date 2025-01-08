var a = r(760919),
    n = r(365938);
let o = 2610 / 16384,
    s = 16384 / 2610,
    i = 32 / 2523;
t.Z = new a.Z({
    id: 'rec2100pq',
    cssId: 'rec2100-pq',
    name: 'REC.2100-PQ',
    base: n.Z,
    toBase: (e) =>
        e.map(function (e) {
            return (10000 * (Math.max(e ** i - 0.8359375, 0) / (18.8515625 - 18.6875 * e ** i)) ** s) / 203;
        }),
    fromBase: (e) =>
        e.map(function (e) {
            let t = Math.max((203 * e) / 10000, 0);
            return ((0.8359375 + 18.8515625 * t ** o) / (1 + 18.6875 * t ** o)) ** 78.84375;
        })
});
