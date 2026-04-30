n.d(t, { _: () => u }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(510036),
    i = n(495142);
let a = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    o = { N: 16384, r: 8, p: 2, dkLen: 64 };
function l(e, t) {
    for (let n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e[n] - t[n];
    return e.length - t.length;
}
async function u(e, t, n, u, c) {
    let E = await Promise.all([(0, r.X)(e, t, n), (0, r.X)(e, u, c)]);
    E.sort(l);
    let s = new Uint8Array(E[0].byteLength + E[1].byteLength);
    return s.set(E[0], 0), s.set(E[1], E[0].byteLength), new Uint8Array(await (0, i.Q)(s, a, o));
}
